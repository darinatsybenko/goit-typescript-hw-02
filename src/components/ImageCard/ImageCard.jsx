const ImageCard = ({ product }) => {
  return (
    <div>
      <img src={product.urls.small} alt={product.alt_description} />
      <p>
        Author: <span>{product.user.name}</span>
      </p>
      <p>
        Likes: <span>{product.likes}</span>
      </p>
    </div>
  );
};

export default ImageCard;
