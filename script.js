const Showtime=()=>{
   const Time=()=>{
    let location=document.getElementById('locs').value;
    const time=new Date().toLocaleTimeString('en-US',{
        timeZone:location,
        hour:'2-digit',
        minute:'2-digit',
        second:'2-digit'
    });
    const splittedLoc=location.split('/')
    // console.log(time)
    document.getElementById('result').innerHTML=splittedLoc[1]+"<br/><br/>"+time;
   }
   setInterval(Time,1000)

}
