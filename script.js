const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const searchBtn = document.querySelector("#search-btn");
const sound = document.querySelector("#sound");
const result = document.querySelector("#result");



searchBtn.addEventListener("click", () => {
    let inputWord = document.querySelector("#seach-inp").value;
    //console.log(inputWord);
    fetch(`${url} ${inputWord}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        result.innerHTML = `
        <div class="word">
        <h3>${inputWord}</h3>
        <button onclick= "playSound()">
          <i class="fa-solid fa-volume-high"></i>
        </button>
      </div>
      <div class="details">
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p>/${data[0].phonetic}/</p>
      </div>
      <p class="word-meaning">
        ${data[0].meanings[0].definitions[0].definition}
      </p>
      <p class="word-example">
        ${data[0].meanings[0].definitions[0].example || ""}
      </p>`
      sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
      
      
    })

    .catch(() => {
        result.innerHTML = `<h3 class = "error">Couldn't find the word</h3>`
    })
    

})

function playSound(){
  sound.play()
}



