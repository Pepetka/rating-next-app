describe("Check h1", () => {
  it("Right", async function ({ browser }) {
    await browser.url("/");
    const elem = await browser.$("h1");

    await expect(elem).toHaveText("Home");
  });

  it("Visual", async function ({ browser }) {
    await browser.url("/");
    await browser.assertView("viewport-screen");
  });
});
