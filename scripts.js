let counst = 1
// document.getElementById('radio1').checked = true
// setInterval(() => {
//     nextslide()
// },12000)

function nextslide(){
    counst++
    if(counst>4){
        counst = 1
    }
    document.getElementById('radio'+counst).checked = true
}