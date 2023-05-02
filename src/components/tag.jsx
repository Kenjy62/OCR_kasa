export default function Tag({ children }) {
  return (
    <span className="bg-primaryOrange text-white py-1 px-6 flex justify-center items-center w-min rounded-lg">
      {children}
    </span>
  );
}
