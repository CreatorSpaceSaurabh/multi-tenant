const route = express.Router();

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

  getRoutes() {}

  postRoutes() {
    this.route.post("/add", (req, res, next) => {});
  }

  putRoutes() {}

  deleteRoutes() {}
}
