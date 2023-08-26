
"use client";
import {useState} from "react";
import { Htag, Button, Ptag, Tag, Rating } from '@/components';
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
  const [rating,setRating]=useState<number>(4);
  return (
    <main >
      <div >
      <Htag tag="h1">Текст</Htag>
      <Htag tag="h2">Текст</Htag>
      <Htag tag="h3">Текст</Htag>
      <Button appearance='primary' arrow ='right'>Кнопка</Button>
      <Button appearance='ghost' arrow ='down'>Кнопка</Button>
      <Ptag size='l'>Большой</Ptag>
      <Ptag size='m'>Холодный</Ptag>
      <Ptag size='s'>Желтый</Ptag>
      <Tag size="s" color="ghost">ghost</Tag>
      <Tag size="m" color="red">red</Tag>
      <Tag size="s" color="green">green</Tag>
      <Tag size="s" color="grey">grey</Tag>
      <Tag size="s" color="primary">primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating}/>

      </div>
    </main>
  );
}
