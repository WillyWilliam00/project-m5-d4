import { useState, useEffect } from 'react';
import {Button, Modal, Container, Row} from 'react-bootstrap';
import AddComment from "./addComment"
import CommentList from "./commentList"
import { DotSpinner } from '@uiball/loaders'

function ModalComment({asin, show, setShow, setSelected, selected}) {
  
  const handleClose = () =>{setShow(false);};
  const [allComment, setAllComment] = useState([])
  const [loading, setLoading] = useState(true)
  
  
    
    useEffect(() => {

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg0MTQ4MTMsImV4cCI6MTY5OTYyNDQxM30.MEt2ISJjBifylYxkGyIKwaJbmj-MHdsB0Dvrr7rGluc"
        }})
        .then(r => r.json())
        .then(setAllComment)
        .catch(()=>alert("oh oh"))
        .finally(()=>setLoading(false))
        
    },[asin])
    console.log(asin)
 

  return (
    <>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Recensioni</Modal.Title>
        </Modal.Header>
        <Modal.Body >
        <Container style={{maxHeight: 300, overflow: "auto"}}>
          <Row>
          { loading && <DotSpinner 
                  className="spinner"
                  size={40}
                  speed={0.9} 
                  color="black" 
                  
              /> }
              {!loading &&<CommentList allComment={allComment}/>}
          </Row>            
        </Container> 
        <Container>
                <AddComment asin={asin} setAllComment={setAllComment} setLoading={setLoading}  setShow={setShow}/> 
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComment;



