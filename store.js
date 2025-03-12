function handleSearch(){
// loading start
    loadingAnimationTogle(true);

    const inputSeaechElement = document.getElementById("searchTextField");
    const inputSeaechValue= inputSeaechElement.value;
    loadPhones(inputSeaechValue);
}

function loadingAnimationTogle(isLoading){
    const loadingAnimation = document.getElementById("loader-animation");
if(isLoading){
    loadingAnimation.classList.remove("hidden");
}
else{
    loadingAnimation.classList.add("hidden");
}

}


const loadPhones = async (searchText) =>{

const response = await fetch("https://openapi.programming-hero.com/api/phones?search="+searchText);

const serverdata =await response.json();
displayPhones(serverdata.data);

}

const displayPhones = (data) =>{

    const cardContainer = document.getElementById("card-section")
    cardContainer.innerHTML="";

    data.forEach((phones) => {

        const productCard = document.createElement("div");
        productCard.classList.add("card");

        productCard.innerHTML = ` <div id="card-image">
            <img src=${phones.image} alt="iphone image">
        </div>
        
        <h3 class="card-title">${phones.phone_name}</h3>

        <p class="card-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel, laboriosam?</p>

        <div class="card-price">
            <span>$</span>
            <span id="item-price">999</span>
        </div>

        <div class="card-button">
            <button class="btn">Show Details</button>
        </div>`
 
        cardContainer.appendChild(productCard);

});

loadingAnimationTogle(false);

}