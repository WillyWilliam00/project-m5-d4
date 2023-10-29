import { useState } from 'react';
import {Button, Form} from 'react-bootstrap';



function AddComment({asin, setAllComment, setLoading, setShow}) {

    const [text, setText] = useState("")
    const [rate, setRate] = useState("")
    const handleShow = () => setShow(true);

    function GetComment(){
      setLoading(true)
      fetch(`https://striveschool-api.herokuapp.com/api/comments/${asin}`, {
      headers: {
      "Authorization": "codice"
      }})
      .then(r => r.json())
      .then(setAllComment)
      .catch(handleShow)
      .finally(()=>setLoading(false))     
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();

        const form = {
            comment: text,
            rate: rate,
            elementId: asin
        }

        fetch("https://striveschool-api.herokuapp.com/api/comments/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTM3YWIzZmU3NDZhMDAwMTQ4MTQzMmEiLCJpYXQiOjE2OTg0MTQ4MTMsImV4cCI6MTY5OTYyNDQxM30.MEt2ISJjBifylYxkGyIKwaJbmj-MHdsB0Dvrr7rGluc"
              },
              method: "POST",
              body: JSON.stringify(form),
            }).then(
                (response) => {
                    if (response.ok){
                        alert("Salvato!")
                        GetComment()              
                    } else {
                        alert("oh oh")
                    }
                }
            )

            
          
        
    }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="text">
        <Form.Label>Inserisci Recensione</Form.Label>
        <Form.Control type="text" placeholder="Scrivi la tua recensione" required value={text} onChange={(e)=> setText(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="stars">
        <Form.Label>Quanto ti è piaciuto?</Form.Label>
        <Form.Control type="number" min="1" max="5" required value={rate} onChange={(e)=> setRate(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit" >
        Invia la tua recensione!
      </Button>
    </Form>
  );
}

export default AddComment;