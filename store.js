function handleSearch(){
    const inputSeaechElement = document.getElementById("searchTextField");
    const inputSeaechValue= inputSeaechElement.value;
    loadPhones(inputSeaechValue);
}

const loadPhones = async (searchText) =>{

const response = await fetch("https://openapi.programming-hero.com/api/phones?search="+searchText);

const data =await response.json();
console.log(data);

}