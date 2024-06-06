const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "1+ 11R",
    price: "59,999",
    colors: [
      {
        code: "red",
        img: "./images/11R_1.png",
        
      },
      {
        code: "black",
        img: "./images/11R2.png",
      },
    ],
  },
  {
    id: 2,
    title: "V30 Pro 12GB+512GB",
    price: "49,999",
    colors: [
      {
        code: "lightblue",
        img: "./images/vivo1.png",
      },
      {
        code: "black",
        img: "./images/vivo2.png",
      },
    ],
  },
  {
    id: 3,
    title: "POCO M6 5G",
    price: "34,888",  
    colors: [
      {
        code: "black",
        img: "./images/poco1.png",
      },
      {
        code: "pink",
        img: "./images/poco2.png",
      },
    ],
  },
  {
    id: 4,
    title: "IQOO Z7 Pro 5G",
    price: "42,888",
    colors: [
      {
        code: "lightblue",
        img: "./images/iq1.png",
      },
      {
        code: "black",
        img: "./images/iq2.png",
      },
    ],
  },
  {
    id: 5,
    title: "OPPO Reno11 F 5G",
    price: "62,000",
    colors: [
      {
        code: "brown",
        img: "./images/oppo1.png",
      },
      {
        code: "pink",
        img: "./images/oppo2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "Rs." + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});
