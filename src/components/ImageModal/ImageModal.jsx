import Modal from "react-modal";
Modal.setAppElement("#yourAppElement");

const ImageModal = ({ openModal, closeModal }) => {
  return <Modal isOpen={openModal} onRequestClose={closeModal}></Modal>;
};

export default ImageModal;
