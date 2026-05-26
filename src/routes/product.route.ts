import type { IncomingMessage, ServerResponse } from "http";

export const routeHandler = async (req: IncomingMessage, res: ServerResponse) => {
    if(req.url === "/" && req.method === "GET"){
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Welcome to the Product API");
    }

    else{
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("Not Found");
    }

};