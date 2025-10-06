let number1 = 7;
let number2 = 2;
let number3 = 2;
let number4 = 9;

let bowl1 = 99;
let bowl2 = 1;
let bowl3 = 10;

//enter(number1, number2, number3, number4);

function enter(number1, number2, number3, number4) {
  if (number1 === 8 || number1 === 9) {
    if (number2 === number3) {
      if (number4 === 8 || number4 === 9) {
        console.log("ignore");
      }
    }
  } else {
    console.log("accept");
  }
}

//bowl(bowl1, bowl2, bowl3)

function bowl(bowl1, bowl2, bowl3) {
  if (bowl1 > bowl2 && bowl1 < bowl3 || bowl1 < bowl2 && bowl1 > bowl3){
    console.log(bowl1);
  }
  else if(bowl2 > bowl1 && bowl2 < bowl3 || bowl2 < bowl1 && bowl2 > bowl3){
    console.log(bowl2);
  }
  else if(bowl3 > bowl1 && bowl3 < bowl2 || bowl3 < bowl1 && bowl3 > bowl2){
    console.log(bowl3);

  }
  else{
    console.log("they're no middles bowl,,, ermmm what the sigma");
  }
}


//===================================================================================================================================================================================

let sentence = "The blue cat sat on the mat. Why are you so sad cat? Don't ask that.";
//console.log(sentence);

//englishorfrenchanish(sentence)

function englishorfrenchanish(sentence) {
  let t = 0
  let s = 0
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] === 's' || sentence[i] === 'S'){
    s = s + 1;
  }
  else if(sentence[i] === 't' || sentence[i] === 'T'){
    t = t + 1;
  }
  }
  if (t > s) {
    console.log("English")
  }
  else{
    console.log("FRENCH")
  }
}

function car(yesterday, today){
let x = 0
for (let i = 0; i < yesterday.length; i++) {
    if (yesterday[i] === 'c' && today[i] === 'c'){
    x = x + 1;
  }
}
console.log(x)
}
//car("cccccccccccccccccccc", "..bomb....c.....c..c")
//========================================================================================================================================================================================

const books = [
  { title: "The Silent Forest", author: "Emily Harper", year: 2015, genre: "Fiction", price: 12.99, stock: 8 },
  { title: "Digital Dreams", author: "Michael Chen", year: 2019, genre: "Science Fiction", price: 15.50, stock: 12 },
  { title: "Cooking with Love", author: "Sophia Martinez", year: 2020, genre: "Cooking", price: 22.00, stock: 5 },
  { title: "History of Time", author: "Dr. Alan Stone", year: 2010, genre: "History", price: 18.75, stock: 7 },
  { title: "Ocean Tales", author: "Liam Carter", year: 2018, genre: "Adventure", price: 11.99, stock: 14 },
  { title: "Mind Over Matter", author: "Rachel Kim", year: 2021, genre: "Self-Help", price: 14.25, stock: 9 },
  { title: "The Last Kingdom", author: "David Johnson", year: 2013, genre: "Fantasy", price: 16.40, stock: 10 },
  { title: "Code Masters", author: "Olivia Brown", year: 2022, genre: "Technology", price: 25.00, stock: 6 },
  { title: "Poetry of Stars", author: "Noah Wilson", year: 2017, genre: "Poetry", price: 9.99, stock: 20 },
  { title: "Secrets of the Mind", author: "Hannah Lee", year: 2016, genre: "Psychology", price: 19.99, stock: 11 },
  { title: "Into the Desert", author: "Ethan White", year: 2014, genre: "Adventure", price: 13.50, stock: 13 },
  { title: "World of Wonders", author: "Charlotte Green", year: 2023, genre: "Science", price: 27.80, stock: 4 },
  { title: "Legends Untold", author: "Daniel Wright", year: 2011, genre: "Fantasy", price: 15.20, stock: 8 },
  { title: "Journey to Space", author: "Amelia Young", year: 2020, genre: "Science Fiction", price: 21.00, stock: 7 },
  { title: "Life Lessons", author: "Benjamin Scott", year: 2019, genre: "Non-Fiction", price: 17.25, stock: 15 },
  { title: "Garden Magic", author: "Isabella Adams", year: 2012, genre: "Lifestyle", price: 12.00, stock: 9 },
  { title: "Haunted Nights", author: "Lucas King", year: 2021, genre: "Horror", price: 14.99, stock: 8 },
  { title: "Music of the Soul", author: "Grace Baker", year: 2017, genre: "Music", price: 23.50, stock: 6 },
  { title: "Ancient Civilizations", author: "Christopher Hall", year: 2010, genre: "History", price: 20.75, stock: 10 },
  { title: "Bright Futures", author: "Natalie Moore", year: 2022, genre: "Education", price: 18.00, stock: 12 }
];

books
  .filter((book) => book.price < 10.01)
  .foreach((book) => console.log(book.title))