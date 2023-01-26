import axios from "axios";

export default axios.create({
    baseURL: "https://radical-spiced-cart.glitch.me/",
    headers: {
        "Content-type" : "application/json"
    }
});
