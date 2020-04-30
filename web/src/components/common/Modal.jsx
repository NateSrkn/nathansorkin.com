import React, { useRef, useContext, useState, useEffect } from "react"
import ReactDOM from "react-dom"

const Context = React.createContext()

export function ModalProvider({ children }) {
  const modalRef = useRef()
  const [context, setContext] = useState()

  useEffect(() => {
    setContext(modalRef.current)
  }, [])

  return (
    <React.Fragment>
      <Context.Provider value={context}>{children}</Context.Provider>
      <div className="modal-container" ref={modalRef} />
    </React.Fragment>
  )
}

export function Modal({ onClose, children, ...props }) {
  const modalNode = useContext(Context)
  useEffect(() => {
    document.body.addEventListener("click", event => {
      let target = event.target
      if (target.closest(".overlay") && !target.closest(".modal"))
        return onClose()
    })
  })
  return modalNode
    ? ReactDOM.createPortal(
        <div className="overlay">
          <div className="modal" {...props}>
            {children}
          </div>
        </div>,
        modalNode
      )
    : null
}
