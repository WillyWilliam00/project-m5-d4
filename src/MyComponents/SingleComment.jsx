import {Row, Container, Col} from "react-bootstrap";

export default function singleComment(commmentText,commentRate){

    return(

        <Container>
            <Row>
                <Col xs={12}>
                    {commmentText, commentRate}
                </Col>
            </Row>
        </Container>



    )
}