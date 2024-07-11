console.log("Initializing Javascript")

function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewsStr
    if(views<1000) {
        viewsStr = views;
    }
    else if(views>1000000) {
        viewsStr = views/1000000 + 'M';
    }
    else{
        viewsStr = views/1000 + 'K';
    }



    let body = `<div class="card">
            <div class="image">
                <img src="${thumbnail}" alt="yt thumbnail">
                <div class="capsule">
                    ${duration}
                </div>
            </div>
            <div class="text">
                <h1>${title}</h1>
                <p>${cName} <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" color="white" fill="white">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                </svg> ${viewsStr} views <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="10" height="10" color="white" fill="white">
                    <circle cx="12" cy="12" r="8" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round" />
                </svg> ${monthsOld} months ago</p>
            </div>
        </div>`

        document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + body;

}

createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw")

