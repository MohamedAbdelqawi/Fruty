let iconshop = document.querySelector("#Shop");
let search = document.querySelector("#search");
let menu = document.querySelector("#menu-btn");
let searchform = document.querySelector(".search-form");
let navitems = document.querySelector(".nav-items");
let nav = document.querySelector(".nav");
menu.onclick = function () {
  navitems.classList.toggle("active");
  searchform.classList.remove("active");
};

search.onclick = function () {
  searchform.classList.toggle("active");
  navitems.classList.remove("active");
};

window.onscroll = function () {
  searchform.classList.remove("active");
  navitems.classList.remove("active");

  if (window.scrollY > 20) {
    nav.style.margin = "0";
    nav.style.width = "100%";
    nav.style.position = "fixed";
  } else {
    nav.style.margin = "2% 7.5% 0";
    nav.style.width = "85%";
  }
  if (window.scrollY > 600) {
    buttonup.style.display = "block";
  } else {
    buttonup.style.display = "none";
  }
};

let buttonup = document.querySelector(".up");

buttonup.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

let firstname = document.querySelector(".first");
let lastname = document.querySelector(".Last");
let email = document.querySelector(".email");
document.forms[0].onsubmit = function (e) {
  let first = false;
  if (firstname.value != "" && lastname.value != "" && email.value != "") {
    first = true;
  }
  if (first === false) {
    e.preventDefault();
  }
};

let sd = document.querySelector(".d1");
let sh = document.querySelector(".d2");
let sm = document.querySelector(".d3");
let sc = document.querySelector(".d4");
let time = setInterval(() => {
  sc.innerHTML++;
  if (sc.innerHTML == 60) {
    if (sm.innerHTML != 0) {
      sm.innerHTML--;
      sc.innerHTML = 0;
    } else {
      sm.innerHTML = 0;
    }

    if (sm.innerHTML == 0 && sh.innerHTML != 0) {
      sh.innerHTML--;
      sm.innerHTML = 60;
    } else if (sh.innerHTML == 0 && sm.innerHTML == 0) {
      sh.innerHTML = 0;
      sm.innerHTML = 0;
    }

    if (sh.innerHTML == 0 && sd.innerHTML != 0) {
      sd.innerHTML--;
      sh.innerHTML = 23;
    } else if (sh.innerHTML == 0 && sd.innerHTML == 0) {
      sh.innerHTML = 0;
      sd.innerHTML = 0;
    } else if (sh.innerHTML != 0 && sd.innerHTML == 0) {
      sd.innerHTML = 0;
    }

    if (
      sd.innerHTML == 0 &&
      sh.innerHTML == 0 &&
      sm.innerHTML == 0 &&
      sc.innerHTML == 0
    ) {
      clearInterval(time);
    }
  }
}, 1000);

var i = 0;
var images = []; //array
var timee = 2000; // time in millie seconds

//images

images[0] = "url(img/background/hero-bg1.jpg)";
images[1] = "url(img/background/hero-bg2.jpg)";
images[2] = "url(img/background/hero-bg3.jpg)";
//function

function changeImage() {
  var el = document.getElementById("ff");
  el.style.backgroundImage = images[i];
  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImage()", timee);
}

window.onload = changeImage;

///////////////////

