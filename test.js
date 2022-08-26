const { expect } = require("chai");
const app = require(".");

describe("Testing createSignature. ", () => {
  it("Should return signature", () => {
    expect(
      app.createSignature(
        '{"event":"mint","txh":"0xa1ec711cb5b2f2fdcc25aa12257874c376622d4f4d8631a49c0cb31b9c4baca5"}',
        "supersecret"
      )
    ).to.equal(
      "e26de59e3702e79e9e9e7d27547b6169dd8865ed98d1c53c77ef16f9d0f2ad37"
    );
  });
});

describe("Testing isValidSignature. ", () => {
  it("Should verify signature and return true", () => {
    expect(
      app.isValidSignature(
        "e26de59e3702e79e9e9e7d27547b6169dd8865ed98d1c53c77ef16f9d0f2ad37",
        '{"event":"mint","txh":"0xa1ec711cb5b2f2fdcc25aa12257874c376622d4f4d8631a49c0cb31b9c4baca5"}',
        "supersecret"
      )
    ).to.equal(true);
  });
});

describe("Testing isValidSignature. ", () => {
  it("Should verify signature and return false", () => {
    expect(
      app.isValidSignature(
        "e26de59e3702e79e9e9e7d27547b6169dd8865ed98d1c53c77ef16f9d0f2ad37",
        '{"event":"addorder","txh":"0xa1ec711cb5b2f2fdcc25aa12257874c376622d4f4d8631a49c0cb31b9c4baca5"}',
        "supersecret"
      )
    ).to.equal(false);
  });
});
