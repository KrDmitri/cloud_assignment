const wordForm = document.querySelector("#word-form");
const wordInput = document.querySelector("#word-form input");
const answer = document.querySelector("#answer");

const API_URL = 'http://127.0.0.1:80/meaning_of_eng/';


function onWordSubmit(event) {
    const word = wordInput.value;
    event.preventDefault();
    console.log("typed word: " + word);

    url = API_URL + word

    fetch(url)
    .then(response => {
        if (!response.ok) {
        throw new Error('Network response was not ok');
        }
        return response.text();
    })
    .then(meaning => {
        console.log('Meaning:', meaning); // 서버에서 받은 응답 출력
        answer.innerHTML = meaning
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });

}


wordForm.addEventListener("submit", onWordSubmit);