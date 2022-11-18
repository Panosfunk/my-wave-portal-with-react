
const main = async () => {
    const [owner, randomPerson] = await hre.ethers.getSigners();

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("Contract deployed to address: ", waveContract.address);
    console.log("Contract deployed by owner: ", owner.address);

    await waveContract.getTotalWaves();

    const waveOne = await waveContract.wave();

    await waveContract.getTotalWaves();

    const waveTwo = await waveContract.connect(randomPerson).wave();

    await waveContract.getTotalWaves();

};

const runMain = async () => {
    try{
        await main();
        process.exit(0);
    }catch (error) {
        console.log(error);
        process.exit(1);
    }
}

runMain();