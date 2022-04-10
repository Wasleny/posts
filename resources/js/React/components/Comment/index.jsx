import { Button } from "../Post/styles";
import { CommentStyle } from "./styles";
import { AiOutlineCloseCircle } from "react-icons/ai";

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
                    <AiOutlineCloseCircle />
                </Button>
            </CommentStyle>
        </>
    );
};

export default Comment;
