import { FC } from "react";
import { Images, User } from "../types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  product: Images;
  openModal: (id: string) => void;
}
interface CardInfo {
  src: string;
  altDescription: string;
  description: string;
  autor: string;
  likes: number;
}
const ImageCard: FC<ImageCardProps> = ({ product, openModal }) => {
  const cardInfo: CardInfo = {
    src: product.urls.regular,
    altDescription: product.alt_description,
    description: product.description,
    autor: product.user.name,
    likes: product.likes,
  };
  return (
    <div>
      <img
        className={css.image}
        src={product.urls.small}
        alt={product.alt_description}
        onClick={() => openModal(cardInfo)}
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
