export default function Loading() {
  return (
    <div className="flex flex-col max-w-max justify-center items-center">
      <div className="w-[150px] h-[150px] relative my-30 mx-auto overflow-hidden">
        <div className="w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent rounded-[50%] border-t-zinc-100 animate-[spin_5s_cubic-bezier(0.17,0.49,0.96,0.79)_infinite]">
          <div className="w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent rounded-[50%] border-t-zinc-100 animate-[spin_5s_cubic-bezier(0.17,0.49,0.96,0.79)_infinite]">
            <div className="w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent rounded-[50%] border-t-zinc-100 animate-[spin_5s_cubic-bezier(0.17,0.49,0.96,0.79)_infinite]">
              <div className="w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent rounded-[50%] border-t-zinc-100 animate-[spin_5s_cubic-bezier(0.17,0.49,0.96,0.79)_infinite]">
                <div className="w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent rounded-[50%] border-t-zinc-100 animate-[spin_5s_cubic-bezier(0.17,0.49,0.96,0.79)_infinite]">
                  <div className="w-[calc(100%-9.9px)] h-[calc(100%-9.9px)] border-4 border-transparent rounded-[50%] border-t-zinc-100 animate-[spin_5s_cubic-bezier(0.17,0.49,0.96,0.79)_infinite]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <p className="text-2xl">Loading...</p>
    </div>
  );
}
