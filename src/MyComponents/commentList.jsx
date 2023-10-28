import {Row, Container} from "react-bootstrap";
import SingleComment from "./SingleComment"

export default function CommentList({allComment}) {
    
    return (
        <Container>
            <Row>   
                {allComment.map((comment, i) => (
                    <SingleComment commmentText={comment.comment} commentRate={comment.rate} key={i}/>
                ))}
            </Row>
        </Container>
    )
}