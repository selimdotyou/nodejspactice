import type { IncomingMessage, ServerResponse } from "node:http";
import { products } from "../data/product.js";

export const handleProducts = async (req: IncomingMessage, res: ServerResponse) => {
    const url = req.url;
    const method = req.method;
    if(url === "/products" && method === "GET"){
        res.writeHead(200, { "content-type": "application/json" });
        res.end(JSON.stringify(products));
    }
    else if(url=== "/product" && method === "POST"){
        let body = "";
        req.on("data", chunk => {
            body += chunk.toString();
        });
        req.on("end", () => {
            const { name, price, description } = JSON.parse(body);
            const newProduct = {
                id: products.length + 1,
                name,
                price,
                description
            };
            products.push(newProduct);
            res.writeHead(201, { "content-type": "application/json" });
            res.end(JSON.stringify(newProduct));
        });
        
    }
};