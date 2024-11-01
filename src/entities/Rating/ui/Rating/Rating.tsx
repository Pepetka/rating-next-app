"use client";

import { HTMLAttributes, useCallback, useState } from "react";
import { getRatingIcon } from "../../lib/getRatingIcon";
import { RatingItem } from "../RatingItem/RatingItem";
import styles from "./Rating.module.css";

interface RatingProps extends HTMLAttributes<HTMLDivElement> {
  rating?: number;
  setRating?: (rating: number) => void;
  isEditable?: boolean;
}

const ratingArray = new Array(5).fill(0);

export const Rating = (props: RatingProps) => {
  const { rating = 0, isEditable = true, setRating } = props;
  const [hoverId, setHoverId] = useState<number | null>(null);

  const onRatingChange = useCallback(
    (index: number) => {
      if (!isEditable) {
        return;
      }
      if (rating === index + 1) {
        return setRating?.(0);
      }
      setRating?.(index + 1);
    },
    [isEditable, rating, setRating],
  );

  return (
    <ul data-testid="Rating" className={styles.rating}>
      {ratingArray.map((_, index) => {
        return (
          <li key={index} className={styles.ratingItem}>
            <RatingItem
              itemId={index}
              setHoverId={setHoverId}
              onClick={() => onRatingChange(index)}
              iconData={getRatingIcon({ rating, hoverId, index, isEditable })}
              isEditable={isEditable}
            />
          </li>
        );
      })}
    </ul>
  );
};
