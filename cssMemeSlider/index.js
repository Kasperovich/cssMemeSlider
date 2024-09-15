function imageResize(){
    //Получаем блок слайдера
    var slider = document.getElementsByClassName('slider-all')[0];
    var sliderItems = document.querySelectorAll('.slider-all img');

    //Изменение ширины изображения согласно ширине слайдера 
    sliderItems.forEach(item=>{
        item.style.width = slider.style.width;
    });
}

window.addEventListener('resize', function() {
    imageResize();
    console.log('resize');
});