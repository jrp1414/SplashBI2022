
export class Tag{
  id?:number;
  tag1?:string;
}

export class Address {
  id?:number;
  AddLine1: string | undefined;
  AddLine2: string | undefined;
  AddLine3: string | undefined;
  City: string | undefined;
  State: string | undefined;
}
export class Product {
  id!: number;
  title: string | undefined;
  type: string="";
  description: string | undefined;
  availibility: boolean | undefined;
  safeFor: number | undefined;
  qualityScore?: number;
  Tags?: Tag[];
  Addresses?: Address[];
  price?: number;
  rating?: number;
  imageurl?:string;  
}

export const products: any[] = [
  {
    "id": 1,
    "title": "Brown eggs",
    "type": "dairy",
    "description": "Raw organic brown eggs in a basket",
    "availibility": true,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": ["test","tests1"],
    "sellers": [
      {
        "AddLine1": "Pune",
        "AddLine2": "Pune",
        "AddLine3": "Pune",
        "City": "Pune",
        "State": "Pune"
      },
      {
        "AddLine1": "Hyderabad",
        "AddLine2": "Hyderabad",
        "AddLine3": "Hyderabad",
        "City": "Hyderabad",
        "State": "Telengana"
      }
    ],
    "price": 2.1,
    "rating": 4,
    "imageurl": "https://previews.123rf.com/images/bhofack2/bhofack21502/bhofack2150200615/37073865-raw-organic-brown-eggs-in-a-basket.jpg"
  },
  {
    "id": 2,
    "title": "Sweet fresh stawberry",
    "type": "fruit",
    "description": "Sweet fresh stawberry on the wooden table",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 29.45585,
    "rating": 4,
    "imageurl": "https://image.freepik.com/free-photo/sweet-fresh-strawberry-wooden-table_221774-7430.jpg"
  },
  {
    "id": 3,
    "title": "Asparagus",
    "type": "vegetable",
    "description": "Asparagus with ham on the wooden table",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 18.95,
    "rating": 3,
    "imageurl": "https://image.shutterstock.com/image-photo/asparagus-ham-on-tray-wooden-600w-325536839.jpg"
  },
  {
    "id": 4,
    "title": "Green smoothie",
    "type": "dairy",
    "description": "Glass of green smoothie with quail egg's yolk, served with cocktail tube, green apple and baby spinach leaves over tin surface.",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 17.68,
    "rating": 4,
    "imageurl": "https://image.shutterstock.com/image-photo/glass-green-smoothie-quail-eggs-600w-257577133.jpg"
  },
  {
    "id": 5,
    "title": "Raw legums",
    "type": "vegetable",
    "description": "Raw legums on the wooden table",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 17.11,
    "rating": 2,
    "imageurl": "https://thumbs.dreamstime.com/z/raw-dry-uncooked-brown-lentil-legumes-wooden-scoop-wood-table-background-selective-focus-rustic-150067501.jpg"
  },
  {
    "id": 6,
    "title": "Baking cake",
    "type": "dairy",
    "description": "Baking cake in rural kitchen - dough  recipe ingredients (eggs, flour, sugar) on vintage wooden table from above.",
    "availibility": true,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 11.14,
    "rating": 4,
    "imageurl": "https://st2.depositphotos.com/2154763/9898/i/950/depositphotos_98980228-stock-photo-baking-cake-in-rural-kitchen.jpg"
  },
  {
    "id": 7,
    "title": "Pesto with basil",
    "type": "vegetable",
    "description": "Italian traditional pesto with basil, chesse and oil",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 18.19,
    "rating": 2,
    "imageurl": "https://www.shelovesbiscotti.com/wp-content/uploads/2014/09/basil-pesto-9.jpg"
  },
  {
    "id": 8,
    "title": "Hazelnut in black ceramic bowl",
    "type": "vegetable",
    "description": "Hazelnut in black ceramic bowl on old wooden background. forest wealth. rustic style. selective focus",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 27.35,
    "rating": 0,
    "imageurl": "https://image.shutterstock.com/image-photo/hazelnut-black-ceramic-bowl-on-600w-263398307.jpg"
  },
  {
    "id": 9,
    "title": "Fresh stawberry",
    "type": "fruit",
    "description": "Sweet fresh stawberry on the wooden table",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 28.59,
    "rating": 4,
    "imageurl": "https://image.freepik.com/free-photo/sweet-fresh-strawberries-wooden-table_103326-182.jpg"
  },
  {
    "id": 10,
    "title": "Lemon and salt",
    "type": "fruit",
    "description": "Rosemary, lemon and salt on the table",
    "availibility": true,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 15.79,
    "rating": 5,
    "imageurl": "https://image.shutterstock.com/image-photo/body-scrub-sea-salt-lemon-600w-347654582.jpg"
  },
  {
    "id": 11,
    "title": "Homemade bread",
    "type": "bakery",
    "description": "Homemade bread",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 17.48,
    "rating": 3,
    "imageurl": "https://thestayathomechef.com/wp-content/uploads/2019/10/Homemade-Bread-4.jpg"
  },
  {
    "id": 12,
    "title": "Legums",
    "type": "vegetable",
    "description": "Cooked legums on the wooden table",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 14.77,
    "rating": 0,
    "imageurl": "https://previews.123rf.com/images/katrinshine/katrinshine1605/katrinshine160500030/56248684-cooked-legumes-and-vegetables-in-a-bowl-on-the-old-wooden-table.jpg"
  },
  {
    "id": 13,
    "title": "Fresh tomato",
    "type": "vegetable",
    "description": "Fresh tomato juice with basil",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 16.3,
    "rating": 2,
    "imageurl": "https://images1.westend61.de/0001039982pw/fresh-tomato-juice-with-basil-IPF00484.jpg"
  },
  {
    "id": 14,
    "title": "Healthy breakfast",
    "type": "fruit",
    "description": "Healthy breakfast set. rice cereal or porridge with berries and honey over rustic wood background",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 13.02,
    "rating": 2,
    "imageurl": "https://previews.123rf.com/images/sonyakamoz/sonyakamoz1604/sonyakamoz160400259/56024901-healthy-breakfast-set-rice-cereal-or-porridge-with-berries-and-honey-over-rustic-wood-background-hor.jpg"
  },
  {
    "id": 15,
    "title": "Green beans",
    "type": "vegetable",
    "description": "Raw organic green beans ready to eat",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 28.79,
    "rating": 1,
    "imageurl": "https://cdn.shopify.com/s/files/1/0047/9730/0847/products/nurserylive-seeds-france-beans-containder-desi-vegetable-seeds-16968866758796_520x520.jpg"
  },
  {
    "id": 16,
    "title": "Baked stuffed mushrooms",
    "type": "bakery",
    "description": "Homemade baked stuffed portabello mushrooms with spinach and cheese",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 20.31,
    "rating": 1,
    "imageurl": "https://www.abeautifulplate.com/wp-content/uploads/2018/02/stuffed-portobello-mushrooms-1-12-600x900.jpg"
  },
  {
    "id": 17,
    "title": "Strawberry jelly",
    "type": "fruit",
    "description": "Homemade organic strawberry jelly in a jar",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 14.18,
    "rating": 1,
    "imageurl": "https://image.shutterstock.com/image-photo/homemade-organic-strawberry-jelly-jar-600w-265169228.jpg"
  },
  {
    "id": 18,
    "title": "Pears juice",
    "type": "fruit",
    "description": "Fresh pears juice on the wooden table",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 19.49,
    "rating": 4,
    "imageurl": "https://image.shutterstock.com/image-photo/pear-juice-glass-fresh-ripe-600w-1182748051.jpg"
  },
  {
    "id": 19,
    "title": "Fresh pears",
    "type": "fruit",
    "description": "Sweet fresh pears on the wooden table",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 15.12,
    "rating": 5,
    "imageurl": "https://image.freepik.com/free-photo/sweet-fresh-pears-wooden-table_221774-4507.jpg"
  },
  {
    "id": 20,
    "title": "Caprese salad",
    "type": "vegetable",
    "description": "Homemade healthy caprese salad with tomato mozzarella and basil",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 16.76,
    "rating": 5,
    "imageurl": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/7/18/0/WU0314H_caprese-salad-recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1530799895174.jpeg"
  },
  {
    "id": 21,
    "title": "Oranges",
    "type": "fruit",
    "description": "Orange popsicle ice cream bars made from fresh oranges.  a refreshing summer treat.",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 21.48,
    "rating": 4,
    "imageurl": "https://image.shutterstock.com/image-photo/orange-popsicle-ice-cream-bars-600w-136845524.jpg"
  },
  {
    "id": 22,
    "title": "Vegan food",
    "type": "vegetable",
    "description": "Concept of vegan food",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 29.66,
    "rating": 4,
    "imageurl": "https://image.shutterstock.com/image-photo/healthy-food-concept-vegetarian-vegan-600w-1404916409.jpg"
  },
  {
    "id": 23,
    "title": "Breakfast with muesli",
    "type": "dairy",
    "description": "Concept of healthy breakfast with muesli",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 22.7,
    "rating": 2,
    "imageurl": "https://nutritioninthekitch.com/wp-content/uploads/2015/02/0D8A2983-2.jpg"
  },
  {
    "id": 24,
    "title": "Honey",
    "type": "bakery",
    "description": "Honey and honeycell on the table",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 17.01,
    "rating": 2,
    "imageurl": "https://en.pimg.jp/067/021/787/1/67021787.jpg"
  },
  {
    "id": 25,
    "title": "Breakfast with cottage",
    "type": "fruit",
    "description": "Healthy breakfast with cottage cheese and strawberry",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 14.05,
    "rating": 1,
    "imageurl": "https://previews.agefotostock.com/previewimage/medibigoff/8124fd8c40fc899d8472838f43cf996b/esy-042026474.webp"
  },
  {
    "id": 26,
    "title": "Strawberry smoothie",
    "type": "fruit",
    "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over dark background",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 28.86,
    "rating": 2,
    "imageurl": "https://www.thereciperebel.com/wp-content/uploads/2019/04/strawberry-smoothie-www.thereciperebel.com-600-10-of-15.jpg"
  },
  {
    "id": 27,
    "title": "Strawberry and mint",
    "type": "fruit",
    "description": "Homemade muesli with strawberry and mint",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 26.21,
    "rating": 4,
    "imageurl": "https://www.lovefromtheland.com/wp-content/uploads/2015/07/IMG_1773-1024x682.jpg"
  },
  {
    "id": 28,
    "title": "Ricotta",
    "type": "dairy",
    "description": "Ricotta with berry and mint",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 27.81,
    "rating": 5,
    "imageurl": "https://image.freepik.com/free-photo/ricotta-with-berry-mint_221774-639.jpg"
  },
  {
    "id": 29,
    "title": "Cuban sandwiche",
    "type": "bakery",
    "description": "Homemade traditional cuban sandwiches with ham pork and cheese",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 18.5,
    "rating": 4,
    "imageurl": "https://www.dinneratthezoo.com/wp-content/uploads/2015/09/cuban-sandwich-14.jpg.webp"
  },
  {
    "id": 30,
    "title": "Granola",
    "type": "dairy",
    "description": "Glass jar with homemade granola and yogurt with nuts, raspberries and blackberries on wooden cutting board over white textile in day light",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 29.97,
    "rating": 3,
    "imageurl": "https://www.delicioustable.com/wp-content/uploads/2017/01/Homemade-Breakfast-Parfaits-spoon-with-granola.jpg"
  },
  {
    "id": 31,
    "title": "Smoothie with chia seeds",
    "type": "fruit",
    "description": "Glass of red strawberry smoothie with chia seeds, served with retro cocktail tube, fresh mint and strawberries over wooden table",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 25.26,
    "rating": 5,
    "imageurl": "https://image.shutterstock.com/image-photo/glass-red-strawberry-smoothie-chia-600w-348293762.jpg"
  },
  {
    "id": 32,
    "title": "Yogurt",
    "type": "dairy",
    "description": "Homemade yogurt with raspberry and mint",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 27.61,
    "rating": 4,
    "imageurl": "https://image.shutterstock.com/image-photo/homemade-yogurt-raspberry-mint-selective-600w-278967575.jpg"
  },
  {
    "id": 33,
    "title": "Sandwich with salad",
    "type": "vegetable",
    "description": "Vegan sandwich with salad, tomato and radish",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 22.48,
    "rating": 5,
    "imageurl": "https://image.freepik.com/free-photo/vegan-sandwich-with-salad-tomato-radish_221774-6011.jpg"
  },
  {
    "id": 34,
    "title": "Cherry",
    "type": "fruit",
    "description": "Cherry with sugar on old table",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 14.35,
    "rating": 5,
    "imageurl": "https://image.freepik.com/free-photo/candied-fruit-dried-cherry-with-sugar-bowl-wooden-table_84485-585.jpg"
  },
  {
    "id": 35,
    "title": "Raw asparagus",
    "type": "vegetable",
    "description": "Raw fresh asparagus salad with cheese and dressing",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 22.97,
    "rating": 4,
    "imageurl": "https://image.shutterstock.com/shutterstock/photos/281680835/display_1500/stock-photo-raw-fresh-asparagus-salad-with-cheese-and-dressing-281680835.jpg"
  },
  {
    "id": 36,
    "title": "Corn",
    "type": "vegetable",
    "description": "Grilled corn on the cob with salt and butter",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 13.55,
    "rating": 2,
    "imageurl": "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2013/5/8/0/FN_Marc-Murphy-Grilled-Corn_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371616055883.jpeg"
  },
  {
    "id": 37,
    "title": "Vegan",
    "type": "vegan",
    "description": "Concept of healthy vegan eating",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 28.96,
    "rating": 5,
    "imageurl": "https://www.veggiesdontbite.com/wp-content/uploads/2020/01/5-day-raw-vegan-recipes-reset.jpg"
  },
  {
    "id": 38,
    "title": "Fresh blueberries",
    "type": "fruit",
    "description": "Healthy breakfast. berry crumble with fresh blueberries, raspberries, strawberries, almond, walnuts, pecans, yogurt, and mint in ceramic plates over white wooden surface, top view",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 21.01,
    "rating": 4,
    "imageurl": "https://natashaskitchen.com/wp-content/uploads/2014/05/Blueberry-Crumble-Recipe-14.jpg"
  },
  {
    "id": 39,
    "title": "Smashed avocado",
    "type": "fruit",
    "description": "Vegan sandwiches with smashed avocado, tomatoes and radish. top view",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 25.88,
    "rating": 0,
    "imageurl": "https://d2wtgwi3o396m5.cloudfront.net/recipe/909a5e56-3313-4aba-9234-5c28dd4c6526.png?d=1200x560"
  },
  {
    "id": 40,
    "title": "Italian ciabatta",
    "type": "bakery",
    "description": "Italian ciabatta bread cut in slices on wooden chopping board with herbs, garlic and olives over dark grunge backdrop, top view",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 15.18,
    "rating": 1,
    "imageurl": "https://www.thecutlerychronicles.com/wp-content/uploads/2012/10/Italian-Ciabatta-Paul-Hollywood.jpg"
  },
  {
    "id": 41,
    "title": "Rustic breakfast",
    "type": "dairy",
    "description": "Rustic healthy breakfast set. cooked buckwheat groats with milk and honey on dark grunge backdrop. top view, copy space",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 21.32,
    "rating": 0,
    "imageurl": "https://i.pinimg.com/564x/18/60/db/1860db6016118fc03097c62b7a025a4e.jpg"
  },
  {
    "id": 42,
    "title": "Sliced lemons",
    "type": "fruit",
    "description": "Heap of whole and sliced lemons and limes with mint in vintage metal grid box over old wooden table with turquoise wooden background. dark rustic style.",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 27.14,
    "rating": 2,
    "imageurl": "https://www.theharvestkitchen.com/wp-content/uploads/2017/01/frozen-lemon-slices-bag-650x975.jpg"
  },
  {
    "id": 43,
    "title": "Plums",
    "type": "fruit",
    "description": "Yellow and red sweet plums",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 19.18,
    "rating": 1,
    "imageurl": "https://image.freepik.com/free-photo/yellow-red-sweet-plums-wooden-table_221774-7839.jpg"
  },
  {
    "id": 44,
    "title": "French fries",
    "type": "bakery",
    "description": "Homemade oven baked french fries with ketchup",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 18.32,
    "rating": 3,
    "imageurl": "https://www.cookingclassy.com/wp-content/uploads/2019/01/french-fries-44-768x1152.jpg"
  },
  {
    "id": 45,
    "title": "Strawberries",
    "type": "fruit",
    "description": "Healthy breakfast set. rice cereal or porridge with fresh strawberry, apricots, almond and honey over white rustic wood backdrop, top view, \u0000",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 15.13,
    "rating": 3,
    "imageurl": "https://thumbs.dreamstime.com/z/healthy-breakfast-rice-cereal-porridge-fresh-strawberry-almond-coconut-flakes-served-bread-butter-berry-juice-138457636.jpg"
  },
  {
    "id": 46,
    "title": "Tomatoes",
    "type": "fruit",
    "description": "Organic tomatoes made with love",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 26.03,
    "rating": 4,
    "imageurl": "https://www.planetnatural.com/wp-content/uploads/2013/03/organic-tomato-crop.jpg"
  },
  {
    "id": 47,
    "title": "Basil",
    "type": "vegetable",
    "description": "Concept of vegan food with basil",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 15.19,
    "rating": 4,
    "imageurl": "https://playswellwithbutter.com/wp-content/uploads/2019/03/Lemony-Basil-Creamy-Vegan-Pasta-3-768x1152.jpg"
  },
  {
    "id": 48,
    "title": "Fruits bouquet",
    "type": "fruit",
    "description": "Abstract citrus fruits bouquet on blue background",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 18.18,
    "rating": 1,
    "imageurl": "https://5.imimg.com/data5/IV/GN/MY-49806277/organic-fruit-bouquet-500x500.jpg"
  },
  {
    "id": 49,
    "title": "Peaches on branch",
    "type": "fruit",
    "description": "Peaches on branch with leaves and glasses with peach juice and limonade with ice cubes in aluminum tray over old metal table. dark rustic style. top view.",
    "availibility": false,
    "safeFor": 1,
    "qualityScore": 1,
    "tags": [],
    "sellers": [
      {
        "AddLine1": "",
        "AddLine2": "",
        "AddLine3": "",
        "City": "",
        "State": ""
      }
    ],
    "price": 25.62,
    "rating": 3,
    "imageurl": "https://previews.123rf.com/images/dionisvera/dionisvera1609/dionisvera160900002/62513660-branch-with-peaches.jpg"
  }
];