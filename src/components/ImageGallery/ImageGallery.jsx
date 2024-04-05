import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ products }) => {
  return (
    <ul>
      {Array.isArray(products) &&
        products.map((product) => {
          return (
            <li key={product.id}>
              <ImageCard product={product} />
            </li>
          );
        })}
    </ul>
  );
};

export default ImageGallery;
