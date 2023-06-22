const select = document.querySelector("select");
const input = document.querySelector(".input-currency input");
const input1 = document.querySelector(".input-currency ");
const spanNamber = document.querySelector(".span-number");
const spanName2 = document.querySelector(".span-name");
const currencyEl_one = document.getElementById("currency-one");

const amountEl_one = document.getElementById("amount-one");
const span = input1.querySelector("span");
const rateEl = document.querySelector(".rate");
const swap = document.getElementById("swap");
const contenerCurr = document.querySelector(".contener-curr");
const equal = document.querySelector(".equal");
const span3 = document.querySelector(".span-3");
// const currencyEl_two = `https://v6.exchangerate-api.com/v6/b71ba5a6f69833fe3ac900ec/latest/USD`;
// console.log(currencyEl_two);

function calculate() {
  const currency_one = currencyEl_one.value;
  fetch(
    `https://v6.exchangerate-api.com/v6/29f88ffe00fa87fb7eacd775/latest/${currency_one}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      let da = data.conversion_rates;
      let arr = Object.keys(da);
      let valueArr = Object.values(da);
      let arr1 = [];
      arr.forEach((a, index) => {
        if (index == 0) {
          return;
        }
        let option = document.createElement("option");
        select.appendChild(option);
        option.textContent = a;
        option.setAttribute("value", a);
        arr1.push(option);
      });

      select.addEventListener("click", (x) => {
        let bb = x.target.value;
        span.textContent = bb;

        swap.addEventListener("click", () => {
          spanName2.textContent = bb;
          spanNamber.textContent = input.value;
          equal.textContent = "=";
          let ind = arr.indexOf(bb);
          let inpu = input.value;
          let resu = inpu / valueArr[ind];
          rateEl.textContent = resu.toFixed(2);
          span3.textContent = `${resu.toFixed(2)} USD`;
          console.log(rateEl);
          // document.querySelector(".c1 h3").innerHTML = Math.ceil(coinsData[array1[0]].price) * span3 ; 
          // document.querySelector(".c2 h3").innerHTML = Math.ceil(coinsData[array1[1]].price) * span3;
          // document.querySelector(".c3 h3").innerHTML = Math.ceil(coinsData[array1[2]].price) * span3;
          // document.querySelector(".c4 h3").innerHTML = Math.ceil(coinsData[array1[3]].price) * span3;
        });
      });

      for (let i = 0; i < select.lenght; i++) {
        select[i].forEach((x) => {});
      }
    });
}
calculate();

function CustomAlert() {
  this.alert = function (title, structure) {
    // main structure of alert section
    document.body.innerHTML =
      document.body.innerHTML +
      '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';

    let dialogoverlay = document.getElementById("dialogoverlay");
    let dialogbox = document.getElementById("dialogbox");
    dialogbox.style.top = "100px";
    // Display alert section
    dialogoverlay.style.display = "block";
    dialogbox.style.display = "block";
    // Header of alert
    document.getElementById("dialogboxhead").style.display = "block";
    document.getElementById("dialogboxhead").innerHTML =
      '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> ' + title;
    // Body of alert
    document.getElementById("dialogboxbody").innerHTML = structure;
    // Footer of alert
    document.getElementById("dialogboxfoot").innerHTML =
      '<button class="pure-material-button-contained active" onclick="customAlert.ok()">Start</button>';
  };

  this.ok = function () {
    document.getElementById("dialogbox").style.display = "none";
    document.getElementById("dialogoverlay").style.display = "none";
  };
}

let customAlert = new CustomAlert();

// !Swap Developers
// ! You must add animation but i dont know how
// ! clean your code from any not use element

let dev_img = document.querySelector(".main-developers .contents .image img"),
  dev_name = document.querySelector(".main-developers .contact h2"),
  dev_ptf = document.querySelector(
    ".main-developers .contact button.btn-portfolio"
  ),
  dev_github = document.querySelector(
    ".main-developers .contact .contact-icons a:nth-of-type(1)"
  ),
  dev_discord = document.querySelector(
    ".main-developers .contact .contact-icons a:nth-of-type(2)"
  ),
  dev_linkedin = document.querySelector(
    ".main-developers .contact .contact-icons a:nth-of-type(3)"
  ),
  dev_email = document.querySelector(
    ".main-developers .contact .contact-icons a:nth-of-type(4)"
  );
let radio = document.getElementsByName("slider"),
  dev_AA = document.querySelector(
    ".main-developers .developers label:nth-of-type(1)"
  ),
  dev_AJ = document.querySelector(
    ".main-developers .developers label:nth-of-type(2)"
  ),
  dev_FO = document.querySelector(
    ".main-developers .developers label:nth-of-type(3)"
  ),
  dev_YKh = document.querySelector(
    ".main-developers .developers label:nth-of-type(4)"
  );

let carts = document.querySelectorAll(".main-developers .contents");

Array.from(radio).forEach((ele) => {
  ele.addEventListener("click", (e) => {
    carts.forEach((ele) => {
      if (ele.className.includes(e.target.id)) {
        ele.classList.toggle("show");
        console.log(e.target.id);
      } else {
        ele.classList.remove("show");
      }
    });
    let bol = false;
    carts.forEach((ele) => {
      if (ele.className.includes("show")) {
        bol = true;
      }
    });
    if (!bol) {
      carts[0].classList.add("show");
    }
  });
});
let i = 0;
document.body.addEventListener("mousewheel", (e) => {
  console.log("as");
  i++;
  carts.forEach((ele, ind) => {
    if (i % 4 == ind) {
      ele.classList.toggle("show");
    } else {
      ele.classList.remove("show");
    }
  });
});

let deve = document.querySelector(".main-developers");
let deves = document.querySelector("section.deves");
let eles = document.querySelectorAll("body>*:not(.main-developers)");
deves.addEventListener("click", () => {
  eles.forEach((e) => {
    e.classList.toggle("none");
    deve.style.cssText = "display: block !important";
  });
});
let blur_area = document.querySelector(".main-developers:not(.temp-main)");
blur_area.addEventListener("click", () => {
  eles.forEach((e) => {
    e.classList.toggle("none");
    deve.style.cssText = "display: none !important";
  });
});

var baseUrl = "https://api.coinranking.com/v2/coins";
var proxyUrl = "https://cors-anywhere.herokuapp.com/";
var apiKey = "0c5729ef-edd7-4ccd-87c9-2c5f412becdf";


var apiUrl = `${proxyUrl}${baseUrl}`;
console.log(apiUrl);

fetch(`${proxyUrl}${baseUrl}`, { 
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'X-My-Custom-Header': `${apiKey}`,
      'Access-Control-Allow-Origin': "*",
    }
})
  .then((response) => {
    if (response.ok) {
      response.json().then((json) => {
        console.log(json.data);
        let coinsData = json.data.coins;
        console.log(coinsData);

        if (coinsData.length > 0) {
          var cryptoCoin = "";
        }
        let array1 = [];
        let array = ["Bitcoin", "Ethereum", "Litecoin", "Chainlink" ]
        for (i = 0; i < 4; i++){
        //For Loop Starts
        let Filter = 
        coinsData.filter((coin , index) => {
          if (coin.name == array[i]) {
            array1.push(index);
          }
        }
        );}
        console.log(array1);
        // for (i=0; i<4; i++) {
          // console.log(coinsData[array1[i]].name);
          document.querySelector(".c1 h2").innerHTML = coinsData[array1[0]].name;
          document.querySelector(".c2 h2").innerHTML = coinsData[array1[1]].name;
          document.querySelector(".c3 h2").innerHTML = coinsData[array1[2]].name;
          document.querySelector(".c4 h2").innerHTML = coinsData[array1[3]].name;
          swap.addEventListener("click", () => {
            
            document.querySelector(".c1 h3").innerHTML = Math.ceil(coinsData[array1[0]].price) * input.value; 
            document.querySelector(".c2 h3").innerHTML = Math.ceil(coinsData[array1[1]].price) * input.value;
            document.querySelector(".c3 h3").innerHTML = Math.ceil(coinsData[array1[2]].price) * input.value;
            document.querySelector(".c4 h3").innerHTML = Math.ceil(coinsData[array1[3]].price) * input.value;
          });

     
          // console.log(array1);

          // cryptoCoin += `<td> ${coinsData[array1[i]].name}</td>`;

        // }
        //For Loop Ends
        

      });
    }
  })
  .catch((error) => {
    console.log(error);
  });

  


  let menu = document.querySelector('#menu-bars');

  let navbar = document.querySelector('.navbar');
  
  
  
  menu.onclick = () =>{
  
    menu.classList.toggle('fa-times');
  
    navbar.classList.toggle('active');
  
  }
  
  
  
  let section = document.querySelectorAll('section');
  
  let navLinks = document.querySelectorAll('header .navbar a');
  
  
  
  window.onscroll = () =>{
  
  
  
    menu.classList.remove('fa-times');
  
    navbar.classList.remove('active');
  
  
  
    section.forEach(sec =>{
  
  
  
      let top = window.scrollY;
  
      let height = sec.offsetHeight;
  
      let offset = sec.offsetTop - 150;
  
      let id = sec.getAttribute('id');
  
  
  
      if(top >= offset && top < offset + height){
  
        navLinks.forEach(links =>{
  
          links.classList.remove('active');
  
          document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
  
        });
  
      };
  
  
  
    });
  
  
  
  }
  
  
  
  var swiper = new Swiper(".home-slider", {
  
          spaceBetween: 30,
  
          centeredSlides: true,
  
          autoplay: {
  
            delay: 7500,
  
            disableOnInteraction: false,
  
          },
  
          pagination: {
  
            el: ".swiper-pagination",
  
            clickable: true,
  
          },
  
          loop:true,
  
        });
  
  
  
  var swiper = new Swiper(".review-slider", {
  
    spaceBetween: 20,
  
    centeredSlides: true,
  
    autoplay: {
  
      delay: 7500,
  
      disableOnInteraction: false,
  
    },
  
    loop:true,
  
    breakpoints: {
  
      0: {
  
          slidesPerView: 1,
  
      },
  
      640: {
  
        slidesPerView: 2,
  
      },
  
      768: {
  
        slidesPerView: 2,
  
      },
  
      1024: {
  
        slidesPerView: 3,
  
      },
  
    },
  
  });