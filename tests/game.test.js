const request = require("supertest");
const express = require("express");
const app = require("../app"); // pastikan app.js export app

describe("GET /games", () => {
    it("should return all games", async () => {
        const res = await request(app).get("/games");

        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe("success");
        expect(Array.isArray(res.body.data)).toBe(true);
    });
});

describe("POST /games", () => {
    it("should create a new game", async () => {
        const res = await request(app)
            .post("/games")
            .send({
                title: "Test Game",
                platform: "PC",
                stock: 5,
                price: 100000
            });

        expect(res.statusCode).toBe(201);
        expect(res.body.status).toBe("success");
    });
});