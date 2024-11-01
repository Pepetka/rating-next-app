import { MAIN_CATEGORIES } from "../../constants/consts";
import { getCategories } from "../../model/getCategories";
import { CategoryList } from "../CategoryList/CategoryList";
import styles from "./Category.module.css";

interface CategoryProps {
  item: number;
}

export const Category = async (props: CategoryProps) => {
  const { item } = props;
  const categories = await getCategories(item);

  return (
    <div data-testid="Category" className={styles.category}>
      {MAIN_CATEGORIES.map(({ title, icon, activeIcon, path }, index) => (
        <CategoryList
          key={title}
          categories={item === index ? categories : undefined}
          title={title}
          icon={icon}
          activeIcon={activeIcon}
          path={path}
        />
      ))}
    </div>
  );
};
