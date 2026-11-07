const themeButton=document.querySelector('.theme');
const storedTheme=localStorage.getItem('raw-egg-theme');
if(storedTheme==='dark')document.body.classList.add('dark');
function updateTheme(){themeButton.querySelector('span').textContent=document.body.classList.contains('dark')?'Light':'Dark';themeButton.setAttribute('aria-pressed',String(document.body.classList.contains('dark')));}
updateTheme();
themeButton.addEventListener('click',()=>{document.body.classList.toggle('dark');localStorage.setItem('raw-egg-theme',document.body.classList.contains('dark')?'dark':'light');updateTheme();});
document.querySelector('.menu').addEventListener('click',()=>{const open=document.body.classList.toggle('menu-open');document.querySelector('.menu').setAttribute('aria-expanded',String(open));});
const search=document.querySelector('.search input');
if(search){search.addEventListener('input',()=>{const cards=[...document.querySelectorAll('.results .post-card')];const q=search.value.trim().toLocaleLowerCase('ko');let count=0;cards.forEach(card=>{const match=card.textContent.toLocaleLowerCase('ko').includes(q);card.hidden=!match;if(match)count++;});document.querySelector('.result-count').textContent=`${count}개의 기록`;document.querySelector('.empty').hidden=count>0;});}
