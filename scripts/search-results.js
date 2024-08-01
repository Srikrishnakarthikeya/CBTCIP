document.addEventListener('DOMContentLoaded', () => {
    // Simplify query parameter retrieval
    const params = new URLSearchParams(window.location.search);
    const query = params.get('query'); // Ensure this matches the parameter name in your URL

    const products = [
        //     {
        //     id: 1,
        //     title: 'Achar Do Pizza',
        //     category : 'Pizza',
        //     rating : 4.5,
        //     price: 140,
        //     image: 'Images/Dishes/achari do pyaza.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 2,
        //     title: 'Almond Delight Pastry',
        //     category : 'Pastries',
        //     rating : 4.5,
        //     price: 109,
        //     image: 'Images/Dishes/almond delight pastry.webp',
        //     quantity: 1
        // },
        // {
        //     id: 3,
        //     title: 'Almond Delight Cake 1kg',
        //     category : 'Premium Cakes',
        //     rating : 4.5,
        //     price: 968,
        //     image: 'Images/Dishes/almond delight.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 4,
        //     title: 'Angry Bird Cake',
        //     category : 'Premium Cakes',
        //     rating : 4.5,
        //     price: 180,
        //     image: 'Images/Dishes/angry bird cake.jpg',
        //     quantity: 1
        // },
        {
            id: 5,
            title: 'Baby Corn Manchurian',
            category : 'Starters',
            rating : 4.5,
            price: 210,
            image: 'Images/Dishes/baby-corn-manchurian.jpg',
            quantity: 1
        },
        // {
        //     id: 6,
        //     title: 'Black Forest Pastry',
        //     category : 'Pastries',
        //     rating : 4.5,
        //     price: 73,
        //     image: 'Images/Dishes/blackforest pastry.jpg',
        //     quantity: 1
        // },
        {
            id: 7,
            title: 'Black Forest 1kg',
            category : 'Regular Cakes',
            rating : 4.5,
            price: 688,
            image: 'Images/Dishes/blackforest.jpg',
            quantity: 1
        },
        // to do
        // {
        //     id: 8,
        //     title: 'Memoni Biryani',
        //     category : 'biryani',
        //     rating : 4.5,
        //     price: 20,
        //     image: 'Images/Dishes/blue berry pastry.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 9,
        //     title: 'Boneless Biryani Biryani',
        //     category : 'Biryanis',
        //     rating : 4.5,
        //     price: 140,
        //     image: 'Images/Dishes/boneless biryani.jpg',
        //     quantity: 1
        // },
        {
            id: 10,
            title: 'Butter-Chicken',
            category : 'Currys',
            rating : 4.5,
            price: 250,
            image: 'Images/Dishes/butter-chicken.jpg',
            quantity: 1
        },
        {
            id: 11,
            title: 'Butter-Naan',
            category : 'Rotis',
            rating : 4.5,
            price: 40,
            image: 'Images/Dishes/butter-naan.jpg',
            quantity: 1
        },
        {
            id: 12,
            title: 'Butter-Roti',
            category : 'Rotis',
            rating : 4.5,
            price: 20,
            image: 'Images/Dishes/butter-roti.jpg',
            quantity: 1
        },
        {
            id: 13,
            title: 'Butter Scotch Cake 1kg',
            category : 'Regular Cakes',
            rating : 4.5,
            price: 660,
            image: 'Images/Dishes/butter-scotch.jpg',
            quantity: 1
        },
        // {
        //     id: 14,
        //     title: 'ButterScotch Pastry',
        //     category : 'pastries',
        //     rating : 4.5,
        //     price: 73 ,
        //     image: 'Images/Dishes/butterscotch pastry.jpg',
        //     quantity: 1
        // },
        {
            id: 15,
            title: 'Chapathi',
            category : 'Rotis',
            rating : 4.5,
            price: 20,
            image: 'Images/Dishes/chapathi.jpg',
            quantity: 1
        },
        // {
        //     id: 16,
        //     title: 'Cheese And Tomato',
        //     category : 'pizza',
        //     rating : 4.5,
        //     price: 140,
        //     image: 'Images/Dishes/cheese n tomato.png',
        //     quantity: 1
        
        // },
        {
            id: 17,
            title: 'Cheese And Corn Pizza',
            category : 'pizza',
            rating : 4.5,
            price: 140,
            image: 'Images/Dishes/cheese-n-corn.png',
            quantity: 1
        },
        // {
        //     id: 18,
        //     title: 'Chicken Burger',
        //     category : 'Burger',
        //     rating : 4.5,
        //     price: 127,
        //     image: 'Images/Dishes/chicken burger.jpg',
        //     quantity: 1
        
        // },
        // {
        //     id: 19,
        //     title: 'Chicken Spring Roll',
        //     category : 'Burger',
        //     rating : 4.5,
        //     price: 94,
        //     image: 'Images/Dishes/chicken spring roll.jpg',
        //     quantity: 1
        
        // },
        // {
        //     id: 20,
        //     title: 'Chicken Burger',
        //     category : 'Burger',
        //     rating : 4.5,
        //     price: 127,
        //     image: 'Images/Dishes/chicken tika burger.jpg',
        //     quantity: 1
        // },
        {
            id: 21,
            title: 'Chicken-65',
            category : 'Starters',
            rating : 4.5,
            price: 210,
            image: 'Images/Dishes/chicken-65.jpg',
            quantity: 1
        },
        {
            id: 22,
            title: 'Chicken Biryani',
            category : 'Biryanis',
            rating : 4.5,
            price: 120,
            image: 'Images/Dishes/Chicken-Biryani.jpg',
            quantity: 1
        },
        {
            id: 23,
            title: 'Chicken Fiesta',
            category : 'Pizza',
            rating : 4.5,
            price: 220,
            image: 'Images/Dishes/chicken-fiesta.jpg',
            quantity: 1
        },
        {
            id: 24,
            title: 'Chicken Fry',
            category : 'Starters',
            rating : 4.5,
            price: 359,
            image: 'Images/Dishes/chicken-fry.jpg',
            quantity: 1
        },
        {
            id: 25,
            title: 'Chicken Golden Delight',
            category : 'Pizza',
            rating : 4.5,
            price: 449,
            image: 'Images/Dishes/chicken-golden-delight.png',
            quantity: 1
        },
        {
            id: 26,
            title: 'Chicken Golden Delight',
            category : 'Pizza',
            rating : 4.5,
            price: 499,
            image: 'Images/Dishes/chicken-golden-delight.png',
            quantity: 1
        },
        {
            id: 27,
            title: 'Chicken Hot Dog',
            category : 'Sandwich',
            rating : 4.5,
            price: 109,
            image: 'Images/Dishes/chicken-hot-dog.webp',
            quantity: 1
        },
        {
            id: 28,
            title: 'Chicken Lollipop',
            category : 'Starters',
            rating : 4.5,
            price: 220,
            image: 'Images/Dishes/chicken-lollipop.jpg',
            quantity: 1
        },
        {
            id: 29,
            title: 'Chicken Manchurian Full',
            category : 'Starters',
            rating : 4.5,
            price: 350,
            image: 'Images/Dishes/chicken-manchuria.jpg',
            quantity: 1
        },
        {
            id: 30,
            title: 'Chicken Sausage',
            category : 'Pizza',
            rating : 4.5,
            price: 379,
            image: 'Images/Dishes/chicken-sausage.png',
            quantity: 1
        },
        {
            id: 31,
            title: 'Chicken Soup',
            category : 'Soup',
            rating : 4.5,
            price: 100,
            image: 'Images/Dishes/chicken-soup.jpg',
            quantity: 1
        },
        // {
        //     id: 32,
        //     title: 'Chicken Sweet Corn Soup',
        //     category : 'Soup',
        //     rating : 4.5,
        //     price: 150,
        //     image: 'Images/Dishes/chicken-sweet-corn soup.jpg',
        //     quantity: 1
        // },
        {
            id: 33,
            title: 'Chicken Tikka Masala',
            category : 'Currys',
            rating : 4.5,
            price: 240,
            image: 'Images/Dishes/chicken-tikka-masala.jpg',
            quantity: 1
        },
        {
            id: 34,
            title: 'Chicken Wings',
            category : 'Starters',
            rating : 4.5,
            price: 210,
            image: 'Images/Dishes/chicken-wings.jpg',
            quantity: 1
        },
        {
            id: 35,
            title: 'Chilli Prawns',
            category : 'Starters',
            rating : 4.5,
            price: 299,
            image: 'Images/Dishes/chilli-prawns.jpg',
            quantity: 1
        },
        {
            id: 36,
            title: 'Chicken Hot And Sour Soup',
            category : 'Soup',
            rating : 4.5,
            price: 110,
            image: 'Images/Dishes/chinese-hot-and-sour-soup.jpg',
            quantity: 1
        },
        {
            id: 37,
            title: 'Cream Bread',
            category : 'Bread',
            rating : 4.5,
            price: 30,
            image: 'Images/Dishes/creambread.jpg',
            quantity: 1
        },
        {
            id: 38,
            title: 'Dil Kush',
            category : 'Bread',
            rating : 4.5,
            price: 28,
            image: 'Images/Dishes/dilkush.jpg',
            quantity: 1
        },
        {
            id: 39,
            title: 'Donut',
            category : 'Pastrys',
            rating : 4.5,
            price: 109,
            image: 'Images/Dishes/donut.jpg',
            quantity: 1
        },
        {
            id: 40,
            title: 'Plain Dosa',
            category : 'Break Fast',
            rating : 4.5,
            price: 40,
            image: 'Images/Dishes/dosa.jpg',
            quantity: 1
        },
        // {
        //     id: 41,
        //     title: 'Double Ka Meetha',
        //     category : 'Bread',
        //     rating : 4.5,
        //     price: 60,
        //     image: 'Images/Dishes/double ka meetha.jpg',
        //     quantity: 1
        // },
        {
            id: 42,
            title: 'Double Cheese Marghherita',
            category : 'Pizza',
            rating : 4.5,
            price: 339,
            image: 'Images/Dishes/double-chesse-margherita.png',
            quantity: 1
        },
        // {
        //     id: 43,
        //     title: 'Dry Fruit Pastry',
        //     category : 'Pastrys',
        //     rating : 4.5,
        //     price: 109,
        //     image: 'Images/Dishes/dry fruit pastry.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 44,
        //     title: 'Egg Biryani',
        //     category : 'Biryanis',
        //     rating : 4.5,
        //     price: 90,
        //     image: 'Images/Dishes/egg biryani.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 45,
        //     title: 'Egg Less Blackforest 1kg',
        //     category : 'Regular Cakes',
        //     rating : 4.5,
        //     price: 140,
        //     image: 'Images/Dishes/egg-less blackforest.JPG',
        //     quantity: 1
        // },
        {
            id: 46,
            title: 'Egg-Less Buterscotch 1kg',
            category : 'Regular Cakes',
            rating : 4.5,
            price: 720,
            image: 'Images/Dishes/eggless-buterscotch.jpg',
            quantity: 1,
        },
        {
            id: 47,
            title: 'Egg-Less Pineapple Cake 1kg',
            category : 'Regular Cakes',
            rating : 4.5,
            price: 704,
            image: 'Images/Dishes/eggless-pineapple.jpg',
            quantity: 1
        },
        {
            id: 48,
            title: 'Farm House',
            category : 'Pizza',
            rating : 4.5,
            price: 399,
            image: 'Images/Dishes/farmhouse.jpg',
            quantity: 1
        },
        {
            id: 49,
            title: 'Fish Biryani',
            category : 'Biryanis',
            rating : 4.5,
            price: 140,
            image: 'Images/Dishes/fishbiryani.jpg',
            quantity: 1
        },
        {
            id: 50,
            title: 'Fresh Veggie Pizza',
            category : 'Pizza',
            rating : 4.5,
            price: 339,
            image: 'Images/Dishes/fresh-veggie.jpg',
            quantity: 1
        },
        // {
        //     id: 51,
        //     title: 'Fruit Bread',
        //     category : 'Bread',
        //     rating : 4.5,
        //     price: 40,
        //     image: 'Images/Dishes/fruit bread.jpg',
        //     quantity: 1
        // },
        {
            id: 52,
            title: 'Garlic Naan',
            category : 'Rotis',
            rating : 4.5,
            price: 35,
            image: 'Images/Dishes/garlicnaan.jpg',
            quantity: 1
        },
        // {
        //     id: 53,
        //     title: 'Gongura Chicken',
        //     category : 'Currys',
        //     rating : 4.5,
        //     price: 240,
        //     image: 'Images/Dishes/Gongura chicken.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 54,
        //     title: 'Gongura Mutton',
        //     category : 'Currys',
        //     rating : 4.5,
        //     price: 240,
        //     image: 'Images/Dishes/gongura mutton.jpg',
        //     quantity: 1
        // },
        {
            id: 55,
            title: 'Gulab Jamun Cake 1pc',
            category : 'Premium Cakes',
            rating : 4.5,
            price: 110,
            image: 'Images/Dishes/gulab-jamun-cake.jpg',
            quantity: 1
        },
        {
            id: 56,
            title: 'Gulab Jamun Cake 1kg',
            category : 'Premium Cakes',
            rating : 4.5,
            price: 1108,
            image: 'Images/Dishes/gulab-jamun-cake1.jpg',
            quantity: 1
        },
        {
            id: 57,
            title: 'Idli',
            category : 'Break Fast',
            rating : 4.5,
            price: 40,
            image: 'Images/Dishes/idli-dosa.jpg',
            quantity: 1
        },
        {
            id: 58,
            title: 'Indi Chicken Tikka',
            category : 'Pizza',
            rating : 4.5,
            price: 610,
            image: 'Images/Dishes/indi-chicken-tikkapizza.jpg',
            quantity: 1
        },
        {
            id: 59,
            title: 'Indi Tandoori Panner',
            category : 'Pizza',
            rating : 4.5,
            price: 459,
            image: 'Images/Dishes/IndianTandooriPaneer.jpg',
            quantity: 1
        },
        // {
        //     id: 60,
        //     title: 'Kaju Biryani',
        //     category : 'Biryanis',
        //     rating : 4.5,
        //     price: 410,
        //     image: 'Images/Dishes/kaju biryani.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 61,
        //     title: 'Kaju Masala',
        //     category : 'Currys',
        //     rating : 4.5,
        //     price: 240,
        //     image: 'Images/Dishes/kaju curry.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 62,
        //     title: 'Mutton Keema Biryani Biryani',
        //     category : 'Biryanis',
        //     rating : 4.5,
        //     price: 140,
        //     image: 'Images/Dishes/keema biryani.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 63,
        //     title: 'Keema Do Pyaza',
        //     category : 'Pizza',
        //     rating : 4.5,
        //     price: 438,
        //     image: 'Images\Dishes\keema-do-pizza.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 64,
        //     title: 'Lyche Pastry',
        //     category : 'Pizza',
        //     rating : 4.5,
        //     price: 109,
        //     image: 'Images/Dishes/lyche pastry.png',
        //     quantity: 1
        // },
        {
            id: 65,
            title: 'Margherita',
            category : 'Pizza',
            rating : 4.5,
            price: 199,
            image: 'Images/Dishes/margherita.jpg',
            quantity: 1
        },
        {
            id: 66,
            title: 'Masala Dosa',
            category : 'Break Fast',
            rating : 4.5,
            price: 50,
            image: 'Images/Dishes/masala-dosa.jpg',
            quantity: 1
        },
        {
            id: 67,
            title: 'Mexican Greenwave',
            category : 'Pizza',
            rating : 4.5,
            price: 399,
            image: 'Images/Dishes/mexican-greenwave.jpg',
            quantity: 1
        },
        {
            id: 68,
            title: 'Mini Chicken Burger',
            category : 'Burger',
            rating : 4.5,
            price: 99,
            image: 'Images/Dishes/mini-chicken-burger.jpg',
            quantity: 1
        },
        {
            id: 69,
            title: 'Mix Dry Fruit Cake 1kg',
            category : 'Premium Cakes',
            rating : 4.5,
            price: 800,
            image: 'Images/Dishes/mix-dry-fruit-cake.jpg',
            quantity: 1
        },
        // {
        //     id: 70,
        //     title: 'Moroccan Spice Pasta Pizza - Non Veg',
        //     category : 'Pizza',
        //     rating : 4.5,
        //     price: 440,
        //     image: 'Images/Dishes/Moroccan Spice Pasta Pizza - Non Veg.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 71,
        //     title: 'Mushroom Biryani',
        //     category : 'Biryanis',
        //     rating : 4.5,
        //     price: 110,
        //     image: 'Images/Dishes/mushroom biryani.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 72,
        //     title: 'Mushroom Masala',
        //     category : 'Currys',
        //     rating : 4.5,
        //     price: 240,
        //     image: 'Images/Dishes/mushroom masala.JPG',
        //     quantity: 1
        // },
        // {
        //     id: 73,
        //     title: 'Mutton Biryani',
        //     category : 'Biryanis',
        //     rating : 4.5,
        //     price: 140,
        //     image: 'Images/Dishes/mutton biryani.jpeg',
        //     quantity: 1
        // },
        {
            id: 74,
            title: 'Mutton Kheema',
            category : 'Currys',
            rating : 4.5,
            price: 240,
            image: 'Images/Dishes/mutton-keema.jpg',
            quantity: 1
        },
        {
            id: 75,
            title: 'Mutton Masala',
            category : 'Currys',
            rating : 4.5,
            price: 300,
            image: 'Images/Dishes/mutton-masala.jpg',
            quantity: 1
        },
        {
            id: 76,
            title: 'Mysore Bonda',
            category : 'Break Fast',
            rating : 4.5,
            price: 30,
            image: 'Images/Dishes/mysorebonda.jpg',
            quantity: 1
        },
        {
            id: 77,
            title: 'Non Veg Supreme',
            category : 'Pizza',
            rating : 4.5,
            price: 619,
            image: 'Images/Dishes/Non-Veg_Supreme.jpg',
            quantity: 1
        },
        // {
        //     id: 78,
        //     title: 'Onion Dosa',
        //     category : 'Break Fast',
        //     rating : 4.5,
        //     price: 60,
        //     image: 'Images/Dishes/onion dosa.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 79,
        //     title: 'Palak Paneer',
        //     category : 'Currys',
        //     rating : 4.5,
        //     price: 240,
        //     image: 'Images/Dishes/palak paneer.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 80,
        //     title: 'Paneer Biryani',
        //     category : 'Biryanis',
        //     rating : 4.5,
        //     price: 110,
        //     image: 'Images/Dishes/paneer biryani.jpg',
        //     quantity: 1
        // },
        {
            id: 81,
            title: 'Paneer Makhani',
            category : 'Pizza',
            rating : 4.5,
            price: 459,
            image: 'Images/Dishes/Paneer_Makhni.jpg',
            quantity: 1
        },
        {
            id: 82,
            title: 'Paneer Hot Dog',
            category : 'Burger',
            rating : 4.5,
            price: 88,
            image: 'Images/Dishes/paneer-hot-dog.jpg',
            quantity: 1
        },
        {
            id: 83,
            title: 'Panner Tikka',
            category : 'Starters',
            rating : 4.5,
            price: 210,
            image: 'Images/Dishes/panner-tikka.jpg',
            quantity: 1
        },
        {
            id: 84,
            title: 'Panner Butter Masala',
            category : 'Currys',
            rating : 4.5,
            price: 220,
            image: 'Images/Dishes/panner-butter-masala.jpg',
            quantity: 1
        },
        {
            id: 85,
            title: 'Panner Butter Masala',
            category : 'Currys',
            rating : 4.5,
            price: 220,
            image: 'Images/Dishes/panner-butter-masala.jpg',
            quantity: 1
        },
        {
            id: 86,
            title: 'Pav Baji',
            category : 'Bread',
            rating : 4.5,
            price: 129,
            image: 'Images/Dishes/pavbaji.jpg',
            quantity: 1
        },
        {
            id: 87,
            title: 'Pepper Barbecue & Onion',
            category : 'Pizza',
            rating : 4.5,
            price: 439,
            image: 'Images/Dishes/Pepper_Barbeque_&_Onion.jpg',
            quantity: 1
        },
        {
            id: 88,
            title: 'Pepper Barbeque Chicken',
            category : 'Pizza',
            rating : 4.5,
            price: 439,
            image: 'Images/Dishes/PepperBarbequeChicken.jpg',
            quantity: 1
        },
        {
            id: 89,
            title: 'Peppy Paneer',
            category : 'Pizza',
            rating : 4.5,
            price: 399,
            image: 'Images/Dishes/peppy-paneer.jpg',
            quantity: 1
        },
        // {
        //     id: 90,
        //     title: 'ButterScotch Pastry',
        //     category : 'Pastrys',
        //     rating : 4.5,
        //     price: 73,
        //     image: 'Images/Dishes/pineapple pastry.jpg',
        //     quantity: 1
        // },
        {
            id: 91,
            title: 'Pineapple Cake 1kg',
            category : 'Pastrys',
            rating : 4.5,
            price: 638,
            image: 'Images/Dishes/pineapple.jpg',
            quantity: 1
        },
        {
            id: 92,
            title: 'Plain-Naan',
            category : 'Rotis',
            rating : 4.5,
            price: 25,
            image: 'Images/Dishes/plain-naan.jpg',
            quantity: 1
        },
        // {
        //     id: 93,
        //     title: 'Prawns Biryani',
        //     category : 'Pastrys',
        //     rating : 4.5,
        //     price: 140,
        //     image: 'Images/Dishes/prawns biryani.jpg',
        //     quantity: 1
        // },
        {
            id: 94,
            title: 'Puri',
            category : 'Break Fast',
            rating : 4.5,
            price: 30,
            image: 'Images/Dishes/puri.jpg',
            quantity: 1
        },
        {
            id: 95,
            title: 'Rayalaseema Ragi Sangati',
            category : 'Biryanis',
            rating : 4.5,
            price: 320,
            image: 'Images/Dishes/ragi-sangati.jpeg',
            quantity: 1
        },
        // {
        //     id: 96,
        //     title: 'Rasmalai Cake 1kg',
        //     category : 'Premium Cakes',
        //     rating : 4.5,
        //     price: 1204,
        //     image: 'Images/Dishes/rasmalai cake.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 97,
        //     title: 'Rasmalai Cake 1kg',
        //     category : 'Premium Cakes',
        //     rating : 4.5,
        //     price: 1204,
        //     image: 'Images/Dishes/rasmalai cake.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 98,
        //     title: 'Red Velvet Cake 1/2kg',
        //     category : 'Premium Cakes',
        //     rating : 4.5,
        //     price: 540,
        //     image: 'Images/Dishes/red-velvet cake.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 99,
        //     title: 'Red Velvet Pastry',
        //     category : 'Pastrys',
        //     rating : 4.5,
        //     price: 127,
        //     image: 'Images/Dishes/red-velvet pastry.jpg',
        //     quantity: 1
        // },
        {
            id: 100,
            title: 'Roomali Roti',
            category : 'Rotis',
            rating : 4.5,
            price: 15,
            image: 'Images/Dishes/roomali-roti.jpg',
            quantity: 1
        },
        // {
        //     id: 101,
        //     title: 'Sandwich Bread',
        //     category : 'Sandwich',
        //     rating : 4.5,
        //     price: 50,
        //     image: 'Images/Dishes/sandwich bread.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 102,
        //     title: 'Veg-Sweet Corn Soup',
        //     category : 'Soup',
        //     rating : 4.5,
        //     price: 90,
        //     image: 'Images/Dishes/sweet corn soup.jpg',
        //     quantity: 1
        // },
        {
            id: 103,
            title: 'Tandoori Chicken',
            category : 'Starters',
            rating : 4.5,
            price: 210,
            image: 'Images/Dishes/tandoori-chicken.jpg',
            quantity: 1
        },
        {
            id: 104,
            title: 'Tandoori Roti',
            category : 'Rotis',
            rating : 4.5,
            price: 35,
            image: 'Images/Dishes/tandoori-roti.jpg',
            quantity: 1
        },
        {
            id: 105,
            title: 'Toast',
            category : 'Bread',
            rating : 4.5,
            price: 99,
            image: 'Images/Dishes/toast.jpg',
            quantity: 1
        },
        {
            id: 106,
            title: 'Tomato Soup',
            category : 'Soup',
            rating : 4.5,
            price: 75,
            image: 'Images/Dishes/tomato-soup.gif',
            quantity: 1
        },
        // {
        //     id: 107,
        //     title: 'Ulvacharu Chicken Biryani',
        //     category : 'Biryanis',
        //     rating : 4.5,
        //     price: 140,
        //     image: 'Images/Dishes/ulvacharu biryani.jpg',
        //     quantity: 1
        // },
        {
            id: 108,
            title: 'Uttapam',
            category : 'Break Fast',
            rating : 4.5,
            price: 45,
            image: 'Images/Dishes/uttapam.jpg',
            quantity: 1
        },
        // {
        //     id: 109,
        //     title: 'Vada',
        //     category : 'Break Fast',
        //     rating : 4.5,
        //     price: 25,
        //     image: 'Images\Dishes\vada.jpg',
        //     quantity: 1
        // },
        // {
        //     id: 110,
        //     title: 'Veg Corn Burger',
        //     category : 'Burger',
        //     rating : 4.5,
        //     price: 116,
        //     image: 'Images/Dishes/veg corn burger.jpg',
        //     quantity: 1
        // },
        {
            id: 111,
            title: 'Veg Burger',
            category : 'Burger',
            rating : 4.5,
            price: 85,
            image: 'Images/Dishes/veg-burger.jpg',
            quantity: 1
        },
        {
            id: 112,
            title: 'Veg Burger',
            category : 'Burger',
            rating : 4.5,
            price: 85,
            image: 'Images/Dishes/veg-burger.jpg',
            quantity: 1
        },
        // {
        //     id: 113,
        //     title: 'Veg Manchow Soup',
        //     category : 'Soup',
        //     rating : 4.5,
        //     price: 80,
        //     image: 'Images/Dishes/veg-manchow soup.jpg',
        //     quantity: 1
        // },
        {
            id: 114,
            title: 'Veg Manchurian',
            category : 'Starters',
            rating : 4.5,
            price: 210,
            image: 'Images/Dishes/veg-manchuria.jpg',
            quantity: 1
        },
        {
            id: 115,
            title: 'Veggie Paradise',
            category : 'Pizza',
            rating : 4.5,
            price: 399,
            image: 'Images/Dishes/veggie-paradise.jpg',
            quantity: 1
        },
        {
            id: 116,
            title: 'Veg Hot Dog',
            category : 'Burger',
            rating : 4.5,
            price: 95,
            image: 'Images/Dishes/veghotdog.jpg',
            quantity: 1
        },
        {
            id: 117,
            title: 'Veg Biryani',
            category : 'Biryanis',
            rating : 4.5,
            price: 140,
            image: 'Images/Dishes/vegpulao.jpg',
            quantity: 1
        },
        ];  // This should be your actual products array or an import statement
    
        const filteredProducts = products.filter(product => product.title.toLowerCase().includes(query.toLowerCase()));

    // Display the filtered products
    displaySearchResults(filteredProducts);
});

