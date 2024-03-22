const tenants = {
  tenant1: {
    tenantId: "tenant1",
    host: "mongodb://127.0.0.1:27017/Tenant1DB",
    user: "Tenant1DB",
    pass: "pass@123",
    dbName: "Tenant1DB",
  },
  tenant2: {
    tenantId: "tenant2",
    host: "mongodb://127.0.0.1:27017/Tenant2DB",
    user: "Tenant2DB",
    pass: "pass@123",
    dbName: "Tenant2DB",
  },
};

module.exports = tenants;
