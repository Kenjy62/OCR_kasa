export default function Illustration({ children, type }) {
  return (
    <div className={type}>
      <div className="voiler bg-[rgba(0,0,0,0.5)] h-full w-full rounded-lg flex justify-start items-center p-3">
        <span className="opacity-100 text-white text-3xl">{children}</span>
      </div>
    </div>
  );
}
