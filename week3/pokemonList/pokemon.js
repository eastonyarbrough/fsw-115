//Create header for the page before API data is fetched.
let pageHeader = document.createElement("h1");
pageHeader.textContent = "Pokemon Abilities";
document.body.appendChild(pageHeader);

//Use XMLHttpRequest to fetch and display the individual pokemon data.
const xhr = new XMLHttpRequest();

xhr.open("GET", "https://pokeapi.co/api/v2/pokemon", true);
xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200)
    {
        let apiData = JSON.parse(xhr.responseText);
        displayData(apiData.results);
    }
    else if (xhr.readyState == 4 && xhr.status !== 200)
    {
        let failFetch = document.createElement("h1");
        failFetch.textContent = "Failed To Retrieve Data";
        document.body.appendChild(failFetch);
    }
}

function displayData(data) {
    for (i=0; i<data.length; i++)
    {
        let newEntry = document.createElement("h2");
        newEntry.textContent = data[i].name;
        document.body.appendChild(newEntry);
        let entryList = document.createElement("ul");

        //Use XMLHttpRequest to fetch and display individual pokemon ability data.
        const addRequest = new XMLHttpRequest();

        addRequest.open("GET", `https://pokeapi.co/api/v2/pokemon/${i+1}/`, true);
        addRequest.send();

        addRequest.onreadystatechange = function() {
            if (addRequest.readyState == 4 && addRequest.status == 200)
            {
                let addData = JSON.parse(addRequest.responseText);
                displayDetails(addData.abilities);
            }
            else if (addRequest.readyState == 4 && addRequest.status !== 200)
            {
                let failFetch = document.createElement("li");
                failFetch.textContent = "Failed To Retrieve Data";
                entryList.appendChild(failFetch);
            }

            function displayDetails(data) {
                for (i=0; i<data.length; i++)
                {
                    let newDetail = document.createElement("li");
                    newDetail.textContent = data[i].ability.name;
                    entryList.appendChild(newDetail);
                }
            }
        }

        document.body.appendChild(entryList);
    }
}