
// Função para buscar informações do Json e passar para o html.
function fetchData() {

    fetch('./bd/data.json').then(res => {
        return res.json();
    }).then(({ dataProjects }) => {

        const apiRes = dataProjects;

        for (let i of apiRes) {

            document.querySelector('#img1').innerHTML += `
            <h1>${i.title}</h1>            
            <a href="${i.linkRepository}" target="_blank"><img src="${i.linkGithub}" alt="Acesso ao projeto."></a>                   
            <span>${i.subscription}</span>
            <img src="${i.img}">   
            <hr>                
            `          
        }
    });

};

// Evento para ficar ouvindo quando o scroll rola 10px no eixo y e exibe o botão para voltar ao topo
window.addEventListener('scroll', function (){

    const btn = document.querySelector('#btn-scroll');

    if (window.scrollY > 10) {

        btn.classList.remove('btn-normal');
        btn.classList.add('btn-scroll');

    } if (window.scrollY < 5) {

        btn.classList.remove('btn-scroll');
        btn.classList.add('btn-normal');
    }
});

// Função untilizada no botão de voltar ao topo, nela setamos a posição do scroll para 0 no eixo X e Y.
function topPage() {
    window.scrollTo(0, 0);
}

// Executa a função que busca e exibe os dados do json
fetchData();
