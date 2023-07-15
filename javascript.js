// create a variable to hold your NFT's
const nftCluster =[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

function mintNFT (nftName, nftType ,nftCost , nftBuy) {
    const nft ={
         name: nftName,
         type: nftType,
         cost: nftCost,
         buy:  nftBuy,
    };
 nftCluster.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {

    for(let i =0;i<nftCluster.length; i++){
        const nft =nftCluster[i];
        console.log("\nNFT ID : " + (i+1) );
        console.log("\nName     : " + nft.name );
        console.log("Type     : " + nft.type );
        console.log("Cost     : " + nft.cost );
        console.log("Buy Price: " + nft.buy );

    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
console.log("\nTOTAL NFTs MINTED: "+ nftCluster.length);
}

// call your functions below this line

mintNFT("TATA","MUTAL","$100",8);
mintNFT("BAJAJ","STOCK","$78",20);
mintNFT("TCS","SHARE","$199",18);

listNFTs();
getTotalSupply();
