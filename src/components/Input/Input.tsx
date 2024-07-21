import React from "react";
import { Props } from "./Props.type";
import classNames from "classnames";

const Input = ({
  type,
  messageError,
  hasError = false,
  handleOnFocus,
  handleOnBlur,
  handleOnChange,
  label,
  maxSize,
  name,
  classDiv,
}: Props) => {

    const containerClass = classNames("input-generic", classDiv, {
        "input-error": hasError,
    })

  return (
    <div className={containerClass}>
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        onFocus={handleOnFocus}
        maxLength={maxSize}
      />
      {
        hasError && <span>{messageError}</span>
      }
    </div>
  );
};

export default Input;
