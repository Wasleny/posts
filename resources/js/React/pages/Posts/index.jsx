import Card from "@/React/components/Card";
import ModalComponent from "../../components/ModalComponent";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Input, ItemForm, Label, Textarea } from "./styles";
import { apiPosts } from "@/React/services/data";
import { toast } from "react-toastify";
import Post from "@/React/components/Post";
import { Button } from "@/React/components/Post/styles";

function Posts() {
    const [show, setShow] = useState(false);
    const [reloadPage, setReloadPage] = useState(false);
    const [posts, setPosts] = useState([]);
    const { register, handleSubmit, watch } = useForm();

    useEffect(() => {
        fetchData();
    }, []);

    function fetchData() {
        // setLoading(true)
        apiPosts
            .index()
            .then((response) => {
                setPosts(response.data.data);
                // setLoading(false)
                setReloadPage(false);
            })
            .catch((err) => toast.error("Algo deu errado!"));
    }

    const onSubmit = async (data) => {
        await apiPosts
            .store(data)
            .then((response) => {
                toast.success("Post postado com sucesso!");
                setShow(false);
                fetchData();
            })
            .catch((err) => toast.error("Algo deu errado na postagem!"));
    };

    const onDeletePost = async (id) => {
        await apiPosts
            .delete(id)
            .then((response) => {
                toast.success("Post excluído com sucesso!");
                fetchData();
            })
            .catch((err) => toast.error("Algo deu errado!"));
    };

    useEffect(() => (reloadPage ? fetchData() : ""), [reloadPage]);

    return (
        <>
            {show && (
                <ModalComponent show={show} onClose={() => setShow(false)}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <ItemForm>
                            <Label htmlFor="title">Título do Post</Label>
                            <Input type="text" {...register("title")} />
                        </ItemForm>

                        <ItemForm>
                            <Label htmlFor="content">
                                Escreve seu post abaixo...
                            </Label>
                            <Textarea {...register("content")} />
                        </ItemForm>
                        <Button color="#62a367" colorFont="#fff" type="submit">Postar</Button>
                    </form>
                </ModalComponent>
            )}
            <Card>
                <Button color="#453357" colorFont="#fff" onClick={(e) => setShow(true)}>Criar Post</Button>

                {posts.map((post) => (
                    <Post
                        key={`post_${post.id}`}
                        post={post}
                        onDeletePost={onDeletePost}
                        setReloadPage={setReloadPage}
                    />
                ))}
            </Card>
        </>
    );
}

export default Posts;
