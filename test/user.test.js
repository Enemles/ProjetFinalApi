const request = require("supertest");
const userRoute = require("../routing/userRouter");
const app = require("../app");

describe("get user paths", () => {
  var token = null;
  var username = null;
  beforeAll(() => {
    request(app)
      .post("/login")
      .send({
        username: "admin",
        password: "adminpass",
      })
      .end((err, res) => {
        token = res.body.token;
        username = req.body.username;
        console.log("token is " + token);
        console.log("username is" + username);
      });
  });

  it("should return all users", () => {
    const resp = request(userRoute)
      .get("/all")
      .set("cookie", ["username=admin", "token=" + token, "userRole=1"]);
    console.log(resp.statusCode);
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toHaveProperty("data");
    expect(resp.body).not.toBeNull();
  });

  it("should return a user by his username", () => {
    const resp = request(app)
      .get("/user/admin")
      .set("Cookie", ["username=admin", "token=" + token, "userRole=1"]);
    expect(resp.statusCode).toEqual();
    expect(resp.body.success).toBeTruthy();
    expect(resp.body).toHaveProperty("header");
    expect(resp.body).toHaveProperty("data");
    expect(resp.body).not.toBeNull();
  });

  it("should return an error if the username doesnt exist", () => {
    const resp = request(app).get("/users/dontExist");
    expect(resp.statusCode).toEqual();
    expect(resp.body.success).toBeFalsy();
  });
  it("should return the current user connected", () => {
    const resp = request(app)
      .get("/user/")
      .set("Cookie", ["username=admin", "token=" + token, "userRole=1"]);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body.success).toBeTruthy();
    expect(resp.body).toHaveProperty("header");
    expect(resp.body).toHaveProperty("data");
    expect(resp.body).not.toBeNull();
  });
  it("should return an error if user doesnt exist or isnt single", () => {
    const resp = request(app).get("/user/" + username);
    expect(resp.statusCode).toEqual(400);
    expect(resp.body.success).toBeTruthy();
    expect(resp.body).toHaveProperty("header");
    expect(resp.body).toHaveProperty("data");
    expect(resp.body).not.toBeNull();
  });
});

describe("del request for users", () => {
  it("should delete a user by his username", () => {
    const resp = request(app).del("/user/user");
  });
});
