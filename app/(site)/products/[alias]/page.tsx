import { getPage } from "@/api/page";
import { Metadata } from "next";
import { notFound } from "next/navigation";
export const metadata: Metadata = {
  title: "Products",
};

export default async function Products({
  params,
}: {
  params: { alias: string };
}) {
  const page = await getPage(params.alias);
  if (!page) {
    notFound();
  }
  return <div>Продукты - Страница продуктов с alias = {page.title}{params.alias}</div>;
}
