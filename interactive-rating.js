const userRatingForm = document.getElementById("ratingForm");
const userRate = document.getElementsByClassName("rate");
const parentUL = document.getElementById('rating-btns');
const btns = parentUL.getElementsByTagName('li');

let selectedValue = 0;

//a function to address the value being passed in the onclick
function pickRating(u){
    selectedValue = u;
    return selectedValue;
}

// handles assigning classes to the rating buttons

for (li of btns){
    li.addEventListener("click", function(){
        if (this.classList.contains('inactive')){
            this.classList.remove('inactive');
        } else if (this.classList.contains('active')){
            this.classList.remove('active');
            this.classList.add('inactive');
        } else {
            this.classList.add('active');
        }
    })
}

userRatingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    userRatingForm.remove();
    thankyouPage();
});

function thankyouPage(){
    console.log("User Rating: ", selectedValue);
    const sect = document.querySelector('section');
    const svgImg = document.createElement('img');
    const newHead = document.createElement('h1');

    sect.appendChild(svgImg);
    svgImg.src = "./images/illustration-thank-you.svg";
    svgImg.setAttribute("class", "tySVG");

    newHead.textContent = "Thank you!";
    sect.appendChild(newHead);
    newHead.setAttribute("class", "tyHead");
    
    const message = document.createElement('p');
    message.textContent = `You selected ${selectedValue} out of 5`;
    sect.appendChild(message);
    message.setAttribute("class", "tyResponse");

    const newPara = document.createElement('p');
    sect.appendChild(newPara);
    newPara.textContent = `We appreciate you taking the time to give a rating. If you ever need more support, 
    don\'t hesitate to get in touch!`;
    newPara.setAttribute("class", "tyPara");

}



