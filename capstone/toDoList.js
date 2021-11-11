//Load random app background
axios.get("https://api.unsplash.com/photos/random?client_id=_piIFyCBqkyKL6-QYu2PBx3jxRs0TFly3acPhJyQh8Y")
    .then(res => {
        document.body.style = `background: url(${res.data.urls.full}) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;`
    })
    .catch(err => console.log(err))

//Load task API
let mainDiv = document.querySelector("#mainDiv");
let idArr = [];

axios.get("http://api.bryanuniversity.edu/easton/list")
    .then(res => {
        res.data.forEach((e, i) => {
            let splitQuery = res.data[i].name.split(" ");
            let queryNum = splitQuery.length - 1;
            let randomNum = Math.floor((Math.random() * 10) + 1);
            let newImg = document.createElement("img");

            axios.get(`https://api.unsplash.com/search/photos?page=${randomNum}&query=${splitQuery[queryNum]}&client_id=_piIFyCBqkyKL6-QYu2PBx3jxRs0TFly3acPhJyQh8Y`)
                .then(result => {
                    newImg.src = result.data.results[Math.floor(Math.random() * result.data.results.length)].urls.full;
                })
            
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
            entryDiv.appendChild(newImg);
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
            let splitQuery = res.data.name.split(" ");
            let queryNum = splitQuery.length - 1;
            let randomNum = Math.floor((Math.random() * 10) + 1);
            let newImg = document.createElement("img");

            axios.get(`https://api.unsplash.com/search/photos?page=${randomNum}&query=${splitQuery[queryNum]}&client_id=_piIFyCBqkyKL6-QYu2PBx3jxRs0TFly3acPhJyQh8Y`)
                .then(result => {
                    newImg.src = result.data.results[Math.floor(Math.random() * result.data.results.length)].urls.full;
                })


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
            newEntry.appendChild(newImg);
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




///search API
//https://api.unsplash.com/search/photos?page=1&query=kitchen&client_id=_piIFyCBqkyKL6-QYu2PBx3jxRs0TFly3acPhJyQh8Y