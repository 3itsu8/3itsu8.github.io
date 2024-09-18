"use client";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const [health, setHealth] = useState("");

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const res = await fetch("/api/health");
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        setHealth(data.message);
      } catch (error) {
        console.error(error);
        setHealth("エラー: APIからのデータ取得に失敗しました");
      }
    };
    fetchHealth();
  }, []);

  return (
    <div className={styles.container}>
      <h1>{health}</h1>
    </div>
  );
}
