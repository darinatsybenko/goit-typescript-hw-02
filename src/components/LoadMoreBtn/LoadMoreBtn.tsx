import css from "./LoadMoreBtn.module.css";
interface LoadMoreBtnProps {
  loadMoreImg: () => void;
}
const LoadMoreBtn = ({ loadMoreImg }: LoadMoreBtnProps) => {
  return (
    <button
      className={css.loadMoreBtn}
      type="button"
      onClick={() => {
        loadMoreImg();
      }}
    >
      Load More
    </button>
  );
};

export default LoadMoreBtn;
