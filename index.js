fetch("https://opensheet.elk.sh/1G5kY3GGIv-wyA8qq-Um_SazeQgzUzyVMCfRtXXAzrVA/Sheet1")
.then(res => res.json())
.then(data => {
    // console.log(data);

    data.forEach((row,i) => {
        const div = document.createElement("div");
        const img = document.createElement("img")
        const h2 = document.createElement('h2');
        const span = document.createElement('span')

        h2.innerText = `${row.CompanyName}` ;
        img.src = "/youtube.png" || row.images
        div.classList = "divgamelinks" ;
        span.innerHTML =` ${row.descreption} ` ;
        // div.innerText = row.CompanyName; 
        
        
       
        document.body.appendChild(div);
        div.appendChild(img)
        div.appendChild(h2)
        div.appendChild(span)

        div.addEventListener("click",()=>{
            window.open(row.Links,"_blank")
        })
    });
});

document.getElementById('backarrow').addEventListener("click",()=>{
    document.getElementsByClassName('viewDiv')[0].style.display = "none"
})