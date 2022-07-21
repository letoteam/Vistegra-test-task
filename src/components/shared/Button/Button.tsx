import React, { MouseEventHandler } from "react";
import styles from "./styles.module.css";

type ButtonProps = {
  text: string;
  appearance: "primary" | "success" | "warning" | "danger";
  round: 0 | 1 | 2;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function Button({
  text,
  appearance,
  round,
  onClick,
}: ButtonProps) {
  const appearanceClassName = `btn-${appearance}`;
  const roundClassName = `btn-round-${round}`;

  return (
    <button
      className={`${styles.btn} ${styles[appearanceClassName]} ${styles[roundClassName]}`}
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  );
}
