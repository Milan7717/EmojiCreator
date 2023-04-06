//variable
const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");


const emoji = [];

async function getEmoji() {
    //calling api
    let response = await fetch("https://emoji-api.com/emojis?access_key=52b75f2587de99a42c5d51ec419f38c2465c8638");
    const data = await response.json()


    //for loop used
    for (let i = 0; i < 500; i++) {
        emoji.push({
            emojiCharacter: data[i].character,
            emojiCode: data[i].unicodeName,
        });
    }

}
getEmoji(emoji);

//adding event listenerbtn
btnEl.addEventListener("click", () => {
    const randomNum = Math.floor(Math.random() * emoji.length);
    btnEl.innerText = emoji[randomNum].emojiCharacter;
    emojiNameEl.innerText=emoji[randomNum].emojiCode;
});