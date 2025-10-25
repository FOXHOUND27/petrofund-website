export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-[#4F3996] to-[#3d2d78]">
      <div className="flex flex-col items-center gap-6">
        {/* Animated spinner */}
        <div className="relative w-20 h-20">
          {/* Outer ring */}
          <div className="absolute inset-0 border-[6px] border-white/20 rounded-full"></div>
          {/* Spinning ring */}
          <div className="absolute inset-0 border-[6px] border-transparent border-t-[#F47C20] border-r-[#F47C20] rounded-full animate-spin"></div>
          {/* Inner pulse */}
          <div className="absolute inset-3 bg-[#F47C20]/20 rounded-full animate-pulse"></div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-white text-2xl font-semibold tracking-wide">
            Petrofund
          </h2>
          <p className="text-white/80 text-sm font-medium">Loading...</p>
        </div>
      </div>
    </div>
  );
}
