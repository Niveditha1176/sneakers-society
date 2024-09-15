const wrapper = document.querySelector(".sliderWrapper")
const menuItems = document.querySelectorAll('.menuItem')
const products = [
    {
      id: 1,
      title: "Air Jordan",
      price: 9746,
      colors: [
        {
          code: "darkred",
          img: "./imag/airjordan2.png",
        },
        {
          code: "darkblue",
          img: "./imag/airjordan3.png",
        },
      ],
    },
    {
      id: 2,
      title: "Reebook",
      price: 6506,
      colors: [
        {
          code: "black",
          img: "./imag/reebook2.png",
        },
        {
          code: "darkblue",
          img: "./imag/reebook3.png",
        },
      ],
    },
    {
      id: 3,
      title: "Skechers",
      price: 10500,
      colors: [
        {
          code: "purple",
          img: "./imag/skechers1.png",
        },
        {
          code: "blue",
          img: "./imag/skechers2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Puma",
      price: 5055,
      colors: [
        {
          code: "red",
          img: "./imag/puma1.png",
        },
        {
          code: "yellow",
          img: "./imag/puma2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Adidas",
      price: 9500,
      colors: [
        {
          code: "black",
          img: "./imag/adidas1.png",
        },
        {
          code: "red",
          img: "./imag/adidas2.png",
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
      wrapper.style.transform = `translateX(${-100 * index}vw)`;
  
      choosenProduct = products[index];
  
      currentProductTitle.textContent = choosenProduct.title;
      currentProductPrice.textContent = "Rs" + choosenProduct.price;
      currentProductImg.src = choosenProduct.colors[0].img;
  
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
  



    
