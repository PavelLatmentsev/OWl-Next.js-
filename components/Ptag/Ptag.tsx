
import { IPtagsProps } from "./Ptag.props";
import styles from "./Ptag.module.css";
import cn from "classnames";
export const Ptag = ({ size="m", children, className, ...props }: IPtagsProps): JSX.Element => {
  return (
    <p className={cn(styles.p, className, {
        [styles.s]:size==="s",
        [styles.l]:size==="l",
        [styles.m]:size==="m",
    })} {...props}>
{children}
    </p>
  );
};
