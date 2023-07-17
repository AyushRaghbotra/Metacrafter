# Metacrafter

Ihe project is about miniting NFT and display the metadata , and also keep track of the total number of NFT minted

Firstly created a variable array (nftCluster) for storin the metadata of nft.
Function (mintNFT) willtake in some parameters like(nftName, nftType ,nftCost , nftBuy) and crate an object (nft) to pass the metadata.
After that using push function store the valle in the above array (nftCluster).
Inside the (listNFTs) function  loop is created to go through the array and print their metadata with console.log.
function (getTotalSupply()) is used for printing total number of NFT we have minted.
 After that we call your functions.
listNFTs();
getTotalSupply();
