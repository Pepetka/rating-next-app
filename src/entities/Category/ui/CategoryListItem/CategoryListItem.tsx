"use client";

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { CategoryType } from "@/entities/Category";
import { useAccordion } from "@/shared/hooks";
import { classnames } from "@/shared/lib/classnames";
import { relativePath } from "@/shared/lib/relativePath";
import { AppLink } from "@/shared/ui/AppLink";
import { Button } from "@/shared/ui/Button";
import styles from "./CategoryListItem.module.css";

interface CategoryListItemProps {
  title: string;
  pages: CategoryType["pages"];
  categoryPath: string;
}

export const CategoryListItem = (props: CategoryListItemProps) => {
  const { title, pages, categoryPath } = props;
  const pathname = usePathname();

  const { initialOpen, activeId } = useMemo(() => {
    const index = pages.findIndex(({ alias }) => pathname === relativePath([categoryPath, alias]));

    return {
      initialOpen: index !== -1,
      activeId: index !== -1 ? pages[index]._id : null,
    };
  }, [pages, categoryPath, pathname]);

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
            const { _id, title, alias } = page;
            const href = relativePath([categoryPath, alias]);

            return (
              <li key={_id} className={styles.listItem}>
                <AppLink
                  href={href}
                  className={classnames(styles.link, {
                    [styles.active]: activeId === _id,
                  })}
                  tabIndex={isOpen ? 0 : -1}
                >
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
