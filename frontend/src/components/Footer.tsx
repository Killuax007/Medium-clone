// import React from 'react'

export function Footer() {
  return (
    <div className=" mt-4 sm:mt-0 h-20 bg-black sm:bg-white flex sm:justify-center border-t sm:border-black sm:h-16 w-full">
      <div className="flex flex-row justify-center text-white sm:text-black font-mono mt-1">
        <div className="my-auto">
          <div className="inline-block    pl-4 text-sm">Help</div>
          <div className="sm:inline-block hidden  pl-4 text-sm ">Status</div>
          <div className="inline-block   pl-4 text-sm">About</div>
          <div className="sm:inline-block  hidden  pl-4 text-sm">Carrers</div>
          <div className="sm:inline-block hidden  pl-4 text-sm">Press</div>
          <div className="sm:inline-block hidden  pl-4 text-sm">Blog</div>
          <div className="inline-block   pl-4 text-sm">Privacy</div>
          <div className="inline-block   pl-4 text-sm">Terms</div>
          <div className="sm:inline-block hidden  pl-4 text-sm">
            Text to Speech
          </div>
          <div className="sm:inline-block hidden  pl-4 text-sm">Teams</div>
        </div>
      </div>
    </div>
  );
}
