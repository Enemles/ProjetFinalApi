const request = require("supertest");
const app = require("../app");

describe("authentication tests", () => {
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
});
