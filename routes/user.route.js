const route = express.Router();
const UserController = require("../controller/user.controller");

class Routes {
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
    this.route.get("/list", (req, res, next) => {
      UserController.listUser(req, res, next);
    });
  }

  postRoutes() {
    this.route.post("/add", (req, res, next) => {
      UserController.addUser(req, res, next);
    });
  }

  putRoutes() {}

  deleteRoutes() {}
}
