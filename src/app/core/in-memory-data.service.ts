import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let products = [
      {
        "id": 1,
        "productName": "Food Big Salad",
        "productCode": "71300",
        "releaseDate": "2013-11-23",
        "description": "This glitch clipart is about food, big, salad.",
        "price": 15.95,
        "starRating": 2.2,
        "imageUrl": "assets/images/products/food-big-salad.jpg"
      },
      {
        "id": 2,
        "productName": "Food Fruit Salad",
        "productCode": "45842",
        "releaseDate": "2014-11-23",
        "description": "This glitch clipart is about food, fruit, salad.",
        "price": 21.95,
        "starRating": 4.5,
        "imageUrl": "assets/images/products/food-fruit-salad.jpg"
      },
      {
        "id": 3,
        "productName": "Food Obvious Panini",
        "productCode": "128443",
        "releaseDate": "2015-11-23",
        "description": "This glitch clipart is about food, obvious, panini.",
        "price": 18.95,
        "starRating": 3.8,
        "imageUrl": "assets/images/products/food-obvious-panini.jpg"
      },
      {
        "id": 4,
        "productName": "Food Fancy Cheese",
        "productCode": "11247",
        "releaseDate": "2016-11-23",
        "description": "15-inch steel blade hand saw",
        "price": 10.95,
        "starRating": 2.7,
        "imageUrl": "assets/images/products/food-fancy-cheese.jpg"
      },
      {
        "id": 5,
        "productName": "Fast Food Menu",
        "productCode": "135029",
        "releaseDate": "2011-07-19",
        "description": "Standard fast food menu",
        "price": 15.95,
        "starRating": 3.5,
        "imageUrl": "assets/images/products/fast-food-menu.jpg"
      },
      {
        "id": 6,
        "productName": "Food Snack Pack",
        "productCode": "59273",
        "releaseDate": "2011-07-19",
        "description": "Standard food Snack Pack",
        "price": 12.95,
        "starRating": 4.5,
        "imageUrl": "assets/images/products/food-snack-pack.jpg"
      },
      {
        "id": 7,
        "productName": "Sushi Food",
        "productCode": "125029",
        "releaseDate": "2011-07-19",
        "description": "Standard shushi food",
        "price": 25.95,
        "starRating": 4.8,
        "imageUrl": "assets/images/products/osechi.jpg"
      }
    ];

    return { products };
  }
}
