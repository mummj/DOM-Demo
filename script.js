'use strict'

// console.log('hello world');

let header = document.querySelector("#header1");
let title = document.createElement("h1");
title.innerHTML = "DOM Demo";

header.appendChild(title);

function CreateName(createName){
    this.createName = createName;
};

function creator(){
    console.log("Name Was Clicked!!!!");
    let jason = document.createElement('h3');
    let nameSection = document.querySelector("main");
    jason.innerHTML = new CreateName("Jason");
    nameSection.appendChild(jason);
}

let nameSection = document.querySelector("main");
let nameCreator = document.createElement("h2");
nameCreator.innerHTML = "My Name";
nameSection.appendChild(nameCreator);
nameCreator.addEventListener('click', creator);