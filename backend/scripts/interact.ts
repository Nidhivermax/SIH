import { ethers } from "hardhat";

async function main() {
  const Counter = await ethers.getContractFactory("Counter");
  const counter = await Counter.attach("0x5FbDB2315678afecb367f032d93F642f64180aa3");

  console.log("Current x:", (await counter.x()).toString());

  console.log("Incrementing by 1...");
  await counter.inc();

  console.log("Incrementing by 5...");
  await counter.incBy(5);

  console.log("Final x:", (await counter.x()).toString());
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
