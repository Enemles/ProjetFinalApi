const request = require("supertest");
const userRoute = require("../routing/userRouter");
const app = require("../app");

describe("get user paths", () => {
  var token = null;
  var username = null;
  /*
J'essaie ici de récupérer un token et le username nécessaire pour effectuer les tests,
problème: req n'est pas définie dans la fonction end et je n'ai pas eu le temps de me pencher sur le sujet
*/

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

  /*
  Le test ci-dessous me donne une erreur comme quoi res.sattus n'est pas une fonction dans mon controller, 
  ce que je ne comprend pas 
  Je soupçonne que mon envois des cookies n'est pas bon pour ce test et les suivant, 
  encore une fois je n'ai pas eu le temps de creuser le sujet 
  */

  it("should return all users", async () => {
    const resp = await request(userRoute)
      .get("/all")
      .set("cookie", ["username=admin", "token=" + token, "userRole=1"]);
    console.log(resp.statusCode);
    expect(resp.statusCode).toEqual(200);
    expect(resp.body).toHaveProperty("data");
    expect(resp.body).not.toBeNull();
  });

  it("should return a user by his username", async () => {
    const resp = await request(app)
      .get("/user/admin")
      .set("cookie", ["username=admin", "token=" + token, "userRole=1"]);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body.success).toBeTruthy();
    expect(resp.body).toHaveProperty("header");
    expect(resp.body).toHaveProperty("data");
    expect(resp.body).not.toBeNull();
  });

  it("should return an error if the username doesnt exist", async () => {
    const resp = await request(app).get("/users/dontExist");
    expect(resp.statusCode).toEqual(404);
    expect(resp.body.success).toBeFalsy();
  });
  it("should return the current user connected", async () => {
    const resp = await request(app)
      .get("/user/")
      .set("cookie", ["username=admin", "token=" + token, "userRole=1"]);
    expect(resp.statusCode).toEqual(201);
    expect(resp.body.success).toBeTruthy();
    expect(resp.body).toHaveProperty("header");
    expect(resp.body).toHaveProperty("data");
    expect(resp.body).not.toBeNull();
  });
  it("should return an error if user doesnt exist or isnt single", async () => {
    const resp = await request(app).get("/user/" + username);
    expect(resp.statusCode).toEqual(401);
    expect(resp.body.success).toBeFalsy();
  });
});

describe("del request for users", () => {
  it("should delete a user by his username", async () => {
    const resp = request(app).del("/user/user");
  });
});
