"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import type { CategoryType } from "@/entities/Category";
import { classnames } from "@/shared/lib/classnames";
import { relativePath } from "@/shared/lib/relativePath";
import { AppLink } from "@/shared/ui/AppLink";
import { CategoryListItem } from "../CategoryListItem/CategoryListItem";
import styles from "./CategoryList.module.css";

interface CategoryProps {
  categories?: CategoryType[];
  title: string;
  icon: string;
  activeIcon: string;
  path: string;
}

export const CategoryList = (props: CategoryProps) => {
  const { categories, title, icon, activeIcon, path } = props;
  const pathname = usePathname();
  const isActive = pathname.startsWith(relativePath(path));

  return (
    <div data-testid="CategoryList" className={styles.categoryList}>
      <AppLink
        href={relativePath(path)}
        className={classnames(styles.link, { [styles.active]: isActive })}
      >
        <Image src={isActive ? activeIcon : icon} alt="" aria-hidden width={24} height={24} />
        {title}
      </AppLink>
      {!!categories?.length && (
        <ul className={styles.list}>
          {categories.map((category) => {
            const { _id, pages } = category;

            return (
              <li key={_id.secondCategory}>
                <CategoryListItem title={_id.secondCategory} pages={pages} categoryPath={path} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
