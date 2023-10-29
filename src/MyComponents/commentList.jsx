import SingleComment from "./SingleComment"

export default function CommentList({allComment}) {
    
    return (
        <>
                {allComment.map((comment, i) => (
                    <SingleComment  commmentText={comment.comment} commentRate={comment.rate} key={i} index={i}/>
                ))}
          </>  
    )
}