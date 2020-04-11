var tds = document.querySelectorAll('td');
var players = ["X", "O"];
var now = 0

document.querySelectorAll('td').forEach(elem => {
    elem.addEventListener('click', add)

})
function add(elem) {
    if (elem.target.innerText == "") {
        elem.target.innerText = players[now]
        if (now == 1) now = 0; else if(now==0) now = 1
    }
}
 
tds.forEach(elem => {
    elem.addEventListener('click', verify)
})


function verify() {
    if ((tds[0].innerText != "" && tds[0].innerText == tds[1].innerText && tds[1].innerText == tds[2].innerText)
        || (tds[3].innerText != "" && tds[3].innerText == tds[4].innerText && tds[4].innerText == tds[5].innerText)
        || (tds[6].innerText != "" && tds[6].innerText == tds[7].innerText && tds[7].innerText == tds[8].innerText)

        || (tds[0].innerText != "" && tds[0].innerText == tds[3].innerText && tds[3].innerText == tds[6].innerText)
        || (tds[1].innerText != "" && tds[1].innerText == tds[4].innerText && tds[4].innerText == tds[7].innerText)
        || (tds[2].innerText != "" && tds[2].innerText == tds[5].innerText && tds[5].innerText == tds[8].innerText)

        || (tds[0].innerText != "" && tds[0].innerText == tds[4].innerText && tds[4].innerText == tds[8].innerText)
        || (tds[2].innerText != "" && tds[2].innerText == tds[4].innerText && tds[4].innerText == tds[6].innerText)

    ) {
        
        drawResult();
        tds.forEach(item => {
            item.removeEventListener('click', add)
            item.removeEventListener('click', verify)
        }
        
        )
        if(now==1)
        document.querySelector('.resultat').innerHTML="<b> X WIN</b>"
        else
        document.querySelector('.resultat').innerHTML="<b> O WIN</b>"
        
    }
}

function replay(){
    document.querySelector('.resultat').innerText=""
    
    tds.forEach(item => {
        item.innerText=""
        item.style.backgroundColor="white";
        item.addEventListener('click', add)
        item.addEventListener('click', verify)
        
    })
}
function drawing(a,b,c){
    tds[a].style.backgroundColor="rgba(255,0,0,0.4)";
    tds[b].style.backgroundColor="rgba(255,0,0,0.4)";
    tds[c].style.backgroundColor="rgba(255,0,0,0.4)";
    
}

function drawResult(){
    if (tds[0].innerText != "" &&tds[0].innerText == tds[1].innerText && tds[1].innerText == tds[2].innerText){
        drawing(0,1,2)
    }
     else if (tds[3].innerText != "" &&tds[3].innerText == tds[4].innerText && tds[4].innerText == tds[5].innerText){
        drawing(3,4,5)
    }
    else if (tds[6].innerText != "" &&tds[6].innerText == tds[7].innerText && tds[7].innerText == tds[8].innerText){
        drawing(6,7,8)
    }

     else if(tds[0].innerText != "" && tds[0].innerText == tds[3].innerText && tds[3].innerText == tds[6].innerText){
        drawing(0,3,6)
    }
    else if(tds[1].innerText != "" && tds[1].innerText == tds[4].innerText && tds[4].innerText == tds[7].innerText){
        drawing(1,4,7)
    }
    else if(tds[2].innerText != "" && tds[2].innerText == tds[5].innerText && tds[5].innerText == tds[8].innerText){
        drawing(2,5,8)
        
    }
   else  if(tds[0].innerText != "" && tds[0].innerText == tds[4].innerText && tds[4].innerText == tds[8].innerText){
        drawing(0,4,8)
    }
    else if(tds[2].innerText != "" && tds[2].innerText == tds[4].innerText && tds[4].innerText == tds[6].innerText){
        drawing(2,4,6)
    }

}