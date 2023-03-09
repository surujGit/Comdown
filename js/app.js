const endDate =" 9 march 2023 5:45 pm "

document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input")
const clock = () => {
   const end = new Date(endDate)
   const now = new Date() 
   const diff=(end - now)/1000;
   
   if(diff < 0)return;

   inputs[0].value = Math.floor(diff / 3600 / 24);
   inputs[1].value = Math.floor(diff / 3600) % 24;
   inputs[2].value = Math.floor(diff / 60 ) % 60;
   inputs[3].value = Math.floor(diff) % 60;

}
clock()

setInterval(
    () => {
        clock()
    },
    1000
)
