axios.get("http://api.bryanuniversity.edu/easton/list")
    .then(res => {
        res.data.forEach((e, i) => {
            let currToDoEntry = document.createElement("h1");
            let detailList = document.createElement("ul");
            let currDetailEntry = document.createElement("li");
            currToDoEntry.textContent = res.data[i].name;
            currDetailEntry.textContent = res.data[i].description;
            
            if (res.data[i].isComplete == true)
            {
                currToDoEntry.setAttribute("style", "text-decoration: line-through")
                currDetailEntry.setAttribute("style", "text-decoration: line-through")
            }

            document.body.appendChild(currToDoEntry);
            document.body.appendChild(detailList);
            detailList.appendChild(currDetailEntry);
        });
    })
    .catch(err => console.log(err))