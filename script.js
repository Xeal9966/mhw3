function onResponse(response) {
    return response.json();
}

function onJSON(json) {
    console.log(json);
    dati1=json;
    for(let i=0;i<19;i++){
        const a = document.createElement('div');
        a.classList.add('card');
        const img=document.createElement('img');
        img.classList.add('pic');
        const title=document.createElement('span');
        title.classList.add('title');
        const acquista=document.createElement('div');
        acquista.classList.add('acquista');
        const carrello=document.createElement('img');
        carrello.classList.add('carrello');
        carrello.src="image/icons/shopping_cart-black-18dp 1.svg";
        const prezzo=document.createElement('span');
        prezzo.classList.add('prezzo');
        prezzo.textContent="€ 39,99";
        img.src=json.results[i].background_image;
        title.textContent=json.results[i].name;

        box.appendChild(a);
        a.appendChild(img);
        a.appendChild(title);
        a.appendChild(acquista);
        acquista.appendChild(carrello);
        acquista.appendChild(prezzo);
    }

    document.querySelector('.loader').classList.add('hidden');
}

function onResponse2(response) {
    return response.json();
}


function onJSON2(json2) {
    console.log(json2);
    dati1=json2
    for(let i=25;i<37;i++){
        const div=document.createElement('div');
        div.classList.add('amiibo_cont');
        const img=document.createElement('img');
        img.classList.add('amiibo_img');
        const span=document.createElement('span');
        span.classList.add('amiibo_des');
        article.appendChild(div);
        img.src=json2.amiibo[i].image;
        span.textContent=json2.amiibo[i].name;
        div.appendChild(img);
        div.appendChild(span);
    }
    }



const box=document.querySelector('.box');
let dati1;
const chiave='db20c3a8d6834b4aa869904ad5ea5821';
rest_url= 'https://api.rawg.io/api/games?key='+ chiave;
console.log("cia");
fetch(rest_url+"&platforms=187"+"&dates=2020-09-01,2021-09-30").then(onResponse).then(onJSON);

const article=document.querySelector(".news");
fetch("https://www.amiiboapi.com/api/amiibo/?amiiboSeries=Super Smash Bros.&type=figure").then(onResponse2).then(onJSON2);


function aggiornaelementi(event){
    var nomiprodotti=document.querySelectorAll('.title');
    console.log("qui");
    var prodotti=document.querySelectorAll('.card');
    for(let i=0;i<prodotti.length;i++){
        prodotti[i].classList.remove('hidden');
    }
    console.log("ok");
    for(let i=0;i<prodotti.length;i++){
        let a=nomiprodotti[i].textContent.toLowerCase();
        let b=event.target.value.toLowerCase();
        let count=0;
        if(a.includes(b)) count++;
        if(count==0) prodotti[i].classList.add('hidden');
        }
    console.log("fatto");
}

function scorriadestra(){
    document.querySelector('.news').scrollLeft+=335;
    document.querySelector('.leftarrow').classList.remove('hidden');
    if(document.querySelector('.news').scrollLeft>=1000) document.querySelector('.right').classList.add('hidden');
}

function scorriasinistra(){
    document.querySelector('.news').scrollLeft-=335;
    document.querySelector('.right').classList.remove('hidden');
    if(document.querySelector('.news').scrollLeft<=0) document.querySelector('.leftarrow').classList.add('hidden');
}


document.querySelector('#input').addEventListener('input',aggiornaelementi);
document.querySelector('.right').addEventListener('click',scorriadestra);
document.querySelector('.leftarrow').addEventListener('click',scorriasinistra);