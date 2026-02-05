//your JS code here. If required.
const outputScreen = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];


const url1=images[0].url;
const url2=images[1].url;
const url3=images[2].url;


btn.addEventListener('click',()=>{
outputScreen.innerHTML=`<div id='loading'>Loading...</div>`;
Promise.all([fetch(url1),fetch(url2),fetch(url3)])
.then((data)=>{
    outputScreen.innerHTML='';

    data.forEach((item,i)=>{
        if(!item.ok){
            throw new Error('Network issue')
        }

        let val=images[i].url;
        outputScreen.innerHTML+=`<img src=${val}>`
    })
    
})
.catch(err=>{
    outputScreen.innerHTML=`<div id='error'>${err.name}:${err.message}<div>`;})
});

