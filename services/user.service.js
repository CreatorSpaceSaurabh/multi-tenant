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
      const userRecord = await utils.createDocument(data);
      console.log("UserRecord --", userRecord);
      if (userRecord) {
        return {
          code: constantEnums.statusCode.ok,
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
}
module.exports = UserService;
