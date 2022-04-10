import { apiComment, apiPosts } from "@/React/services/data";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import ModalComponent from "../ModalComponent";
import { Button, Buttons, Content, Line, Title } from "./styles";
import { useForm } from "react-hook-form";
import { ItemForm, Label, Textarea } from "@/React/pages/Posts/styles";
import Comment from "../Comment";
import { AiOutlinePlusCircle, AiFillDelete } from "react-icons/ai";

const Post = ({ post, onDeletePost, setReloadPage }) => {
    const { register, handleSubmit, resetField } = useForm({
        mode: "onChange",
        defaultValues: {
            firstName: "",
        },
    });
    const [show, setShow] = useState(false);

    const onDeleteComment = async (id) => {
        await apiComment
            .delete(id)
            .then((response) => {
                toast.success("Comentário excluído com sucesso!");
                setReloadPage(true);
            })
            .catch((err) => toast.error("Algo deu errado!"));
    };

    const onSubmit = async (data) => {
        await apiComment
            .store(data)
            .then((response) => {
                toast.success("Comentário inserido com sucesso!");
                resetField("message");
                setShow(false);
                setReloadPage(true);
            })
            .catch((err) => toast.error("Algo deu errado!"));
    };

    return (
        <>
            {show && (
                <ModalComponent show={show} onClose={() => setShow(false)}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="hidden"
                            {...register("post_id")}
                            value={post.id}
                        />
                        <ItemForm>
                            <Label htmlFor="message">
                                Escreve seu comentário abaixo...
                            </Label>
                            <Textarea {...register("message")} id="message" />
                        </ItemForm>
                        <Button color="#62a367" colorFont="#fff" type="submit">
                            Postar
                        </Button>
                    </form>
                </ModalComponent>
            )}
            <Title>{post.title}</Title>
            <Content>{post.content}</Content>

            <p>Comentários:</p>
            {post.comments.length > 0 &&
                post.comments.map((comment) => (
                    <Comment
                        key={`post${post.id}_comment${comment.id}`}
                        onDeleteComment={onDeleteComment}
                        comment={comment}
                    />
                ))}

            <Buttons>
                <Button
                    color="#316215"
                    colorFont="#fff"
                    onClick={(e) => setShow(true)}
                    style={{ display: "flex" }}
                >
                    <AiOutlinePlusCircle
                        style={{ marginTop: "auto", marginRight: "5px" }}
                        size={20}
                    />{" "}
                    Comentário
                </Button>
                <Button
                    color="#cc0000"
                    colorFont="#fff"
                    onClick={(e) => onDeletePost(post.id)}
                    style={{ display: "flex" }}
                >
                    <AiFillDelete
                        style={{ marginTop: "auto", marginRight: "5px" }}
                        size={20}
                    />{" "}
                    Post
                </Button>
            </Buttons>

            <Line />
        </>
    );
};

export default Post;
