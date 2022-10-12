import React, { useState } from "react";
import styledComponents from "styled-components";
import { BsChevronDown } from "react-icons/bs";

import styles from "./CustomSelect.module.css";

const DropDownContainer = styledComponents("div")`
  width: 110px;
  margin: 0 auto;
  cursor: pointer;
`;

const DropDownHeader = styledComponents("div")`
  margin-bottom: 0.3em;
  padding: 7px 10px;
  font-size: 14px;
  color: #000;
  border-radius: 10px;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
`;

const DropDownListContainer = styledComponents("div")`
  position: absolute;
  z-index: 100;
  width: 110px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
`;

const DropDownList = styledComponents("ul")`
  padding: 0;
  margin: 0;
  background: #ffffff;
  box-sizing: border-box;
  color: #000;
  font-size: 14px;
  &:first-child {
    padding-top: 10px;
  }
  &:last-child {
    padding-bottom: 5px;
  }
  border-radius: 10px;
`;

const ListItem = styledComponents("li")`
  list-style: none;
  margin-bottom: 5px;
  cursor: pointer;
  text-align: left;
  padding-left: 6px;
  padding-right: 6px;
`;

interface SelectBoxProps {
  value: string;
  handleChange: (value: string) => void;
}

const options = ["All", "Done", "Undone"];
export default function CustomSelect({ value, handleChange }: SelectBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(value);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (val: string) => () => {
    console.log(val);
    setSelectedOption(val);
    setIsOpen(false);
    handleChange(val);
  };

  return (
    <DropDownContainer>
      <DropDownHeader onClick={toggling}>
        {selectedOption || "All"}
        <BsChevronDown />
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer>
          <DropDownList>
            {options.map((option) => (
              <ListItem onClick={onOptionClicked(option)} key={Math.random()}>
                <div
                  className={
                    selectedOption == option
                      ? styles.selectedItem
                      : styles.option
                  }
                >
                  {option}
                </div>
              </ListItem>
            ))}
          </DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
}
