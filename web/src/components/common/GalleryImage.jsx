import React, { useState } from "react"
import { ModalProvider, Modal } from "./Modal"
import Image from "./Image"

export const GalleryImage = ({ image, alt }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="gallery-item">
      <ModalProvider>
        <div onClick={() => window.innerWidth > 768 && setIsOpen(!isOpen)}>
          <Image
            src={image.asset.fluid}
            alt={alt}
            key={alt}
            className="gallery-image"
          />
          {isOpen && (
            <Modal onClose={() => setIsOpen(!isOpen)}>
              <Image src={image.asset.fluid} alt={alt} key={alt} />
            </Modal>
          )}
        </div>
      </ModalProvider>
    </div>
  )
}
