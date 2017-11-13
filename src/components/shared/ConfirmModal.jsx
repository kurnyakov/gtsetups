import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default function ConfirmModal(props) {
  return (
    <Modal isOpen={props.isOpen} toggle={props.toggleVisibilityFunc}>
      <ModalHeader toggle={props.toggleVisibilityFunc}>{props.headerText}</ModalHeader>
      <ModalBody>{props.questionText}</ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={props.mainFunc}>{props.confirmText}</Button>{' '}
        <Button color="secondary" onClick={props.toggleVisibilityFunc}>{props.cancelText}</Button>
      </ModalFooter>
    </Modal>
  );
}

ConfirmModal.propTypes = {
  isOpen: React.PropTypes.bool.isRequired,
  toggleVisibilityFunc: React.PropTypes.func.isRequired,
  mainFunc: React.PropTypes.func.isRequired,
  headerText: React.PropTypes.string.isRequired,
  questionText: React.PropTypes.string.isRequired,
  confirmText: React.PropTypes.string.isRequired,
  cancelText: React.PropTypes.string.isRequired,
};
