//const DOMSelectors = {
  //name: document.getElementById("name"),
  //price: document.getElementById("price"),
  //Alignment: document.getElementById("Alignment"),
  //type: document.getElementById("type"),
  //instock: document.getElementById("instock"),
  //blue: document.getElementById("blue"),
//};


const products = [
  { name: "Legally Obtained Bike", img: "bikelegal.png", price: 1999.99, Alignment: "Lawful Neutral", type: "Legal", instock: true, blue: false },
  { name: "Stolen Bike", price: 174.99, img: "bike.webp", Alignment: "Neutral Evil", type: "Illegal", instock: true, blue: false },
  { name: "Door to The Silent Forest", img: "https://media.istockphoto.com/id/611604344/photo/halloween-background-black-and-white-dark-forest-blurred-halloween-concept.jpg?s=612x612&w=0&k=20&c=fYBJVPs8hqE_MM64EbKPCAvHLS4sXFJ9-BbnA4h9l_0=", price: 20000, Alignment: "Neutral Evil", type: "Supernatural", instock: true, blue: false },
  { name: "One Dollar Bill", img: "mone.jpg", price: 4.99, Alignment: "Lawful Evil", type: "Legal", instock: true, blue: false },
  { name: "Two Dollar Bill", img: "lifesavings.jpg", price: 39999.99, Alignment: "Lawful Evil", type: "Legal", instock: false, blue: false },
  { name: "AWESOME EVIL BLUE FLAMING SKULL FLOATING NEXT TO KEYBOARD WITH KEYBOARD KEY WITH G ON IT HIGHLIGHTED", img: "https://i.ytimg.com/vi/dyEoHE85Q3c/hqdefault.jpg", price: 1.99, Alignment: "Chaotic Evil", type: "Supernatural", instock: false, blue: true},
  { name: "Rare Gems", img: "rcokandroller.jpeg", price: 19999.99, Alignment: "Lawful Evil", type: "Legal", instock: true, blue: false },
  { name: "Ugly Yellow Rock", img: "yuck.png", price: 0.05, Alignment: "Lawful Good", type: "Legal", instock: true, blue: false },
  { name: "My Ancestor's Ghost", price: 60006, img: "ghtsottsgost.jpg", Alignment: "Neutral Evil", type: "Supernatural", instock: true, blue: true },
  { name: "All of my Personal Information", img: "file.png", price: 4999.99, Alignment: "True Neutral", type: "Legal", instock: true, blue: false },
  { name: "Nuclear Codes", img: "https://i.etsystatic.com/43407624/r/il/8f46c8/6135293562/il_fullxfull.6135293562_7grj.jpg", price: 149999.99, Alignment: "Neutral Evil", type: "Illegal", instock: false, blue: false },
  { name: "Truth Nuke Codes", img: "https://media.tenor.com/bH1_fj4u9ogAAAAe/true-morgan-freeman.png", price: 12999.99, Alignment: "Neutral Good", type: "Legal", instock: true, blue: true },
  { name: "Ketchup that flows more than 14 centimeters in 30 seconds at a room temperature of 20 degrees celsius when tested in a Bostick Consistometer", img: "https://preview.redd.it/hey-peter-what-does-this-mean-v0-0milz66bgy8b1.jpg?width=1080&crop=smart&auto=webp&s=c3cd550c2940b6ee63f4dc8999606008388291bb", price: 22.99, Alignment: "Chaotic Good", type: "Illegal", instock: true, blue: false},
  { name: "Air(32oz)", img: "https://i.etsystatic.com/6020270/r/il/79b151/538643842/il_570xN.538643842_mkot.jpg", price: 199.99, Alignment: "Neutral Evil", type: "Legal", instock: true, blue: true },
  { name: "Relatively Threatening Cat", img: "https://i.ytimg.com/vi/rUGIYw-6dwc/hq2.jpg?sqp=-oaymwEYCKACEOgCSFryq4qpAwoIARUAAIhC0AEB&rs=AOn4CLBiJjVCaMKHU5pYcF2oZg2GmGS_Kw", price: 79.99, Alignment: "Chaotic Good", type: "Legal", instock: true, blue: false },
  { name: "This cool rock I found", img: "https://m.media-amazon.com/images/M/MV5BOWUzNzIzMzQtNzMxYi00OWRiLTlhZjEtZTRjYWVkYzI4ZjMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg", price: 239.99, Alignment: "Chaotic Neutral", type: "Illegal", instock: true, blue: false },
  { name: "Ticket for the FLAVORTOWN EXPRESS", img: "https://m.media-amazon.com/images/I/7108YjQRArL._UF1000,1000_QL80_.jpg", price: 2789.99, Alignment: "Lawful Good", type: "Legal", instock: false, blue: false },
  { name: "Ticket for the Pain Train", img: "https://voca-land.sgp1.cdn.digitaloceanspaces.com/0/1757702915445/7b7dbc6f.jpg", price: 27.99, Alignment: "Chaotic Neutral", type: "Illegal", instock: true, blue: false },
  { name: "Generic Reference/Joke", img: "https://s3.envato.com/files/473069220/PSX_20230823_132045.jpg", price: 0.99, Alignment: "Lawful Good", type: "Legal", instock: false, blue: true },
  { name: "DOM Manipulation Project", img: "asgsimnernt.png", price: 202510.09, Alignment: "Lawful Good", type: "Legal", instock: true, blue: false },
];

function inject(item){
const container = document.querySelector(".container");
container.insertAdjacentHTML("afterbegin", 
  `<div class="card">
      <h1 class="name">${item.name}</h1>
      <img class="imag" src="${item.img}"/>
      <h2 class="price">${item.price}$</h2>
      <button class="btn">Add to Cart</button>
    </div>`
);
}
products.forEach((product) => inject(product));

inject(products[20]);

function AddtoCart(){
  const buttons = document.querySelectorAll("button");
  btnArray.forEach((btn) => btn.addEventListener("click", function(event){
    event.target.closest(".card")
  }))
}