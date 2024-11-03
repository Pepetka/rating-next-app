import bookPrimaryIcon from "@/shared/assets/icons/book/book-primary.svg";
import bookIcon from "@/shared/assets/icons/book/book.svg";
import boxPrimaryIcon from "@/shared/assets/icons/box/box-primary.svg";
import boxIcon from "@/shared/assets/icons/box/box.svg";
import cloudPrimaryIcon from "@/shared/assets/icons/cloud/cloud-primary.svg";
import cloudIcon from "@/shared/assets/icons/cloud/cloud.svg";
import hatPrimaryIcon from "@/shared/assets/icons/hat/hat-primary.svg";
import hatIcon from "@/shared/assets/icons/hat/hat.svg";

interface MainCategory {
  title: string;
  icon: string;
  activeIcon: string;
  path: string;
}

export const MAIN_CATEGORIES: MainCategory[] = [
  {
    title: "Курсы",
    icon: hatIcon,
    activeIcon: hatPrimaryIcon,
    path: "courses",
  },
  {
    title: "Сервисы",
    icon: cloudIcon,
    activeIcon: cloudPrimaryIcon,
    path: "services",
  },
  {
    title: "Книги",
    icon: bookIcon,
    activeIcon: bookPrimaryIcon,
    path: "books",
  },
  {
    title: "Товары",
    icon: boxIcon,
    activeIcon: boxPrimaryIcon,
    path: "goods",
  },
];
