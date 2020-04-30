import React from "react"
import { GalleryImage } from "./GalleryImage"

export const ProjectImages = ({ images }) => {
  return (
    <div className="image-gallery">
      {images.map(({ image, alt }) => (
        <GalleryImage image={image} alt={alt} key={alt} />
      ))}
    </div>
  )
}
