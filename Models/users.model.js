const { default: mongoose } = require("mongoose");
let User = {};
const userSchema = new mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true, index: true },
    mobile: { type: String, index: true },
    role: { type: String, enum: ["user", "admin"] },
    status: { type: String, enum: ["ACTIVE", "INACTIVE"], default: "ACTIVE" },
  },
  {
    timestamps: true,
  }
);

// single DB Instance
// const userModel = mongoose.model("users", userSchema)
// module.exports = userModel

// Multi Tenant architecture
setTimeout(() => {
  Object.keys(tenantPool).forEach((key) => {
    console.log("Tenants pool ~ key: ", key);
    User[key] = tenantPool[key].model("users", userSchema);
  });
  console.log("User tenants model ~ ", User);
  module.exports = User;
}, 3000); //** In order to import globally exported tenants pool, need to make execution after bare minimum of 3 sec (synchronous execution- waterfall)**/

module.exports = User;
