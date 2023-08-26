const jokePlace = document.querySelector('#jokeM');
const nextBtn = document.querySelector('#nextbtn');

const generatejoke=async()=>{
  try{
    const setHeader={
      headers:{
        Accept:'application/json'
      }
    }

    const jokess=await fetch('https://icanhazdadjoke.com/',setHeader);
    const data=await jokess.json();
    jokePlace.innerHTML=data.joke;
  }
  catch(err){
    jokePlace.innerHTML=`Error is ${err}`;
  }
}

nextBtn.addEventListener('click',generatejoke);
generatejoke();