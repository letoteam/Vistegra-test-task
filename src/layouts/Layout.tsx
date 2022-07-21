import React from "react";
import styles from "./styles.module.css";
import Header from "../components/Header/Header";

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={styles.container}>
      <Header />
      {children}
    </div>
  );
}
