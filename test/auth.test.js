const request = require("supertest");
const app = require("../app");

describe("register tests", () => {
  it("should return the new user created", async () => {
    const resp = await request(app).post("/login/register");
    expect(resp.statusCode).toEqual(201);
    expect(resp.body).not.toBeNull();
    expect(resp.body).toHaveProperty("response");
    expect(resp.body).toHaveProperty("username");
    expect(resp.body).toHaveProperty("email");
    expect(resp.body).toHaveProperty("firstname");
    expect(resp.body).toHaveProperty("lastname");
    expect(resp.body.succes).toBeTruthy();
  });

  it("should fail if all user aren't present ", async () => {
    const resp = await request(app).post("/login/register").send({
      username: "papaJC",
      mail: "admin@gmail.com",
      firstname: "Papa jacob",
    });
    expect(resp.statusCode).toEqual(400);
    expect(resp.body.succes).toBeFalsy();
  });

  it("should fail if user already exist", async () => {
    const resp = await request(app).post("/login/register").send({
      username: "admin",
      mail: "admin@gmail.com",
      firstname: "Papa jacob",
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