function displaySearchResults(products) {
    const container = document.getElementById('searchResults');
    if (!container) {
        console.error('searchResults container not found.');
        return;
    }

    if (products.length === 0) {
        container.innerHTML = '<p>No results found.</p>';
        return;
    }

    const html = products.map(product => `
    <div class="box">
        <img src="${product.image}">
        <h3>${product.title}</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star-half-alt"></i>
        </div>
        <span>₹${product.price}</span>
        <br>
        <div class="item-increment">
            <button class="decrement-btn">-</button>
            <span class="item-count">1</span>
            <button class="increment-btn">+</button>
        </div>
        <button class="add-to-cart-btn" data-item="${product.title}" data-price="${product.price}">Add to Cart</button>
        <button class="buy-now-btn" data-item="${product.title}" data-price="${product.price}">Buy Now</button>
        </div>
`).join('');


container.innerHTML = html;

// Add event listeners for increment, decrement, and add to cart buttons
const incrementButtons = container.querySelectorAll('.increment-btn');
const decrementButtons = container.querySelectorAll('.decrement-btn');
const addToCartButtons = container.querySelectorAll('.add-to-cart-btn');
const buyNowButtons = container.querySelectorAll('.buy-now-btn');

// incrementButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const itemCount = button.parentElement.querySelector('.item-count');
//         let count = parseInt(itemCount.textContent);
//         count++;
//         itemCount.textContent = count;
//     });
// });

// decrementButtons.forEach(button => {
//     button.addEventListener('click', () => {
//         const itemCount = button.parentElement.querySelector('.item-count');
//         let count = parseInt(itemCount.textContent);
//         if (count > 1) {
//             count--;
//             itemCount.textContent = count;
//         }
//     });
// });

// addToCartButtons.forEach(button => {
//     button.addEventListener('click', async () => {
//         const itemName = button.getAttribute('data-item');
//         const price = button.getAttribute('data-price');
//         const response = await fetch('/add_to_cart', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({
//                 itemName: itemName,
//                 price: price
//             })
//         });
//         if (response.ok) {
//             alert('Item added to cart successfully!');
//         } else {
//             alert('Failed to add item to cart. Please try again later.');
//         }
//     });
// });
// buyNowButtons.forEach(button => {
//     button.addEventListener('click', async () => {
//         const itemName = button.getAttribute('data-item');
//         const price = button.getAttribute('data-price');
//         // Redirect to payment page with item details
//         window.location.href = `/payment?item=${itemName}&price=${price}`;
//     });
// });
// }


incrementButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemCount = button.parentElement.querySelector('.item-count');
        let count = parseInt(itemCount.textContent);
        count++;
        itemCount.textContent = count;
    });
});

decrementButtons.forEach(button => {
    button.addEventListener('click', () => {
        const itemCount = button.parentElement.querySelector('.item-count');
        let count = parseInt(itemCount.textContent);
        if (count > 1) {
            count--;
            itemCount.textContent = count;
        }
    });
});

addToCartButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const itemName = button.getAttribute('data-item');
        const price = button.getAttribute('data-price');
        await addToCart(itemName, price);
    });
});

buyNowButtons.forEach(button => {
    button.addEventListener('click', async () => {
        const itemName = button.getAttribute('data-item');
        const price = button.getAttribute('data-price');
        // Redirect to payment page with item details
        window.location.href = `/payment?item=${itemName}&price=${price}`;
    });
});

async function addToCart(itemName, price) {
    try {
        const response = await fetch('/add_to_cart', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                itemName: itemName,
                price: price
            })
        });
        if (response.ok) {
            alert('Item added to cart successfully!');
        } else {
            alert('Failed to add item to cart. Please try again later.');
        }
    } catch (error) {
        console.error('Error adding item to cart:', error);
        alert('Failed to add item to cart. Please try again later.');
    }
}
}