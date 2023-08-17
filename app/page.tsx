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
      <h1>AVC</h1>
      </div>
    </main>
  );
}
