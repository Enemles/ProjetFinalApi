const redis = require("redis");

const client = redis.createClient({
  url: "redis://redis:6379"
});


module.exports = {
  cachingValue: async function (key, duration, value) {
    await client.connect();
    return client.setEx(key, duration, value);
  },
  
  getCachedValue: async function (key) {
    await client.connect()
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
