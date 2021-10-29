//Load task API
let mainDiv = document.querySelector("#mainDiv");

axios.get("http://api.bryanuniversity.edu/easton/list")
    .then(res => {
        res.data.forEach((e, i) => {
            let entryDiv = document.createElement("div");
            let currToDoEntry = document.createElement("h2");
            let detailList = document.createElement("ul");
            let currDetailEntry = document.createElement("li");
            compCheck = document.createElement("input");
            currToDoEntry.textContent = res.data[i].name;
            currDetailEntry.textContent = res.data[i].description;
            entryDiv.setAttribute("class", "entry");
            compCheck.setAttribute("type", "checkbox");
            compCheck.setAttribute("id", res.data[i]._id);

            if (res.data[i].isComplete == true) {
                entryDiv.setAttribute("style", "text-decoration: line-through");
                compCheck.checked = true;
            }
                
            mainDiv.appendChild(entryDiv);
            entryDiv.appendChild(compCheck);
            entryDiv.appendChild(currToDoEntry);
            entryDiv.appendChild(detailList);
            detailList.appendChild(currDetailEntry);
        });
    })
    .catch(err => console.log(err))

//Add new task
document.querySelector("#toDoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    axios.post("http://api.bryanuniversity.edu/easton/list", {
        name: document.querySelector("#taskName").value,
        description: document.querySelector("#taskDesc").value
    })
        .then(res => {
            let newEntry = document.createElement("div");
            let newTaskName = document.createElement("h2");
            let newDetailList = document.createElement("ul");
            let newTaskDesc = document.createElement("li");
            let newCheck = document.createElement("input");
            newTaskName.textContent = res.data.name;
            newTaskDesc.textContent = res.data.description;
            newEntry.setAttribute("class", "entry");
            newCheck.setAttribute("type", "checkbox");
            newCheck.setAttribute("id", res.data._id);
            mainDiv.appendChild(newEntry);
            newEntry.appendChild(newCheck);
            newEntry.appendChild(newTaskName);
            newEntry.appendChild(newDetailList);
            newDetailList.appendChild(newTaskDesc);
        })
        .catch(err => console.log(err))
    document.querySelector("#taskName").value = "";
    document.querySelector("#taskDesc").value = "";
})
    
//Mark complete or incomplete
document.addEventListener("click", () => { 
    let boxes = document.querySelectorAll("input[type=checkbox]")
    boxes.forEach((e, i) => {
        boxes[i].addEventListener("change", function() {
            if (boxes[i].checked == true) {
                boxes[i].parentElement.setAttribute("style", "text-decoration: line-through")
                axios.put(`http://api.bryanuniversity.edu/easton/list/${boxes[i].id}`, {
                    isComplete: true
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
            else {
                boxes[i].parentElement.setAttribute("style", "text-decoration: none")
                axios.put(`http://api.bryanuniversity.edu/easton/list/${boxes[i].id}`, {
                    isComplete: false
                })
                    .then(res => console.log(res))
                    .catch(err => console.log(err))
            }
        })
    })
})
