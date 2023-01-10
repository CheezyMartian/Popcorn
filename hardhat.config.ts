import "@nomicfoundation/hardhat-toolbox";
import '@openzeppelin/hardhat-upgrades';
import { GetDefaultConfig } from "@dirtycajunrice/hardhat-tasks";
import "@dirtycajunrice/hardhat-tasks/tasks";

import "dotenv/config";

const config = GetDefaultConfig()

//@ts-ignore
config.etherscan?.apiKey.avalanche = process.env.SNOWTRACE_API_KEY
export default config;