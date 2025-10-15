import Image from "next/image";

const Imagerow = () => {
  return (
    <section className="flex flex-wrap items-center justify-center py-5 gap-5 md:gap-x-5">
      <Image
        src="/SectionImages/PetroEvent.jpg"
        width={300}
        height={200}
        alt="PetroEvent"
        className="w-full max-w-[300px] h-auto"
      />
      <Image
        src="/SectionImages/Workshop.png"
        width={300}
        height={200}
        alt="Workshop"
        className="w-full max-w-[300px] h-auto"
      />
      <Image
        src="/SectionImages/School.png"
        width={300}
        height={200}
        alt="School"
        className="w-full max-w-[300px] h-auto"
      />
      <Image
        src="/SectionImages/PetrofundEvent.jpg"
        width={300}
        height={200}
        alt="Story"
        className="w-full max-w-[300px] h-auto"
      />
    </section>
  );
};

export default Imagerow;
