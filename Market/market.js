"use strict";
const api1Link = "https://api.coincap.io/v2/assets/";
const api2Link =
  "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin";
const mainPage = document.querySelector(".main");
const headPage = document.querySelector(".head-page");
const analysisIcon = document.getElementById("search-analysis");
const lists = document.querySelector(".list");
const changePercent = document.querySelector(".change-percent");
const topGainers = document.querySelector(".top-gainers");
const topLosers = document.querySelector(".top-losers");
const boxesDiv = document.querySelector(".boxes");
const searchDiv = document.querySelector(".div-search");
const searchIcon = document.querySelector(".btnSearch");
const cancelIcon = document.querySelector(".ri-close-line");
let searchEvent = "off";

// Building The COIN BOX CARD:
function buildBoxDom(name, symbol, change, marketCap, price, volume) {
  // Boxes Container
  let box = document.createElement("div");
  boxesDiv.appendChild(box);
  box.classList.add("box");

  //  ---------  Head Box ---------
  let headBox = document.createElement("div");
  headBox.classList.add("head-box");
  box.appendChild(headBox);

  // - Image Big div
  let imgTitle = document.createElement("div");
  imgTitle.classList.add("img-title");
  headBox.appendChild(imgTitle);

  let divImage = document.createElement("div");
  divImage.classList.add("div-img");
  imgTitle.appendChild(divImage);

  let coinImage = document.createElement("img");
  divImage.appendChild(coinImage);
  coinImage.setAttribute("src", "../images/bitcoinImg.jpg");

  //  head box outputs
  let coinName = document.createElement("p");
  coinName.classList.add("name");
  imgTitle.appendChild(coinName);
  coinName.textContent = name;

  let coinSymbol = document.createElement("span");
  coinName.appendChild(coinSymbol);
  coinSymbol.textContent = `${symbol}`;

  let percentChange = document.createElement("p");
  percentChange.classList.add("percent-change-coin");
  headBox.appendChild(percentChange);
  percentChange.textContent = change + " %";

  // ---------  Content Box ---------
  let contentBox = document.createElement("div");
  contentBox.classList.add("content-box");
  box.appendChild(contentBox);

  // content box outputs

  // coin market cap
  let coinDetails1 = document.createElement("div");
  coinDetails1.classList.add("coin-details");
  contentBox.appendChild(coinDetails1);

  let coinDetailsPara1 = document.createElement("p");
  coinDetails1.appendChild(coinDetailsPara1);
  // turing the value into a simple and a readable number
  let numberArray = marketCap;
  let intNumberArray = numberArray[0].split(``);
  let firstNumber = intNumberArray[0];
  let secondNumber = intNumberArray[1];
  let thirdNumber = intNumberArray[2];
  let fourthNumber = intNumberArray[3];

  if (intNumberArray.length == 4) {
    coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}K$`;
  } else if (intNumberArray.length == 5) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}.${thirdNumber}k$`;
  } else if (intNumberArray.length == 6) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}${thirdNumber}.${fourthNumber}k$`;
  } else if (intNumberArray.length == 7) {
    coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}M$`;
  } else if (intNumberArray.length == 8) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}.${thirdNumber}M$`;
  } else if (intNumberArray.length == 9) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}${thirdNumber}.${fourthNumber}M$`;
  } else if (intNumberArray.length <= 10) {
    coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}B$`;
  } else if (intNumberArray.length == 11) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}.${thirdNumber}B$`;
  } else if (intNumberArray.length == 12) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}${thirdNumber}.${fourthNumber}B$`;
  } else if (intNumberArray.length == 13) {
    coinDetailsPara1.textContent = `${firstNumber}.${secondNumber}T$`;
  } else if (intNumberArray.length == 14) {
    coinDetailsPara1.textContent = `${firstNumber}${secondNumber}.${thirdNumber}T$`;
  }

  let coinMarketCap = document.createElement("span");
  coinDetails1.appendChild(coinMarketCap);
  coinMarketCap.textContent = "Market Cap";

  // coin price
  let coinDetails2 = document.createElement("div");
  coinDetails2.classList.add("coin-details");
  contentBox.appendChild(coinDetails2);

  let coinDetailsPara2 = document.createElement("p");
  coinDetails2.appendChild(coinDetailsPara2);
  coinDetailsPara2.textContent = `${price}$`;

  let coinPrice = document.createElement("span");
  coinDetails2.appendChild(coinPrice);
  coinPrice.textContent = "Price";

  // coin volume
  let coinDetails3 = document.createElement("div");
  coinDetails3.classList.add("coin-details");
  contentBox.appendChild(coinDetails3);

  let coinDetailsPara3 = document.createElement("p");
  coinDetails3.appendChild(coinDetailsPara3);

  // turing the value into a simple and a readable number
  let numberArray2 = volume.split(".");
  let intNumberArray2 = numberArray2[0].split(``);
  let firstNumber2 = intNumberArray2[0];
  let secondNumber2 = intNumberArray2[1];
  let thirdNumber2 = intNumberArray2[2];
  let fourthNumber2 = intNumberArray2[3];

  if (intNumberArray2.length == 4) {
    coinDetailsPara3.textContent = `${firstNumber2}.${secondNumber2}K$`;
  } else if (intNumberArray2.length == 5) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}.${thirdNumber2}k$`;
  } else if (intNumberArray2.length == 6) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}${thirdNumber2}.${fourthNumber2}k$`;
  } else if (intNumberArray2.length == 7) {
    coinDetailsPara3.textContent = `${firstNumber2}.${secondNumber2}M$`;
  } else if (intNumberArray2.length == 8) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}.${thirdNumber2}M$`;
  } else if (intNumberArray2.length == 9) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}${thirdNumber2}.${fourthNumber2}M$`;
  } else if (intNumberArray2.length <= 10) {
    coinDetailsPara3.textContent = `${firstNumber2}.${secondNumber2}B$`;
  } else if (intNumberArray2.length == 11) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}.${thirdNumber2}B$`;
  } else if (intNumberArray2.length == 12) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}${thirdNumber2}.${fourthNumber2}B$`;
  } else if (intNumberArray2.length == 13) {
    coinDetailsPara3.textContent = `${firstNumber}.${secondNumber}T$`;
  } else if (intNumberArray2.length == 14) {
    coinDetailsPara3.textContent = `${firstNumber2}${secondNumber2}.${thirdNumber2}T$`;
  }

  let coinVolume = document.createElement("span");
  coinDetails3.appendChild(coinVolume);
  coinVolume.textContent = "Volume";
} // end of build Box Function

fetch(api1Link)
  .then((res) => {
    return res.json();
  })
  .then((apiData) => {
    let coins = apiData.data; // array of objects

    // !-------------------TOP 5 Gainers & Losers SECTION-------------------

    // new array of all percentChange values inside all objects, so we can handle it easily as an array.
    let percentArray = [];
    for (let i = 0; i < coins.length; i++) {
      percentArray.push(coins[i].changePercent24Hr);
    }
    // sort it in descending order
    percentArray = percentArray.sort((a, b) => b - a);

    // ?TOP 5 Gainers:
    let gainersArray = percentArray.slice(0, 5);

    let topGainersTitle = document.createElement("span");
    topGainersTitle.classList.add("TOPGainersSpan");
    topGainers.appendChild(topGainersTitle);
    topGainersTitle.textContent = `TOP 5 Gainers ⇡`;

    let br = document.createElement("div");
    br.classList.add("br");
    topGainers.appendChild(br);

    // 2 levels for loop to match all possibilities.
    for (let x = 0; x < gainersArray.length; x++) {
      for (let i = 0; i < coins.length; i++) {
        // compare the same value in both (array, api), to reach to the symbol.
        if (gainersArray[x] == coins[i].changePercent24Hr) {
          let gainersCoin = document.createElement("div");
          gainersCoin.classList.add("gainers-coin");
          topGainers.appendChild(gainersCoin);

          // Last two outputs:
          let gainersCoinPara = document.createElement("p");
          gainersCoin.appendChild(gainersCoinPara);
          gainersCoinPara.textContent = `${coins[i].symbol}`; // symbol of value parent

          let gainersCoinChangePercent = document.createElement("span");
          gainersCoin.appendChild(gainersCoinChangePercent);
          gainersCoinChangePercent.textContent = `${gainersArray[x].substring(0,6)} % `;
        }
      }
    } // end of gainers block.

    // ?TOP 5 Losers:
    let losersArray = percentArray.slice(-5).reverse();

    let topLosersTitle = document.createElement("span");
    topLosersTitle.classList.add("TOPLosersSpan");
    topLosers.appendChild(topLosersTitle);
    topLosersTitle.textContent = `TOP 5 Losers ⇣`;

    let br1 = document.createElement("div");
    br1.classList.add("br");
    topLosers.appendChild(br1);

    for (let x = 0; x < losersArray.length; x++) {
      for (let i = 0; i < coins.length; i++) {
        if (losersArray[x] == coins[i].changePercent24Hr) {
          let losersCoin = document.createElement("div");
          losersCoin.classList.add("losers-coin");
          topLosers.appendChild(losersCoin);
          // last two outputs:
          let losersCoinPara = document.createElement("p");
          losersCoin.appendChild(losersCoinPara);
          losersCoinPara.textContent = `${coins[i].symbol}`;

          let losersCoinChangePercent = document.createElement("span");
          losersCoin.appendChild(losersCoinChangePercent);
          losersCoinChangePercent.textContent = `${losersArray[x].substring(0,6)} % `;
        }
      }
    } // end of losers block.

    // !-------------------TOP 20 MARKET CAP COINS SECTION-------------------

    // return wanted (arguments) values from first 20 objects
    for (let i = 0; i < 20; i++) {
      buildBoxDom(
        coins[i].name,
        coins[i].symbol,
        coins[i].changePercent24Hr.substring(0, 6),
        coins[i].marketCapUsd.split("."),
        coins[i].priceUsd.substring(0, 7),
        coins[i].volumeUsd24Hr
      );
    }

    // !-------------------SEARCH SECTION-------------------

    searchIcon.addEventListener("click", (e) => {
      e.preventDefault();
      let searchTxt = document.querySelector("#search");
      if (searchEvent === "off") {
        // remove all old boxes, show the search result box.
        for (let i = 0; i < coins.length; i++) {
          if (searchTxt.value.toLowerCase() == coins[i].symbol.toLowerCase()) {
            let oldBoxes = document.querySelectorAll(".box");
            oldBoxes.forEach((el) => {
              el.remove();
            });
            buildBoxDom(
              coins[i].name,
              coins[i].symbol,
              coins[i].changePercent24Hr.substring(0, 6),
              coins[i].marketCapUsd.split("."),
              coins[i].priceUsd.substring(0, 7),
              coins[i].volumeUsd24Hr
            );
            searchEvent = "on";
          }
        }
        // re-build old boxes after removing the search result.
        cancelIcon.addEventListener("click", () => {
          e.preventDefault();
          if (searchEvent === "on") {
            let box = document.querySelector(".box");
            searchTxt.value = "";
            box.remove();
            for (let i = 0; i < 20; i++) {
              buildBoxDom(
                coins[i].name,
                coins[i].symbol,
                coins[i].changePercent24Hr.substring(0, 6),
                coins[i].marketCapUsd.split("."),
                coins[i].priceUsd.substring(0, 7),
                coins[i].volumeUsd24Hr
              );
            }
          }
          searchEvent = "off";
        });
      }
    });
  })
  .catch(Error);

// !-------------------MARKET SUMMARY SECTION-------------------

fetch(api2Link)
  .then((res) => {
    return res.json();
  })
  .then((api2Data) => {
    let titleList = document.createElement("p");
    titleList.classList.add("title-list");
    lists.appendChild(titleList);

    // Market Cap
    let liMarketCap = document.createElement("li");
    liMarketCap.classList.add("marketcap");
    lists.appendChild(liMarketCap);

    let marketCapImg = document.createElement("img");
    marketCapImg.classList.add("marketcapImg");
    marketCapImg.setAttribute("src", "../images/volume-control.png");
    liMarketCap.appendChild(marketCapImg);

    let marketCapSpan = document.createElement("span");
    marketCapSpan.classList.add("marketcapSpan");
    liMarketCap.appendChild(marketCapSpan);
    marketCapSpan.textContent = `Total Market Cap: ${api2Data[0].market_cap}$`;

    // Volume
    let liVolume = document.createElement("li");
    liVolume.classList.add("list_volume");
    lists.appendChild(liVolume);

    let volumeImg = document.createElement("img");
    volumeImg.classList.add("volumeImg");
    volumeImg.setAttribute("src", "../images/analysis.svg");
    liVolume.appendChild(volumeImg);

    let volume = document.createElement("span");
    volume.classList.add("volume");
    liVolume.appendChild(volume);
    volume.textContent = `Total Volume: ${api2Data[0].total_volume}$`;

    // Circulating Supply
    let liCirSupply = document.createElement("li");
    liCirSupply.classList.add("list_price"); // edit class later
    lists.appendChild(liCirSupply);

    let cirSupplyImg = document.createElement("img");
    cirSupplyImg.classList.add("priceImg"); // edit class later
    cirSupplyImg.setAttribute("src", "../images/volume-control.png");
    liCirSupply.appendChild(cirSupplyImg);

    let cirSupply = document.createElement("span");
    cirSupply.classList.add("price");
    liCirSupply.appendChild(cirSupply);
    cirSupply.textContent = `Circulating Supply: ${api2Data[0].circulating_supply}`;

    // VWAP
    let vWap = document.createElement("li");
    vWap.classList.add("vWap");
    lists.appendChild(vWap);

    let vWapImg = document.createElement("img");
    vWapImg.classList.add("vwap-img");
    vWapImg.setAttribute("src", "../images/volume-control.png");
    vWap.appendChild(vWapImg);

    let vWapSpan = document.createElement("span");
    vWapSpan.classList.add("vwap-span");
    vWap.appendChild(vWapSpan);
    vWapSpan.textContent = `FDValuation: ${api2Data[0].fully_diluted_valuation}`;

    analysisIcon.addEventListener("click", () => {
      lists.classList.toggle("show-analysis-search");
    }); // end of Market Summary
  })
  .catch(Error);
