// created a event listener to to activate my click button//
function getSearchValue() {
    document.getElementById("search").addEventListener("click", logSearchValue);
}

// logs the search value //
function logSearchValue() {
   
    let input = document.getElementById("user-search").value;

    console.log(input)
    // api google search url query that runs a google//
    if (input.length !== 0 ) {
        window.location.href = 'https://www.google.com/search?q=' + input;
} else {
    alert("invalid input")
} 
// sends alert that the input was invalid  //
// may have to press google search twice //
} 
//when adding keydown function make sure your key is capitalized lol//
document.getElementById("user-search").addEventListener("keydown",function(event) {
    if(event.key === "Enter"){
event.preventDefault();
logSearchValue();
    }
})




