// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/PullPayment.sol";


contract NFT is ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIdCounter;

    /// @dev Base token URI used as a prefix by tokenURI().
    string public baseTokenURI;

    constructor() ERC721("Tinker Union", "TKU") {}

    function mintTo(address to) public {
        _tokenIdCounter.increment();
        uint256 tokenId = _tokenIdCounter.current();
        _safeMint(to, tokenId);
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseTokenURI;
    }

    function setBaseTokenURI(string memory _baseTokenURI) public {
        baseTokenURI = _baseTokenURI;
    }
}
