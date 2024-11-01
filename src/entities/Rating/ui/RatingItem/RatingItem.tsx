import Image from "next/image";
import { useCallback } from "react";
import { useHover } from "@/shared/hooks";
import { classnames } from "@/shared/lib/classnames";
import { Button } from "@/shared/ui/Button";
import styles from "./RatingItem.module.css";

interface RatingItemProps {
  onClick: () => void;
  iconData: { src: string; alt: string };
  setHoverId: (id: number | null) => void;
  itemId: number;
  isEditable: boolean;
}

export const RatingItem = (props: RatingItemProps) => {
  const { iconData, onClick, setHoverId, itemId, isEditable } = props;

  const onEnter = useCallback(() => {
    setHoverId(itemId);
  }, [itemId, setHoverId]);

  const onLeave = useCallback(() => {
    setHoverId(null);
  }, [setHoverId]);

  const [_, attributes] = useHover({
    onEnter,
    onLeave,
  });

  return (
    <Button
      onClick={onClick}
      className={classnames(styles.ratingButton, { [styles.notEditable]: !isEditable })}
      theme="clear"
      data-testid={`RatingItem-${itemId}`}
      tabIndex={isEditable ? 0 : -1}
      {...attributes}
    >
      <Image
        data-testid={`RatingItemIcon-${itemId}`}
        src={iconData.src}
        alt={iconData.alt}
        width={20}
        height={20}
        className={styles.ratingIcon}
        priority
      />
    </Button>
  );
};
