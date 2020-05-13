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
const routers = require("./routers");
const cors = require('cors');
const handle = routers.getRequestHandler(app);
const route = pathMatch();
app.prepare().then(()=>{
    const server  = express();
    server.use(bodyParser.urlencoded({ extended: true }));
    server.use(bodyParser.json());
    
    server.use("/static", express.static(__dirname + "/static"));
    server.use(handle);
    server.listen(process.env.PORT || 3000,()=>{
        console.log("App running On  http://localhost:"+ process.env.PORT )
    })
    // server.get("*", (req, res) => {
        // const { pathname, query } = parse(req.url, true);
        // const routers = [
        //     {
        //         route:"/index",
        //         rewrite:"/"
        //     },
        //     {
        //         route:"/gioi-thieu",
        //         rewrite:"/introduces"
        //     },
        //     {
        //         route:"/chi-tiet",
        //         rewrite:"/descproducts"
        //     },
        //     {
        //         route:"/san-pham",
        //         rewrite:"/products"
        //     },
        //     {
        //         route:"/y-kien-chuyen-gia",
        //         rewrite:"/experopinion"
        //     },
        //     {
        //         route:"/tin-tuc",
        //         rewrite:"/news"
        //     },
        //     {
        //         route:"/lien-He",
        //         rewrite:"/contact"
        //     },
        //     {
        //         router:"/san-pham/:id",
        //         rewrite:"/product/[id]"
        //     }
        // ]
        // for(let i =0 ;i< routers.length ;i++){
        //     if(route(routers[i].route)(pathname,query)!==false){
        //         return app.render(req,res,routers[i].rewrite,Object.assign(query));
        //     }
        // }
        // return handle(req, res);
    //});
})