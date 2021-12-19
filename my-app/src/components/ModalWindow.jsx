import { Modal, Button } from "react-bootstrap";
import './myModal.css';

const ModalWindow = ({ show, close, title, body }) => {

    return (
        <Modal show={show} onHide={close} class="modal-dialog modal-lg"
        aria-labelledby="contained-modal-title-vcenter-lg"
        centered>
            <Modal.Header closeButton>
                <h4>{title}</h4>
            </Modal.Header>

            <Modal.Body>
                {body}
            </Modal.Body>

            <Modal.Footer>
                <Button variant="secondary">Close</Button>
            </Modal.Footer>

        </Modal>
    )
}

export default ModalWindow;