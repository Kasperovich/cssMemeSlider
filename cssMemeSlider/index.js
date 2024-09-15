ChangeSlide(0);
activeButton(0)
imageResize();

function ChangeSlide(memeNumber){
    var slider = document.getElementsByClassName('slider-all')[0];

    slider.style.transform = 'translate(-'+slider.parentNode.offsetWidth * memeNumber+'px)';
    activeButton(memeNumber);
}

function imageResize(){
    //Получаем блок слайдера
    var sliderAll = document.getElementsByClassName('slider-all')[0];
    var sliderItems = document.getElementsByClassName('slider-all-item');

    //Изменение ширины изображения согласно ширине слайдера 
    Array.from(sliderItems).forEach(item=>{
        item.style.width = sliderAll.offsetWidth + 'px';
    });
}

function activeButton(memeNumber){
    var buttonCircle = document.getElementsByClassName('circle');
    var index = 0;

    Array.from(buttonCircle).forEach(item=>{

        item.classList.remove('footer-navigation-button-circle1');
        item.classList.remove('footer-navigation-button-circle');

        if(index == memeNumber)
            item.classList.add('footer-navigation-button-circle1');
        else 
            item.classList.add('footer-navigation-button-circle');
        index++;
    });
}

window.addEventListener('resize', function() {
    ChangeSlide(0);
    activeButton(0)
    imageResize();
});