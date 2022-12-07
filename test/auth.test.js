const request = require("supertest");
const app = require("../app");
const userService = require("../services/user");

describe("register tests", () => {
  it("should return the new user created", async () => {
    const resp = await request(app).post("/login/register").send({
      username: "pepeJC",
      email: "admin@gmail.com",
      firstname: "Papa jacob",
      lastname: "pipou",
      password: "papaJCpass",
    });
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).not.toBeNull();
    expect(resp.body.success).toBeTruthy();
    userService.delUser("pepeJC");
  });

  it("should fail if all user parameter aren't present ", async () => {
    const resp = await request(app).post("/login/register").send({
      username: "papaJC",
      email: "papaJC12@gmail.com",
      firstname: "Papa jacob",
    });
    expect(resp.statusCode).toEqual(400);
    expect(resp.body.success).toBeFalsy();
  });

  it("should fail if user already exist", async () => {
    const resp = await request(app).post("/login/register").send({
      username: "admin",
      email: "admin@gmail.com",
      firstname: "admin",
      lastname: "admin",
      password: "ablabla",
    });
    expect(resp.statusCode).toEqual(409);
    expect(resp.body.succes).toBeFalsy();
  });
});

describe("login test", () => {
  it("should return the token when connected", async () => {
    const resp = await request(app).post("/login").send({
      username: "admin",
      password: "adminpass",
    });
    expect(resp.statusCode).toEqual(200);
    expect(resp.body.success).toBeTruthy();
    expect(resp.body).toHaveProperty("token");
    expect(resp.body).not.toBeNull();
  });

  it("should return an error if username or password aren't present", async () => {
    const resp = await request(app).post("/login").send({
      username: "admin",
    });
    expect(resp.statusCode).toEqual(400);
    expect(resp.body.success).toBeFalsy();
  });

  it("should return an error if user enter the wrong password", async () => {
    const resp = await request(app).post("/login").send({
      username: "admin",
      password: "wrongPassword",
    });
    expect(resp.statusCode).toEqual(400);
    expect(resp.body.success).toBeFalsy();
  });
});
