import Image from "next/image";

export const ImageHoverDemo = () => {
  return (
    <div className="flex">
      <div className="group relative h-[400px] w-[400px]">
        <Image
          alt="img"
          src={"https://picsum.photos/400?random=7"}
          className="absolute opacity-0 transition-all duration-500 group-hover:opacity-100"
          fill={true}
        />
        <Image
          alt="img"
          src={"https://picsum.photos/400?random=8"}
          className="absolute transition-all duration-500 group-hover:opacity-0"
          fill={true}
        />
      </div>
      <div className="group relative h-[400px] w-[400px]">
        <Image
          alt="img"
          src={"https://picsum.photos/400?random=9"}
          className="absolute opacity-0 transition-all duration-500 group-hover:opacity-100"
          fill={true}
        />
        <Image
          alt="img"
          src={"https://picsum.photos/400?random=10"}
          className="absolute transition-all duration-500 group-hover:opacity-0"
          fill={true}
        />
      </div>
      <div className="group relative h-[400px] w-[400px]">
        <Image
          alt="img"
          src={"https://picsum.photos/400?random=11"}
          className="absolute opacity-0 transition-all duration-500 group-hover:opacity-100"
          fill={true}
        />
        <Image
          alt="img"
          src={"https://picsum.photos/400?random=12"}
          className="absolute transition-all duration-500 group-hover:opacity-0"
          fill={true}
        />
      </div>
    </div>
  );
};
