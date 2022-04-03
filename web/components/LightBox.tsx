import { useState } from "react";
export const LightBox: React.FC<{ src: string; alt: string }> = ({
  children,
  src,
  alt,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {children}
      {isOpen && (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`lightbox-${alt}`}
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
            ></div>

            <div className="relative m-auto w-full">
              <img src={src} alt={alt} className="mx-auto" />
            </div>
          </div>
        </div>
      )}
    </button>
  );
};
