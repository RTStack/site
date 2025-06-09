import React, { useState, useEffect, useRef } from "react";

const CustomSelect = ({ options, value, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  // Simpan selectedOption sebagai state
  const [selectedOption, setSelectedOption] = useState(
    options.find((opt) => opt.value === value) || options[0] || { label: "", value: "" }
  );

  // Update selectedOption kalau props value atau options berubah
  useEffect(() => {
    const newSelected = options.find((opt) => opt.value === value);
    if (newSelected) setSelectedOption(newSelected);
  }, [value, options]);

  // Close dropdown kalau klik luar
  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option); // update state lokal juga biar UI langsung update
    setIsOpen(false);
    if (onChange) {
      onChange(option.value); // kasih tahu parent pilihan berubah
    }
  };

  return (
    <div className="custom-select custom-select-2 flex-shrink-0 relative" ref={selectRef}>
      <div
        className={`select-selected whitespace-nowrap ${isOpen ? "select-arrow-active" : ""}`}
        onClick={toggleDropdown}
      >
        {selectedOption.label}
      </div>
      <div className={`select-items ${isOpen ? "" : "select-hide"}`}>
        {options.map((option) => (
          <div
            key={option.value}
            onClick={() => handleOptionClick(option)}
            className={`select-item ${selectedOption.value === option.value ? "same-as-selected" : ""}`}
          >
            {option.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomSelect;
