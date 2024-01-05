import React, { useState } from "react";
import DropDownData from "../data/dropDownData";
import { MdKeyboardArrowRight } from "react-icons/md";

const DropDown = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleIconHover = (index) => {
    setHoveredIndex(index);
  };

  const handleButtonHover = (index) => {
    setHoveredIndex(index);
  };

  return (
    <main className="bg-white rounded-md w-72 absolute p-4 z-4">
      <div className="flex flex-col gap-5">
        {DropDownData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex flex-row justify-between">
                <span className="text-black">{item.title}</span>
                <button className="text-gray-400">See All</button>
              </div>
              <div>
                {item.items.map((subItem, ) => {
                  return (
                    <div className="flex flex-row justify-between items-center  ">
                    <div key={subItem.id} className="flex flex-row gap-4 items-center">
                      {subItem.icon && (
                        <subItem.icon

                        color={hoveredIndex===subItem.id ?" black":"grey"}
                          onMouseEnter={() => handleIconHover(subItem.id)}
                          onMouseLeave={() => setHoveredIndex(null)}
                        />
                      )}
                      <button
                        className={hoveredIndex === subItem.id ? "text-black underline " : "text-gray-400 "}
                        onMouseEnter={() => handleButtonHover(subItem.id)}
                        onMouseLeave={() => setHoveredIndex(null)}
                      >
                        {subItem.itemsName}
                      </button>
                    </div>
                    <MdKeyboardArrowRight />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default DropDown;
