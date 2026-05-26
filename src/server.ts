import { createServer, Server } from "http";
import { routeHandler } from "./routes/product.route.js";

let server: Server = createServer((req, res) => {
    routeHandler(req, res);
});

server.listen(5000, () => {
    console.log("Server is running on port 5000");
});


