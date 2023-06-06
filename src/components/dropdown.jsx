// Required
import { useState } from "react";

export default function Dropdown({ children, data }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="dropdown">
        <div
          onClick={() => setIsOpen(isOpen ? false : true)}
          className="dropdown--top"
        >
          {isOpen ? (
            <i className="fa-solid fa-chevron-down"></i>
          ) : (
            <i className="fa-solid fa-chevron-up"></i>
          )}
          {children}
        </div>
        {isOpen ? (
          <div className="dropdown--down">
            {Array.isArray(data) ? (
              data.map((item, i) => <span key={i}>{item}</span>)
            ) : (
              <p>{data}</p>
            )}
          </div>
        ) : null}
      </div>
    </>
  );
}
