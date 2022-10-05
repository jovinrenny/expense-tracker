const nameInput =  document.getElementById("name")
const amountInput =  document.getElementById("amount")
const dateInput =  document.getElementById("date")
const addBtn = document.getElementById("expense-btn")
const table = document.getElementById("table")

addBtn.addEventListener("click", function() {
    const nameInputValue = nameInput.value
    const amountInputValue = amountInput.value
    const dateInputValue = dateInput.value
    nameInput.value = ""
    amountInput.value = ""
    dateInput.value = ""

    table.innerHTML += `
    
    <tr id="tr-id">
    <td>${nameInputValue}</td>
    <td>${dateInputValue}</td>
    <td>${amountInputValue}<button class="close-btn">&times;</button></td>
    </tr> 
    `
    const trId = document.getElementById("tr-id") 
    const closeBtn = document.getElementsByClassName("close-btn")

    for(let i=0; i < closeBtn.length; i ++) {
        closeBtn[i].onclick = function() {
            this.parentElement.parentElement.style.display = "none"
        }
    }




    // const tr = document.createElement("tr")
    // const td = document.createElement("td")
    // const nametxt = document.createTextNode(nameInputValue)
    // const datetxt = document.createTextNode(dateInputValue)
    // const amounttxt = document.createTextNode(amountInputValue)
    // td.appendChild(nametxt)
    // td.appendChild(datetxt)
    // td.appendChild(amounttxt)
    // tr.appendChild(td)
    // table.appendChild(tr)
   
})