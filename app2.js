//const DOMSelectors = {
  //name: document.getElementById("name"),
  //price: document.getElementById("price"),
  //Alignment: document.getElementById("Alignment"),
  //type: document.getElementById("type"),
  //instock: document.getElementById("instock"),
  //blue: document.getElementById("blue"),
//};


const stuffs = [
  { name: "Legally Obtained Bike", price: 1999.99, Alignment: "Lawful Neutral", type: "Legal", instock: true, blue: false },
  { name: "Stolen Bike", price: 174.99, Alignment: "Neutral Evil", type: "Illegal", instock: true, blue: false },
  { name: "Door to The Silent Forest", price: 20000, Alignment: "Neutral Evil", type: "Supernatural", instock: true, blue: false },
  { name: "One Dollar Bill", price: 4.99, Alignment: "Lawful Evil", type: "Legal", instock: true, blue: false },
  { name: "Two Dollar Bill", price: 39999.99, Alignment: "Lawful Evil", type: "Legal", instock: false, blue: false },
];

console.log(stuffs)
stuffs
  .filter((stuff) => stuff.price < 10.01)
  .foreach((stuff) => console.log(stuff.name))