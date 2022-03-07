import axios from "axios";

export default axios.create({
    baseURL: "https://json-data-profile.herokuapp.com",
    headers: {
        "Content-type" : "application/json"
    }
});
