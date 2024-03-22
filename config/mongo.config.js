const connectionURI = process.env.MONGODB_URI || "mongodb://127.0.0.1/masterDB";
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
mongoose
  .connect(connectionURI, options)
  .then((data) => {
    console.log("DB Connection establish successfully!");
  })
  .catch((error) => {
    console.log("Failed to establish DB connection", error.message);
  });

module.exports = mongoose;
