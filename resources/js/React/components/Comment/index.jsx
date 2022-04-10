import { Button } from "../Post/styles";
import { CommentStyle } from "./styles";

const Comment = ({ comment, onDeleteComment }) => {
    return (
        <>
            <CommentStyle>
                <p>{comment.message}</p>
                <Button
                    color="#cc0000"
                    colorFont="#fff"
                    onClick={(e) => onDeleteComment(comment.id)}
                >
                    X
                </Button>
            </CommentStyle>
        </>
    );
};

export default Comment;
