import axios from "axios";

export default axios.create({
    baseURL: "https://outrageous-chrome-cucumber.glitch.me",
    headers: {
        "Content-type" : "application/json"
    }
});
