import { Heading } from "@/shared/ui/Heading";
import styles from "./page.module.css";

const HomePage = () => {
  return (
    <div className={styles.page}>
      <Heading tag="h1">Home</Heading>
    </div>
  );
};

export default HomePage;
