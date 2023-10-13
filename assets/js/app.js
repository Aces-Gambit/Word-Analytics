const textareaEl = document.querySelector('.textarea');
const charactersNumberEl = document.querySelector('.stat__number--characters');
const twitterNumberEl = document.querySelector('.stat__number--twitter');
const facebookNumberEl = document.querySelector('.stat__number--facebook');
const wordsNumberEl = document.querySelector('.stat__number--words');

const inputHandler = () => {
        // input validation
        if (textareaEl.value.includes('<script>')){
            alert('No script tags allowed!');
            textareaEl.value = textareaEl.value.replace('<script>', '');
        }
    
        // determine new numbers
        let numberOfWords = textareaEl.value.split(' ').length;
            if (textareaEl.value.length === 0) {
                numberOfWords = 0;
            }
        const numberOfCharacters = textareaEl.value.length;
        const twitterCharactersLeft = 280 - numberOfCharacters;
        const facebookCharactersLeft = 2200 - numberOfCharacters;
    
        // add visual indicator if limit is exceeded
        if (twitterCharactersLeft < 0) {
            twitterNumberEl.classList.add('limit-exceeded');
        } else {
            twitterNumberEl.classList.remove('limit-exceeded');
        }
        if (facebookCharactersLeft < 0) {
            facebookNumberEl.classList.add('limit-exceeded');
        } else {
            facebookNumberEl.classList.remove('limit-exceeded');
        }
    
        // set new numbers
        wordsNumberEl.textContent = numberOfWords;
        charactersNumberEl.textContent = numberOfCharacters;
        twitterNumberEl.textContent = twitterCharactersLeft;
        facebookNumberEl.textContent = facebookCharactersLeft;
};

textareaEl.addEventListener('input', inputHandler);