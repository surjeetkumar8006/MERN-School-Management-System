let IS_PROD = true;

const server = {
  dev: "http://localhost:5000",
  prod: "https://mern-school-management-system-yr7p.onrender.com"
};

const BASE_URL = IS_PROD ? server.prod : server.dev;

export default BASE_URL;
