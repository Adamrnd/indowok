
/* ==========================================
   1. МОБИЛЬНОЕ МЕНЮ
========================================== */

const burger = document.querySelector("#burger");
const navigation = document.querySelector("#navigation");

if (burger && navigation) {

    function toggleMenu() {
        const isOpen = navigation.classList.toggle("is-open");

        burger.classList.toggle("is-active", isOpen);
        burger.setAttribute("aria-expanded", isOpen);
        burger.setAttribute(
            "aria-label",
            isOpen ? "Закрыть меню" : "Открыть меню"
        );
    }

    function closeMenu() {
        navigation.classList.remove("is-open");
        burger.classList.remove("is-active");

        burger.setAttribute("aria-expanded", "false");
        burger.setAttribute("aria-label", "Открыть меню");
    }

    burger.addEventListener("click", toggleMenu);

    navigation.querySelectorAll(".navigation__link").forEach(link => {
        link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeMenu();
    });

    document.addEventListener("click", event => {
        if (
            !navigation.contains(event.target) &&
            !burger.contains(event.target)
        ) {
            closeMenu();
        }
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 768) closeMenu();
    });
}


/* ==========================================
   2. ДАННЫЕ ГАЛЕРЕИ
   Фотографии и описания меняются здесь
========================================== */

const galleryDishes = [
    {
        image: "images/Говядина в перечном.png",
        category: "ГОРЯЧИЕ БЛЮДА",
        title: "Говядина в перечном соусе",
        description: "Нежная говядина, болгарский перец, лук, в перечном соусе"
    },
    {
        image: "images/гунбао.png",
        category: "ГОРЯЧИЕ БЛЮДА",
        title: "Курица Гунбао",
        description: "Классическое китайское блюдо с ярким вкусом."
    },
    {
        image: "images/фобо.png",
        category: "СУПЫ",
        title: "Фо Бо",
        description: "Ароматный вьетнамский суп с говядиной."
    },
    {
        image: "images/том ям.png",
        category: "СУПЫ",
        title: "Том Ям с морепродуктами",
        description: "Пряный суп с насыщенным азиатским характером."
    },
    {
        image: "images/удон с говядиной.png",
        category: "ЛАПША",
        title: "Удон с говядиной",
        description: "Пшеничная лапша с говядиной в перечном соусе."
    },
    {
        image: "images/креветки.png",
        category: "ЗАКУСКИ",
        title: "Креветки темпура",
        description: "Креветки в хрустящей золотистой оболочке."
    }
];


/* ==========================================
   3. СОЗДАНИЕ СЛАЙДОВ
========================================== */

function createSlide(dish) {
    const slide = document.createElement("div");
    slide.className = "gallery-slide";

    const image = document.createElement("img");
    image.className = "gallery-slide__image";
    image.src = dish.image;
    image.alt = dish.title;
    image.loading = "lazy";

    const overlay = document.createElement("div");
    overlay.className = "gallery-slide__overlay";

    const category = document.createElement("span");
    category.className = "gallery-slide__category";
    category.textContent = dish.category;

    const title = document.createElement("h3");
    title.className = "gallery-slide__title";
    title.textContent = dish.title;

    const description = document.createElement("p");
    description.className = "gallery-slide__description";
    description.textContent = dish.description;

    overlay.append(category, title, description);
    slide.append(image, overlay);

    return slide;
}


/* ==========================================
   4. ИНИЦИАЛИЗАЦИЯ ГАЛЕРЕЙ
========================================== */

const galleryPanels = document.querySelectorAll(".gallery-panel");

galleryPanels.forEach(panel => {

    const galleryType = panel.dataset.gallery;

    let dishes;

    if (galleryType === "left") {
        dishes = galleryDishes.slice(0, 3);
    } else if (galleryType === "right") {
        dishes = galleryDishes.slice(3, 6);
    } else {
        dishes = galleryDishes;
    }

    const slidesContainer = panel.querySelector(".gallery-panel__slides");
    const dotsContainer = panel.querySelector(".gallery-dots");
    const prevButton = panel.querySelector("[data-prev]");
    const nextButton = panel.querySelector("[data-next]");

    let currentIndex = 0;
    let timer = null;
    let paused = false;

    const slides = dishes.map(dish => {
        const slide = createSlide(dish);
        slidesContainer.appendChild(slide);
        return slide;
    });

    const dots = dishes.map((dish, index) => {
        const dot = document.createElement("button");

        dot.className = "gallery-dot";
        dot.setAttribute("aria-label", `Показать блюдо ${index + 1}`);

        dot.addEventListener("click", () => {
            showSlide(index);
            restartTimer();
        });

        dotsContainer.appendChild(dot);

        return dot;
    });

    function showSlide(index) {
        currentIndex = (index + dishes.length) % dishes.length;

        slides.forEach((slide, i) => {
            slide.classList.toggle("is-active", i === currentIndex);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("is-active", i === currentIndex);
        });
    }

    function nextSlide() {
        showSlide(currentIndex + 1);
    }

    function prevSlide() {
        showSlide(currentIndex - 1);
    }

    function stopTimer() {
        clearInterval(timer);
        timer = null;
    }

    function startTimer() {
        stopTimer();

        if (paused || document.hidden) return;

        timer = setInterval(nextSlide, 5000);
    }

    function restartTimer() {
        startTimer();
    }

    prevButton.addEventListener("click", () => {
        prevSlide();
        restartTimer();
    });

    nextButton.addEventListener("click", () => {
        nextSlide();
        restartTimer();
    });

    panel.addEventListener("mouseenter", () => {
        paused = true;
        stopTimer();
    });

    panel.addEventListener("mouseleave", () => {
        paused = false;
        startTimer();
    });

    panel.addEventListener("focusin", () => {
        paused = true;
        stopTimer();
    });

    panel.addEventListener("focusout", event => {
        if (!panel.contains(event.relatedTarget)) {
            paused = false;
            startTimer();
        }
    });

    // Свайп на телефоне
    let touchStartX = 0;

    panel.addEventListener("touchstart", event => {
        touchStartX = event.changedTouches[0].screenX;
        paused = true;
        stopTimer();
    }, { passive: true });

    panel.addEventListener("touchend", event => {
        const touchEndX = event.changedTouches[0].screenX;
        const difference = touchStartX - touchEndX;

        if (Math.abs(difference) > 50) {
            difference > 0 ? nextSlide() : prevSlide();
        }

        paused = false;
        startTimer();
    }, { passive: true });

    document.addEventListener("visibilitychange", () => {
        if (document.hidden) {
            stopTimer();
        } else {
            startTimer();
        }
    });

    showSlide(0);
    startTimer();
});

