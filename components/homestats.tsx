const Homestats = () => {
  return (
    <section className="p-4 md:p-5 flex flex-col md:flex-row gap-4 md:gap-x-8 justify-center items-center bg-[#F47C20] my-6 md:my-10 py-8 md:py-10 rounded-tl-[50px] md:rounded-tl-[85px]">
      {/* Stats */}
      <div className="bg-[#4F3996] h-auto w-full max-w-[400px] md:w-[350px] lg:w-[400px] p-6 md:p-8 lg:p-10 rounded-tl-[50px] md:rounded-tl-[85px] rounded-br-[50px] md:rounded-br-[85px]">
        <h1 className="text-3xl md:text-4xl text-white text-center">32</h1>
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl text-center">
          Years of Petrofund
        </h1>
      </div>

      <div className="bg-[#4F3996] h-auto w-full max-w-[400px] md:w-[350px] lg:w-[400px] p-6 md:p-8 lg:p-10 rounded-tl-[50px] md:rounded-tl-[85px] rounded-br-[50px] md:rounded-br-[85px]">
        <h1 className="text-3xl md:text-4xl text-white text-center">
          45, 000 +
        </h1>
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl text-center">
          Trained Personnel{" "}
        </h1>
      </div>

      <div className="bg-[#4F3996] h-auto w-full max-w-[400px] md:w-[350px] lg:w-[400px] p-6 md:p-8 lg:p-10 rounded-tl-[50px] md:rounded-tl-[85px] rounded-br-[50px] md:rounded-br-[85px]">
        <h1 className="text-3xl md:text-4xl text-white text-center">300 +</h1>
        <h1 className="text-white text-2xl md:text-3xl lg:text-4xl text-center">
          Employees{" "}
        </h1>
      </div>
    </section>
  );
};

export default Homestats;
