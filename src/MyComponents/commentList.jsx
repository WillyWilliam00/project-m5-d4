import {Row, Container} from "react-bootstrap";
import SingleComment from "./SingleComment"

export default function commentList(allComment) {
    
    return (
        <Container>
            <Row>   
                {allComment.map(comment => (
                    <SingleComment commmentText={comment.comment} commentRate={comment.rate} key={comment.elementId}/>
                ))}
            </Row>
        </Container>
    )
}