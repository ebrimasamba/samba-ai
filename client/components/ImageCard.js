import Image from "next/image";
import React from "react";

const ImageCard = ({ _id, name, prompt, photo }) => (
  <div className="group relative block generated-image h-72 border border-gray-200 hover:shadow-xl overflow-hidden rounded-md">
    <Image
      className="object-cover object-top"
      fill
      src={photo}
      sizes={"1024px"}
      alt={prompt}
    />

    <div className="absolute bottom-0 inset-x-0 bg-primary/90 backdrop-blur group-hover:opacity-100 opacity-0 transition-all duration-300">
      <div className="p-3 text-white">
        <a
          download={name}
          href={photo}
          className="inline-block outline-none bg-transparent border-none uppercase text-[11px] font-semibold hover:underline mb-1"
          target="_blank"
          rel="noreferrer"
        >
          Download Image
        </a>
        <h3 className="font-bold text-sm">{name}</h3>
        <q className="mt-2 text-sm font-semibold italic border-l-2 border-white pl-2 block">
          {prompt}
        </q>
      </div>
    </div>
  </div>
);

export default ImageCard;
