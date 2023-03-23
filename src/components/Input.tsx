import React from "react";
import styles from "./Input.module.scss";

interface InputProps {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ placeholder, onChange }) => {
  return (
    <input
      type="text"
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
