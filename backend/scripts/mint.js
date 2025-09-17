const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();

  // Replace with your deployed Token address (from deploy output)
  const contractAddress = process.env.TOKEN_ADDRESS || "0x0000000000000000000000000000000000000000";
  if (contractAddress === "0x0000000000000000000000000000000000000000") {
    console.log("ℹ️  Set TOKEN_ADDRESS env var to your deployed Token address to run this script.");
    return;
  }

  const token = await hre.ethers.getContractAt("Token", contractAddress, deployer);
  const name = await token.name();
  console.log("✅ Token name read from chain:", name);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
