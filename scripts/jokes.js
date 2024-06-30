const jokes = [
    {
        text: 'Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1 Joke 1',
        author: 'Author name 1'
    },
    {
        text: 'Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2 Joke 2',
        author: 'Author name 2'
    },
    {
        text: ' Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3 Joke 3',
        author: 'Author name 3'
    },
    {
        text: ' Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4 Joke 4',
        author: 'Author name 4'
    },
    {
        text: ' Joke 5 Joke 5 Joke 5 Joke 5 Joke 5 Joke 5 Joke 5 Joke 5 Joke 5 Joke 5 Joke 5 Joke 5',
        author: 'Author name 4'
    }
]

function getJoke() {
    const number = Math.floor(Math.random() * jokes.length);

    document.getElementById('jokesNum').innerHTML = number + 1;
    document.getElementById('jokesText').innerHTML = jokes[number]['text'];
}