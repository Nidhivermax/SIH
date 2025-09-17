const express = require("express");
const cors = require("cors");
const { ethers } = require("ethers");
const fetch = require("node-fetch");

const ABI = [
  "function tokenURI(uint256 tokenId) view returns (string)",
  "function ownerOf(uint256 tokenId) view returns (address)"
];

const PORT = 3001;
const CONTRACT_ADDRESS = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

const PROVIDER_URL = "http://localhost:8545";

const provider = new ethers.providers.JsonRpcProvider(PROVIDER_URL);
const contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, provider);

const app = express();
app.use(cors());
app.use(express.json());

app.get("/certificate/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const tokenURI = await contract.tokenURI(id);
    const url = tokenURI.startsWith("ipfs://") ? `https://ipfs.io/ipfs/${tokenURI.slice(7)}` : tokenURI;
    const metadata = await fetch(url).then(r => r.json());
    const owner = await contract.ownerOf(id);
    res.json({ tokenId: id, tokenURI, metadata, owner });
  } catch (e) {
    console.error(e);
    res.status(500).json({ error: e.toString() });
  }
});

app.listen(PORT, ()=>console.log(`Cert server running on port ${PORT}`));
