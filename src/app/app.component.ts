import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app';
  projects:Project[] = [];

  selectedProject = 0
  selectPreviousEnabled = false
  selectNextEnabled = true

  constructor() {
    var newProject: Project = {
      title: "Word Scores",
      dates: "Sept 2024 - Present",
      desc: ["Playing the Wordle every morning and loving Tetris inspired me to create this game.", "I used the open source game engine Godot for development and designed all of the art and animations needed for the game.", "I'm working on getting the game published to Steam at the moment, it just needs a bit more polishing, play-testing, and balancing."],
      pic: "wordscores.png",
      isVideo: true,
      hasLink: false,
    }
    this.projects.push(newProject)
    newProject = {
      title: "Workout App",
      dates: "Jan 2023 - Present",
      desc: ["I originally created this application in React about a year ago in Fall of 2023. That version is demonstrated in the Youtube video embedded above.", "I needed to learn Angular for a new position, so I rebuilt the application using .NET and Angular, improving upon my original design.", "I'll be linking a read-only demo version of the application once I finish adding HTTPS support and disable all POST/PUT requests for the demo version."],
      pic: "https://www.youtube.com/embed/eCkVeCV0-V4?si=m7qVleYTy3vM_RHO",
      isVideo: true,
      hasLink: false,
    }
    this.projects.push(newProject)
    newProject = {
      title: "Spaceman Wakes",
      dates: "Jan 2024 - Present",
      desc: ["This soon to release Steam game started in a game jam competition in January of 2024.", "I created the art for and programmed the vine spreading AI which has 256 different sprites for possible connections the vine tiles can make, leading to a more organic looking spread.", "Over the past few months I have moved more into an art role in the project as we approach release, creating all art and animations."],
      pic: "spaceman.jpg",
      isVideo: false,
      hasLink: true,
    }
    this.projects.push(newProject)
    newProject = {
      title: "RTOS Physics Engine",
      dates: "Jan 2022 - May 2022",
      desc: ["This program was created on a Pearl Gecko EFM32 development board for a Real Time Operating Systems class in Spring of 2022.", "I used Embedded C and Micrium RTOS to develop a physics engine and a game.", "In the game, when the ball bounces slow enough, it will fall through your platform and game over. BTN1 can be used to bounce the ball up harder if timed correctly. BTN0 activates a limited fire laser that instantly destroys the ball."],
      pic: "https://www.youtube.com/embed/KFE9MKKv588?si=wlONbCU7o1g2v5bM",
      isVideo: true,
      hasLink: false,
    }
    this.projects.push(newProject)
    newProject = {
      title: "People Counter",
      dates: "Jan 2020 - May 2020",
      desc: ["Used Texas Instruments MSP432 development board and Embedded C to program infrared people counter.", "The device uses infrared sensors to detect a body passing by, by comparing which sensor was triggered first, the direction of travel can be determined allowing counting up or down the number of people displayed on the 7 segment displays."],
      pic: "https://www.youtube.com/embed/KFE9MKKv588?si=wlONbCU7o1g2v5bM",
      isVideo: true,
      hasLink: false,
    }
    this.projects.push(newProject)
  }

  prevProjectClick() {
    if (this.selectedProject > 0) {
      this.selectedProject -= 1;
    }
    this.setArrowsEnabled()
  }

  setArrowsEnabled() {
    if (this.selectedProject > 0) {
      this.selectPreviousEnabled = true;
    }
    else {
      this.selectPreviousEnabled = false;
    }

    if (this.selectedProject < this.projects.length - 1) {
      this.selectNextEnabled = true;
    }
    else {
      this.selectNextEnabled = false;
    }
  }

  nextProjectClick() {
    if (this.selectedProject < this.projects.length - 1) {
      this.selectedProject += 1;
    }
    this.setArrowsEnabled()
  }

}

interface Project {
  title: string;
  dates: string;
  desc: string[];
  pic: string;
  isVideo: boolean;
  hasLink: boolean;
}
