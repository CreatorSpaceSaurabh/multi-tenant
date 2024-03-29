const { reponseHandler } = require("../helpers/handler");
const userService = require("../services/user.service");

class UserController {
  /***
   * @summary To add user entry
   * @param {param}
   * @returns User added successfully
   * @author Saurabh U
   * @date 22 Mar 2024
   */
  async addUser(req, res, next) {
    try {
      const { name, email, mobile } = req.body;
      const tenantName = req.headers.tenantname;
      const payload = {
        name,
        email,
        mobile,
        role: "user",
        tenantName,
      };
      await userService
        .addUser(payload, next)
        .then((data) => {
          console.log("Data controller -", data);
          reponseHandler(res, data);
        })
        .catch((error) => {
          responseHandler(res, error);
        });
    } catch (error) {
      console.log("Error log - add User", error.message);
      next(error.message);
    }
  }

  /***
   * @summary To add user entry
   * @param {param}
   * @returns User listed successfully
   * @author Saurabh U
   * @date 23 Mar 2024
   */
  async listUser(req, res, next) {
    try {
      const tenantName = req.headers.tenantname;
      const payload = {
        role: "user",
        tenantName,
      };
      await userService
        .addUser(payload, next)
        .then((data) => {
          reponseHandler(res, data);
        })
        .catch((error) => {
          responseHandler(res, error);
        });
    } catch (error) {
      console.log("Error log - add User", error.message);
      next(error.message);
    }
  }
}

const userController = new UserController();
module.exports = userController;
