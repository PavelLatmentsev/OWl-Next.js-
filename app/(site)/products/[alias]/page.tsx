import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
};

export default function Products({params}:{params:{alias:string}}):JSX.Element{
  return (

      <div >
Продукты - Страница продуктов с alias = {params.alias}
      </div>
  
  );
}
