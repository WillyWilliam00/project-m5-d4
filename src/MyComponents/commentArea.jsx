import { useEffect, useState } from "react"
import {Container} from "react-bootstrap";
import { DotSpinner } from '@uiball/loaders'
import ModalError from "./ModalError"
import AddComment from "./addComment"
import CommentList from "./commentList"


export default  function CommentArea({asin}){

    const [allComment, setAllComment] = useState([])
    const [loading, setLoading] = useState(true)
    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    
    useEffect(() => {

        fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg0MTQ4MTMsImV4cCI6MTY5OTYyNDQxM30.MEt2ISJjBifylYxkGyIKwaJbmj-MHdsB0Dvrr7rGluc"
        }})
        .then(r => r.json())
        .then(setAllComment)
        .catch(handleShow)
        .finally(()=>setLoading(false))
        
    },[asin])
    console.log(allComment)

    
    return (
        <Container>
              <ModalError show={show} setShow={setShow}/>
              { loading && <DotSpinner 
                  className="spinner"
                  size={40}
                  speed={0.9} 
                  color="black" 
                  
              /> }
              {!loading &&<CommentList allComment={allComment}/>}
             <AddComment asin={asin} setAllComment={setAllComment} setLoading={setLoading}  setShow={setShow}/> 
        </Container>    
    )
}
  
  
  
         
    






    
        

     


     
