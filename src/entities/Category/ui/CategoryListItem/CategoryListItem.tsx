"use client";

import { CategoryType } from "@/entities/Category";
import { useAccordion } from "@/shared/hooks";
import { AppLink } from "@/shared/ui/AppLink";
import { Button } from "@/shared/ui/Button";
import styles from "./CategoryListItem.module.css";

interface CategoryListItemProps {
  title: string;
  pages: CategoryType["pages"];
  initialOpen?: boolean;
}

export const CategoryListItem = (props: CategoryListItemProps) => {
  const { title, pages, initialOpen } = props;
  const { wrapperStyle, style, onToggle, isOpen } = useAccordion({
    marginBlock: "13px 20px",
    initialOpen,
  });

  return (
    <div data-testid="CategoryListItem" className={styles.categoryListItem}>
      <Button onClick={onToggle} theme="clear" className={styles.button}>
        {title.toUpperCase()}
      </Button>
      <div style={wrapperStyle}>
        <ul style={style} className={styles.list} aria-hidden={!isOpen}>
          {pages.map((page) => {
            const { _id, title } = page;

            return (
              <li key={_id} className={styles.listItem}>
                <AppLink href="/" className={styles.link} tabIndex={isOpen ? 0 : -1}>
                  {title}
                </AppLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
