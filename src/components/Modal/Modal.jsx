import { useEffect } from 'react';
import { PropTypes } from 'prop-types';
import { createPortal } from 'react-dom';
import { Backdrop, ModalWindow } from './Modal.styled';

const modalRoot = document.getElementById('modal-root');

export function Modal({ modalToggle, children }) {
  useEffect(() => {
    window.addEventListener('keydown', handleMultiClose);

    return () => {
      window.removeEventListener('keydown', handleMultiClose);
    };
  });

  const handleMultiClose = e => {
    if (e.currentTarget === e.target || e.code === 'Escape') {
      modalToggle();
    }
  };
  return createPortal(
    <Backdrop onClick={handleMultiClose}>
      <ModalWindow>{children}</ModalWindow>
    </Backdrop>,
    modalRoot
  );
}

Modal.propTypes = {
  modalToggle: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
