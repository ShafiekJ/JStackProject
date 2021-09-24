var stocks = []; //Array used to store all 3 products
var usedEmail = [];// Array used to store email addresses that have been used before

var product_1 = {Name: "Product_1", Amount: 0,Price: 0};
var product_2 = {Name: "Product_2", Amount: 0,Price: 0};
var product_3 = {Name: "Product_3", Amount: 0,Price: 0};

stocks.push(product_1);
stocks.push(product_2);
stocks.push(product_3);


document.getElementById("addStockSubmit").onclick = function(){// Section for adding to stock


	if(document.getElementById('addProduct_1').checked){// Adding to the price and stock of each product if they are checked
		stocks[0].Amount += parseInt(document.getElementById("stockAddAmount").value);
		stocks[0].Price += parseInt(document.getElementById("priceOfStock").value);
		}
	
	else if(document.getElementById('addProduct_2').checked){
		stocks[1].Amount += parseInt(document.getElementById("stockAddAmount").value);
		stocks[1].Price += parseInt(document.getElementById("priceOfStock").value);
		}
	
	else if(document.getElementById('addProduct_3').checked){
		stocks[2].Amount += parseInt(document.getElementById("stockAddAmount").value);
		stocks[2].Price += parseInt(document.getElementById("priceOfStock").value);
		}
	  
	for(let i = 0;i<stocks.length; i++){// Printing of each product to the console
		console.log(stocks[i]);
		}
	
	stockUpdater() // Calling the function to update the amount of stock after adding
	
	}
	
document.getElementById("removeStockSubmit").onclick = function(){// Removing the amount of stock after 'selling'
	let used = false;// boolean variable to check if an email address was used
	usedEmail.unshift(document.getElementById("removeEmail").value); // Adding the given email to the used emails array
	for(let i = 1;i<usedEmail.length; i++){// For loop to check if the given email has been used before
		if(usedEmail[i] == document.getElementById("removeEmail").value){
			window.alert("This email address has been used");
			usedEmail.unshift();used = true; break;
			}
		
		}
	if(document.getElementById('removeProduct_1').checked && used == false){// Removing from the amount stock of a product if it was checked
		stocks[0].Amount -= parseInt(document.getElementById("stockRemoveAmount").value);
		
		}
	
	else if(document.getElementById('removeProduct_2').checked && used == false){
		stocks[1].Amount -= parseInt(document.getElementById("stockRemoveAmount").value);
		
		}
	
	else if(document.getElementById('removeProduct_3').checked && used == false){
		stocks[2].Amount -= parseInt(document.getElementById("stockRemoveAmount").value);
		}


	for(let i = 0;i<stocks.length; i++){
		console.log(stocks[i]);
		}
	stockUpdater() // Calling the function to update the amount of stock after removing
	}
	
function stockUpdater() { 
 
	let stockOne = document.getElementById("product_1Stock") ;
	stockOne.innerHTML = "Left in Stock " + stocks[0].Amount; //Using inner.HTML to update the amount of each product left in stock
	let stockTwo = document.getElementById("product_2Stock");
	stockTwo.innerHTML = "Left in Stock "+ stocks[1].Amount;
	let stockThree = document.getElementById("product_3Stock");
	stockThree.innerHTML = "Left in Stock "+ stocks[2].Amount;
	
	let averageOne = document.getElementById("product_1Price") ;
	let avr1 = stocks[0].Price / stocks[0].Amount;                 // Calculating the average price of each product
	avr1 = avr1.toFixed(2);                               // Rounging off the average price to 2 decimal places
	averageOne.innerHTML = "Average Price: R " +  avr1 ;  //Using inner.HTML to update the average price of each product left in stock

	let averageTwo = document.getElementById("product_2Price") ;
	let avr2 = stocks[1].Price / stocks[1].Amount;
	avr2 = avr2.toFixed(2);
	averageTwo.innerHTML = "Average Price: R "  + avr2;	
	
	let averageThree = document.getElementById("product_3Price") ;
	let avr3 = stocks[2].Price / stocks[2].Amount;
	avr3 = avr3.toFixed(2);
	averageThree.innerHTML = "Average Price: R " + avr3;
	
	
	}


