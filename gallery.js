const BIG__PICTURE = document.querySelector(".rolloverGallery__bigPicture");
const PICTURE__CONTAINER = document.querySelector(".rolloverGallery__smallPictures");
const ALL__SRC = ["./asset/img/galleri01.jpg","./asset/img/galleri02.jpg","./asset/img/galleri03.jpg"];

let index = 0;
BIG__PICTURE.src = ALL__SRC[index];
ALL__SRC.forEach(function (imgSrc) {
    const IMG = document.createElement("img")
    IMG.src = imgSrc;
    IMG.classList.add("rolloverGallery__img")
    PICTURE__CONTAINER.appendChild(IMG);
});

const SMALL__PICTURES = PICTURE__CONTAINER.querySelectorAll(".rolloverGallery__img")

SMALL__PICTURES.forEach(function (picture, i) {
    picture.addEventListener("click", function () {
        index = i;
        BIG__PICTURE.src = ALL__SRC[index];
    });
});