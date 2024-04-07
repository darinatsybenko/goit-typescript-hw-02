import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ products, openModal }) => {
  return (
    <ul className={css.gallery}>
      {Array.isArray(products) &&
        products.map((product) => {
          return (
            <li className={css.galleryCard} key={product.id}>
              <ImageCard product={product} openModal={openModal} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
