
document.addEventListener("DOMContentLoaded", () => {
    const categoriesContainer = document.getElementById("menuCategories");
    const sectionsContainer = document.getElementById("menuSections");

    // Проверяем, что мы на странице меню
    if (!categoriesContainer || !sectionsContainer) return;

    // Проверяем наличие данных
    if (typeof menuData === "undefined" || !menuData.length) {
        sectionsContainer.textContent = "Меню пока недоступно.";
        return;
    }

    // Создаём навигацию по категориям
    menuData.forEach(category => {
        const link = document.createElement("a");

        link.className = "menu-categories__link";
        link.href = `#${category.id}`;
        link.textContent = category.title;

        categoriesContainer.appendChild(link);
    });

    // Создаём разделы и карточки блюд
    menuData.forEach(category => {
        const section = document.createElement("section");

        section.className = "menu-section";
        section.id = category.id;

        const heading = document.createElement("h2");
        heading.className = "menu-section__title";
        heading.textContent = category.title;

        const grid = document.createElement("div");
        grid.className = "menu-section__grid";

        category.items.forEach(item => {
            const card = document.createElement("article");
            card.className = "menu-card";

           const image = document.createElement("div");
            image.className = "menu-card__image";

            if (item.image) {
                const img = document.createElement("img");

                img.src = item.image;
                img.alt = item.name;

                image.appendChild(img);
                image.classList.add("menu-card__image--has-image");
            }

            const content = document.createElement("div");
            content.className = "menu-card__content";

            const name = document.createElement("h3");
            name.className = "menu-card__name";
            name.textContent = item.name;

            content.appendChild(name);

            // Отметка об остроте блюда
            if (item.spicy) {
                const spicy = document.createElement("span");
                spicy.className = "menu-card__spicy";
                spicy.textContent = "Острое";

                content.appendChild(spicy);
            }

            // Состав блюда
            if (item.description) {
                const description = document.createElement("p");
                description.className = "menu-card__description";
                description.textContent = item.description;

                content.appendChild(description);
            }

            const footer = document.createElement("div");
            footer.className = "menu-card__footer";

            const weight = document.createElement("span");
            weight.className = "menu-card__weight";
            weight.textContent = item.weight;

            const price = document.createElement("span");
            price.className = "menu-card__price";
            price.textContent = `${item.price.toLocaleString("ru-RU")} ₽`;

            footer.append(weight, price);
            content.appendChild(footer);

            card.append(image, content);
            grid.appendChild(card);
        });

        section.append(heading, grid);
        sectionsContainer.appendChild(section);
    });
});
