# Fixes Applied

This folder contains corrected code and scripts to avoid common Hardhat / npm errors.

## Root project
- Added working `scripts/deploy.ts` to deploy the `Counter` contract.
- Updated `package.json` scripts:
  - `compile`: Compile contracts
  - `deploy:local`: Deploy Counter via Ignition to the in-memory Hardhat network
  - `deploy:sepolia`: Deploy Counter via Ignition to Sepolia (requires SEPOLIA_RPC_URL and SEPOLIA_PRIVATE_KEY config variables via hardhat-keystore or env)
  - `deploy:script`: Deploy Counter using a simple script (`scripts/deploy.ts`)
  - `build`: TypeScript build
  - `clean`: Remove `dist`

## backend/
- Fixed `scripts/deploy.js` to CommonJS and ethers v6 pattern (`waitForDeployment`, `getAddress`).
- Rewrote `scripts/mint.js` to **read** the token name from a deployed `Token` contract (no non-existent `RitualCertificate` call). Provide your address with `TOKEN_ADDRESS=...` env variable.

## Notes
- Contracts present: `contracts/Counter.sol`, `contracts/Token.sol`.
- If you previously saw errors like “hardhat not found” or “npm run ... not found”, the new `package.json` scripts resolve that.
- For Sepolia deploys, set config variables with:
  ```
  npx hardhat keystore set SEPOLIA_RPC_URL
  npx hardhat keystore set SEPOLIA_PRIVATE_KEY
  ```
