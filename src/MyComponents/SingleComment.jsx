import { Col, Button } from "react-bootstrap";
import { Trash } from "react-bootstrap-icons";  

export default function SingleComment({commmentText, commentRate, commentId, asin, setAllComment, setLoading}){

    function GetComment(){
        setLoading(true)
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
        headers: {
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg2ODI5NTQsImV4cCI6MTY5OTg5MjU1NH0.HHBtM4-HlPu0aYhgFK4ucJa0J5WmqpZZFSS5KULk3xo"
        }})
        .then(r => r.json())
        .then(setAllComment)
        .catch(()=>alert("oh oh"))
        .finally(()=>setLoading(false))     
      }

    const deleteComment = () => {
        fetch(`https://striveschool-api.herokuapp.com/api/comments/${commentId}`, {
        headers:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg2ODI5NTQsImV4cCI6MTY5OTg5MjU1NH0.HHBtM4-HlPu0aYhgFK4ucJa0J5WmqpZZFSS5KULk3xo"
          },
          method: "DELETE"})
        .then(
            (response) => {
                if (response.ok){
                    alert("Eliminato con successo!")
                    GetComment()              
                } else {
                    alert("oh oh")
                }
            })

    }

    return(

     <>
        <Col xs={12} style={{marginBlock: 5, borderTop: "1px solid black", paddingTop: "10px"}} className="d-flex justify-content-between align-items-start" >
         <Col xs={10}>
           <div className="d-flex justify-content-between mb-2">
               <span className="m-0 fw-bolder">Rating:</span><p className="m-0 fw-bolder">{commentRate}</p>
           </div>
           <div>
               <span className="mb-3 fw-bolder">Recensione:</span>
               <p style={{minHeight: 50, wordBreak: "break-word", maxHeight: 100, border: "1px solid lightgrey", overflow: "auto"}} className="my-3 ps-2">{commmentText}</p>
           </div>
         </Col>
          <Button variant="outline-danger" onClick={deleteComment} value={"Ciao"}>
              <Trash/>
          </Button>
      </Col>
      </>

    )
}