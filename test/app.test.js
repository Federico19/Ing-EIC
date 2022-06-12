//import request from "supertest";
const app = require('../src/app');
const request = require('supertest')
//import app from "../src/app";

describe("GET /", () => {
  test("/", async () => {
    await request(app).get("/").send().
    expect('2 y 2 son 4');
  });
});


/*
describe("GET /user", () => {
  test("should respond with a 200 status code", async () => {
    const response = await request(app).get("/user").send();
    expect(response.statusCode).toBe(200);
  });
});
*/