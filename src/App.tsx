import { useState } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchBar from "./components/SearchBar/SearchBar";
import { useEffect } from "react";
import { requestProducts } from "./api";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import { Images } from "./components/types";

function App() {
  const [products, setProducts] = useState<Images[]>([]);
  const [query, setQuery] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [modalIsOpen, setmodalIsOpen] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [modalData, setModalData] = useState<Images | null>(null);

  useEffect(() => {
    async function fetchProducts() {
      if (!query) return;
      try {
        setIsLoading(true);
        const image = await requestProducts(query, page);
        console.log("image", image);
        setProducts((prevImages) => [...prevImages, ...image.results]);
      } catch (error) {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    fetchProducts();
  }, [query, page]);

  const onSetSearchQuery = (searchTerm: string): void => {
    setPage(1);
    setProducts([]);
    setQuery(searchTerm);
  };

  function openModal(modalData: Images): void {
    setmodalIsOpen(true);
    setModalData(modalData);
  }
  function closeModal(): void {
    setmodalIsOpen(false);
  }

  const loadMoreImg = (): void => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchBar onSetSearchQuery={onSetSearchQuery} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage error={Error} />}
      <ImageGallery products={products} openModal={openModal} />

      {products && products.length > 0 && (
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
