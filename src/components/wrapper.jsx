export default function Wrapper({ children }) {
  return (
    <div className="wrapper">
      <div className="wrapper--content">{children}</div>
    </div>
  );
}