/* ==========================================
   5. ПАРАЛЛАКС ФОНА ПРЕИМУЩЕСТВ
========================================== */

const advantagesSection = document.querySelector(".advantages");
const advantagesImage = document.querySelector(
    ".advantages__background img"
);

if (advantagesSection && advantagesImage) {
    let ticking = false;

    function updateAdvantagesParallax() {
        const rect = advantagesSection.getBoundingClientRect();
        const offset = -rect.top * 0.15;

        advantagesImage.style.transform =
            `translate3d(0, ${offset}px, 0)`;

        ticking = false;
    }

    function requestParallaxUpdate() {
        if (!ticking) {
            requestAnimationFrame(updateAdvantagesParallax);
            ticking = true;
        }
    }

    window.addEventListener("scroll", requestParallaxUpdate, {
        passive: true
    });

    window.addEventListener("resize", requestParallaxUpdate);

    updateAdvantagesParallax();
}


/* ==============================
   REVIEWS SLIDER
============================== */

const reviewsTrack = document.querySelector('.reviews__track');

if (reviewsTrack) {
    const prevButton = document.querySelector('.reviews__arrow--prev');
    const nextButton = document.querySelector('.reviews__arrow--next');
    const dotsContainer = document.querySelector('.reviews__dots');
    const reviewCards = Array.from(
        reviewsTrack.querySelectorAll('.review-card')
    );

    let currentReview = 0;

    reviewCards.forEach((card, index) => {
        const dot = document.createElement('button');

        dot.className = 'reviews__dot';
        dot.type = 'button';
        dot.setAttribute('aria-label', `Отзыв ${index + 1}`);

        dot.addEventListener('click', () => {
            currentReview = index;
            updateReviews();
        });

        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(
        dotsContainer.querySelectorAll('.reviews__dot')
    );

    function updateReviews() {
        if (window.innerWidth > 600) return;

        reviewsTrack.scrollTo({
            left: reviewCards[currentReview].offsetLeft -
                  reviewCards[0].offsetLeft,
            behavior: 'smooth'
        });

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentReview);
        });
    }

    prevButton.addEventListener('click', () => {
        currentReview =
            (currentReview - 1 + reviewCards.length) % reviewCards.length;

        updateReviews();
    });

    nextButton.addEventListener('click', () => {
        currentReview = (currentReview + 1) % reviewCards.length;
        updateReviews();
    });

    reviewsTrack.addEventListener('scroll', () => {
        if (window.innerWidth > 600) return;

        const trackPosition = reviewsTrack.scrollLeft;

        let closestIndex = 0;
        let closestDistance = Infinity;

        reviewCards.forEach((card, index) => {
            const distance = Math.abs(
                card.offsetLeft - reviewCards[0].offsetLeft - trackPosition
            );

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = index;
            }
        });

        currentReview = closestIndex;

        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentReview);
        });
    });

    updateReviews();
}

/* ========================================
   ACTIVE HEADER NAVIGATION
======================================== */

document.addEventListener("DOMContentLoaded", () => {
    const navigation = document.querySelector("#navigation");

    if (!navigation) return;

    const links = navigation.querySelectorAll(".navigation__link");

    const currentPage = window.location.pathname.split("/").pop();

    // На странице меню всегда активен пункт «Меню»
    if (currentPage === "menu.html") {
        links.forEach(link => {
            link.classList.remove("navigation__link--active");

            if (link.getAttribute("href") === "menu.html") {
                link.classList.add("navigation__link--active");
            }
        });

        return;
    }

    // На главной отслеживаем разделы страницы
    const sectionIds = ["delivery", "about", "contacts"];

    const sections = sectionIds
        .map(id => document.getElementById(id))
        .filter(Boolean);

    function setActiveLink(target) {
        links.forEach(link => {
            link.classList.remove("navigation__link--active");

            const href = link.getAttribute("href");

            if (href === target) {
                link.classList.add("navigation__link--active");
            }
        });
    }

    function updateNavigation() {
        let activeSection = null;

        sections.forEach(section => {
            if (section.getBoundingClientRect().top <= 160) {
                if (
                    !activeSection ||
                    section.getBoundingClientRect().top >
                    activeSection.getBoundingClientRect().top
                ) {
                    activeSection = section;
                }
            }
        });

        if (activeSection) {
            setActiveLink(`#${activeSection.id}`);
        } else {
            setActiveLink("index.html");
        }
    }

    window.addEventListener("scroll", updateNavigation);
    window.addEventListener("resize", updateNavigation);

    // Проверяем активный раздел при загрузке
    updateNavigation();
});

