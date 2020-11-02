import React, { useState } from 'react';
import Modal from 'react-modal';

import ModalContent from './MondalContent';

function ModalButton({ data }) {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button onClick={() => handleOpenModal()}>More Details</button>
      <Modal
        isOpen={showModal}
        contentLabel="onRequestClose Example"
        onRequestClose={handleCloseModal}
      >
        <ModalContent data={data} />
        <button onClick={() => handleCloseModal()}>Close</button>
      </Modal>
    </div>
  );
}

export default ModalButton;
