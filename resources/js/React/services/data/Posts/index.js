import api from "../../api";

class Posts {
    index() {
        return api.get("posts");
    }

    store(data) {
        return api.post("posts", data);
    }

    delete(id) {
        return api.delete(`posts/${id}`);
    }
}

export default new Posts();
