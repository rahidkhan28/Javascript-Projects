let btn = document.querySelector("button")

btn.addEventListener('click',()=>{
    let table = document.querySelector("table")
    let tr = document.createElement("tr")
    let td1 = document.createElement("td")
    let td2 = document.createElement("td")
    let td3 = document.createElement("td")
    let btn = document.createElement("button")



    let name = document.querySelector("#name").value
    console.log(name);
    td1.innerText=name

    let age = document.querySelector("#age").value
    console.log(age);
    td2.innerText=age


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