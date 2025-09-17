const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("Token");
  const token = await Token.deploy();
  await token.waitForDeployment();
  const addr = await token.getAddress();
  console.log("✅ Token deployed at:", addr);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
