import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'страница',
};
export default function PageProducts({params}:{params:{alias:string}}) {
  return <div> страница c {params.alias}</div>;
}
