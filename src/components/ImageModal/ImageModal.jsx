import css from "./ImageModal.module.css";
import Modal from "react-modal";
Modal.setAppElement("#root");

const ImageModal = ({ isOpen, closeModal, modalData }) => {
  return (
    <Modal
      overlayClassName={css.backdrop}
      className={css.modalWindow}
      isOpen={isOpen}
      onRequestClose={closeModal}
    >
      {modalData && (
        <img
          className={css.imageModal}
          src={modalData && modalData.src}
          alt={modalData && modalData.alt_description}
        />
      )}
    </Modal>
  );
};

export default ImageModal;
