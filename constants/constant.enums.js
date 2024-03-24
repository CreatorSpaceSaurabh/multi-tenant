module.exports = {
  flag: {
    TRUE: true,
    FALSE: false,
  },
  statusCode: {
    OK: 200,
    CREATED: 201,
    ACCEPTED: 202,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    CONFLICT: 409,
    INTERNAL_SERVER_ERROR: 500,
    NOT_IMPLEMENTED: 501,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    UNPROCESSABLE_ENTITY: 422,
  },
  responseMessage: {
    UNPROCESSABLE_ENTITY: "Please provide valid details",
    PAGE_NOT_FOUND: "Not Found",
    INTERNAL_SERVER_ERROR: "Unable to process please try again",
    SOMETHING_WENT_WRONG: "Something went wrong, try again.",
    NO_TOKEN_PROVIDED: "Please provide token",
    FAILED_TO_AUTHENTICATE: "Failed to authenticate",
    ALREADY_LOGIN:
      "You are already logged in on another device, you need to login again !",
    UNAUTHORIZED_USER: "Unauthorized user role to proceed for this action",
    INVALID_CSV_DATA: "Invalid CSV data",
    IMPORT_ERROR: "Error occurred while data import",
    IMPORTED_DATA_EXIST: "Importing data already exists.",
    WEB_IMAGE_INVALID: "Invalid image format",
    UNSUPPORTED_IMAGE_FORMAT: "Unsupported image format",
    UNSUPPORTED_IMAGE_TYPE: "Unsupported file type",
    INVALID_FILE_SIZE: "Invalid file size",
    UNAUTHORIZED_ACCESS: "Unauthorized access to use this feature",
  },
};