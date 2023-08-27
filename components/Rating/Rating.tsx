"use client";
import { IRatingProps } from "./Rating.props";
import { useState, useEffect, KeyboardEvent } from "react";
import Star from "./star.svg";
import styles from "./Rating.module.css";
import cn from "classnames";

export const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: IRatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRatting: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span
          className={cn(styles.star, {
            [styles.filled]: i < currentRatting,
            [styles.editable]: isEditable,
          })}
          onMouseEnter={() => changeDisplay(i + 1)}
          onMouseLeave={() => changeDisplay(rating)}
          onClick={() => onClickRating(i + 1)}
        >
          <Star
            tabindex={isEditable ? 0 : -1}
            onKeyDown={(e: KeyboardEvent<SVGAElement>) =>
              isEditable && handleSpace(i + 1, e)
            }
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };


  const changeDisplay = (i: number) => {
    if (!isEditable) {
      return;
    }
    constructRating(i);
  };


  const onClickRating = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };
  

  const handleSpace = (i: number, e: KeyboardEvent<SVGAElement>) => {
    if (e.code !== "Space" || !setRating) {
      return;
    }
    setRating(i);
  };

  
  return (
    <div {...props}>
      {ratingArray.map((r, i) => (
        <span key={i}>{r}</span>
      ))}
    </div>
  );
};
