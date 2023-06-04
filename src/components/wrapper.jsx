export default function Wrapper({ children }) {
  return (
    <div className="wrapper flex flex-col items-center">
      <div className="wrapper--content max-w-[1440px] w-full">{children}</div>
    </div>
  );
}
