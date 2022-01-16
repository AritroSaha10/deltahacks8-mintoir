import { createAlchemyWeb3 } from '@alch/alchemy-web3';
import axios from 'axios';

const API_URL = "https://eth-ropsten.alchemyapi.io/v2/uWkv8nfaqAR8R27a8igUtgeZudpC72nn";
const MINTING_ACCOUNT_PRIVATE_KEY = "5411d7e7ba6557ce27ccb2da8949a94d496ca1d4b34d0cd16445900335930ad0";

const web3 = createAlchemyWeb3(API_URL);

const contract = require("../artifacts/contracts/MyMemories.sol/MyMemories.json");
const contractAddress = "0x587Fe49b1C74513830f386360dE243A57a8962Ec";
const nftContract = new web3.eth.Contract(contract.abi, contractAddress);

export const mintNFT = async (tokenURI, connector) => {
    if (connector.connected) {
        const nonce = await web3.eth.getTransactionCount(connector.accounts[0], "latest");

        console.log(nonce);

        const tx = {
            from: connector.accounts[0],
            to: contractAddress,
            nonce: nonce,
            gas: 500000,
            maxPriorityFeePerGas: 1999999987,
            data: nftContract.methods.mintNFT(connector.accounts[0], tokenURI).encodeABI()
        };

        const signedTx = await web3.eth.accounts.signTransaction(tx, MINTING_ACCOUNT_PRIVATE_KEY);

        const transactionReceipt = await web3.eth.sendSignedTransaction(signedTx.rawTransaction ?? "");

        // Linking.openURL(`https://ropsten.etherscan.io/tx/${transactionReceipt.transactionHash}`);

        console.log(transactionReceipt.logs[3]);
        console.log(transactionReceipt.logs[0].topics[3]);

        return {
            contractHash: transactionReceipt.to,
            tokenID: parseInt(transactionReceipt.logs[0].topics[3], 16)
        };
    } else {
        return null;
    }
}

export const getCurrentEthBal = async (connector) => {
    const res = await axios.get(`https://api-ropsten.etherscan.io/api?module=account&action=balance&address=${connector.accounts[0]}&tag=latest&apikey=W5215M662Q7RN36NGHWE93JJH1ZFJKK37G`);
    let ether = web3.utils.fromWei(res.data.result, 'ether');

    // Trim
    ether = ether.length > 5 ? ether.slice(0, 6) : ether;
    ether = parseInt(ether).toString();

    return ether;
}