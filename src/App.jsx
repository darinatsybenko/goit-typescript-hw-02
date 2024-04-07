import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect } from "react";
import { requestProducts } from "./api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";

function App() {
  const [products, setProducts] = useState(null);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setIsLoading(true);
        const image = await requestProducts(query, page);
        console.log("image", image);
        setProducts(image);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchProducts();
  }, [query, page]);

  const onSetSearchQuery = (searchTerm) => {
    setQuery(searchTerm);
  };

  function openModal(modalData) {
    setmodalIsOpen(true);
    setModalData(modalData);
  }
  function closeModal() {
    setmodalIsOpen(false);
  }

  const loadMoreImg = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={Error} />}
      <ImageGallery products={products} openModal={openModal} />

      {Array.isArray(products) && products.length > 0 && (
        <LoadMoreBtn loadMoreImg={loadMoreImg} />
      )}
      {modalIsOpen && (
        <ImageModal
          isOpen={modalIsOpen}
          modalData={modalData}
          closeModal={closeModal}
        />
      )}
    </>
  );
}
export default App;
