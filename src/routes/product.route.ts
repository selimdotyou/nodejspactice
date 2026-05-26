import type { IncomingMessage, ServerResponse } from "http";
import { handleProducts } from "../controller/product.controller.js";

export const routeHandler = async (req: IncomingMessage, res: ServerResponse) => {
    if(req.url === "/" && req.method === "GET"){
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to the Product API");
    }

    else if(req?.url?.startsWith("/products")){
       await handleProducts(req, res); 
    }

    else{
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }

};