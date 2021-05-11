function loadjson(file,callback){
	var xhr = new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file,true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status===200){
			callback(xhr.responseText);
		}
	};
	xhr.send(null);
}

loadjson("data.json",function(text){
	var data =  JSON.parse(text);
	console.log(data);
	displayData(data.details);
})

function displayData(info){

	var bodyElement = document.querySelector("body");

	var row = document.createElement("div");
	row.classList.add("row");
	bodyElement.appendChild(row);
   
   for(i=0;i<info.length;i++){
   	var column = document.createElement("div");
   	row.appendChild(column);

   	var card = document.createElement("div");
   	card.classList.add("cardbody1");
   	column.appendChild(card);

   	var img1 = document.createElement("img");
   	img1.src=info[i].image;
   	img1.alt="picture";
   	card.appendChild(img1);

   	var br = document.createElement("br");
   	card.appendChild(br);

   	var productdesc = document.createElement("u");
   	productdesc.textContent="Product Description";
   	card.appendChild(productdesc);

   	var name = document.createElement("h3");
   	name.textContent=info[i].name;
   	card.appendChild(name);

   	var oprice = document.createElement("s");
   	oprice.textContent=info[i].originalprice;
   	card.appendChild(oprice);

   	var ofprice = document.createElement("p");
   	ofprice.textContent=info[i].offerprice;
   	card.appendChild(ofprice);

   	

   }


}