let addproduct = document.querySelector(".add-product");
let addddd = document.querySelector(".cc");
let btnadd = document.querySelectorAll(".btn");
let countnum = document.querySelector(".count");
let num = document.querySelector(".nm");
let count = 0;
num.textContent = 0;
btnadd.forEach((ele) => {
  ele.addEventListener("click", function () {
    let clos = document.querySelectorAll(".bb");

    if (ele.textContent == "added") {
      clos.forEach((e) => {
        if (e.src == ele.parentElement.firstElementChild.src) {
          e.parentElement.remove();
          count--;
          num.textContent = count;
          countnum.innerHTML = count;
          ele.textContent = "Add To Cart";
        }
      });
    } else if (ele.textContent == "Add To Cart") {
      count++;
      num.textContent = count;
      countnum.innerHTML = count;
      ele.textContent = "added";
      let div1 = document.createElement("div");
      div1.classList.add("div1style");

      let im = document.createElement("img");
      im.classList.add("bb");
      im.setAttribute("src", "");

      im.src = `${ele.parentElement.firstElementChild.src}`;
      div1.appendChild(im);

      let inerdiv = document.createElement("div");
      inerdiv.classList.add("inerdivstyle");
      let h44 = document.createElement("h4");
      h44.innerHTML = "Product Details";
      inerdiv.appendChild(h44);

      let p1 = document.createElement("p");
      p1.innerHTML = "Product name:Fresh Orange";
      inerdiv.appendChild(p1);

      let p2 = document.createElement("p");
      p2.innerHTML = "Price:140Tk/kg";
      inerdiv.appendChild(p2);

      let p3 = document.createElement("p");
      p3.innerHTML = "Discount:20%";
      inerdiv.appendChild(p3);

      let p4 = document.createElement("p");
      p3.innerHTML = "Quantity: <span><input></span>KG";
      inerdiv.appendChild(p3);

      let p5 = document.createElement("p");
      p5.innerHTML = "Preservatives:No";
      inerdiv.appendChild(p5);

      let timenow = new Date().toLocaleString();

      let p6 = document.createElement("p");
      p6.innerHTML = `Added Time:${timenow}`;
      inerdiv.appendChild(p6);

      let divbtn = document.createElement("div");
      divbtn.classList.add("divbtnnn");
      let addbuy = document.createElement("p");
      addbuy.classList.add("buy1");
      addbuy.innerHTML = "Add to Buy";
      divbtn.appendChild(addbuy);

      let addremov = document.createElement("p");
      addremov.classList.add("remov1");
      addremov.innerHTML = "Remove Item";
      divbtn.appendChild(addremov);

      inerdiv.appendChild(divbtn);
      div1.appendChild(inerdiv);
      addddd.appendChild(div1);

      addremov.onclick = () => {
        addremov.parentElement.parentElement.parentElement.remove();
        count--;
        num.textContent--;
        countnum.innerHTML--;
        ele.textContent = "Add To Cart";
      };
      addbuy.onclick = () => {
        let yy = document.querySelector(".yy");

        if (addbuy.innerHTML == "Add to Buy") {
          addbuy.innerHTML = "added";
          yy.innerHTML++;
        } else if (addbuy.innerHTML == "added") {
          addbuy.innerHTML = "Add to Buy";
          yy.innerHTML--;
        }
      };
    }
  });
});

///////////////////////
let closecard = document.querySelector(".close");

closecard.onclick = function () {
  addproduct.style.transform = " scaleY(0)";

  document.body.style.overflow = "visible";
};

////////////////
let show = document.getElementById("Shop");

show.onclick = function () {
  addproduct.style.transform = " scaleY(1)";
  document.body.style.overflow = "hidden";
};

//////////////////////

let hart = document.querySelectorAll(".fa-heart");
let hgg = document.querySelector(".pp ");

let oo = document.querySelector(".oo");

hart.forEach((l) => {
  l.addEventListener("click", function () {
    let ff = l.parentElement.parentElement.parentElement.cloneNode(true);

    ff.classList.add("ww");
    let gg = document.querySelectorAll(".ww");

    if (l.style.backgroundColor == "black") {
      l.style.backgroundColor = "green";
      gg.forEach((g) => {
        console.log(g.firstElementChild.firstElementChild.src);

        if (
          g.firstElementChild.firstElementChild.src ==
          l.parentElement.parentElement.firstElementChild.src
        ) {
          g.remove();
          oo.innerHTML--;
        }
      });
    } else {
      l.style.backgroundColor = "black";
      hgg.appendChild(ff);

      oo.innerHTML++;
    }
  });
});

///////////////
let sele1 = document.querySelector(".sele1");
let sele2 = document.querySelector(".sele2");

let kk = document.querySelector(".kk");
let fav = document.querySelector(".fav");
sele1.onclick = () => {
  sele2.style.color = "black";
  sele1.style.color = "red";
  kk.classList.toggle("active");
  kk.classList.remove("hide");

  fav.classList.remove("active");
};

sele2.onclick = () => {
  sele2.style.color = "red";
  sele1.style.color = "black";
  fav.classList.toggle("active");
  kk.classList.remove("active");
  kk.classList.add("hide");
};
