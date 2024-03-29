const User = require("../Models/users.model");
const constantEnums = require("../constants/constant.enums");
const userEnums = require("../constants/user.enums");
class UserService {
  /***
   * @summary To add user entry
   * @param {param}
   * @returns User record added successfully
   * @author Saurabh U
   * @date 24 Mar 2024
   */
  async addUser(data, next) {
    try {
      const userRecord = await utils.saveDocument(User[data.tenantName], data);
      console.log("UserRecord --", userRecord);
      if (userRecord) {
        return {
          code: constantEnums.statusCode.OK,
          flag: constantEnums.flag.TRUE,
          message: userEnums.responseMessage.USER_ADDED_SUCCESS,
          data: userRecord,
        };
      } else {
        return {
          code: constantEnums.statusCode.INTERNAL_SERVER_ERROR,
          flag: constantEnums.flag.FALSE,
          message: constantEnums.responseMessage.SOMETHING_WENT_WRONG,
          data: {},
        };
      }
    } catch (error) {
      console.log("Error log - userService - addUser", error.message);
      return error.message;
    }
  }

  /***
   * @summary To add user entry
   * @param {param}
   * @returns User record added successfully
   * @author Saurabh U
   * @date 23 Mar 2024
   */
  async listUser(data, next) {
    try {
      const userRecord = await utils.findAllRecords(
        User[data.tenantName],
        { role: data.role },
        {}
      );
      console.log("UserRecord listUser--", userRecord);
      if (userRecord) {
        return {
          code: constantEnums.statusCode.OK,
          flag: constantEnums.flag.TRUE,
          message: userEnums.responseMessage.USER_FETCHED_SUCCESS,
          data: { userRecord, count: userRecord.length },
        };
      } else {
        return {
          code: constantEnums.statusCode.INTERNAL_SERVER_ERROR,
          flag: constantEnums.flag.FALSE,
          message: constantEnums.responseMessage.SOMETHING_WENT_WRONG,
          data: {},
        };
      }
    } catch (error) {
      console.log("Error log - userService - listUser", error.message);
      return error.message;
    }
  }
}
const userService = new UserService();
module.exports = userService;
