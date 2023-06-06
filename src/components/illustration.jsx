export default function Illustration({ children, type }) {
  return (
    <div className={type}>
      <div className="illustration--voiler">
        <span>{children}</span>
      </div>
    </div>
  );
}
