
document.addEventListener('DOMContentLoaded', (event) => {
    const dropMenu = document.getElementById('dropMenu');
    const clickMenu = document.getElementById('clickMenu');

    document.addEventListener('click', (event) => {
        if (clickMenu.contains(event.target)) {
            dropMenu.classList.toggle('hidden');
            dropMenu.classList.toggle('dropMenu');
        } else {
            if (!dropMenu.classList.contains('hidden')) {
                dropMenu.classList.add('hidden');
            }
        }
    });
});
var swiper = new Swiper(".slideSwiper", {
    slidesPerView: 3.5,
    spaceBetween: 30,

    navigation: {
        nextEl: ".NextBut",
        prevEl: ".preBut",
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        }
    }
});

var swiper = new Swiper(".thietBiSwiper", {
    slidesPerView: 6,
    spaceBetween: 30,
    navigation: {
        nextEl: ".NextButtb",
        prevEl: ".preButtb",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3.5,
            spaceBetween: 30,
        }
    }
});
var thumbnail = document.getElementById("thumbnail");

var video = document.getElementById("youtube-video");


thumbnail.addEventListener("click", function () {

    thumbnail.classList.add("hidden");

    video.classList.remove("hidden");
});