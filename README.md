# Mintoir: Minting memories through the blockchain. (DeltaHacks8 Submission)
The codebase for Mintoir, our team's DeltaHacks8 submission.

## 💡 Inspiration
Memories are too precious to be lost in the abyss of time. That’s why we take pictures, send holiday greeting cards, and keep heirlooms. With the COVID-19 pandemic, we lost the ability to truly store these sentimental memories. For example, we can no longer send postcards around the world without 6-month+ delays. 

Our lives are full of memories that we want to keep forever. You can’t just take a photo and hope for the best. 

Introducing, Mintoir (Mint + Memoir); an intuitive cross-platform mobile application that allows you to turn your favourite moments into digital tokens that will last forever on the blockchain, ensuring that you won’t ever forget what matters most.

## 🔍 What it does
Once the user connects their wallet through our one-click portal, they will be greeted by our dashboard where they can browse trending memories on the blockchain, or view their own. Next, if they wish to mint a memory, they will be prompted to the builder screen. Users can configure the source image file, select from a suite of memory templates or create their own, edit their source image, apply AI-generated backdrops based on their location, and add a message/title to the metadata. Once they are happy with the memory built, they can mint the NFT on the blockchain with a single button. 

## ⚙️ Tech stack
**Frontend**
- React Native
- Expo
- Native Base

**Blockchain / Smart Contract Backend**
- Hardhat
- Solidity
- Etherscan API
- Pinata IPFS

**Image Processing / Machine Learning Backend**
- MediaPipe for ML
- Pillow / PIL 
- Python
- Flask

**Ethereum Operations**
- WalletConnect
- Ropsten Ethereum Testnet
- ERC-721 NFT standard contract


## 🚧 Challenges we ran into
- Because there aren’t many fully-featured Web3 mobile apps on the market for both iOS and Android, it was difficult to find resources pertaining to how we could both utilize a wallet, create smart contracts, and more. In addition, a lot of custom configuration was required in order to get the app up and running.
- None of our team members had any experience with creating mobile dApps (Decentralized Apps), which meant that we had to learn on the fly while working on our project.
- Setting up the frontend was tough as we were using many new packages that lacked thorough documentation and support.
- Not being in-person this hackathon presented communication challenges when debugging and brainstorming ideas. We found tools like VSCode Liveshare that allowed us to overcome this problem.


## ✔️ Accomplishments that we're proud of
In just 36 hours, we are proud to have built a fully-functional mobile app that can execute our original idea of minting memories with NFTs. Most of the web3 technologies we used were new to us so learning to implement them in such a short time is a major feat. From what we have researched, our application is one of the first full-stack, web3, cross-platform mobile apps built on React Native. With its polished UI and novel concept, we hope Mintoir can eternalize memories for many across the world.

## 📚 What we learned
- Mobile development with React Native and Expo
- Using UI libraries such as Native Base in order to speed up development
- Using WalletConnect to securely connect to blockchain wallets (ex: MetaMask, Rainbow, and many more)
- Manipulating low level bundler configuration to work with WalletConnect
- Using HardHat to create and deploy smart contracts using the ERC-721 standard on the Ethereum blockchain
- Minting NFTs completely locally
- Using IPFS as a peer-to-peer network to store/share data in a distributed file system
- Using segmentation neural networks to extract certain features from a picture (ex. person)
- Advanced image manipulation using libraries such as Pillow in order to dynamically generate postcards
- Online project collaboration using tools like Github, VSCode Liveshare and Figma


## 🔭 What's next for Mintoir
- We’d love to extend our application to more than just postcards and birthday cards. We want to add in the ability for the user to mint video memories using Mintoir.
- We also hope to connect our code to the actual Ethereum Mainnet with Polygon. Right now, we use the Ropsten testnet to test our work without using actual gas. Deploying our app into a live Ethereum Environment would be vital in taking our app to production.
- We believe Mintoir is a revolutionary new app with a lot of potential. We want to launch this app on Google Play Store and the App Store to allow everyone to create NFTs with their memories.
