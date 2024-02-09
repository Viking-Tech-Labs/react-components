import { useRef, useState } from "react";
import Image from "next/image";

import { XCircleIcon } from "@heroicons/react/20/solid";

import "./ImageModal.scss";

const imageList = [
  {
    src: "https://picsum.photos/200?random=1",
    size: 200,
    alt: "img",
  },
  {
    src: "https://picsum.photos/200?random=2",
    size: 200,
    alt: "img",
  },
  {
    src: "https://picsum.photos/200?random=3",
    size: 200,
    alt: "img",
  },
  {
    src: "https://picsum.photos/200?random=4",
    size: 200,
    alt: "img",
  },
  {
    src: "https://picsum.photos/200?random=5",
    size: 200,
    alt: "img",
  },
  {
    src: "https://picsum.photos/200?random=6",
    size: 200,
    alt: "img",
  },
];

export const ImageModalDemo = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [dialogPosition, setDialogPosition] = useState({ top: 0, left: 0 });
  const [img, setImg] = useState("");

  const openModal = (e: any, imageUrl: string) => {
    if (dialogRef?.current) {
      dialogRef.current.showModal();
      const rect = e.target.getBoundingClientRect();

      const startX = rect.right - rect.width;
      const startY = rect.bottom - rect.height;

      setDialogPosition({ top: startY, left: startX });
      setImg(imageUrl);
    }
  };

  const closeModal = () => {
    if (dialogRef?.current) dialogRef.current.close();
  };

  return (
    <>
      <div className="flex cursor-pointer px-5 xl:px-0">
        {imageList.map(({ src, alt, size }, index) => {
          return (
            <Image
              key={`img-${index}`}
              alt={alt}
              src={src}
              width={size}
              height={size}
              onClick={(e) => openModal(e, src)}
            />
          );
        })}
      </div>

      <dialog
        ref={dialogRef}
        className="m-0 h-[200px] w-[200px] overflow-visible bg-transparent"
        onClick={(e) => {
          if (e.currentTarget === e.target) {
            closeModal();
          }
        }}
        style={{
          top: `${dialogPosition.top}px`,
          left: `${dialogPosition.left}px`,
        }}
      >
        <div className="relative">
          <button
            onClick={closeModal}
            className="absolute right-0 top-0 -translate-y-3/4 translate-x-3/4"
          >
            <XCircleIcon className="w-6 text-blue-500/70" />
          </button>
          {img && (
            <Image
              src={img}
              alt="Selected"
              className="rounded-md"
              width={200}
              height={200}
            />
          )}
        </div>
      </dialog>
    </>
  );
};
