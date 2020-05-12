const routers = require("next-routes")();
routers.add("introduces","/gioi-thieu")
routers.add("products","/san-pham")
routers.add("product/detial","/san-pham/:id")
module.exports = routers ;