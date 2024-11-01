import bookPrimaryIcon from "@/shared/assets/icons/book/book-primary.svg";
import bookIcon from "@/shared/assets/icons/book/book.svg";
import boxPrimaryIcon from "@/shared/assets/icons/box/box-primary.svg";
import boxIcon from "@/shared/assets/icons/box/box.svg";
import cloudPrimaryIcon from "@/shared/assets/icons/cloud/cloud-primary.svg";
import cloudIcon from "@/shared/assets/icons/cloud/cloud.svg";
import hatPrimaryIcon from "@/shared/assets/icons/hat/hat-primary.svg";
import hatIcon from "@/shared/assets/icons/hat/hat.svg";

export const MAIN_CATEGORIES: { title: string; icon: string; activeIcon: string; path: string }[] =
  [
    {
      title: "Курсы",
      icon: hatIcon,
      activeIcon: hatPrimaryIcon,
      path: "/",
    },
    {
      title: "Сервисы",
      icon: cloudIcon,
      activeIcon: cloudPrimaryIcon,
      path: "/services",
    },
    {
      title: "Курсы",
      icon: bookIcon,
      activeIcon: bookPrimaryIcon,
      path: "/curses",
    },
    {
      title: "Товары",
      icon: boxIcon,
      activeIcon: boxPrimaryIcon,
      path: "/goods",
    },
  ];
