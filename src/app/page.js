import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src="/img/logo-amourbrut.svg"
        alt="Logo AMOURBRUT"
        width={600}
        height={600}
        className={styles.logo}
        priority
      />
    </main>
  );
}
