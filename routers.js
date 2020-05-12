const routers = require("next-routes")();
routers.add("introduces","/gioi-thieu")
routers.add("products","/san-pham")
routers.add("detialproduct","/san-pham/:slug.:id")
module.exports = routers ;