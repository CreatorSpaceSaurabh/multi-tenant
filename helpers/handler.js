module.exports.reponseHandler = (res, data) => {
  let response = {};
  response.success = data?.flag;
  response.message = data?.message;
  response.data = data?.data;
  response.error = data?.error;
  return res.status(data?.code).send(response);
};
