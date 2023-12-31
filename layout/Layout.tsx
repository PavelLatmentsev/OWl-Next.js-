import { Header } from "./Header/Header";
import { ILayoutProps } from "./Layout.props";
import styles from "./Layout.module.css";
// import cn from "classnames";
import { Sidebar } from "./Sidebar/Sidebar";
import { Footer } from "./Footer/Footer";
import { FunctionComponent } from "react";
import { AppContextProvider, IAppContext } from "@/app/(site)/components/Menu/context/app.context";
export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <div className={styles.wrapper}>
      {" "}
      <Header className={styles.header}/>

        <Sidebar className={styles.sidebar}/>
        <div className={styles.body}>{children}</div>
     
      <Footer className={styles.footer}/>
    </div>
  );
};


export const withLayout = <T extends Record<string, unknown> & IAppContext>(Component:FunctionComponent<T>) => {
  return function withLayoutComponent(props:T): JSX.Element {
    return (
      <AppContextProvider menu={props.menu} firstCategory={props.firstCategory}>
      <Layout>
          <Component {...props}/>
      </Layout>
      </AppContextProvider>
    );
  };
};