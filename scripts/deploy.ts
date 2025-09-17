import { ethers } from "hardhat";

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  await counter.waitForDeployment();
  const address = await counter.getAddress();
  console.log("✅ Counter deployed at:", address);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
