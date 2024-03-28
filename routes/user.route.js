const route = express.Router();
const userController = require("../controller/user.controller");

class UserRouter {
  constructor() {
    this.route = route;
    this.userRoutes();
  }

  userRoutes() {
    this.getRoutes();
    this.postRoutes();
    this.putRoutes();
    this.deleteRoutes();
  }

  getRoutes() {
    this.route.get("/listUser", (req, res, next) => {
      userController.listUser(req, res, next);
    });
  }

  postRoutes() {
    this.route.post("/addUser", (req, res, next) => {
      userController.addUser(req, res, next);
    });
  }

  putRoutes() {}

  deleteRoutes() {}
}
const userRouter = new UserRouter();
module.exports = route;
