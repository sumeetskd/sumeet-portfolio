import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  techSkills = [
    { name: "Angular", img:"assets/angular-logo.png"},
    { name: "React", img: "assets/react.png"},
    { name: "Figma", img: "assets/figma.png"},
    { name: "Git" , img: "assets/git.png"},
    { name: "Javascript", img: "assets/js.png"},
    { name: "Typescript", img: "assets/typescript.png"},
    { name: "Node.js" , img: "assets/nodejs.png"},
    { name: "Express.js", img: "assets/expressjs.png"},
    { name: "MongoDB", img: "assets/mongodb.png"},
    { name: "SASS/SCSS", img: "assets/sass.png"}
  ]
}

