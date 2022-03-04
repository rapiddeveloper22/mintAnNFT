// SPDX-License-Identifier: UNLICENSED

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

pragma solidity ^0.8.1;

contract MyEpicNFT is ERC721URIStorage {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;

    constructor() ERC721("Aswin NFT", "ASWIN") {}

    function makeAnEpicNFT() public {
        uint256 newItemId = _tokenIds.current();
        _safeMint(msg.sender, newItemId);
        _setTokenURI(
            newItemId,
            "https://ipfs.io/ipfs/QmfQwTeytksGvnqTgKP5yMHNYZL6qhDidRJnYGBT5cjbJC"
        );
        _tokenIds.increment();
    }
}
