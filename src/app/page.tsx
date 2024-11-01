"use client";

import { useState } from "react";
import { Rating } from "@/entities/Rating";
import arrowIcon from "@/shared/assets/icons/arrow/arrow.svg";
import { useAccordion } from "@/shared/hooks";
import { Button } from "@/shared/ui/Button";
import { Heading } from "@/shared/ui/Heading";
import { Tag } from "@/shared/ui/Tag";
import styles from "./page.module.css";

const HomePage = () => {
  const { onToggle, style, wrapperStyle, isOpen } = useAccordion();
  const [rating, setRating] = useState(3);

  return (
    <div className={styles.page}>
      <Heading tag="h1">Home</Heading>

      <div style={{ display: "flex", gap: "20px", marginBlock: "20px" }}>
        <Button>Click me</Button>

        <Button theme="secondary" iconSrc={arrowIcon} iconDirection="right">
          Button
        </Button>

        <Tag isAnchor href="https://google.com" target="_blank" rel="noopener noreferrer">
          Test tag
        </Tag>

        <Rating rating={rating} setRating={setRating} />
        <Rating rating={3} isEditable={false} />
      </div>

      <div>
        <Button
          theme="secondary"
          iconSrc={arrowIcon}
          iconDirection={isOpen ? "bottom" : "right"}
          onClick={onToggle}
        >
          Click me
        </Button>
        <div style={wrapperStyle}>
          <div style={{ background: "gray", ...style }}>Some content</div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
