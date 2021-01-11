import { useState, useEffect, useCallback } from "react"
import { TweenMax } from "gsap"
export const useCursor = () => {
  const matchMedia = window.matchMedia("(any-hover: none)")
  const [isTouch, setIsTouch] = useState(matchMedia.matches)

  const applyCursor = useCallback((cursor) => {
    document.body.style.cursor = "none"
    cursor.style.display = "block"
    document.addEventListener("mousemove", (event) => {
      onMouseMove(event, cursor)
    })
    document.addEventListener("mousedown", () => scaleBorderUp(cursor))
    document.addEventListener("mouseup", () => scaleBorderDown(cursor))
  }, [])

  const addHoverable = useCallback((cursor) => {
    const anchorTags = document.querySelectorAll("a")
    anchorTags.forEach((anchor) => {
      if (!anchor.classList.contains("hoverable")) {
        anchor.classList.add("hoverable")
      }
    })
    const hoverItems = document.querySelectorAll(".hoverable")
    hoverItems.forEach((item) => {
      item.addEventListener("mouseenter", () => scaleBorderUp(cursor))
      item.addEventListener("mouseleave", () => scaleBorderDown(cursor))
    })
  }, [])

  useEffect(() => {
    const cursor = document.querySelector(".border")
    matchMedia.addEventListener("change", () => {
      setIsTouch(matchMedia.matches)
    })
    if (isTouch) {
      cursor.style.display = "none"
    } else {
      addHoverable(cursor)
      applyCursor(cursor)
    }
  }, [isTouch, applyCursor, addHoverable, matchMedia])

  const onMouseMove = (e, cursor) => {
    TweenMax.to(cursor, 0.2, {
      x: e.pageX - 10,
      y: e.pageY - 10,
    })
  }

  const scaleBorderUp = (cursor) => {
    TweenMax.to(cursor, 0.3, {
      scale: 2,
    })
  }

  const scaleBorderDown = (cursor) => {
    TweenMax.to(cursor, 0.3, {
      scale: 1,
    })
  }
}
