import css from "./LoadMoreBtn.module.css";
const LoadMoreBtn = ({ loadMoreImg }) => {
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
