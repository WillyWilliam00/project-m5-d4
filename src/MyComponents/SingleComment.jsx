import {Row, Container, Col} from "react-bootstrap";

export default function SingleComment({commmentText, commentRate}){

    return(

        <Container>
            <Row>
                <Col xs={12}>
                    {commmentText}
                    {commentRate}
                </Col>
            </Row>
        </Container>



    )
}