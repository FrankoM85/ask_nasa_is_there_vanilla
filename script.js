const _load = async () => {

    let data = await fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
    .then(response => response.json());

    console.log(data);

    const rootE = document.getElementById('root');

    rootE.insertAdjacentHTML('beforeend', `
        <h1>${data.title}</h1>
        <img src="${data.url}" />
    `);
}
window.addEventListener('load', _load);