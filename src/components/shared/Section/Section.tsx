import React from "react";
import styles from "./styles.module.css";

type SectionProps = {
  children: React.ReactNode;
  title: string;
  margins?: string;
};

const defaultProps = {
  margins: "",
};

export default function Section({
  children,
  title,
  margins = "",
}: SectionProps) {
  return (
    <section style={{ margin: margins }}>
      <h1 className={styles.sectionTitle}>{title}</h1>

      <div className={styles.sectionContainer}>{children}</div>
    </section>
  );
}

Section.defaultProps = defaultProps;
