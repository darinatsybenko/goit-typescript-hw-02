import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect } from "react";

import { requestProducts } from "./api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

function App() {
  const [products, setProducts] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const image = await requestProducts(query, 1);
        console.log("image", image);
        setProducts(image);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [query]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  function openModal() {
    setmodalIsOpen(true);
  }
  function closeModal() {
    setmodalIsOpen(false);
  }
  return (
    <>
      <div>
        <SearchBar onSetSearchQuery={onSetSearchQuery} />
        {isLoading && <Loader />}
        {isError && <ErrorMessage error={Error} />}
        <ImageGallery products={products} />
        <Loader />
        <ImageModal openModal={openModal} closeModal={closeModal} />
      </div>
    </>
  );
}

export default App;
