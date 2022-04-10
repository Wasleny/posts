import api from "../../api";

class Comment {
    store(data) {
        return api.post("comment", data);
    }

    delete(id) {
        return api.delete(`comment/${id}`);
    }
}

export default new Comment();
