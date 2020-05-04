require("dotenv").config();
let express = require("express");
const next  = require("next");
const dev = process.env.NODE_ENV !== 'production';
const {createServer} = require("https");
const fs = require("fs");
const app = next({ dev });
const path = require("path");
const pathMatch = require('path-match');
const bodyParser = require('body-parser');
const { parse } = require('url');
const cors = require('cors');
const handle = app.getRequestHandler();
const route = pathMatch();
const certsOptionsDev = {
    key:fs.readFileSync(path.resolve("./cert/privkey.pem"),"utf-8").toString(),
    cert:fs.readFileSync(path.resolve("./cert/cert.pem"),"utf-8").toString(),
    ca:fs.readFileSync(path.resolve("./cert/chain.pem"),"utf-8").toString(),
}
app.prepare().then(()=>{
    const server  = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    createServer(certsOptionsDev,server).listen(process.env.PORT || 3000,()=>{
        console.log("App running On  https://localhost:"+ process.env.PORT )
    })
    server.use("/static", express.static(__dirname + "/static"));
    server.use("/_/static", express.static(__dirname + "/static/bridge/static"));
    server.get("*", (req, res) => {
        const { pathname, query } = parse(req.url, true);
        const routers = [
            {
                route:"/index",
                rewrite:"/"
            },
            {
                route:"/gioi-thieu",
                rewrite:"/Introduces"
            },
            {
                route:"/chi-tiet",
                rewrite:"/DescProducts"
            },
            {
                route:"/tin-tuc",
                rewrite:"/News"
            },
            {
                route:"/Lien-He",
                rewrite:"/Contact"
            }
        ]
        for(let i =0 ;i< routers.length ;i++){
            if(route(routers[i].route)(pathname,query)!==false){
                return app.render(req,res,routers[i].rewrite,Object.assign(query));
            }
        }
        return handle(req, res);
    });
})