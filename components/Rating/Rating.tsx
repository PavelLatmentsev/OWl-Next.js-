
"use client";
import { IRatingProps } from "./Rating.props";
import {useState, useEffect} from "react";
import Star from "./star.svg";
import styles from "./Rating.module.css";
import cn from "classnames";
import classNames from "classnames";


export const Rating = ({ isEditable = false, rating, setRating, ...props }: IRatingProps): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
useEffect(() => {
    constructRating(rating);
},[rating]);
    const constructRating = (currentRatting: number)=> {
        const updatedArray=ratingArray.map((r:JSX.Element, i:number)=> {
            return (        <Star className={cn(styles.star, {
                [styles.filled]: i < currentRatting
            } )}/>);
      
            
        });
        setRatingArray(updatedArray);
    }
  return (
<div {...props}>
 {ratingArray.map((r,i)=>(<span key={i}>{r}</span>))}
</div>
  );
};
