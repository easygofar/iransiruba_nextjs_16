import React from 'react'

export const ResponsiveSign = () => {
  return (
    // <div className="fixed bottom-2/4 left-1 text-sm rounded-full flex justify-center items-center bg-slate-300 overflow-hidden w-8 h-8">
    <div className="fixed bottom-0 left-0 text-sm rounded-full flex justify-center items-center bg-slate-300 overflow-hidden w-6 h-6">
    <span className="sm:hidden">xs</span>
    <span className="hidden sm:block md:hidden">sm</span>
    <span className="hidden md:block lg:hidden">md</span>
    <span className="hidden lg:block xl:hidden">lg</span>
    <span className="hidden xl:block 2xl:hidden">xl</span>
    <span className="hidden 2xl:block ">2xl</span>
</div>

  )
}
