"use client";

import { Paper } from "@mui/material";
import { FC, useMemo, useState } from "react";
import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import clsx from "clsx";
import useWindowSizeEffect from "@/hooks/useWindowSizeEffect";
import styles from "./ApSwipeCard.module.scss";

type CardPropsType = {
  className?: string;
  [key: string]: any;
};

type Position = {
  x: number;
  y: number;
};

interface ApSwipeCardProps {
  keyword: string;
  description: string;
  flipped?: boolean;
  cardProps?: CardPropsType;
  onLeft?: () => void;
  onRight?: () => void;
  onSide?: () => void;
  onUp?: () => void;
  onDown?: () => void;
  onVertical?: () => void;
  onOutside?: () => void;
  children?: React.ReactNode;
  [key: string]: any;
}

const ApSwipeCard: FC<ApSwipeCardProps> = ({
  keyword,
  description,
  flipped,
  cardProps,
  onLeft,
  onRight,
  onSide,
  onUp,
  onDown,
  onVertical,
  onOutside,
  children,
  ...dragProps
}) => {
  const [position, setPosition] = useState<Position>({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [rotateY, setRotateY] = useState<number>(flipped ? -180 : 0);
  const { cardSize, threshold } = useWindowSizeEffect(
    () => {
      const eightyViewWidth = Math.round(window.innerWidth * 0.8);
      const eightyViewHeight = Math.round(window.innerHeight * 0.8);
      const finalSize = Math.min(eightyViewWidth, eightyViewHeight, 500);
      return {
        cardSize: finalSize,
        threshold: Math.round(finalSize * 0.4),
      };
    },
    { cardSize: 0, threshold: 0 },
  );

  const opacity = useMemo<number>(() => {
    const distanceFromCenter = Math.sqrt(position.x * position.x + position.y * position.y);
    return Math.max(1 - distanceFromCenter / threshold / 1.25, 0);
  }, [position.x, position.y, threshold]);

  const handleDrag = (e: DraggableEvent, data: DraggableData) => {
    setPosition({ x: data.x, y: data.y });
    setIsDragging(true);
  };

  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    const deltaX = data.x;
    const deltaY = data.y;
    const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    setIsDragging(false);

    if (distance > threshold) {
      let finalX = position.x;
      let finalY = position.y;

      // If the distance is greater than the threshold
      onOutside?.();
      // Check horizontal
      if (Math.abs(deltaX) > Math.abs(deltaY)) {
        onSide?.();
        if (deltaX > 0) {
          finalX += cardSize;
          onRight?.();
        } else {
          finalX -= cardSize;
          onLeft?.();
        }
      }
      // Check vertical
      else {
        onVertical?.();
        if (deltaY > 0) {
          finalY += cardSize;
          onDown?.();
        } else {
          finalY -= cardSize;
          onUp?.();
        }
      }
      setPosition({ x: finalX, y: finalY });
    } else {
      setPosition({ x: 0, y: 0 });
    }

    if (deltaX === 0 && deltaY === 0 && !children) setRotateY(rotateY - 180);
  };

  if (cardSize === 0) return null;
  return (
    <Draggable onDrag={handleDrag} onStop={handleStop} position={position} {...dragProps}>
      <div
        className={clsx(styles.cardWrapper)}
        style={{
          opacity,
          width: cardSize,
          height: cardSize,
          cursor: isDragging ? "grabbing" : "pointer",
          transition: isDragging ? "opacity 0.01s ease-out" : "transform 0.2s ease-out, opacity 0.01s ease-out",
          transform: `translate(${position.x}px, ${position.y}px)`,
        }}
      >
        <Paper
          className={clsx(cardProps?.className, styles.card)}
          style={{ transform: `rotateY(${rotateY}deg)` }}
          elevation={3}
          {...cardProps}
        >
          {children}
          {!children && (
            <>
              <div className={styles.cardFront}>{keyword}</div>
              <div className={styles.cardBack}>{description}</div>
            </>
          )}
        </Paper>
      </div>
    </Draggable>
  );
};

export default ApSwipeCard;
