// import { getMenu } from "@/api/menu";
"use client";
import CoursesIcon from "./icons/head.svg";
import ServicesIcon from "./icons/cloud.svg";
import BookIcon from "./icons/book.svg";
import ProductsIcon from "./icons/box.svg";
import { FirstLevelMenuItem, PageItem } from "@/interface/menu.inerface";
import { TopLevelCategory } from "@/interface/page.interface";
import styles from "./Menu.module.css";
import cn from "classnames";
import { useContext } from "react";
import { AppContext } from "./context/app.context";
import { getMenu } from "@/api/menu";

const firstLevelMenu : FirstLevelMenuItem[] = [
  {route: "courses", name: "Курсы", icon: <CoursesIcon/>, id: TopLevelCategory.Courses},
  {route: "servises", name: "Сервисы", icon: <ServicesIcon/>, id: TopLevelCategory.Services},
  {route: "books", name: "Книги", icon: <BookIcon/>, id: TopLevelCategory.Books},
  {route: "products", name: "Продукты", icon: <ProductsIcon/>, id: TopLevelCategory.Products},
];

export const Menu = async() => {
  // const menu = await getMenu(0);
  const {firstCategory, setMenu} = useContext(AppContext);
  const menu = await getMenu(0);
  console.log(setMenu);
    console.log("menumenumenumenumenu",menu);
  console.log("firstCategory",firstCategory);
  const buildFistLevel = () => {
    return (
      <>
          {firstLevelMenu.map(menu => (
            <div key ={menu.route}>
              <a href={`/${menu.route}`}>
                <div className={cn(styles.firstLevel, {
                       [styles.firstLevelActive]: menu.id === firstCategory,
                })}>
                  {menu.icon}
                  <span>{menu.name}</span>
                </div>
              </a>
              {menu.id === firstCategory && buildSecondLevel(menu)}
            </div>
          ) )}
      </>
    );
  };

  
  const buildSecondLevel = (menuItem:FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
          {menu.map(m => (
            <div key ={m._id.secondCategory}>
              <div className={styles.secondLevel}>{m._id.secondCategory}</div>
                <div className={cn(styles.secondLevelBlock, {
                       [styles.secondLevelBlockOpened]:m.isOpened
                })}>
                  {buildThirdLevel(m.pages, menuItem.route)}
                </div>
              </div>
          ))}
      </div>
    );
  };

  const buildThirdLevel = (pages:PageItem[], route:string) => {
    return (
   
          pages.map(p => (
        
              <a href={`/${route}/${p.alias}`} className={cn(styles.ThirdLevel, {
                [styles.thirdLevelActive]: true
              })}>
  {p.category}
           </a>
          ))
    );
  };
  return (

      <div className={styles.menu}> {buildFistLevel()}</div>

  );
}

export default Menu;
