
let dataProjects = [
    {
        "title": "Teste de titulo 1",
        "subscription": "Aqui temos a descrição do que foi feito. e o que será escrito nos dados informado pelo html. Na imagem abaixo temos o exemplo de busca de dados da API do spotfy.",
        "img": "./assets/projeto1.jpg",
        "linkGithub": "https://img.shields.io/badge/GitHub-Ver_no_GitHub-blue?logo=GitHub",
        "linkRepository": "https://github.com/nelsoneltz/spotify-api",
    },
    {
        "title": "Teste de titulo 2",
        "subscription": "Aqui temos a descrição do que foi feito. e o que será escrito nos dados informado pelo html.",
        "img": "",
        "linkGithub": "https://img.shields.io/badge/GitHub-Ver_no_GitHub-blue?logo=GitHub",
        "linkRepository": "",
    },
    
]

function fetchData() {

    const apiRes = dataProjects;

    for (let i of apiRes) {

        document.querySelector('#img1').innerHTML += `
            <h1>${i.title}</h1>            
            <a href="${i.linkRepository}" target="_blank"><img src="${i.linkGithub}" alt="Acesso ao projeto."></a>                   
            <span>${i.subscription}</span>
            <img src="${i.img}" alt="Imagem do projeto.">   
            <hr>                
            `
    }

};


fetchData();



