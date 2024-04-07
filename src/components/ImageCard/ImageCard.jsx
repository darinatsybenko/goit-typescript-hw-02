import css from "./ImageCard.module.css";
const ImageCard = ({ product, openModal }) => {
  const cardInfo = {
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
