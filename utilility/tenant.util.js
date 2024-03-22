const tenants = require("../config/sample.tenant");

/***
 * @summary To create tenant connections pool
 * @param {param}
 * @returns DB tenants pool
 * @author Saurabh U
 * @date 21 Mar 2024
 */

const createConnectionPool = async () => {
  try {
    let tenantDetails = {};
    // actual logic to fetch individual tenant details from master DB, using db.collections.find(condition)
    console.log("Tenants list ", tenants);
    await Object.keys(tenants).forEach((ele) => {
      if (ele.tenantId != null) {
        const connectionName = createTenantConnection(ele);
        tenantDetails[ele.tenantId] = connectionName;
      }
    });
    global.tenantPool = tenantDetails;
    return tenantPool;
  } catch (error) {
    console.log("Error ~ createConnections", error.message);
  }
};

/***
 * @summary To create individual tenant connections
 * @param {param}
 * @returns DB tenant created connection
 * @author Saurabh U
 * @date 21 Mar 2024
 */

const createTenantConnection = (tenant) => {
  let options = {
    // user: tenant.user,
    // pass: tenant.pass,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };
  const db = mongoose.createConnection(tenant.host, options);
  db.on("error", function (error) {
    console.log("MongoDB :: Tenant create connection error", error);
    db.close().catch(() =>
      console.log(`MongoDB :: failed to close conenction ${this.name}`)
    );
  });

  db.once("open", function () {
    console.log(
      `Database connected successfully with - tenant: ${tenant.tenantId}, database: ${tenant.dbName}`
    );
  });

  db.on("disconnected", function () {
    console.log(`MongoDB :: disconnected ${tenant.tenantId}`);
  });

  return db;
};

module.exports = { createConnectionPool, createTenantConnection };
