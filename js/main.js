window.onload = function () {

    // emerge up-button
    window.onscroll = function () {
        let upButton = document.getElementById('up');
        if (window.scrollY > 500) {
            upButton.classList.remove('hidden');
        } else {
            upButton.classList.add('hidden');
        }
    };

    // open gallery pop-up
    document.getElementById('open-gallery').onclick = () => {
        let gallery = document.getElementById('gallery');
        gallery.classList.remove('hidden');
        gallery.classList.add('visible');
    };

    // gallery
    let currentSlideIndex = 1;
    let gallerySlides = document.getElementsByClassName('gallery-big-img');
    let galleryThumbs = document.getElementsByClassName('gallery-thumb');
    document.getElementById('gallery-prev').onclick = () => {
        listSlides(-1);
    };
    document.getElementById('gallery-next').onclick = () => {
        listSlides(1);
    };
    for ( let i = 0; i < galleryThumbs.length; i++) {
        galleryThumbs[i].onclick = () => {
            currentSlide(i+1);
        };
    }
    function listSlides (n) {
        showSlide(currentSlideIndex+=n);
    }
    function showSlide(n) {
        if (n > gallerySlides.length) {
            currentSlideIndex = 1;
        }
        if (n < 1) {
            currentSlideIndex = gallerySlides.length;
        }
        for (let i = 0; i < gallerySlides.length; i++) {
            gallerySlides[i].style.display = 'none';
        }
        for (let i = 0; i < galleryThumbs.length; i++) {
            if (galleryThumbs[i].classList.contains('active')) {
                galleryThumbs[i].classList.remove('active');
            }
        }
        gallerySlides[currentSlideIndex-1].style.display = 'block';
        galleryThumbs[currentSlideIndex-1].classList.add('active');
    }
    function currentSlide(n) {
        showSlide(currentSlideIndex = n);
    }

    //plus-minus amount price section
    let priceAmount = document.getElementById('amount');
    let priceAmountMinus = document.getElementById('amount-minus');
    let priceAmountPlus = document.getElementById('amount-plus');
    priceAmountMinus.onclick = () => {
        let currentPriceAmount = parseInt(priceAmount.innerText);
        if (currentPriceAmount > 1) {
            currentPriceAmount -= 1;
            priceAmount.innerText = currentPriceAmount.toString();
            priceAmount.classList.add('amount-animation');
            priceAmount.onanimationend = () => {
                priceAmount.classList.remove('amount-animation');
            }
        }
    }
    priceAmountPlus.onclick = () => {
        let currentPriceAmount = parseInt(priceAmount.innerText);
        currentPriceAmount += 1;
        priceAmount.innerText = currentPriceAmount.toString();
        priceAmount.classList.add('amount-animation');
        priceAmount.onanimationend = () => {
            priceAmount.classList.remove('amount-animation');
        }
    }
    //plus-minus amount in bestseller section
    let bestsellerAmount = document.getElementById('bestseller-current-amount');
    let bestsellerAmountMinus = document.getElementById('bestseller-amount-minus');
    let bestsellerAmountPlus = document.getElementById('bestseller-amount-plus');
    bestsellerAmountMinus.onclick = () => {
        let currentBestsellerAmount = parseInt(bestsellerAmount.innerText);
        if (currentBestsellerAmount > 1) {
            currentBestsellerAmount -= 1;
            bestsellerAmount.innerText = currentBestsellerAmount.toString();
            bestsellerAmount.classList.add('amount-animation');
            bestsellerAmount.onanimationend = () => {
                bestsellerAmount.classList.remove('amount-animation');
            }
        }
    }
    bestsellerAmountPlus.onclick = () => {
        let currentBestsellerAmount = parseInt(bestsellerAmount.innerText);
        currentBestsellerAmount += 1;
        bestsellerAmount.innerText = currentBestsellerAmount.toString();
        bestsellerAmount.classList.add('amount-animation');
        bestsellerAmount.onanimationend = () => {
            bestsellerAmount.classList.remove('amount-animation');
        }
    }

    //plus-minus amount in the tour section
    let tourAmountMinuses = document.getElementsByClassName('tour-amount-minus');
    for (let i = 0; i < tourAmountMinuses.length; i++) {
        tourAmountMinuses[i].addEventListener('click', () => {
            let tourAmountBlock = tourAmountMinuses[i].nextElementSibling;
            let tourAmount = parseInt(tourAmountBlock.innerText);
            if (tourAmount > 1) {
                tourAmount -=1;
                tourAmountBlock.innerText = tourAmount.toString();
                tourAmountBlock.classList.add('amount-animation');
                tourAmountBlock.onanimationend = () => {
                    tourAmountBlock.classList.remove('amount-animation');
                }
            }
        });
    }

    let tourAmountPluses = document.getElementsByClassName('tour-amount-plus');
    for (let i = 0; i < tourAmountPluses.length; i++) {
        tourAmountPluses[i].addEventListener('click', () => {
            let tourAmountBlock = tourAmountPluses[i].previousElementSibling;
            let tourAmount = parseInt(tourAmountBlock.innerText);
            tourAmount += 1;
            tourAmountBlock.innerText = tourAmount.toString();
            tourAmountBlock.classList.add('amount-animation');
            tourAmountBlock.onanimationend = () => {
                tourAmountBlock.classList.remove('amount-animation');
            }
        });
    }

    //goods
    let redWine = [
        {
            name: '«REINA» CUVEE PRESTIGE',
            shortName: 'Cuvee Prestige',
            year: '2018',
            type: 'Сухое красное',
            alcohol: '14%',
            volume: '0.5л',
            charText: 'Вино приятного глубокого красно-рубинового цвета. Обладает освежающим, мягким, сбалансированным вкусом с гладкими танинами и ягодными оттенками, продолжающимися в долгом послевкусии',
            gastroText: 'Вино рекомендуется подавать к паштетам, мясу птицы, свинине, мясным деликатесам и колбаскам',
            productPrice: 40,
            imageSrc: 'images/catalog/red-1.png',
            smallImageSrc: 'images/catalog/red-1-s.png'
        },
        {
            name: '«Senatore» Primitivo',
            shortName: 'Senatore',
            year: '2018',
            type: 'Сухое красное',
            alcohol: '13.5%',
            volume: '0.75л',
            charText: 'Ароматический букет вина интенсивный, настойчивый, изобилующий легкими пряными нюансами, нотами измельченных красных фруктов и нюансами специй',
            gastroText: 'Рекомендовано употреблять вино в паре с блюдами из мяса цыпленка, приправленного соевым соусом, луковым супом, сосисками с беконом и нарезкой из пармезана',
            productPrice: 40,
            imageSrc: 'images/catalog/red-2.png',
            smallImageSrc: 'images/catalog/red-2-s.png'
        },
        {
            name: 'Volpaia Il Puro Casanova',
            shortName: 'Volpaia Il Puro',
            year: '2013',
            type: 'Сухое красное',
            alcohol: '13.5%',
            volume: '0.75л',
            charText: 'Вкус вина аутентичный, интригующий и мягкий, обладает шелковистой текстурой, раскрывается нотами спелых темных фруктов, нюансами колы, семян аниса и дыма. Послевкусие невероятно продолжительное',
            gastroText: 'Вино составит превосходную пару разнообразным закускам и пастам, блюдам с жирными сортами рыбы и мяса, сырным нарезкам и морепродуктам на гриле. Вино идеально к десертам и вместо них',
            productPrice: 150,
            imageSrc: 'images/catalog/red-3.png',
            smallImageSrc: 'images/catalog/red-3-s.png'
        },
        {
            name: 'Vietti Nebbiolo «Perbacco»',
            shortName: 'Vietti Nebbiolo',
            year: '2015',
            type: 'Сухое красное',
            alcohol: '13.5%',
            volume: '0.75л',
            charText: 'Изысканный аромат вина изобилует оттенками малины, вишни, табака и карамели',
            gastroText: 'Вино прекрасно дополнит вкус тушеного мяса, дичи, жареного красного мяса и макаронных изделий с мясным соусом. Оно также составит замечательную пару с молодыми и выдержанными сырами',
            productPrice: 320,
            imageSrc: 'images/catalog/red-4.png',
            smallImageSrc: 'images/catalog/red-4-s.png'
        },
        {
            name: 'Marchese Antinori «Chianti Classico»',
            shortName: 'Marchese',
            year: '2018',
            type: 'Сухое красное',
            alcohol: '14%',
            volume: '1.5л',
            charText: 'Вкус вина обволакивающий, полный, с превосходной плотностью танинной структуры и хорошей живостью. Великолепное, долгое, стойкое послевкусие наполнено нотками красных фруктов и лакрицы',
            gastroText: 'Вино станет прекрасным сопровождением блюд из красного мяса, например — мяса, приготовленного на гриле, барбекю, жаркого из мяса птицы и дичи, а также сыров',
            productPrice: 140,
            imageSrc: 'images/catalog/red-5.png',
            smallImageSrc: 'images/catalog/red-5-s.png'
        },
        {
            name: 'Bonaunesy',
            shortName: 'Bonaunesy',
            year: '2020',
            type: 'Сухое красное',
            alcohol: '13%',
            volume: '0.75л',
            charText: 'Вино привлекает гармоничным, изысканным ароматом с доминирующими оттенками красных фруктов и пряностей',
            gastroText: 'Вино великолепно сочетается с дичью, красным мясом, сырами',
            productPrice: 80,
            imageSrc: 'images/catalog/red-6.png',
            smallImageSrc: 'images/catalog/red-6-s.png'
        }
    ];
    let whiteWine = [
        {
            name: 'Jermann «Vintage Tunina»',
            shortName: 'Vintage Tunina',
            year: '2017',
            type: 'Сухое белое',
            alcohol: '13.5%',
            volume: '0.75л',
            charText: 'Вино предлагает свежий, интенсивный, стойкий аромат, сотканный из нот цитрусовых фруктов, полевых цветов и свежих трав',
            gastroText: 'Вино хорошо сочетается с пастой с трюфелями, различными рыбными блюдами, особенно запеченной рыбой или под соусом, белым мясом',
            productPrice: 120,
            imageSrc: 'images/catalog/white.png',
            smallImageSrc: 'images/catalog/white-1-s.png'
        },
        {
            name: 'Guicciardini Strozy',
            shortName: 'Guicciardini',
            year: '2017',
            type: 'Сухое белое',
            alcohol: '14%',
            volume: '0.75л',
            charText: 'Открытый, богатый, с деликатными древесными нюансами, особенно проявляющимися с течением времени, а также оттенками ванили, жасмина, ракитника, спелой желтой сливы',
            gastroText: 'Вино наиболее полно раскрывается в сочетании с выдержанными сырами, рыбой и фруктами',
            productPrice: 30,
            imageSrc: 'images/catalog/white-2.png',
            smallImageSrc: 'images/catalog/white-2-s.png'
        },
        {
            name: 'Roc du Prince AOC',
            shortName: 'Roc du Prince',
            year: '2018',
            type: 'Полусладкое белое',
            alcohol: '11.5%',
            volume: '0.75л',
            charText: 'Привлекательный аромат вина наполнен чистыми цветочными и фруктовыми нотами. Вкус вина сухой, фруктовый, свежий, устойчивый, с приятной кислотностью и долгим послевкусием',
            gastroText: 'Вино рекомендуется подавать в качестве аперитива, с рыбными блюдами или белым мясом',
            productPrice: 12,
            imageSrc: 'images/catalog/white-3.png',
            smallImageSrc: 'images/catalog/white-3-s.png'
        },
        {
            name: 'Santero «Dile» D Moscato',
            shortName: 'Santero Dile',
            year: '2018',
            type: 'Полусладкое белое',
            alcohol: '11.5%',
            volume: '0.75л',
            charText: 'Вино типичного соломенно-желтого цвета, из которого исходит его лёгкий аромат, в окружении фруктов и цветов апельсина. Приятно сладкий вкус, усиленный естественным ароматом',
            gastroText: 'Идеально, чтобы подавать в свежем виде к десерту или в сочетании со свежими сезонными фруктами',
            productPrice: 8,
            imageSrc: 'images/catalog/white-4.png',
            smallImageSrc: 'images/catalog/white-4-s.png'
        },
        {
            name: 'Chartron La Fleur',
            shortName: 'Chartron',
            year: '2019',
            type: 'Сухое белое',
            alcohol: '11%',
            volume: '0.75л',
            charText: 'Богатый и гладкий вкус вина отличается хрустящей кислотностью и щедро наполнен фруктовыми тонами яблока, абрикоса и цитрусовых',
            gastroText: 'Вино идеально сочетается с курицей, рыбой и фруктовыми десертами',
            productPrice: 12,
            imageSrc: 'images/catalog/white-5.png',
            smallImageSrc: 'images/catalog/white-5-s.png'
        }
    ];
    let pinkWine = [
        {
            name: 'Lanson «Noble Cuvee»',
            shortName: 'Lanson Noble',
            year: '2020',
            type: 'Сухое розовое',
            alcohol: '12.5%',
            volume: '0.75л',
            charText: 'Аромат вина раскрывается нотами розы и фруктов, особенно выделяются тона вишни Монморенси',
            gastroText: 'Великолепный аперитив, также оно составит прекрасную пару изысканным блюдам: норвежским омарам с цитрусовыми, медальонам из оленины с черничным соусом, свежей лесной землянике',
            productPrice: 330,
            imageSrc: 'images/catalog/rose-1.png',
            smallImageSrc: 'images/catalog/rose-1-s.png'
        },
        {
            name: 'Philipponnat «Royal Reserve»',
            shortName: 'Philipponnat',
            year: '2020',
            type: 'Сухое розовое',
            alcohol: '12%',
            volume: '0.75л',
            charText: 'Аромат вина раскрывается тонами летних ягод (клубники, земляники) и нотами вишни. После аэрации появляются оттенки цитрусовых фруктов и цедры грейпфрута',
            gastroText: 'Вино является прекрасным аперитивом, хорошо сочетается с копченой рыбой, ветчиной, беконом, блюдами из телятины и баранины. Идеально дополняет летние ягодные десерты',
            productPrice: 10,
            imageSrc: 'images/catalog/rose-2.png',
            smallImageSrc: 'images/catalog/rose-2-s.png'
        },
        {
            name: 'Amour de Deutz',
            shortName: 'Amour de Deutz',
            year: '2020',
            type: 'Сухое розовое',
            alcohol: '12%',
            volume: '0.75л',
            charText: 'Тонкий и нежный аромат шампанского изобилует ягодными, ванильными и медовыми нотами. Дополняют букет оттенки марципана и лепестков роз',
            gastroText: 'Шампанское послужит хорошим аперитивом, гармонично сочетается с блюдами из морепродуктов, карпаччо из говядины, фруктами, различными десертами',
            productPrice: 440,
            imageSrc: 'images/catalog/rose-3.png',
            smallImageSrc: 'images/catalog/rose-3-s.png'
        },
        {
            name: 'Artazuri Garnacha',
            shortName: 'Artazuri',
            year: '2022',
            type: 'Полусухое розовое',
            alcohol: '13%',
            volume: '0.75л',
            charText: 'Свежий ароматный букет вина наполнен нотками красной вишни, малины, клубники, а также цветочными тонами акации и миндаля',
            gastroText: 'Вино идеально подходит к любому блюду, прекрасно в качестве аперитива',
            productPrice: 12,
            imageSrc: 'images/catalog/rose-4.png',
            smallImageSrc: 'images/catalog/rose-4-s.png'
        }
    ];
    let bestseller = {
        shortName: 'Mateus Rose',
        year: '2013',
        type: 'Сухое розовое',
        alcohol: '13%',
        volume: '0.75л',
        productPrice: 40,
        smallImageSrc: 'images/catalog/best-1-s.png'
    }
    let goods = [redWine, whiteWine, pinkWine];
    let allWine = [];
    for (let i = 0; i < goods.length; i++ ) {
        for (let j = 0; j < goods[i].length; j++) {
            allWine.push(goods[i][j]);
        }
    }
    //add-remove active class in price options
    let priceButtons = document.getElementsByClassName('option');
    for (let i = 0; i < priceButtons.length; i++) {
        priceButtons[i].addEventListener('click', () => {
            for (let j = 0; j < priceButtons.length; j++) {
                if (priceButtons[j].classList.contains('active')) {
                    priceButtons[j].classList.remove('active');
                }
                priceButtons[i].classList.add('active');
            }
        });
    }
    //price
    let currentImage = document.getElementById('current-price-image');
    let currentHeader = document.getElementById('current-price-header');
    let shortHeader = 'Cuvee Prestige';
    let smallImageSrc = 'images/catalog/red-1-s.png';
    let year = document.getElementById('year');
    let type = document.getElementById('type');
    let alcohol = document.getElementById('alcohol');
    let volume = document.getElementById('volume');
    let charText = document.getElementById('char-text');
    let gastroText = document.getElementById('gastro-text');
    let productPrice = document.getElementById('product-price');
    let pricePrevButton = document.getElementById('price-prev');
    let priceNextButton = document.getElementById('price-next');
    let priceDots = document.getElementById('price-dots');
    let priceCurrentAmount = document.getElementById('amount');
    //red wine
    let redWinesButton = document.getElementById('price_red');
    let lastSeenRedWine = 0;
    function showRedWine() {
        currentImage.setAttribute('src', redWine[lastSeenRedWine].imageSrc);
        currentHeader.innerText = redWine[lastSeenRedWine].name;
        year.innerText = redWine[lastSeenRedWine].year;
        type.innerText = redWine[lastSeenRedWine].type;
        alcohol.innerText = redWine[lastSeenRedWine].alcohol;
        volume.innerText = redWine[lastSeenRedWine].volume;
        charText.innerText = redWine[lastSeenRedWine].charText;
        gastroText.innerText = redWine[lastSeenRedWine].gastroText;
        productPrice.innerText = redWine[lastSeenRedWine].productPrice;
        shortHeader = redWine[lastSeenRedWine].shortName;
        smallImageSrc = redWine[lastSeenRedWine].smallImageSrc;
        priceCurrentAmount.innerText = "1";
    }
    function makeActiveDotForRedWine () {
        let priceSliderDots = document.getElementsByClassName('price-slider-dot');
        for (let i = 0; i < priceSliderDots.length; i++) {
            if (priceSliderDots[i].classList.contains('active')) {
                priceSliderDots[i].classList.remove('active');
            }
        }
        priceSliderDots[lastSeenRedWine].classList.add('active');
    }
    redWinesButton.addEventListener('click', showRedWine);
    redWinesButton.addEventListener('click', () => {
        priceDots.innerHTML = '<div class="slider-dot price-slider-dot"></div>';
        for (let i = 0; i < redWine.length-1; i++) {
            let sliderDot = document.createElement('div');
            sliderDot.classList.add('slider-dot');
            sliderDot.classList.add('price-slider-dot');
            priceDots.append(sliderDot);
        }
        makeActiveDotForRedWine();
    });
    redWinesButton.addEventListener('click', addEventsOnRedWineDots);
    function addEventsOnRedWineDots () {
        let dots = document.getElementsByClassName('price-slider-dot');
        for (let i = 0; i < dots.length; i++) {
            dots[i].onclick = () => {
                lastSeenRedWine = i;
                showRedWine();
                makeActiveDotForRedWine();
            }
        }
    }
    addEventsOnRedWineDots();
    //white wine
    let whiteWinesButton = document.getElementById('price_white');
    let lastSeenWhiteWine = 0;
    function showWhiteWine() {
        currentImage.setAttribute('src', whiteWine[lastSeenWhiteWine].imageSrc);
        currentHeader.innerText = whiteWine[lastSeenWhiteWine].name;
        year.innerText = whiteWine[lastSeenWhiteWine].year;
        type.innerText = whiteWine[lastSeenWhiteWine].type;
        alcohol.innerText = whiteWine[lastSeenWhiteWine].alcohol;
        volume.innerText = whiteWine[lastSeenWhiteWine].volume;
        charText.innerText = whiteWine[lastSeenWhiteWine].charText;
        gastroText.innerText = whiteWine[lastSeenWhiteWine].gastroText;
        productPrice.innerText = whiteWine[lastSeenWhiteWine].productPrice;
        shortHeader = whiteWine[lastSeenWhiteWine].shortName;
        smallImageSrc = whiteWine[lastSeenWhiteWine].smallImageSrc;
        priceCurrentAmount.innerText = "1";
    }
    function makeActiveDotForWhiteWine () {
        let priceSliderDots = document.getElementsByClassName('price-slider-dot');
        for (let i = 0; i < priceSliderDots.length; i++) {
            if (priceSliderDots[i].classList.contains('active')) {
                priceSliderDots[i].classList.remove('active');
            }
        }
        priceSliderDots[lastSeenWhiteWine].classList.add('active');
    }
    whiteWinesButton.addEventListener('click', showWhiteWine);
    whiteWinesButton.addEventListener('click', () => {
        priceDots.innerHTML = '<div class="slider-dot price-slider-dot"></div>';
        for (let i = 0; i < whiteWine.length-1; i++) {
            let sliderDot = document.createElement('div');
            sliderDot.classList.add('slider-dot');
            sliderDot.classList.add('price-slider-dot');
            priceDots.append(sliderDot);
        }
        makeActiveDotForWhiteWine();
    });
    whiteWinesButton.addEventListener('click', addEventsOnWhiteWineDots);
    function addEventsOnWhiteWineDots () {
        let dots = document.getElementsByClassName('price-slider-dot');
        for (let i = 0; i < dots.length; i++) {
            dots[i].onclick = () => {
                lastSeenWhiteWine = i;
                showWhiteWine();
                makeActiveDotForWhiteWine();
            }
        }
    }
    //pink wine
    let pinkWinesButton = document.getElementById('price_pink');
    let lastSeenPinkWine = 0;
    function showPinkWine() {
        currentImage.setAttribute('src', pinkWine[lastSeenPinkWine].imageSrc);
        currentHeader.innerText = pinkWine[lastSeenPinkWine].name;
        year.innerText = pinkWine[lastSeenPinkWine].year;
        type.innerText = pinkWine[lastSeenPinkWine].type;
        alcohol.innerText = pinkWine[lastSeenPinkWine].alcohol;
        volume.innerText = pinkWine[lastSeenPinkWine].volume;
        charText.innerText = pinkWine[lastSeenPinkWine].charText;
        gastroText.innerText = pinkWine[lastSeenPinkWine].gastroText;
        productPrice.innerText = pinkWine[lastSeenPinkWine].productPrice;
        shortHeader = pinkWine[lastSeenPinkWine].shortName;
        smallImageSrc = pinkWine[lastSeenPinkWine].smallImageSrc;
        priceCurrentAmount.innerText = "1";
    }
    function makeActiveDotForPinkWine () {
        let priceSliderDots = document.getElementsByClassName('price-slider-dot');
        for (let i = 0; i < priceSliderDots.length; i++) {
            if (priceSliderDots[i].classList.contains('active')) {
                priceSliderDots[i].classList.remove('active');
            }
        }
        priceSliderDots[lastSeenPinkWine].classList.add('active');
    }
    pinkWinesButton.addEventListener('click', showPinkWine);
    pinkWinesButton.addEventListener('click', () => {
        priceDots.innerHTML = '<div class="slider-dot price-slider-dot"></div>';
        for (let i = 0; i < pinkWine.length-1; i++) {
            let sliderDot = document.createElement('div');
            sliderDot.classList.add('slider-dot');
            sliderDot.classList.add('price-slider-dot');
            priceDots.append(sliderDot);
        }
        makeActiveDotForPinkWine();
    });
    pinkWinesButton.addEventListener('click', addEventsOnPinkWineDots);
    function addEventsOnPinkWineDots () {
        let dots = document.getElementsByClassName('price-slider-dot');
        for (let i = 0; i < dots.length; i++) {
            dots[i].onclick = () => {
                lastSeenPinkWine = i;
                showPinkWine();
                makeActiveDotForPinkWine();
            }
        }
    }
    // all wines
    let allWinesButton = document.getElementById('price_all');
    let lastSeenAllWine = 0;
    function showAllWine() {
        currentImage.setAttribute('src', allWine[lastSeenAllWine].imageSrc);
        currentHeader.innerText = allWine[lastSeenAllWine].name;
        year.innerText = allWine[lastSeenAllWine].year;
        type.innerText = allWine[lastSeenAllWine].type;
        alcohol.innerText = allWine[lastSeenAllWine].alcohol;
        volume.innerText = allWine[lastSeenAllWine].volume;
        charText.innerText = allWine[lastSeenAllWine].charText;
        gastroText.innerText = allWine[lastSeenAllWine].gastroText;
        productPrice.innerText = allWine[lastSeenAllWine].productPrice;
        shortHeader = allWine[lastSeenAllWine].shortName;
        smallImageSrc = allWine[lastSeenAllWine].smallImageSrc;
        priceCurrentAmount.innerText = "1";
    }
    function makeActiveDotForAllWine () {
        let priceSliderDots = document.getElementsByClassName('price-slider-dot');
        for (let i = 0; i < priceSliderDots.length; i++) {
            if (priceSliderDots[i].classList.contains('active')) {
                priceSliderDots[i].classList.remove('active');
            }
        }
        priceSliderDots[lastSeenAllWine].classList.add('active');
    }
    allWinesButton.addEventListener('click', showAllWine);
    allWinesButton.addEventListener('click', () => {
        priceDots.innerHTML = '<div class="slider-dot price-slider-dot"></div>';
        for (let i = 0; i < allWine.length-1; i++) {
            let sliderDot = document.createElement('div');
            sliderDot.classList.add('slider-dot');
            sliderDot.classList.add('price-slider-dot');
            priceDots.append(sliderDot);
        }
        makeActiveDotForAllWine();
    });
    allWinesButton.addEventListener('click', addEventsOnAllWineDots);
    function addEventsOnAllWineDots () {
        let dots = document.getElementsByClassName('price-slider-dot');
        for (let i = 0; i < dots.length; i++) {
            dots[i].onclick = () => {
                lastSeenAllWine = i;
                showAllWine();
                makeActiveDotForAllWine();
            }
        }
    }

    // prev-next buttons in the price-section
    priceNextButton.addEventListener('click', () => {
        if (redWinesButton.classList.contains('active')) {
            if (lastSeenRedWine >= redWine.length - 1) {
                lastSeenRedWine = 0;
                showRedWine();
                makeActiveDotForRedWine();
            } else {
                lastSeenRedWine += 1;
                showRedWine();
                makeActiveDotForRedWine();
            }
        } else if (whiteWinesButton.classList.contains('active')) {
            if (lastSeenWhiteWine >= whiteWine.length - 1) {
                lastSeenWhiteWine = 0;
                showWhiteWine();
                makeActiveDotForWhiteWine();
            } else {
                lastSeenWhiteWine += 1;
                showWhiteWine();
                makeActiveDotForWhiteWine();
            }
        } else if (pinkWinesButton.classList.contains('active')){
            if (lastSeenPinkWine >= pinkWine.length - 1) {
                lastSeenPinkWine = 0;
                showPinkWine();
                makeActiveDotForPinkWine();
            } else {
                lastSeenPinkWine += 1;
                showPinkWine();
                makeActiveDotForPinkWine();
            }
        } else {
            if (lastSeenAllWine >= allWine.length - 1) {
                lastSeenAllWine = 0;
                showAllWine();
                makeActiveDotForAllWine();
            } else {
                lastSeenAllWine += 1;
                showAllWine();
                makeActiveDotForAllWine();
            }
        }
    });

    pricePrevButton.addEventListener('click', () => {
        if (redWinesButton.classList.contains('active')) {
            if (lastSeenRedWine === 0) {
                lastSeenRedWine = redWine.length - 1;
                showRedWine();
                makeActiveDotForRedWine();
            } else {
                lastSeenRedWine -= 1;
                showRedWine();
                makeActiveDotForRedWine();
            }
        } else if (whiteWinesButton.classList.contains('active')) {
            if (lastSeenWhiteWine === 0) {
                lastSeenWhiteWine = whiteWine.length - 1;
                showWhiteWine();
                makeActiveDotForWhiteWine();
            } else {
                lastSeenWhiteWine -= 1;
                showWhiteWine();
                makeActiveDotForWhiteWine();
            }
        } else if (pinkWinesButton.classList.contains('active')) {
            if (lastSeenPinkWine === 0) {
                lastSeenPinkWine = pinkWine.length - 1;
                showPinkWine();
                makeActiveDotForPinkWine();
            } else {
                lastSeenPinkWine -= 1;
                showPinkWine();
                makeActiveDotForPinkWine();
            }
        } else {
            if (lastSeenAllWine === 0) {
                lastSeenAllWine = allWine.length - 1;
                showAllWine();
                makeActiveDotForAllWine();
            } else {
                lastSeenAllWine -= 1;
                showAllWine();
                makeActiveDotForAllWine();
            }
        }
    });

    // show previous orders amount in the basket icon and create localStorage if it doesn't exist
    let basketAmount = document.getElementById('basket-amount');
    if (localStorage.getItem('orders')) {
        basketAmount.innerText = JSON.parse(localStorage.getItem('orders')).length.toString();
    } else {
        localStorage.setItem('orders', JSON.stringify([]));
    }

    function setAmountInTheBasketIcon() {
        document.getElementById('basket-amount').innerText = JSON.parse(localStorage.getItem('orders')).length.toString();
    }


    //add-to-cart in the price section
    let priceActionButton = document.getElementById('price-action-button');
    priceActionButton.addEventListener('click', () => {
        priceActionButton.classList.add('add-to-basket-animation');
        priceActionButton.onanimationend = () => {
            priceActionButton.classList.remove('add-to-basket-animation');
        };
        let orders = JSON.parse(localStorage.getItem('orders'));
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].shortName === shortHeader) {
                let previousAmount = parseInt(orders[i].amount);
                let currentAdditionAmount = parseInt(document.getElementById('amount').innerText);
                let totalAmount = previousAmount + currentAdditionAmount;
                orders[i].amount = totalAmount.toString();
                orders[i].thisWineTotalCost = totalAmount * parseInt(orders[i].cost);
                localStorage.setItem('orders', JSON.stringify(orders));
                return;
            }
        }
        orders.push({
            shortName: shortHeader,
            type: type.innerText,
            alcohol: alcohol.innerText,
            cost: productPrice.innerText,
            amount: document.getElementById('amount').innerText,
            thisWineTotalCost: parseInt(productPrice.innerText) * parseInt(document.getElementById('amount').innerText),
            smallImageSrc: smallImageSrc
        });
        localStorage.setItem('orders', JSON.stringify(orders));
        setAmountInTheBasketIcon();
    });

    //add-to-cart bestseller section
    let bestsellerActionButton = document.getElementById('bestseller-action-button');
    bestsellerActionButton.addEventListener('click', () => {
        bestsellerActionButton.classList.add('add-to-basket-animation');
        bestsellerActionButton.onanimationend = () => {
            bestsellerActionButton.classList.remove('add-to-basket-animation');
        };
        let orders = JSON.parse(localStorage.getItem('orders'));
        for (let i = 0; i < orders.length; i++) {
            if (orders[i].shortName === bestseller.shortName) {
                let previousAmount = parseInt(orders[i].amount);
                let currentAdditionAmount = parseInt(document.getElementById('bestseller-current-amount').innerText);
                let totalAmount = previousAmount + currentAdditionAmount;
                orders[i].amount = totalAmount.toString();
                orders[i].thisWineTotalCost = totalAmount * parseInt(orders[i].cost);
                localStorage.setItem('orders', JSON.stringify(orders));
                return;
            }
        }
        orders.push({
            shortName: bestseller.shortName,
            type: bestseller.type,
            alcohol: bestseller.alcohol,
            cost: bestseller.productPrice,
            amount: document.getElementById('bestseller-current-amount').innerText,
            thisWineTotalCost: parseInt(bestseller.productPrice) * parseInt(document.getElementById('bestseller-current-amount').innerText),
            smallImageSrc: bestseller.smallImageSrc
        });
        localStorage.setItem('orders', JSON.stringify(orders));
        setAmountInTheBasketIcon();
    });


    //close pop-ups
    let popupsCloseSign = document.getElementsByClassName('close-popup');
    let popups = document.getElementsByClassName('popup-fon');
    for (let i = 0; i < popupsCloseSign.length; i++) {
        popupsCloseSign[i].onclick = () => {
            popupsCloseSign[i].parentElement.parentElement.classList.remove('visible');
            popupsCloseSign[i].parentElement.parentElement.classList.add('hidden');
        }
    }
    for (let i = 0; i < popups.length; i++) {
        popups[i].onclick = (e) => {
            if (e.target.classList.contains('popup-fon')) {
            popups[i].classList.remove('visible');
            popups[i].classList.add('hidden');
            }
        }
    }
    window.onkeydown = (e) => {
        if (e.key==='Escape'||e.key==='Esc') {
            for (let i = 0; i < popups.length; i++) {
                if (popups[i].classList.contains('visible')) {
                    popups[i].classList.remove('visible');
                    popups[i].classList.add('hidden');
                }
            }
        }
    };

    function openBasket() {
        let basketPopup = document.getElementById('open-basket');
        basketPopup.classList.remove('hidden');
        basketPopup.classList.add('visible');
    }

    function clearBasket() {
        let orderedWinesBlock = document.getElementById('ordered-wines');
        let orderedWinesInBasket = document.getElementsByClassName('ordered-wine');
        while (orderedWinesInBasket.length) {
            orderedWinesBlock.removeChild(orderedWinesInBasket[0]);
            orderedWinesInBasket = document.getElementsByClassName('ordered-wine');
            }
        }

    function createGoodsInBasket() {
        let orders = JSON.parse(localStorage.getItem('orders'));
        for (let i = 0; i < orders.length; i++) {
            let orderedWines = document.getElementById('ordered-wines');
            let orderedWine = document.createElement('div');
            orderedWine.classList.add('ordered-wine');
            orderedWines.appendChild(orderedWine);
            let orderedWineImg = document.createElement('div');
            orderedWineImg.classList.add('ordered-wine-img');
            orderedWine.appendChild(orderedWineImg);
            let smallImage = document.createElement('img');
            smallImage.src = orders[i].smallImageSrc;
            orderedWineImg.appendChild(smallImage);
            let orderedWineInfo = document.createElement('div');
            orderedWineInfo.classList.add('ordered-wine-info');
            orderedWine.appendChild(orderedWineInfo);
            let orderedWineName = document.createElement('div');
            orderedWineName.classList.add('ordered-wine-name');
            orderedWineName.innerText = orders[i].shortName;
            orderedWineInfo.appendChild(orderedWineName);
            let orderedWineTypeAlc = document.createElement('div');
            orderedWineTypeAlc.className = 'info-text ordered-wine-type-alc';
            let spanType = document.createElement('span');
            spanType.innerText = orders[i].type;
            orderedWineTypeAlc.appendChild(spanType);
            let br = document.createElement('br');
            orderedWineTypeAlc.appendChild(br);
            let spanAlc = document.createElement('span');
            spanAlc.innerText = 'Алк. ' + orders[i].alcohol;
            orderedWineTypeAlc.appendChild(spanAlc);
            orderedWineInfo.appendChild(orderedWineTypeAlc);
            let orderedWineCost = document.createElement('div');
            orderedWineCost.className = 'title-text ordered-wine-cost';
            orderedWineCost.innerText = '€';
            let spanCost = document.createElement('span');
            let currentAllCost = orders[i].thisWineTotalCost;
            currentAllCost = currentAllCost.toString();
            spanCost.innerText = currentAllCost;
            spanCost.classList.add('cost-in-the-basket')
            orderedWineCost.appendChild(spanCost);
            orderedWine.appendChild(orderedWineCost);
            let orderedWineAmountRegulation = document.createElement('div');
            orderedWineAmountRegulation.classList.add('ordered-wine-amount-regulation');
            let plusMinus = document.createElement('div');
            plusMinus.className = 'plus-minus basket-minus';
            plusMinus.innerText = '-';
            orderedWineAmountRegulation.appendChild(plusMinus);
            let orderedWineAmount = document.createElement('div');
            orderedWineAmount.className = 'btn-fill btn-fill-small';
            orderedWineAmount.innerText = orders[i].amount;
            orderedWineAmountRegulation.appendChild(orderedWineAmount);
            let plusMinus2 = document.createElement('div');
            plusMinus2.className = 'plus-minus basket-plus';
            plusMinus2.innerText = '+';
            orderedWineAmountRegulation.appendChild(plusMinus2);
            orderedWine.appendChild(orderedWineAmountRegulation);
            let orderedWineDel = document.createElement('div');
            orderedWineDel.classList.add('ordered-wine-del');
            let orderedWineDelImg = document.createElement('img');
            orderedWineDelImg.src = 'images/cancel.png';
            orderedWineDelImg.alt = 'cansel_order';
            orderedWineDelImg.classList.add('ordered-wine-del-img');
            orderedWineDel.appendChild(orderedWineDelImg);
            orderedWine.appendChild(orderedWineDel);
        }
    }

    function setAmountAndCostInTheBasket() {
        let orders = JSON.parse(localStorage.getItem('orders'));
        document.getElementById('basket-total-amount').innerText = orders.length.toString();
        let totalCost = 0;
        for (let i = 0; i < orders.length; i++) {
            totalCost += orders[i].thisWineTotalCost;
        }
        document.getElementById('basket-total-cost').innerText = totalCost.toString();
    }

    function createEventsOnMinusButtons() {
        let minuses = document.getElementsByClassName('basket-minus');
        for (let i = 0; i < minuses.length; i++) {
            minuses[i].onclick = () => {
                let amountBlock = minuses[i].nextElementSibling;
                let currentGoodAmount = parseInt(amountBlock.innerText);
                if (currentGoodAmount > 1) {
                    amountBlock.classList.add('amount-animation');
                    amountBlock.onanimationend = () => {
                        amountBlock.classList.remove('amount-animation');
                    }
                    currentGoodAmount -= 1;
                    amountBlock.innerText = currentGoodAmount.toString();
                    let thisWineTotalBlock = minuses[i].parentElement.parentElement.childNodes[2].childNodes[1];
                    let orders = JSON.parse(localStorage.getItem('orders'));
                    let thisWineHeaderBlock = minuses[i].parentElement.parentElement.childNodes[1].childNodes[0];
                    let thisWineHeader = thisWineHeaderBlock.innerText;
                    for (let j =0; j < orders.length; j++) {
                        if (orders[j].shortName === thisWineHeader) {
                            orders[j].thisWineTotalCost -= parseInt(orders[j].cost);
                            thisWineTotalBlock.innerText = orders[j].thisWineTotalCost.toString();
                            orders[j].amount = (parseInt(orders[j].amount)-1).toString();
                        }
                    }
                    localStorage.setItem('orders', JSON.stringify(orders));
                    setAmountAndCostInTheBasket();
                }
            }
        }
    }

    function createEventsOnPlusButtons() {
        let pluses = document.getElementsByClassName('basket-plus');
        for (let i = 0; i < pluses.length; i++) {
            pluses[i].onclick = () => {
                let amountBlock = pluses[i].previousElementSibling;
                let currentGoodAmount = parseInt(amountBlock.innerText);
                amountBlock.classList.add('amount-animation');
                amountBlock.onanimationend = () => {
                    amountBlock.classList.remove('amount-animation');
                }
                currentGoodAmount += 1;
                amountBlock.innerText = currentGoodAmount.toString();
                let thisWineTotalBlock = pluses[i].parentElement.parentElement.childNodes[2].childNodes[1];
                let orders = JSON.parse(localStorage.getItem('orders'));
                let thisWineHeaderBlock = pluses[i].parentElement.parentElement.childNodes[1].childNodes[0];
                let thisWineHeader = thisWineHeaderBlock.innerText;
                for (let j =0; j < orders.length; j++) {
                    if (orders[j].shortName === thisWineHeader) {
                        orders[j].thisWineTotalCost += parseInt(orders[j].cost);
                        thisWineTotalBlock.innerText = orders[j].thisWineTotalCost.toString();
                        orders[j].amount = (parseInt(orders[j].amount)+1).toString();
                    }
                }
                localStorage.setItem('orders', JSON.stringify(orders));
                setAmountAndCostInTheBasket();
            }
        }
    }

    function createEventsOnCloseSign() {
        let closeSigns = document.getElementsByClassName('ordered-wine-del-img');
        for (let i = 0; i < closeSigns.length; i++) {
            closeSigns[i].onclick = () => {
                let orders = JSON.parse(localStorage.getItem('orders'));
                let thisWineHeaderBlock = closeSigns[i].parentElement.parentElement.childNodes[1].childNodes[0];
                let thisWhineHeader = thisWineHeaderBlock.innerText;
                orders = orders.filter(obj => obj.shortName !== thisWhineHeader);
                localStorage.setItem('orders', JSON.stringify(orders));
                closeSigns[i].parentElement.parentElement.style.display = 'none';
                fixBasketDesign();
                setAmountAndCostInTheBasket();
                setAmountInTheBasketIcon();
            }
        }
    }

    function fixBasketDesign() {
        let basketAmount = JSON.parse(localStorage.getItem('orders')).length;
        let noOrders = document.getElementById('no-orders');
        let orderedWines = document.getElementById('ordered-wines');
        let winesCost = document.getElementsByClassName('ordered-wine-cost');
        let totalCost = document.getElementById('open-basket-total-cost');
        if (basketAmount === 0) {
            noOrders.className = 'info-text';
            orderedWines.style.overflowY = 'hidden';
            totalCost.style.marginRight = '0';
        }
        else if (basketAmount === 1 || basketAmount === 2) {
            noOrders.className = 'hidden';
            orderedWines.style.overflowY = 'hidden';
            for (let i = 0; i < winesCost.length; i++) {
                winesCost[i].style.marginLeft = '35px';
            }
            totalCost.style.marginRight = '35px';
        } else {
            noOrders.className = 'hidden';
            orderedWines.style.overflowY = 'scroll';
            totalCost.style.marginRight = '0';
        }
    }


    let basket = document.getElementById('basket');
    basket.addEventListener('click', openBasket);
    basket.addEventListener('click', clearBasket);
    basket.addEventListener('click', createGoodsInBasket);
    basket.addEventListener('click', fixBasketDesign);
    basket.addEventListener('click', setAmountAndCostInTheBasket);
    basket.addEventListener('click', createEventsOnMinusButtons);
    basket.addEventListener('click', createEventsOnPlusButtons);
    basket.addEventListener('click', createEventsOnCloseSign);


    //add-remove active class in philosophy steps
    let steps = document.getElementsByClassName('philosophy-step-and-sub-step');
    for (let i = 0; i < steps.length; i++) {
        steps[i].onclick = () => {
            for (let j = 0; j < steps.length; j++) {
                if (steps[j].classList.contains('active')) {
                    steps[j].classList.remove('active');
                }
                steps[i].classList.add('active');
            }
        }
        steps[i].onmouseover = () => {
            for (let j = 0; j < steps.length; j++) {
                if (steps[j].classList.contains('active')) {
                    steps[j].classList.remove('active');
                }
                steps[i].classList.add('active');
            }
        }
    }

    //video in philosophy block
    let playButton = document.getElementById('play-button');
    let videoPopup = document.getElementById('video-popup');
    playButton.onclick = () => {
        videoPopup.classList.remove('hidden');
        videoPopup.classList.add('visible');
    }

    // tours slides
    let tourSlideIndex = 1;
    let dots = document.getElementsByClassName('tours-dots');
    for (let i = 0; i < dots.length; i++) {
        dots[i].onclick = () => {
            currentToursSlide(i+1);
        }
    }
    document.getElementById('tours_prev').onclick = () => {
        listToursSlides(-1);
    };
    document.getElementById('tours_next').onclick = () => {
        listToursSlides(1);
    };

    function showToursSlides(n) {
        let slides = document.getElementsByClassName('tour-slide');
        if (n > slides.length) {
            tourSlideIndex = 1;
        }
        if (n < 1) {
            tourSlideIndex = slides.length;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].className = 'tour-slide hidden';
        }
        for (let i =0; i < dots.length; i++) {
            if (dots[i].classList.contains('active')) {
                dots[i].classList.remove('active');
            }
        }
        slides[tourSlideIndex-1].className = "tour-slide fade-in-animation";
        dots[tourSlideIndex-1].classList.add('active');
    }

    function listToursSlides(n) {
        showToursSlides(tourSlideIndex += n);
    }

    function currentToursSlide(n) {
        showToursSlides(tourSlideIndex = n);
    }


    // news pop-up slides
    let newsSlideIndex = 1;
    let newsDots = document.getElementsByClassName('news-slider-dot');
    for (let i = 0; i < newsDots.length; i++) {
        newsDots[i].onclick = () => {
            currentNewsSlide(i+1);
        }
    }
    document.getElementById('news-prev').onclick = () => {
        listNewsSlides(-1);
    };
    document.getElementById('news-next').onclick = () => {
        listNewsSlides(1);
    };

    function showNewsSlides(n) {
        let newsSlides = document.getElementsByClassName('blog-news-slide');
        if (n > newsSlides.length) {
            newsSlideIndex = 1;
        }
        if (n < 1) {
            newsSlideIndex = newsSlides.length;
        }
        for (let i = 0; i < newsSlides.length; i++) {
            newsSlides[i].className = 'blog-news-slide hidden';
        }
        for (let i =0; i < newsDots.length; i++) {
            if (newsDots[i].classList.contains('active')) {
                newsDots[i].classList.remove('active');
            }
        }
        newsSlides[newsSlideIndex-1].className = "blog-news-slide fade-news-animation";
        newsDots[newsSlideIndex-1].classList.add('active');
    }

    function listNewsSlides(n) {
        showNewsSlides(newsSlideIndex += n);
    }

    function currentNewsSlide (n) {
        showNewsSlides(newsSlideIndex = n);
    }

    //blog slider
    let blogSlideIndex = 1;
    let oneSlide = document.getElementsByClassName('blog-slide-img-first')[0];
    let oneSlideLength = oneSlide.offsetWidth;
    let oneSlideMarginLeft = parseInt(getComputedStyle(oneSlide).marginLeft);
    let oneSlideMarginRight = parseInt(getComputedStyle(oneSlide).marginRight);
    let oneSlideFullLength = oneSlideLength + oneSlideMarginLeft + oneSlideMarginRight;
    let blogSlider = document.getElementById('blog-slider');
    let blogSliderDots = document.getElementsByClassName('blog-slider-dot');
    let blogNextButton = document.getElementById('blog-next');
    let blogPrevButton = document.getElementById('blog-prev');
    let oddSlides = document.getElementsByClassName('blog-slide-img-first');
    let evenSlides = document.getElementsByClassName('blog-slide-text-first');
    let blogSlidesAmount = oddSlides.length + evenSlides.length;

    for (let i = 0; i < blogSliderDots.length; i++) {
        blogSliderDots[i].onclick = () => {
            currentBlogSlide(i+1);
        };
    }

    blogNextButton.addEventListener('click', () => {
        listBlogSlides(1);
    });
    blogPrevButton.addEventListener('click', () => {
        listBlogSlides(-1);
    });

    function listBlogSlides(n) {
        showBlogSlide(blogSlideIndex += n);
    }

    function currentBlogSlide(n) {
        showBlogSlide(blogSlideIndex = n);
    }

    function showBlogSlide(n) {
        if (n > blogSlidesAmount-1) {
            blogSlideIndex = 1;
        }
        if (n < 1) {
            blogSlideIndex = blogSlidesAmount-1;
        }
        if (blogSlideIndex === 1) {
            blogSlider.style.left = '0';
        }
        for (let i = 2; i < blogSlidesAmount; i++) {
            if (blogSlideIndex === i) {
            blogSlider.style.left = '-' + oneSlideFullLength * (i-1) +'px';
            }
        }
        for (let i =0; i < blogSliderDots.length; i++) {
            if (blogSliderDots[i].classList.contains('active')) {
                blogSliderDots[i].classList.remove('active');
            }
        }
        blogSliderDots[blogSlideIndex-1].classList.add('active');
    }

    //make orders in basket
    let basketButton = document.getElementById('basket-button');
    basketButton.addEventListener('click', () => {
        let orders = JSON.parse(localStorage.getItem('orders'));
        if (orders.length) {
            let basketInputs = document.getElementsByClassName('basket-input');
            for (let i = 0; i < basketInputs.length; i++) {
                basketInputs[i].style.borderColor = 'transparent';
            }
            let errorInputs = document.getElementsByClassName('input-error');
            for (let i = 0; i < errorInputs.length; i++) {
                errorInputs[i].classList.add('hidden');
            }
            let inputsHaveError = false;
            for (let i = 0; i < basketInputs.length; i++) {
                if (!basketInputs[i].value) {
                    let inputId = 'input-error-' + (i+1).toString();
                    document.getElementById(inputId).classList.remove('hidden');
                    basketInputs[i].style.borderColor = 'red';
                    inputsHaveError = true;
                }
            }
            if (!inputsHaveError) {
                let http = new XMLHttpRequest();
                http.open('POST', '../php/order.php');
                let newOrder = {};
                newOrder.name = basketInputs[0].value;
                newOrder.tel = basketInputs[1].value;
                newOrder.email = basketInputs[2].value;
                newOrder.orders = JSON.parse(localStorage.getItem('orders'));
                http.send(JSON.stringify(newOrder));
                http.onreadystatechange = function () {
                    let openBasket = document.getElementById('open-basket');
                    if (http.readyState === 4 && http.status === 200) {
                        openBasket.className = openBasket.className.replace('visible', 'hidden');
                        let thankYou = document.getElementById('thank-you');
                        thankYou.className = thankYou.className.replace('hidden', 'visible');
                        let emptyOrders = [];
                        localStorage.setItem('orders', JSON.stringify(emptyOrders));
                        setAmountInTheBasketIcon();
                    } else {
                        openBasket.className = openBasket.className.replace('visible', 'hidden');
                        let sendError = document.getElementById('send-error');
                        sendError.className = sendError.className.replace('hidden', 'visible');
                    }
                }
            }
        } else {
            let noOrders = document.getElementById('no-orders');
            noOrders.classList.add('no-orders-animation');
            noOrders.onanimationend = () => {
                noOrders.classList.remove('no-orders-animation');
            }
        }
    })

    // open tour pop-up
    let tourActionButtons = document.getElementsByClassName('tour-action-btn');
    let orderedTourAmount = '1';
    for (let  i = 0; i < tourActionButtons.length; i++) {
        tourActionButtons[i].onclick = () => {
            let tourPopup = document.getElementById('tour-popup');
            tourPopup.className = tourPopup.className.replace('hidden', 'visible');
            let tourActionAmounts = document.getElementsByClassName('tour-amount-current');
            orderedTourAmount = tourActionAmounts[i].innerText;
        }
    }
    // order tour
    let tourOrderButton = document.getElementById('tour-popup-action-btn');
    tourOrderButton.onclick = () => {
        let tourPopupInputs = document.getElementsByClassName('tour-popup-input');
        let inputsHaveError = false;
        for (let i = 0; i < tourPopupInputs.length; i++) {
            tourPopupInputs[i].style.borderColor = 'transparent';
        }
        for (let i = 0; i < tourPopupInputs.length; i++) {
            if (!tourPopupInputs[i].value) {
                tourPopupInputs[i].style.borderColor = 'red';
                inputsHaveError = true;
            }
        }
        if (!inputsHaveError) {
            let http = new XMLHttpRequest();
            http.open('POST', '../php/orderTour.php');
            let newTourOrder = {};
            newTourOrder.tourNumber = tourSlideIndex;  //defined earlier in the tours slides section
            newTourOrder.time = orderedTourTime;       //defined a little below in tour-popup time-options
            newTourOrder.amount = orderedTourAmount;   // defined a little earlier in open tour pop-up
            newTourOrder.name = tourPopupInputs[0].value;
            newTourOrder.date = tourPopupInputs[1].value;
            newTourOrder.email = tourPopupInputs[2].value;
            http.send(JSON.stringify(newTourOrder));
            http.onreadystatechange = function () {
                let tourPopup = document.getElementById('tour-popup');
                if (http.readyState === 4 && http.status === 200) {
                    tourPopup.className = tourPopup.className.replace('visible', 'hidden');
                    let tourThankYou = document.getElementById('tour-thank-you');
                    tourThankYou.className = tourThankYou.className.replace('hidden', 'visible');
                } else {
                    tourPopup.className = tourPopup.className.replace('visible', 'hidden');
                    let sendError = document.getElementById('send-error');
                    sendError.className = sendError.className.replace('hidden', 'visible');
                }
            }
        }
    }

    //tour-popup date-input
    document.getElementById('tour-date-input').onfocus = function () {
        this.type='date';
    }
    document.getElementById('calendar').onclick = function () {
        document.getElementById('tour-date-input').type='date';
    }

    //tour-popup time-options
    let tourTimeOptions = document.getElementsByClassName('tour-time-options');
    let orderedTourTime = tourTimeOptions[0].nextElementSibling.innerText;
    for (let i = 0; i < tourTimeOptions.length; i++) {
        tourTimeOptions[i].onclick = () => {
            for (let j = 0; j < tourTimeOptions.length; j++) {
                if (tourTimeOptions[j].classList.contains('active')) {
                    tourTimeOptions[j].classList.remove('active');
                }
            }
            tourTimeOptions[i].classList.add('active');
            orderedTourTime = tourTimeOptions[i].nextElementSibling.innerText;
        }
    }

    //open news pop-up
    let readMoreButtons = document.getElementsByClassName('blog-action');
    for (let i = 0; i < readMoreButtons.length; i++) {
        readMoreButtons[i].onclick = () => {
            let newsPopup = document.getElementById('news-popup');
            newsPopup.classList.remove('hidden');
            newsPopup.classList.add('visible');
            newsSlideIndex = i + 1;
            showNewsSlides(newsSlideIndex);
        }
    }

    //subscribe
    document.getElementById('subscribe-btn').onclick = () => {
        let subscribeInput = document.getElementById('subscribe-input');
        subscribeInput.style.borderColor = '#CFAA7F';
        if (subscribeInput.value) {
            let http = new XMLHttpRequest();
            http.open('POST', '../php/subscribe.php');
            let newSubscriber = {};
            newSubscriber.email = subscribeInput.value;
            http.send(JSON.stringify(newSubscriber));
            http.onreadystatechange = function () {
                if (http.readyState === 4 && http.status === 200) {
                    subscribeInput.value = 'Вы подписались!';
                } else {
                    subscribeInput.value = 'Ошибка запроса';
                    subscribeInput.classList.add('subscribe-error');
                    subscribeInput.onanimationend = () => {
                        subscribeInput.classList.remove('subscribe-error');
                        subscribeInput.value = '';
                    }
                }
            }
        }
        else {
            subscribeInput.style.borderColor = 'red';
        }
    }

    // WOW! animations
    new WOW({
        animateClass: 'animate__animated'
    }).init();

};