import {Button, Modal} from 'react-bootstrap';


function modalError() {
  
    const handleClose = () => setShow(false);


  return (
    <>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Oh Ooh qualcosa non va...</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default modalError;