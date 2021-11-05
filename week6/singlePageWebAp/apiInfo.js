async function collectData() {
    try {
        const dataCollector = []
        const res = await axios.get("https://www.dnd5eapi.co/api/classes")
        const resData = await res
        
        for (i=0; i < 3; i++){
            dataCollector.push(axios.get(`https://www.dnd5eapi.co${resData.data.results[i].url}`))
        }

        Promise.all(dataCollector)
            .then(result => {
                for (i=0; i < result.length; i++){
                    const mainSection = document.querySelector("#gridMain");
                    let newEntry = document.createElement("div");
                    let entryName = document.createElement("h2");
                    let entryHitDie = document.createElement("h3");
                    let newSavingThrows = document.createElement("p");
                    let newStartEquip = document.createElement("p");
                    let newSubclass = document.createElement("p");
                    let newProf = document.createElement("p");
                    newEntry.style = "display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: bisque; opacity: 70%; margin: 25px; padding: 15px; border-radius: 10px; text-align: center"

                    entryName.textContent = result[i].data.name;
                    entryHitDie.textContent = `Hit Dice: d${result[i].data.hit_die}`;
                    newSavingThrows.textContent = "Saving Throws: ";
                    newStartEquip.textContent = "Starting Equipment: ";
                    newSubclass.textContent = "Subclass: ";
                    newProf.textContent = "Proficiencies: ";
                    
                    result[i].data.saving_throws.forEach((e) => {
                        if (newSavingThrows.textContent !== "Saving Throws: ") newSavingThrows.textContent += ` / ${e.name}`;
                        else newSavingThrows.textContent += e.name;
                    })
                    result[i].data.starting_equipment.forEach((e) => {
                        if (newStartEquip.textContent !== "Starting Equipment: ") newStartEquip.textContent += `, ${e.equipment.name}`;
                        else newStartEquip.textContent += e.equipment.name;
                    })
                    result[i].data.subclasses.forEach((e) => {
                        if (newSubclass.textContent !== "Subclass: ") newSubclass.textContent += `, ${e.name}`;
                        else newSubclass.textContent += e.name;
                    })
                    result[i].data.proficiencies.forEach((e) => {
                        if (newProf.textContent !== "Proficiencies: ") newProf.textContent += `, ${e.name}`;
                        else newProf.textContent += e.name;
                    })
                    
                    mainSection.appendChild(newEntry);
                    newEntry.appendChild(entryName);
                    newEntry.appendChild(entryHitDie);
                    newEntry.appendChild(newSavingThrows);
                    newEntry.appendChild(newStartEquip);
                    newEntry.appendChild(newSubclass);
                    newEntry.appendChild(newProf);
                }
            })
            .catch(err => console.log(err))
    }
    catch (error) {
        console.log(error)
    }
}

collectData();

/// GET ALL API DATA - REPLACE "3" IN DATA COLLECTOR FOR-LOOP
// resData.data.results.length