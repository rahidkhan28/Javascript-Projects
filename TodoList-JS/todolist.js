let btn = document.querySelector("button")

btn.addEventListener('click',()=>{
    let table = document.querySelector("table")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let btn = document.createElement("button")



    let title = document.querySelector("#title").value
    td1.innerText=title

    let desc = document.querySelector("#desc").value
    td2.innerText=desc


    td3.appendChild(btn)
    btn.innerText="DELETE"

    

    tr.appendChild(td1)
    tr.appendChild(td2)
    tr.appendChild(td3)

    btn.addEventListener('click',()=>{
        console.log("Deleted");

        tr.removeChild(td1)
        tr.removeChild(td2)
        tr.removeChild(td3)

    })

    table.appendChild(tr)

    document.body.append(table)
})