//Mtg page control
if (document.body.id == "mtgBody")
{
    document.querySelector("#navIcon").addEventListener("mouseover", function() {
        document.querySelector("#navText").textContent = "Dungeons and Dragons!"
    });

    document.querySelector("#navIcon").addEventListener("mouseout", function() {
        document.querySelector("#navText").textContent = ""
    });

    document.querySelector("#fetchBtn").addEventListener("click", function() {
        if (document.querySelector("#gridContainer").childElementCount == 0)
        {
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
                })
                .catch(err => console.log(err))
        }
    });
}

//D&D page control
if (document.body.id == "dndBody")
{
    document.querySelector("#navIcon").addEventListener("mouseover", function() {
        document.querySelector("#navText").textContent = "Magic the Gathering!"
    });

    document.querySelector("#navIcon").addEventListener("mouseout", function() {
        document.querySelector("#navText").textContent = ""
    });

    document.querySelector("#fetchBtn").addEventListener("click", function() {
        if (document.querySelector("#dndGridContainer").childElementCount == 0)
        {
            axios.get("https://www.dnd5eapi.co/api/monsters")
                .then(res => {
                    res.data.results.forEach((e, i) => {
                        let entryDiv = document.createElement("div");
                        let entryName = document.createElement("h3");
                        entryDiv.setAttribute("id", res.data.results[i].index);
                        entryName.textContent = res.data.results[i].name;
                        document.querySelector("#dndGridContainer").appendChild(entryDiv);
                        entryDiv.appendChild(entryName);

                        axios.get(`https://www.dnd5eapi.co/api/monsters/${res.data.results[i].index}`)
                            .then(res => {
                                //Basic details of monsters
                                let entryDetails = document.createElement("ul");
                                let entryAlign = document.createElement("li");
                                let entryAC = document.createElement("li");
                                let entryCR = document.createElement("li");
                                entryAlign.textContent = `Alignment: ${res.data.alignment}`;
                                entryAC.textContent = `Armor Class: ${res.data.armor_class}`;
                                entryCR.textContent = `Challenge Rating: ${res.data.challenge_rating}`;
                                document.querySelector(`#${res.data.index}`).appendChild(entryDetails);
                                entryDetails.appendChild(entryAlign);
                                entryDetails.appendChild(entryAC);
                                entryDetails.appendChild(entryCR);

                                //Attack details of monsters
                                let attackDetails = document.createElement("ul");
                                let attackHeader = document.createElement("h4");
                                attackHeader.textContent = "Attacks:";
                                document.querySelector(`#${res.data.index}`).appendChild(attackHeader);
                                document.querySelector(`#${res.data.index}`).appendChild(attackDetails);

                                res.data.actions.forEach((e, i) => {
                                    let newAttack = document.createElement("li");
                                    newAttack.textContent = `${res.data.actions[i].name}: ${res.data.actions[i].desc}`;
                                    attackDetails.appendChild(newAttack);
                                })
                            })
                            .catch(err => console.log(err))
                    });
                })
                .catch(err => console.log(err))
        }
    });
}