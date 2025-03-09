import { useState } from "react";
import { nanoid } from "nanoid";
import css from "./InputBox.module.css";

export default function InputBox({ value, onChangeValue }) {
  const idSearchInput = nanoid();

  return (
    <div className={css.searchWrap}>
      <h2>Searching Filter</h2>
      <label htmlFor={idSearchInput}>Find contacts by name</label>
      <input
        id={idSearchInput}
        type="text"
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </div>
  );
}
