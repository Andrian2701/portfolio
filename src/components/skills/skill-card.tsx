import Image from "next/image";

export const SkillCard = ({ image, text }: { image: string, text: string }) => {

  return (
    <div className="flex flex-col items-center gap-2">
      <Image
        src={image}
        alt={text}
        width={35}
        height={35}
        className="object-contain"
      />
      <p className="text-sm font-light text-primary">{text}</p>
    </div>
  );
};
