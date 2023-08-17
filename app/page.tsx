
import { Htag } from '@/components';
import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Привет-я переопределенный тайтл',
  description: 'Новая',
};
// export async function generateMetadata(): Promise<Metadata> {
//  return {
//   title: 'Привет- тайтл',
//   description: 'Новая !'
//  };
// }

export default function Home():JSX.Element {
  return (
    <main >
      <div >
      <Htag tag="h1">Текст</Htag>
      <Htag tag="h2">Текст</Htag>
      <Htag tag="h3">Текст</Htag>
      </div>
    </main>
  );
}
