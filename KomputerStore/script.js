let amount = 0;
let hundredKr = 0;


function loan() {
let money = prompt("Enter the amount you want to loan:");
document.getElementById("moneyLoan").innerHTML = money + " kr";

if (money > 800) {
    document.getElementById("moneyLoan").innerHTML = "I am sorry, you cannot take a loan. Try to lower the value!";
    }
}

function increaseMoney() {
    hundredKr = amount += 100;
}

function working() {
    increaseMoney()
    document.getElementById("pay").innerHTML = "Total: " + hundredKr + " kr";
}

function computer(name, price, description, featureList, imageLink) {
    this.name = name;
    this.price = price;
    this.description = description;
    this.featureList = featureList;
    this.imageLink = imageLink;
  }
  
  const NewAppleMacBookPro = new computer("New Apple MacBook Pro", "29 299 kr", "Designed for those who defy limits and change the world, the new MacBook Pro is by far the most powerful notebook we’ve ever made.", "Features: An immersive 16-inch Retina display, superfast processors and massive storage", "https://www.apple.com/macbook-pro-16/");
  const LenovoIdeaPad3 = new computer("Lenovo IdeaPad 3", "4 499 kr", "Lenovo Ideapad 3 14-ich laptop is a perfect choice for the traveller. The computer has a weight of 1,2 kg and has a super thin profile (1,79 cm), which makes it simple to bring it everywhere.", "Features: Core i5 processor, Super fast WiFi 5 connection and Intel UHD Graphics integrated chip", "https://www.elgiganten.se/product/datorer-tillbehor/barbar-dator/windows-laptops/176873/lenovo-ideapad-3-14-barbar-dator-platinagra");
  const ASUSE410 = new computer("ASUS E410", "3 490 kr", "Life is about to find the right balance and that is exactly what ASUS E410 delivers. It is easy and compact and shines with a new look that fits your dynamic lifestyle perfectly.", "Features: Up to 512 GB PCIe SSD, NanoEdge screen and new improved keyword", "https://www.asus.com/se/Laptops/For-Home/ASUS-Laptop/ASUS-E410");
  const HuaweiMateBook13 = new computer("Huawei MateBook 13", "7 996 kr", "Huawei MateBook 13 matches good prestanda with an attractive design. The laptop is perfect for journeys and comes in an elegant and ultra thin aluminium chassis which is 1,49 cm thin and has a weight of 1,3 kg.", "Features: Intel® Core™ i5-8265U processor,  13-inch 1440p screen (3:2-format) and Nvidia GeForce MX250 -grafik 2 GB", "https://www.elgiganten.se/product/datorer-tillbehor/barbar-dator/windows-laptops/51203/huawei-matebook-13-core-i5-ssd-256-gb-nvidia-mx250-barbar-dator-gra");

  /*
  document.getElementById("demo").innerHTML =
  "My father is " + myFather.age + "."; 


var laptops = ['New Apple MacBook Pro', 'Lenovo IdeaPad 3', 'ASUS E410','Huawei MateBook 13'],
    select = document.getElementById( 'laptops' );

for( laptop in laptops ) {
    
    select.add( new Option( laptops[laptop] ) );
    
};

computerList.addEventListener("change", function() {
    //DOM Manipulation here
}
*/