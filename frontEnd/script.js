let Id;
let accounts;
let contract;
let type;

const getWeb3 = () => {
    return new Promise((resolve, reject) => {
        window.addEventListener("load", async () => {
            if (window.ethereum) {
                const web3 = new Web3(window.ethereum);
                try {
                    // ask user permission to access his accounts

                    await window.ethereum.request({ method: "eth_requestAccounts" });
                    resolve(web3);
                } catch (error) {
                    reject(error);
                }
            } else {
                reject("Must install MetaMask");
            }
        });
    });

};

const getContract = async (web3) => {
    const supp = await $.getJSON('MyEpicNFT.json');


    const netId = await web3.eth.net.getId();

    const deployedNetwork = supp.networks[netId];
    const supply = new web3.eth.Contract(
        supp.abi,
        deployedNetwork && deployedNetwork.address
    );
    console.log("Address :", deployedNetwork.address);
    return supply;
};

let makeAnNFT = async () => {

    $("#mint").on("click", async (e) => {
        e.preventDefault();
        let name = $("#name").val();
        console.log(name);
        let req = "Inas kiren";
        let address = $("#address").val();
        if (name == "Inas kiren") {
            console.log("Before minting")
            await contract.methods.makeAnEpicNFT().send({ from: accounts[0] });
            console.log("Minted");
        }
        else {
            alert("This NFT cannot be minted by you");
        }

    });
};

async function app() {
    console.log("Hii0");
    const web3 = await getWeb3();
    console.log("Hii1");
    accounts = await web3.eth.getAccounts();
    console.log(accounts);
    contract = await getContract(web3);
    console.log(contract);
    makeAnNFT();
}
app();

