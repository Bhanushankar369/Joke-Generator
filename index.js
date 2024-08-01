const button = document.querySelector(".generate")
const joketext = document.querySelector(".response-area p")

button.addEventListener('click', getJoke);

async function getJoke(){
    const jokedata = await fetch("https://icanhazdadjoke.com/",{
        headers: {
            'Accept': 'application/json'
        }
    });
    const jokeobj = await jokedata.json();
    joketext.innerHTML = jokeobj.joke;
}