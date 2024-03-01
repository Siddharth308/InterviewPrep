//TODO
//1. use querySelectorAll and get all the html elements .
//2. add an eventlistener to listen to it's click
//3. Get the rating of clicked star by using getAttribute('data-value')
//4. Again use querySelectorAll to loop through the elements
//5. If the rating is less than the current selected stars use classList.add (to add styles to the element)

const allStars = document.querySelectorAll(".star").forEach((element) => {
  element.addEventListener("click", function () {
    console.log("clicked");
    let rating = this.getAttribute("data-value");
    document.querySelectorAll(".star").forEach((innerStar) => {
      let value = innerStar.getAttribute("data-value");
      if (value <= rating) {
        innerStar.classList.add("filled");
      } else {
        innerStar.classList.remove("filled");
      }
    });
  });
});
console.log("all stars", allStars);
