import {Col, Card} from "react-bootstrap";
import { useState } from "react";


export default function SingleBook({img, title}) {

  const [selected, setSelected] = useState(false)
  

   

    return (
        
     <Col xs={12} sm={6} lg={3}>
         <Card className={selected ? "select" : ""}  >
             <Card.Img  
                style={{cursor: "pointer"}} variant="top" 
                src={img} 
                onClick={() => setSelected(!selected) }  
                className="img-fluid"
            />
            
             <Card.Body>
                 <Card.Title>{title}</Card.Title>                               
             </Card.Body>
         </Card>
     </Col>
       
    )
}

