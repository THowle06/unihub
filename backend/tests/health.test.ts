import request from "supertest";
import app from "../src/app";
import { describe, it, expect } from "vitest";

describe("GET /api/v1/health", () => {
  it("should return healthy status", async () => {
    const response = await request(app).get("/api/v1/health");

    expect(response.status).toBe(200);

    expect(response.body).toEqual({
      success: true,
      data: {
        status: "ok",
      },
    });
  });
});
