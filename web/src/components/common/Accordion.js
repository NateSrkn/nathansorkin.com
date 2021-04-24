import React, { useRef, useEffect, useContext, useMemo } from "react"

const AccordionContext = React.createContext(null)

export const Accordion = ({ activeEventKey, children, onToggle, ...otherProps }) => {
  const context = useMemo(() => {
    return { activeEventKey, onToggle }
  }, [activeEventKey, onToggle])
  return (
    <AccordionContext.Provider value={context}>
      <React.Fragment {...otherProps}>{children}</React.Fragment>
    </AccordionContext.Provider>
  )
}

const Collapse = ({ element: Component, eventKey, children, classNames, ...otherProps }) => {
  const contentRef = useRef(null)
  const { activeEventKey } = useAccordionContext()
  useEffect(() => {
    if (activeEventKey === eventKey) {
      contentRef.current.style.maxHeight = `${contentRef.current.scrollHeight}px`
    } else {
      contentRef.current.style.maxHeight = `0px`
    }
  }, [contentRef, activeEventKey, eventKey])
  return (
    <Component ref={contentRef} className={`${classNames} accordion-content`}>
      {children}
    </Component>
  )
}

const useAccordionClick = (eventKey, onClick) => {
  const { onToggle, activeEventKey } = useAccordionContext()
  return (event) => {
    onToggle(eventKey === activeEventKey ? null : eventKey)
    if (onClick) {
      onClick(event)
    }
  }
}

const Toggle = ({ element: Component, eventKey, onClick, children, ...otherProps }) => {
  const accordionClick = useAccordionClick(eventKey, onClick)
  return (
    <Component onClick={accordionClick} {...otherProps}>
      {children}
    </Component>
  )
}

Accordion.Collapse = Collapse
Accordion.Toggle = Toggle

const useAccordionContext = () => {
  const context = useContext(AccordionContext)
  if (!context) {
    throw new Error("Accordion components are compound component. Must be used inside Accordion.")
  }
  return context
}
