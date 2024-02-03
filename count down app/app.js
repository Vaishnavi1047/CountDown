const endDate="4 February 2024 12:00 PM"
document.getElementById("end-date").ineerText=endDate;
const inputs=document.querySelectorAll("input")

function clock(){
    const end=new Date(endDate)
    const now=new Date()
    const diff=(end-now)/1000; //milliseconds
    if(diff<0) return;
    //input ke andar value (.value) se dalte
    inputs[0].value=Math.floor(diff/3600/24); //day
    // 1 Day=24 Hr 1hr=60 min 60 min=3600 sec
    //calculate hours
    inputs[1].value=Math.floor((diff/3600) % 24);
    //calculate min
    inputs[2].value=Math.floor((diff/60)%60);
    //sec
    inputs[3].value=Math.floor((diff)%60);

}
clock()
setInterval(
    ()=>{
        clock()
    },1000
)