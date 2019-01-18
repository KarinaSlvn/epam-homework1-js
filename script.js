'use strict';

const roles = ['Городничий', 'Аммос Федорович', 'Артемий Филиппович', 'Лука Лукич'];
const textLine = `Городничий: Я пригласил вас, господа, с тем, чтобы сообщить вам пренеприятное известие: к нам едет ревизор.
Аммос Федорович: Как ревизор?
Артемий Филиппович: Как ревизор?
Городничий: Ревизор из Петербурга, инкогнито. И еще с секретным предписаньем.
Аммос Федорович: Вот те на!
Артемий Филиппович: Вот не было заботы, так подай!
Лука Лукич: Господи боже! еще и с секретным предписаньем!`;
const arrReplicas = textLine.split('\n');
const play = document.getElementById('play');

const innerPlay = () => {
   roles.forEach(role => {
       const p = document.createElement('p');
       play.appendChild(p);
       p.innerText = role + ':\n';
       arrReplicas.forEach((replica, index) => {
           if (replica.indexOf(role) !== -1) {
               const p = document.createElement('p');
               play.appendChild(p);
               p.innerText = (index + 1) + ') ' + replica.slice(role.length + 2);
           }
       })
   });
};

window.onload = () => {
    innerPlay()
};