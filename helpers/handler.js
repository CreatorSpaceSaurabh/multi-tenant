const reponseHandler = (res, data) => {
  console.log("Inside error handler");
  let response = {};
  response.success = data?.flag;
  response.message = data?.message;
  response.data = data?.data;
  response.error = data?.error;
  console.log("Response --", response);
  return res.status(data?.code).send(response);
};
module.exports = { reponseHandler };
