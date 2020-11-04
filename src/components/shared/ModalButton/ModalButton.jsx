import React, { useState } from 'react';
import Modal from 'react-modal';

import ModalContent from './ModalContent';

function ModalButton({ data }) {
  const [showModal, setShowModal] = useState(false);

  const customStyles = {
    overlay: {
      zIndex: '10',
    },
    content: {
      paddingTop: '50px',
    },
  };

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
        onRequestClose={handleCloseModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <ModalContent data={data} handleCloseModal={handleCloseModal} />
      </Modal>
    </div>
  );
}

export default ModalButton;
