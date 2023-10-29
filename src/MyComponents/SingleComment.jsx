import { Col } from "react-bootstrap";

export default function SingleComment({commmentText, commentRate, index}){

    return(

                  
            <>
                <Col xs={12} style={{marginBlock: 5, borderBottom: "1px solid black"}} >
                    <div className="d-flex justify-content-between mb-2">
                        <span className="m-0 fw-bolder">Rating:</span><p className="m-0">{commentRate}</p>
                    </div>
                    <div>
                        <span className="mb-3 fw-bolder">Recensione:</span>
                        <p style={{minHeight: 50, wordBreak: "break-word", maxHeight: 100, border: "1px solid lightgrey", overflow: "auto"}} className="my-3 ps-2">{commmentText}</p>
                    </div>
                    
                    
                </Col>
                          
                </>



    )
}