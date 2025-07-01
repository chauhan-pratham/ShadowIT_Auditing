async function main() {
    const AuditRootStorage = await ethers.getContractFactory("AuditRootStorage");
    const contract = await AuditRootStorage.deploy();
    await contract.deployed();
    console.log("Contract deployed at:", contract.address);
}
main();
