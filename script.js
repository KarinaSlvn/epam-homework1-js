'use strict';
const roles = ['Городничий', 'Аммос Федорович', 'Артемий Филиппович', 'Лука Лукич'];
const textLine = 'Городничий. Я пригласил вас, господа, с тем чтобы сообщить вам пренеприятное известие: к нам едет ревизор.\n' +
    'Аммос Федорович. Как ревизор?\n' +
    'Артемий Филиппович. Как ревизор?\n' +
    'Городничий. Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.\n' +
    'Аммос Федорович. Вот те на!\n' +
    'Артемий Филиппович. Вот не было заботы, так подай!\n' +
    'Лука Лукич. Господи Боже! еще и с секретным предписаньем!';
const arrReplics = textLine.split('\n');
const play = document.getElementById('play');
const innerPlay = ()=>{
    for(let i = 0;i<=roles.length-1;i++){
        const p = document.createElement('p');
        play.appendChild(p);
        p.innerText = roles[i] + ':\n';
        for(let j = 0; j<=arrReplics.length-1;j++){
            if(arrReplics[j].indexOf(roles[i]) !== -1){
                const p = document.createElement('p');
                play.appendChild(p);
                p.innerText = (j+1) +') ' + arrReplics[j].slice(roles[i].length + 2);
            }
        }
    }
}
window.onload = ()=>{
    innerPlay()
}