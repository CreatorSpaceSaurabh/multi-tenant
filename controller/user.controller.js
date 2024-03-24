const UserService = require("../services/user.service");

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
      const payload = {
        name,
        email,
        mobile,
        role: "user",
      };
      await UserService.addUser(payload, next)
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
