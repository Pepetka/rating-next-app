import { BASE, HOVER, PRIMARY } from "@/entities/Rating/constants/consts";
import { getRatingIcon, type GetRatingIconArgs } from "./getRatingIcon";

describe("getRatingIcon", () => {
  const checkIcons = (baseParams: Omit<GetRatingIconArgs, "index">, expectedIcons: string[]) => {
    expectedIcons.forEach((icon, i) => {
      expect(getRatingIcon({ index: i, ...baseParams }).alt).toBe(icon);
    });
  };

  describe("unhovered", () => {
    it("with rating", () => {
      const baseParams = { rating: 3, hoverId: null, isEditable: true };
      checkIcons(baseParams, [PRIMARY, PRIMARY, PRIMARY, BASE, BASE]);
    });

    it("without rating", () => {
      const baseParams = { rating: 0, hoverId: null, isEditable: true };
      checkIcons(baseParams, [BASE, BASE, BASE, BASE, BASE]);
    });
  });

  describe("hovered", () => {
    it("hoverId > rating", () => {
      const baseParams = { rating: 2, hoverId: 3, isEditable: true };
      checkIcons(baseParams, [PRIMARY, PRIMARY, HOVER, HOVER, BASE]);
    });

    it("hoverId < rating", () => {
      const baseParams = { rating: 4, hoverId: 1, isEditable: true };
      checkIcons(baseParams, [PRIMARY, PRIMARY, HOVER, HOVER, BASE]);
    });

    it("hoverId === rating", () => {
      const baseParams = { rating: 3, hoverId: 2, isEditable: true };
      checkIcons(baseParams, [PRIMARY, PRIMARY, PRIMARY, BASE, BASE]);
    });

    it("is not editable", () => {
      const baseParams = { rating: 2, hoverId: 3, isEditable: false };
      checkIcons(baseParams, [PRIMARY, PRIMARY, BASE, BASE, BASE]);
    });
  });
});
