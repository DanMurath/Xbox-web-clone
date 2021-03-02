//*****************************************************************************
//                                                                             *
//                     JavaScript for xbox website clone                       *
//                                                                             *
//*****************************************************************************

//*********** carousel for six-large ****************
//could create a loop function?? incase of repeats

const carousel = () => {
  const next = document.getElementById("next");
  const prev = document.getElementById("prev");
  const img = document.querySelector(".imgC");
  let imgSwap = "a";

  //statements to loop forward on 'next' click
  next.addEventListener("click", () => {
    if (imgSwap === "a") {
      //swap img
      img.src = "img/6two+.jpg";
      imgSwap = "b"; // allows us to alternate through multiple items by
      // changing arguments
    } else if (imgSwap === "b") {
      img.src = "img/6four+.jpg";
      imgSwap = "c";
    } else if (imgSwap === "c") {
      img.src = "img/6five+.jpg";
      imgSwap = "d";
    } else if (imgSwap === "d") {
      img.src = "img/6six+.jpg";
      imgSwap = "e";
    } else if (imgSwap === "e") {
      img.src = "img/6seven+.jpg";
      imgSwap = "f";
    } else {
      img.src = "img/6one+.jpg";
      imgSwap = "a";
    }
  });

  //statements to loop back
  prev.addEventListener("click", () => {
    if (imgSwap === "a") {
      img.src = "img/6seven+.jpg";
      imgSwap = "f";
    } else if (imgSwap === "b") {
      img.src = "img/6one+.jpg";
      imgSwap = "a";
    } else if (imgSwap === "c") {
      img.src = "img/6two+.jpg";
      imgSwap = "b";
    } else if (imgSwap === "d") {
      img.src = "img/6four+.jpg";
      imgSwap = "c";
    } else if (imgSwap === "e") {
      img.src = "img/6five+.jpg";
      imgSwap = "d";
    } else {
      img.src = "img/6six+.jpg";
      imgSwap = "e";
    }
  });
};

carousel();

//******** carousel for (12) purchase images ********

const purchaseCarsl = () => {
  const selectedImg = document.querySelector(".selectedImg");
  const imgSelectorOne = document.querySelector(".twelveOne");
  const imgSelectorTwo = document.querySelector(".twelveTwo");
  const imgSelectorThree = document.querySelector(".twelveThree");
  const imgSelectorFour = document.querySelector(".twelveFour");

  imgSelectorOne.addEventListener("click", () => {
    selectedImg.src = "img/12one.png";
  });
  imgSelectorTwo.addEventListener("click", () => {
    selectedImg.src = "img/12two.png";
  });
  imgSelectorThree.addEventListener("click", () => {
    selectedImg.src = "img/12three.png";
  });
  imgSelectorFour.addEventListener("click", () => {
    selectedImg.src = "img/12four.png";
  });
};

purchaseCarsl();

//******** audio easter eggs **********

const audioEggs = () => {
  const xboxOn = document.querySelector(".svgImg");
  const xboxOn2 = document.querySelector(".svgImg2");
  const xboxLoad = document.querySelector(".xboxLoad");
  const sideNavChime = new Audio("img/navEasterEgg.mp3");
  const navLogoLoad = new Audio("img/logoEasterEgg.mp3");

  xboxOn.addEventListener("click", () => {
    sideNavChime.play();
  });
  xboxOn2.addEventListener("click", () => {
    sideNavChime.play();
  });
  xboxLoad.addEventListener("click", () => {
    navLogoLoad.play();
  });
};

audioEggs();
