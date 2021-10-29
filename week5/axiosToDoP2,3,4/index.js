//Load task API
let mainDiv = document.querySelector("#mainDiv");
let idArr = [];

axios.get("http://api.bryanuniversity.edu/easton/list")
    .then(res => {
        res.data.forEach((e, i) => {
            let entryDiv = document.createElement("div");
            let currToDoEntry = document.createElement("h2");
            let detailList = document.createElement("ul");
            let currDetailEntry = document.createElement("li");
            let deleteBtn = document.createElement("button");
            compCheck = document.createElement("input");
            currToDoEntry.textContent = res.data[i].name;
            currDetailEntry.textContent = res.data[i].description;
            deleteBtn.textContent = "Delete";
            entryDiv.setAttribute("class", "entry");
            compCheck.setAttribute("type", "checkbox");
            deleteBtn.setAttribute("class", "delBtn");

            if (res.data[i].isComplete == true) {
                entryDiv.setAttribute("style", "text-decoration: line-through");
                compCheck.checked = true;
            }
                
            mainDiv.appendChild(entryDiv);
            entryDiv.appendChild(compCheck);
            entryDiv.appendChild(currToDoEntry);
            entryDiv.appendChild(detailList);
            entryDiv.appendChild(deleteBtn);
            detailList.appendChild(currDetailEntry);

            idArr.push(res.data[i]._id);
        });
    })
    .catch(err => console.log(err))

//Add new task
document.querySelector("#toDoForm").addEventListener("submit", (e) => {
    e.preventDefault();
    axios.post("http://api.bryanuniversity.edu/easton/list", {
        name: document.querySelector("#taskName").value,
        description: document.querySelector("#taskDesc").value,
        isComplete: false
    })
        .then(res => {
            let newEntry = document.createElement("div");
            let newTaskName = document.createElement("h2");
            let newDetailList = document.createElement("ul");
            let newTaskDesc = document.createElement("li");
            let newCheck = document.createElement("input");
            let newDelBtn = document.createElement("button");

            newTaskName.textContent = res.data.name;
            newTaskDesc.textContent = res.data.description;
            newDelBtn.textContent = "Delete";

            newEntry.setAttribute("class", "entry");
            newCheck.setAttribute("type", "checkbox");
            newDelBtn.setAttribute("class", "delBtn");

            mainDiv.appendChild(newEntry);
            newEntry.appendChild(newCheck);
            newEntry.appendChild(newTaskName);
            newEntry.appendChild(newDetailList);
            newEntry.appendChild(newDelBtn);
            newDetailList.appendChild(newTaskDesc);

            idArr.push(res.data._id);
        })
        .catch(err => console.log(err))
    document.querySelector("#taskName").value = "";
    document.querySelector("#taskDesc").value = "";
})
    
//Mark complete or incomplete
document.addEventListener("mouseover", () => { 
    let boxes = document.querySelectorAll("input[type=checkbox]");
    boxes.forEach((e, i) => {
        boxes[i].addEventListener("change", function() {
            if (boxes[i].checked == true) {
                boxes[i].parentElement.setAttribute("style", "text-decoration: line-through")
                axios.put(`http://api.bryanuniversity.edu/easton/list/${idArr[i]}`, {
                    isComplete: true
                })
                    .catch(err => console.log(err))
            }
            else {
                boxes[i].parentElement.setAttribute("style", "text-decoration: none")
                axios.put(`http://api.bryanuniversity.edu/easton/list/${idArr[i]}`, {
                    isComplete: false
                })
                    .catch(err => console.log(err))
            }
        })
    })
})

//Delete entries
document.addEventListener("mouseover", () => {
    let delBtn = document.querySelectorAll(".delBtn");
    delBtn.forEach((e, i) => {
        delBtn[i].addEventListener("click", () => {
            axios.delete(`http://api.bryanuniversity.edu/easton/list/${idArr[i]}`)
                .catch(err => console.log(err))
            delBtn[i].parentElement.remove();
        })
    })
})