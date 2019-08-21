require("dotenv").config();
module.exports = {
  API_ENDPOINT: "http://localhost:8000/api",
  BASE_URL:
    process.env.BASE_URL || "https://thawing-springs-96491.herokuapp.com/api"
};
