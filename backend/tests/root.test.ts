import request from "supertest";
import app from "../src/app";
import { describe, it, expect } from "vitest";

describe("GET /api/v1", () => {
  it("should return welcome message", async () => {
    const response = await request(app).get("/api/v1");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      success: true,
      data: {
        message: "Hello from UniCore Backend!",
      },
    });
  });
});
