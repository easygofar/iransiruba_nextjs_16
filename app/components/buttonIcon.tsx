const ButtonIcon = ({ children }: { children: string }) => {
  return (
    <>
      <button className="inline-flex justify-between hover:text-[yellow] shadow cursor:pointer items-center py-[2px] bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-full hover:ring-slate-300/50 hover:ring hover:ring-offset-4">
        <span className="px-4 font-bold">{children}</span>
      </button>
    </>
  );
};

export default ButtonIcon;
