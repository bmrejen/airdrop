const Airdrop = artifacts.require("Airdrop")

contract("Airdrop", function (/* accounts */) {
  it("should assert true", async function () {
    await Airdrop.deployed()
    return assert.isTrue(true)
  })
})
