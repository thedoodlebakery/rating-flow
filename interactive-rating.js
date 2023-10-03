const userRatingForm = document.getElementById("ratingForm");
const userRate = document.getElementsByClassName("rate");
const parentUL = document.getElementById('rating-btns');
const btns = parentUL.getElementsByTagName('input');

let selectedValue = 0;

//a function to address the value being passed in the onclick
function pickRating(u){
    selectedValue = u;
    return selectedValue;
}

// handles assigning classes to the rating buttons

for (const btn of btns){
    btn.addEventListener("click", function(){
        if (this.classList.contains('inactive')){
            this.classList.remove('inactive');
        } else if (this.classList.contains('active')){
            this.classList.remove('active');
            this.classList.add('inactive');
        } else {
            this.classList.add('active');
        }

    });
}

userRatingForm.addEventListener("submit", (e) => {
    e.preventDefault();

    userRatingForm.remove();
    thankyouPage();
});

// Thank You Page
function thankyouPage(){
   
    const sect = document.querySelector('section');
    const svgImg = document.createElement('img');
    const newHead = document.createElement('h1');

    if(sect.classList.contains('hidden')){
        sect.classList.remove('hidden');
        
    }

    sect.appendChild(svgImg);
    svgImg.src = "./images/illustration-thank-you.svg";
    svgImg.setAttribute("class", "tySVG");

    const message = document.createElement('p');
    message.textContent = `You selected ${selectedValue} out of 5`;
    sect.appendChild(message);
    message.setAttribute("class", "tyResponse");

    newHead.textContent = "Thank you!";
    sect.appendChild(newHead);
    newHead.setAttribute("class", "tyHead");

    const newPara = document.createElement('p');
    sect.appendChild(newPara);
    newPara.textContent = `We appreciate you taking the time to give a rating. If you ever need more support, 
    don\'t hesitate to get in touch!`;
    newPara.setAttribute("class", "tyPara");

}



