const nam = document.getElementById('name');
const h3 = document.createElement('h2');
h3.innerText = 'আমার বন্ধুরা';
nam.appendChild(h3);
h3.style.textAlign='center';  
h3.classList.add('f-list');

const fnd_list = document.querySelector('.f-list').parentNode;  // important
const div = document.createElement('div');
fnd_list.appendChild(div);

const ol = document.createElement('ol');
ol.innerHTML = `
    <li class="fnd">রাজীব</li>
    <li class="fnd">শামীম</li>
    <li class="fnd">মেহেদী</li>
    <li class="fnd">মুস্তাাফিজ</li>
    `;
div.appendChild(ol);


const acc = document.querySelector('.accesry ul');
const li = document.createElement('li');
li.innerText = 'sound box';
acc.appendChild(li);
li.style.textAlign="center";
li.style.fontSize='35px';
li.style.color='blue';
li.style.fontWeight='bold';const nam = document.getElementById('name');
const h3 = document.createElement('h2');
h3.innerText = 'আমার বন্ধুরা';
nam.appendChild(h3);
h3.style.textAlign='center';  
h3.classList.add('f-list');

const fnd_list = document.querySelector('.f-list').parentNode;  // important
const div = document.createElement('div');
fnd_list.appendChild(div);

const ol = document.createElement('ol');
ol.innerHTML = `
    <li class="fnd">রাজীব</li>
    <li class="fnd">শামীম</li>
    <li class="fnd">মেহেদী</li>
    <li class="fnd">মুস্তাাফিজ</li>
    `;
div.appendChild(ol);


const acc = document.querySelector('.accesry ul');
const li = document.createElement('li');
li.innerText = 'sound box';
acc.appendChild(li);
li.style.textAlign="center";
li.style.fontSize='35px';
li.style.color='blue';
li.style.fontWeight='bold';