const btn = document.getElementById("button")


btn.addEventListener("click",()=>{
    const botdPromise = import('https://openfpcdn.io/botd/v1').then((Botd) => Botd.load())
    // Get detection results when you need them.
    botdPromise
        .then((botd) => botd.detect())
        .then((result) => console.log(result))
        .catch((error) => console.error(error))
})