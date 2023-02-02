import Image from "next/image";
import React from "react";

const ImageCard = ({ _id, name, prompt, photo }) => (
  <div className="group relative block generated-image h-96 shadow hover:shadow-lg">
    <Image className="object-cover object-top" fill src={photo} alt={prompt} />
    <div className="group-hover:flex flex-col max-h-[94.5%] hidden absolute bottom-0 left-0 right-0 bg-[#10131f] m-2 p-4 rounded-md">
      <p className="text-gray-300 text-sm overflow-y-auto prompt">{prompt}</p>

      <div className="mt-2 flex justify-between items-center gap-2">
        <p className="text-white text-sm">{name}</p>
        <a
          download={name}
          href={photo}
          className="inline-block outline-none bg-transparent border-none "
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={"/download.png"}
            alt="download"
            className="object-contain invert"
            width={24}
            height={24}
          />
        </a>
      </div>
    </div>
  </div>
);

export default ImageCard;
