document.getElementsByTagName('h1');
document.getElementById('me');
document.getElementsByClassName('fnd');

const friends = document.getElementsByClassName('fnd');
        for(const friend of friends){
            // console.log(friend.innerText);
        };

// const li_list = document.querySelectorAll('.morning');
const li_list = document.querySelectorAll('.morning');
        for(const li of li_list){
            // console.log(li.innerHTML);
            // console.log(li.innerText);
        }

const quary = document.querySelector('.guedget li');
// console.log(quary);


document.getElementById('me').style.backgroundColor='red';
document.getElementById('me').style.textAlign='center';

// getAttribute = gt
const gt = document.getElementById('boss');
gt.getAttribute('class');
gt.classList;
gt.classList.add('don');
gt.classList.remove('g-1');
gt.setAttribute('title', 'you are a gandu🤣🤣');
// console.log(gt.getAttribute('class'));
// console.log(gt.classList);


document.getElementsByClassName('guedget')[0].innerHTML;
document.getElementsByClassName('guedget')[0].innerHTML = `<li>digital watch</li>`;

