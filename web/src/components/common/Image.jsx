import React from "react"
import Img from "gatsby-image"

const Image = ({ src, alt, ...others }) => {
  if (!src) {
    return (
      <div>
        <img src={src} alt={alt} {...others} />
      </div>
    )
  } else {
    return <Img fluid={src} alt={alt} loading="auto" {...others} />
  }
}

export default Image
