import { MAIN_CATEGORIES } from "@/entities/Category";

interface PageProps {
  params: { type: string };
}

export const generateStaticParams = (): PageProps["params"][] => {
  return MAIN_CATEGORIES.map((category) => ({
    type: category.path,
  }));
};

const Page = (props: PageProps) => {
  const { params } = props;

  return <div>{params.type}</div>;
};

export default Page;
