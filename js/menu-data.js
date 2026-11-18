
const menuData = [
    {
        id: "salads",
        title: "Салаты",
        items: [
            {
                name: "Салат из битых огурцов",
                weight: "250 г",
                price: 390,
                image: "images/menu/битые огурцы.webp"
            },
            {
                name: "Баклажаны в кисло-сладком соусе",
                weight: "280 г",
                price: 490,
                image: "images/menu/баклажаны.webp"
            },
            {
                name: "Овощной салат по-китайски",
                weight: "270 г",
                price: 450,
                image: "images/menu/овощной.webp"
            }
        ]
    },
    {
        id: "soups",
        title: "Супы",
        items: [
            {
                name: "Фо Бо",
                weight: "750 г",
                price: 590,
                description: "Ароматный бульон, говядина, рисовая лапша, зелень",
                image: "images/menu/фобо.webp"
            },
            {
                name: "Том Ям с морепродуктами",
                weight: "550 г",
                price: 650,
                description: "Креветки, кальмар, грибы, томаты, кокосовое молоко",
                image: "images/menu/том ям.webp"
            },
            {
                name: "Том Кха с курицей",
                weight: "550 г",
                price: 550,
                description: "Курица, кокосовое молоко, галангал, грибы",
                image: "images/menu/Том кха.webp"
            }
        ]
    },
    {
        id: "gyoza",
        title: "Гёдза",
        items: [
            {
                name: "Гёдза с говядиной",
                weight: "6 шт",
                price: 530,
                image: "images/menu/гедза с говядиной.webp"
            },
            {
                name: "Гёдза с курицей",
                weight: "6 шт",
                price: 490,
                image: "images/menu/гедза с курицей.webp"
            }
        ]
    },
    {
        id: "hot",
        title: "Горячие блюда",
        items: [
            {
                name: "Говядина в перечном соусе",
                weight: "400 г",
                price: 790,
                description: "Нежная говядина, болгарский перец, лук, острый перец",
                image: "images/menu/говядина в перечном.webp"
            },
            {
                name: "Говядина по-сычуаньски",
                weight: "430 г",
                price: 790,
                description: "Говядина, овощи, пряный соус",
                spicy: true,
                image: "images/menu/говядина по-сычуаньски.webp"
            },
            {
                name: "Курица Гунбао",
                weight: "400 г",
                price: 690,
                description: "Курица, арахис, овощи, острый соус",
                spicy: true,
                image: "images/menu/курица гунбао.webp"
            },
            {
                name: "Курица по-гонконгски",
                weight: "400 г",
                price: 690,
                description: "Курица, овощи, сладкий соус",
                image: "images/menu/курица по-гонконгски.webp"
            },
            {
                name: "Цыплёнок по-сычуаньски",
                weight: "400 г",
                price: 650,
                description: "Курица, овощи, острый соус",
                spicy: true,
                image: "images/menu/цыпленок по-сычуаньски.webp"
            },
            {
                name: "Курица в кисло-сладком соусе",
                weight: "400 г",
                price: 690,
                description: "Курица, ананас, овощи, кисло-сладкий соус",
                image: "images/menu/курица в кисло-сладком.webp"
            }
        ]
    },
    {
        id: "pizza",
        title: "Пицца",
        items: [
            {
                name: "Римская пицца «4 сыра»",
                weight: "365 г",
                price: 790,
                image: "images/menu/4 сыра.webp"
            },
            {
                name: "Римская пицца «Пепперони»",
                weight: "313 г",
                price: 790,
                image: "images/menu/пепперони.webp"
            },
            {
                name: "Римская пицца «Цыплёнок»",
                weight: "430 г",
                price: 790,
                image: "images/menu/цыпленок.webp"
            }
        ]
    },
    {
        id: "noodles-rice",
        title: "Лапша / рис",
        items: [
            {
                name: "Удон с говядиной в перечном соусе",
                weight: "500 г",
                price: 590,
                description: "Говядина, овощи, удон, острый соус",
                image: "images/menu/удон говядина в перечном.webp"
            },
            {
                name: "Рисовая лапша с морепродуктами",
                weight: "450 г",
                price: 590,
                description: "Креветки, кальмар, овощи, соус",
                image: "images/menu/лапша с морепродуктами.webp"
            },
            {
                name: "Лапша по-сингапурски",
                weight: "400 г",
                price: 590,
                description: "Курица, карри, рисовая лапша",
                image: "images/menu/лапша по-сингапурски.webp"
            },
            {
                name: "Удон с курицей",
                weight: "430 г",
                price: 590,
                description: "Курица, овощи, соус",
                image: "images/menu/удон с курицей.webp"
            },
            {
                name: "Лапша с овощами",
                weight: "400 г",
                price: 450,
                description: "Овощи, соевый соус",
                image: "images/menu/лапша с овощами.webp"
            },
            {
                name: "Рис с морепродуктами",
                weight: "290 г",
                price: 590,
                description: "Креветки, кальмар, овощи",
                image: "images/menu/рис с морепродуктами.webp"
            },
            {
                name: "Рис с говядиной",
                weight: "290 г",
                price: 590,
                description: "Говядина, овощи, соус",
                image: "images/menu/рис с говядиной.webp"
            },
            {
                name: "Рис с курицей",
                weight: "290 г",
                price: 550,
                description: "Курица, овощи, соус",
                image: "images/menu/рис с курицей.webp"
            },
            {
                name: "Рис с овощами",
                weight: "250 г",
                price: 390,
                description: "Овощи, соевый соус",
                image: "images/menu/рис с овощами.webp"
            },
            {
                name: "Жареный рис с яйцом",
                weight: "250 г",
                price: 350,
                description: "Овощи, яйцо, соевый соус",
                image: "images/menu/рис с яйцом.webp"
            }
        ]
    },
    {
        id: "shawarma",
        title: "Шаурма на теппане",
        items: [
            {
                name: "Шаурма с телятиной",
                weight: "310 г",
                price: 460,
                description: "Говядина, овощи, соус",
                image: "images/menu/шаурма с телятиной.webp"
            },
            {
                name: "Шаурма с курицей",
                weight: "300 г",
                price: 420,
                description: "Курица, овощи, соус",
                image: "images/menu/шаурма с курицей.webp"
            }
        ]
    },
    {
        id: "starters",
        title: "Стартеры",
        items: [
            {
                name: "Креветки темпура",
                weight: "5 шт",
                price: 460,
                image: "images/menu/креветки темпура.webp"
            },
            {
                name: "Картофель фри",
                weight: "200 г",
                price: 250,
                image: "images/menu/картофель фри.webp"
            },
            {
                name: "Куриные наггетсы с картофелем фри",
                weight: "350 г",
                price: 490,
                image: "images/menu/наггетсы.webp"
            },
            {
                name: "Куриный шницель с рисом на пару",
                weight: "350 г",
                price: 490,
                image: "images/menu/шницель.webp"
            }
        ]
    },
    {
        id: "desserts",
        title: "Десерты",
        items: [
            {
                name: "Чизкейк классический",
                weight: "150 г",
                price: 340,
                image: "images/menu/чизкейк классический.webp"
            },
            {
                name: "Чизкейк шоколадный",
                weight: "150 г",
                price: 340,
                image: "images/menu/чизкейк шоколадный.webp"
            },
            {
                name: "Моти «Шоколад»",
                weight: "1 шт",
                price: 290,
                image: "images/menu/моти шоколад.webp"
            },
            {
                name: "Моти «Манго»",
                weight: "1 шт",
                price: 290,
                image: "images/menu/моти манго.webp"
            },
            {
                name: "Моти «Клубника»",
                weight: "1 шт",
                price: 290,
                image: "images/menu/моти клубника.webp"
            }
        ]
    }
];
