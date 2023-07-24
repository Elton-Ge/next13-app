import Image from "next/image";
import styles from "./page.module.css";
import Hero from "/public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better Design for your digital products
        </h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
          aperiam, at dolorem enim eos itaque modi natus nisi nobis nostrum
          perspiciatis porro, possimus quasi quod, repellat repudiandae tempora
          voluptates voluptatibus.
        </p>
        <Button url={"/portfolio"} text={"See Our Works"} />
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt={"Hero"} className={styles.img} />
      </div>
    </div>
  );
}
