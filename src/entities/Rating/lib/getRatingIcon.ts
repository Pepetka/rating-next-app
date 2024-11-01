import { BASE, HOVER, PRIMARY } from "@/entities/Rating/constants/consts";
import starIconHover from "@/shared/assets/icons/star/star-hover.svg";
import starIconPrimary from "@/shared/assets/icons/star/star-primary.svg";
import starIcon from "@/shared/assets/icons/star/star.svg";

export interface GetRatingIconArgs {
  rating: number;
  index: number;
  hoverId: number | null;
  isEditable: boolean;
}

interface GetRatingIconOutput {
  src: string;
  alt: string;
}

export const getRatingIcon = (args: GetRatingIconArgs): GetRatingIconOutput => {
  const { rating, index, hoverId, isEditable } = args;

  const ratingIndex = rating - 1;

  if (
    isEditable &&
    hoverId !== null &&
    ((index <= hoverId && index > ratingIndex) || (index > hoverId && index <= ratingIndex))
  ) {
    return {
      src: starIconHover,
      alt: HOVER,
    };
  }
  if (index <= ratingIndex) {
    return {
      src: starIconPrimary,
      alt: PRIMARY,
    };
  }
  return {
    src: starIcon,
    alt: BASE,
  };
};
