import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const Tests = () => {
    const [modalShow, setModalShow] = useState (false);

    const handleModalClose = () => setModalShow(false);
    const handleModalShow = () => setModalShow(true);

    return(
        <>
            <h1>Tests</h1>
            <h2>Modal Bootsrap
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
            </h2>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                    meu exemplo
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                </div>
                </div>
            </div>
            </div>
            <h2>Modal React-Bootstrape</h2>
            <Modal
            show={modalShow}
            onHide={handleModalClose}
            aria-labelledby="contained-modal-title-vcenter"
            centered
            >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={handleModalClose}>Close</Button>
            </Modal.Footer>
            </Modal>
        
        </>
    );
}

export default Tests;