interface SubCategory {
  _id: string;
  alias: string;
  title: string;
  category: string;
}

export interface CategoryType {
  _id: {
    secondCategory: string;
  };
  pages: SubCategory[];
}
