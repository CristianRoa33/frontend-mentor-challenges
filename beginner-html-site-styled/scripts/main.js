// const myHeading=document.querySelector('h1');
// myHeading.textContent='Hello world!';

// const myImage= document.querySelector('img');
// myImage.onclick= ("click", () => { 
//     const mySrc=myImage.getAttribute('src');
//     if(mySrc==='images/firefox-icon.png'){
//         myImage.setAttribute('src','images/batman.png');
//     } else {
//         myImage.setAttribute('src','images/firefox-icon.png');
//     }
// })

// let myButton= document.querySelector('button');
// let myHeading= document.querySelector('h1');

// function setUserName() {
//     const myName= prompt ('Please enter your name.');
//     if (!myName) {
//         setUserName();
//     }else {
//     localStorage.setItem("name", myName);
//     myHeading.textContent=`Mozilla is cool, ${myName}`;
//         }
//     }

// if (!localStorage.getItem('name')) {
//     setUserName();
// } else {
//     const storedName= localStorage.getItem('name');
//     myHeading.textContent=`Mozilla is cool, ${storedName}`;
// }

// myButton.addEventListener('click', () => {
//     setUserName();
// });

// const paragraph = document.querySelector('p'); // retrive the first <p /> from the document
// paragraph.textContent = 'estoy rico!'; // set the contents of the element
// paragraph.style.color = 'red'; // style the element
// paragraph.remove(); // remove the element
// document.body.appendChild(paragraph);

// const button = document.querySelector('button');

// // Option 1: direct assignment
// button.onclick = function() {
//   console.log('You clicked me!');
// }

// // Option 2: using the `addEventListener` method
// button.addEventListener('click', function() {
//   console.log('You clicked me!');
// });


// button.addEventListener('click', function() {
//   console.log(this); // `this` refers to `button`
// });

// button.addEventListener('click', (event) => {
//   console.log(event.target); // This could be the `button` or the `em`, depending what the user actually clicked on
//   console.log(event.currentTarget); // This will always be the button
// });
const screen = document.getElementById('screen');
const greenBtn = document.getElementById('green');
const redBtn = document.getElementById('red');
const blueBtn = document.getElementById('blue');

redBtn.addEventListener('click', (e) => {
    screen.style.backgroundColor = 'red';
});

greenBtn.addEventListener('click', (e) => {
screen.style.backgroundColor = 'green';
});

blueBtn.addEventListener('click', (e) => {
screen.style.backgroundColor = 'blue';
});

// const myText = document.getElementById('screen'); 
//     myText.textContent = " No es asi ";
//     document.body.appendChild(myText);

// const buttons = document.querySelectorAll('button');

// for ( let i = 0; i < buttons.length; i += 1) {
//     buttons[i].addEventListener('click', (e) => {
//         screen.style.backgroundColor = e.target.id;
//     }); 
// }