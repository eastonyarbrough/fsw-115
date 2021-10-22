let mainDiv = document.querySelector("#mainDiv");

let toDoHeader = document.createElement("h1");
toDoHeader.textContent = "To-Do List!";
mainDiv.appendChild(toDoHeader);

axios.get("http://api.bryanuniversity.edu/easton/list")
    .then(res => {
        res.data.forEach((e, i) => {
            let entryDiv = document.createElement("div");
            let currToDoEntry = document.createElement("h2");
            let detailList = document.createElement("ul");
            let currDetailEntry = document.createElement("li");
            currToDoEntry.textContent = res.data[i].name;
            currDetailEntry.textContent = res.data[i].description;
            entryDiv.setAttribute("class", "entry");
            
            if (res.data[i].isComplete == true)
            {
                currToDoEntry.setAttribute("style", "text-decoration: line-through");
                currDetailEntry.setAttribute("style", "text-decoration: line-through");
            }
            
            mainDiv.appendChild(entryDiv);
            entryDiv.appendChild(currToDoEntry);
            entryDiv.appendChild(detailList);
            detailList.appendChild(currDetailEntry);
        });
    })
    .catch(err => console.log(err))