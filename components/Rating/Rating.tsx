'use client';
import { RatingProps } from './Rating.props';
import { useState, useEffect } from 'react';
import StarIcon from './Star.svg';
import styles from './Rating.module.css';
import cn from 'classnames';

import Image from 'next/image';
const Rating = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}: RatingProps): JSX.Element => {
  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
    new Array(5).fill(<></>)
  );
  useEffect(() => {
    constructRating(rating);
  }, [rating]);
  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <StarIcon 
          className={cn(styles.star, {
            [styles.fill]: i < currentRating,
          }){...Image}}
        />
      );
    });
    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((r, i) => {
        <span key={i}>{r}</span>;
      })}
    </div>
  );
};

export default Rating;