pragma solidity ^0.8.28;
contract AuditRootStorage {
    struct AuditRoot {
        bytes32 merkleRoot;
        uint timestamp;
    }
    mapping(string => mapping(string => AuditRoot)) public roots;
    event RootStored(string companyID, string weekID, bytes32 root);

    function storeRoot(string memory companyID, string memory weekID, bytes32 root) public {
        roots[companyID][weekID] = AuditRoot(root, block.timestamp);
        emit RootStored(companyID, weekID, root);
    }

    function getRoot(string memory companyID, string memory weekID) public view returns (bytes32) {
        return roots[companyID][weekID].merkleRoot;
    }
}