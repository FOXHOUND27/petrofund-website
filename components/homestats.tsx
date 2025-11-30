const Homestats = () => {
  return (
    <section className="p-4 md:p-5 flex flex-col md:flex-row gap-4 md:gap-x-8 justify-center items-center bg-[#F47C20] my-6 md:my-10 py-8 md:py-10 rounded-tl-[50px] md:rounded-tl-[85px]">
      {/* Stats */}
      <div className="bg-[#4F3996] h-auto w-full max-w-[400px] md:w-[350px] lg:w-[400px] p-6 md:p-8 lg:p-10 rounded-tl-[50px] md:rounded-tl-[85px] rounded-br-[50px] md:rounded-br-[85px]">
        <h1 className="text-xl md:text-xl text-white text-center font-bold">
          32
        </h1>
        <h1 className="text-white text-xl md:text-xl lg:text-xl text-center font-bold">
          Years of Petrofund
        </h1>
      </div>

      <div className="bg-[#4F3996] h-auto w-full max-w-[400px] md:w-[350px] lg:w-[400px] p-6 md:p-8 lg:p-10 rounded-tl-[50px] md:rounded-tl-[85px] rounded-br-[50px] md:rounded-br-[85px]">
        <h1 className="text-xl  text-white text-center font-bold">45, 000 +</h1>
        <h1 className="text-white text-xl text-center font-bold">
          Trained Personnel{" "}
        </h1>
      </div>

      <div className="bg-[#4F3996] h-auto w-full max-w-[400px] md:w-[350px] lg:w-[400px] p-6 md:p-8 lg:p-10 rounded-tl-[50px] md:rounded-tl-[85px] rounded-br-[50px] md:rounded-br-[85px]">
        <h1 className="text-xl font-bold text-white text-center">300 +</h1>
        <h1 className="text-white text-xl font-bold text-center">Employees </h1>
      </div>
    </section>
  );
};

export default Homestats;
