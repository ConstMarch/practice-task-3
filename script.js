// Массив изображений для слайдера
const images = [

    'https://picsum.photos/id/1050/800/500',

    'https://picsum.photos/id/1015/800/500',

    'https://picsum.photos/id/1025/800/500',

    'https://picsum.photos/id/1045/800/500',

    'https://picsum.photos/id/1040/800/500'

];

let currentIndex = 0;

// Получение элементов DOM
const sliderImage = document.getElementById('slider-image');
const slideCounter = document.getElementById('slide-counter');
const btnPrev = document.getElementById('btn-prev');
const btnNext = document.getElementById('btn-next');


// Прелоад изображений (опционально, делает навигацию плавнее)
const preloaded = [];
images.forEach(src => {
    const img = new Image();
    img.src = src;
    preloaded.push(img);
});


//Обновление изображения и счетчика
function updateSlider() {
    // Небольшой эффект плавного перехода
    sliderImage.style.opacity = '0.3';
    
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        slideCounter.textContent = `Изображение ${currentIndex + 1} из ${images.length}`;
        sliderImage.style.opacity = '1';
    }, 150);
}

//Следующий слайд (с зацикливанием)
function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
}

//Предыдущий слайд (с зацикливанием)
function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateSlider();
}

// Назначение слушателей событий
btnNext.addEventListener('click', nextSlide);
btnPrev.addEventListener('click', prevSlide);

// Инициализация при загрузке
updateSlider();