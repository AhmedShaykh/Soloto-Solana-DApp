import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { cookieStorage, createStorage } from "wagmi";
import { mainnet, sepolia } from "wagmi/chains";

export const projectId = "67b6d9e69fdd2fc0e1a263b4d342aed2";

if (!projectId) throw new Error("Project ID Is Not Defined");

const metadata = {
    name: "Soloto DApp",
    description: "Soloto DApp",
    url: "https://ahmx-soloto-solana-dapp.vercel.app",
    icons: ["https://avatars.githubusercontent.com/u/37784886"]
};

const chains = [mainnet, sepolia] as const;

export const config = defaultWagmiConfig({
    chains,
    projectId,
    metadata,
    ssr: true,
    storage: createStorage({
        storage: cookieStorage
    })
});