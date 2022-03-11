const images = document.querySelectorAll(".wrapper .image img");
const gallery = document.querySelector(".gallery");
const galleryImg = document.querySelector(".gallery-inner img");

const close = document.querySelector(".gallery .close");
const next = document.querySelector(".control.next");
const prev = document.querySelector(".control.prev");

let currentIndex = 0;

images.forEach((img,index) => {
    img.addEventListener('click', () => {
        currentIndex = index
        showGallery()
    })
})

function showGallery(){
    if(currentIndex == images.length - 1){
        next.classList.add('hide')
    }else{
        next.classList.remove('hide')
    }

    if(currentIndex == 0){
        prev.classList.add('hide')
    }else{
        prev.classList.remove('hide')
    }

    gallery.classList.add('show')
    galleryImg.src = images[currentIndex].src
}

close.addEventListener('click', () => {
    gallery.classList.remove('show')
    
})

document.addEventListener('keydown', (e) => {
    if(e.keyCode == 27){
        gallery.classList.remove('show')
    }
})

next.addEventListener('click', () => {
    if(currentIndex != images.length - 1){
        currentIndex++;
    }else undefined
    showGallery()
})
prev.addEventListener('click', () => {
    if(currentIndex != 0){
        currentIndex--;
    }else undefined
    showGallery()
})

