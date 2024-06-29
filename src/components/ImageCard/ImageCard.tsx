import { FC } from "react";
import { Images } from "../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  product: Images;
  openModal: (image: Images) => void;
}

const ImageCard: FC<ImageCardProps> = ({ product, openModal }) => {
  return (
    <div>
      <img
        className={css.image}
        src={product.urls.small}
        alt={product.alt_description}
        onClick={() => openModal(product)}
      />
      <p className={css.imageInfo}>
        Author: <span>{product.user.name}</span>
      </p>
      <p className={css.imageInfo}>
        Likes: <span>{product.likes}</span>
      </p>
    </div>
  );
};

export default ImageCard;
