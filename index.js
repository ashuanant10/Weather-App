let input=document.getElementById('search')
const button=document.getElementById('button')
const date=document.getElementById('date')
const heading=document.getElementById('heading');
const temp=document.getElementById('temp')
const climate=document.getElementById('climate')
const api= async (name)=>{
    try{
        let url= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=e14010a125344ad766410a2c2ec6b8fc`);
        const data = await url.json();
            const d=new Date();
            date.innerHTML=d.toDateString()
            temp.innerHTML=`${Math.round(data.main.temp-273)} °C`;
            climate.innerHTML=data.weather[0].description.toUpperCase();
            document.body.style.backgroundImage = `url(https://source.unsplash.com/random/900*700/?${data.name},${data.weather[0].main})`;
            document.body.style.backgroundRepeat='no-repeat'
            document.body.style.backgroundSize='cover';
    }
    catch{
        console.log("Error");
    }
};

button.addEventListener('click',(e)=>{
    e.preventDefault();
     api(input.value)
   heading.innerHTML=input.value.toUpperCase();
})