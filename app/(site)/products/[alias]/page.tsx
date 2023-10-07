"use client";
import { getMenu } from "@/api/menu";
import { getPage } from "@/api/page";
import { Metadata } from "next";
import { notFound, useRouter } from "next/navigation";
export const metadata: Metadata = {
  title: "Products",
};

export async function generateStaticParams() {
  const menu = await getMenu(0);
  return menu.flatMap(item => item.pages.map(page =>({alias: page.alias})));// генерация статичных параметров
}

export default async function Products({params,}: {params: { alias: string };}) {
  const router = useRouter();
  console.log("router", router);
  console.log("params", params);
  const page = await getPage(params.alias);
  if (!page) {
    notFound();
  }
  return <div>Продукты - Страница продуктов с alias = {page.title}{params.alias}</div>;
}
