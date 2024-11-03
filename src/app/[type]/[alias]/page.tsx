import { getCategories, MAIN_CATEGORIES } from "@/entities/Category";

interface PageProps {
  params: { type: string; alias: string };
}

export const generateStaticParams = async (): Promise<PageProps["params"][]> => {
  const params: PageProps["params"][] = [];

  for (let i = 0; i < MAIN_CATEGORIES.length; i++) {
    const data = await getCategories(i);
    params.push(
      ...data.flatMap(({ pages }) => {
        return pages.map(({ alias }) => {
          return {
            type: MAIN_CATEGORIES[i].path,
            alias,
          };
        });
      }),
    );
  }

  return params;
};

export const dynamicParams = false;

const Page = (props: PageProps) => {
  const { params } = props;

  return (
    <div>
      {params.type} - {params.alias}
    </div>
  );
};

export default Page;
