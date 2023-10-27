import { useState } from "react";
import {Row, Container, Col} from "react-bootstrap";
import fantasy from "../books/fantasy.json"
import SingleBook from "./SingleBook";


export default function TableBook() {
    const [name, setName] = useState("");
    const usingQuery = book => book.title.toLowerCase().includes(name.toLowerCase())



    return (
        
        <Container className="my-5">
            <Row>
                <Col xs={12} className="d-flex justify-content-center">
                    <label className="my-5" style={{width: "60%", textAlign: "center"}}>
                       <input className="input-text" name="TitleName" placeholder="Signore degli Anelli.." value={name} 
                       onChange={(e) => {setName(e.target.value)}}/>
                    </label>
                </Col>
            </Row>
            <Row className="row-gap-5">
                {fantasy.filter(usingQuery).map((book) => (
                    <SingleBook img={book.img} title={book.title} key={book.asin}/> 
                ))}

            </Row>
        </Container>



    );

}

