const redis = require("redis");

const client = redis.createClient(6379);

module.exports = {
  cachingValue: async function (key, duration, value) {
    return await client.setEx(key, duration, value);
  },

  getCachedValue: async function (key) {
    client.get(key, (err, data) => {
      if (err) throw err;
      if (data !== null) {
        return data;
      } else {
        return;
      }
    });
  },
};
