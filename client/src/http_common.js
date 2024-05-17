import axios from "axios";

export default axios.create({
    baseURL: `${process.env.REACT_APP_SERVER}:${process.env.REACT_APP_PORT}/`,
    headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
    },
});