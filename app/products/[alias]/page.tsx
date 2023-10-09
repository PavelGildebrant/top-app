import { menuAPI } from '@/API/menuAPI';
import { getPage } from '@/API/page';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'страница',
};

export async function generateStaticParams() {
  const menu = await menuAPI(0);
  return menu.flatMap((item) => item.pages.map(page =>({alias:page.alias})));
}

export default async function PageProducts({
  params,
}: {
  params: { alias: string };
}) {
  const page = await getPage(params.alias);

  if (!page) {
    notFound();
  }
  return <div> страница c {page.title} </div>;
}
