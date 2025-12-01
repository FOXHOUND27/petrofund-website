import Image from "next/image";

interface InfoCardProps {
  imageSrc: string;
  title: string;
  description: string;
}

const ValueCard: React.FC<InfoCardProps> = ({
  imageSrc,
  title,
  description,
}) => {
  return (
    <div className="flex items-center justify-center p-2">
      <div
        className="w-[260px] sm:w-[280px] md:w-[300px] lg:w-[290px] 
                      h-auto sm:h-[220px] md:h-[240px] 
                      shadow-2xl p-4 sm:p-5 md:p-6 
                      flex flex-col items-center justify-center 
                      bg-[#F47C20] rounded-tl-[45px] sm:rounded-tl-[55px] 
                      rounded-br-[45px] sm:rounded-br-[55px] 
                      transition-transform duration-300 hover:scale-105"
      >
        <Image
          src={imageSrc}
          width={40}
          height={40}
          alt={title}
          className="mb-3 sm:mb-4"
        />
        <h1 className="text-white text-lg font-bold text-center mb-2">
          {title}
        </h1>
        <p className="text-white text-sm text-center leading-relaxed px-2 font-semibold">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ValueCard;
