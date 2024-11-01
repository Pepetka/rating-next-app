import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { BASE, PRIMARY } from "@/entities/Rating/constants/consts";
import { Rating } from "./Rating";

const getSrcArr = (rating: number) => {
  const arr = [BASE, BASE, BASE, BASE, BASE];

  new Array(rating).fill(0).forEach((_, i) => {
    arr[i] = PRIMARY;
  });

  return arr;
};

describe("Rating", () => {
  const getImagesAlt = () =>
    new Array(5).fill(0).map((_, i) => {
      const img = screen.getByTestId(`RatingItemIcon-${i}`);

      return img.getAttribute("alt");
    });

  it("set rating", async () => {
    const setRating = jest.fn();
    render(<Rating setRating={setRating} />);

    expect(getImagesAlt()).toEqual(getSrcArr(0));
    await userEvent.click(screen.getByTestId("RatingItem-2"));
    expect(setRating).toHaveBeenCalledWith(3);
  });

  it("check icons", async () => {
    const setRating = jest.fn();
    render(<Rating rating={3} setRating={setRating} />);

    expect(getImagesAlt()).toEqual(getSrcArr(3));
  });

  it("unrated", async () => {
    const setRating = jest.fn();
    render(<Rating rating={3} setRating={setRating} />);

    await userEvent.click(screen.getByTestId("RatingItem-2"));
    expect(setRating).toHaveBeenCalledWith(0);
  });
});
