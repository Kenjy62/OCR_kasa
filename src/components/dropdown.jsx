// Required
import { useState } from "react";

export default function Dropdown({ children, data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="container-none flex-1">
        <div
          onClick={() => setIsOpen(isOpen ? false : true)}
          className="container-none bg-primaryOrange p-2 text-white rounded-tl-lg rounded-tr-lg flex flex-row-reverse justify-between items-center cursor-pointer"
        >
          {isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
          {children}
        </div>
        {isOpen ? (
          <div className="container-none p-4 bg-gray-100 rounded-bl-lg rounded-br-lg text-primaryOrange">
            {Array.isArray(data) ? (
              data.map((item, i) => (
                <span key={i} className="block">
                  {item}
                </span>
              ))
            ) : (
              <p>{data}</p>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}
