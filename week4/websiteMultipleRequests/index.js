document.querySelector("#navIcon").addEventListener("mouseover", function() {
    document.querySelector("#navText").textContent = "Dungeons and Dragons!"
});

document.querySelector("#navIcon").addEventListener("mouseout", function() {
    document.querySelector("#navText").textContent = ""
});

document.querySelector("#fetchBtn").addEventListener("click", function() {
    axios.get("https://api.magicthegathering.io/v1/cards")
        .then(res => {
            res.data.cards.forEach((e, i) => {
                let entryDiv = document.createElement("div");
                let newEntry = document.createElement("h3");
                let newImg = document.createElement("img");
                newEntry.textContent = res.data.cards[i].name;
                newImg.setAttribute("src", res.data.cards[i].imageUrl)
                
                if (newImg.src !== "http://127.0.0.1:5500/undefined")
                {
                    document.querySelector("#gridContainer").appendChild(entryDiv)
                    entryDiv.appendChild(newEntry);
                    entryDiv.appendChild(newImg);
                }
            });
            console.log(res.data.cards)
        })
        .catch(err => console.log(err))
});