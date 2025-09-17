import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();

  // Replace this with your deployed contract address
  const contractAddress = "YOUR_DEPLOYED_CONTRACT_ADDRESS";

  const Ritual = await ethers.getContractAt("RitualCertificate", contractAddress);

  // Example values
  const tokenURI = "ipfs://Qm.../cert-123.json";
  const recipient = deployer.address; // or any other address

  const tx = await Ritual.mintCertificate(recipient, tokenURI);
  const receipt = await tx.wait();
  console.log("✅ Minted! Tx hash:", receipt.transactionHash);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
