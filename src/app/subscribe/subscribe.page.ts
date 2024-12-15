import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.page.html',
  styleUrls: ['./subscribe.page.scss'],
})
export class SubscribePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  //Variables initialization

  // Variables initialized for the date
  days = Array.from({ length: 31 }, (_, i) => i + 1); // 1 to 31
  months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  years = Array.from({ length: 100 }, (_, i) => new Date().getFullYear() - i); // Current year and 100 previous years
  choosenDay=0;
  choosenMonth="";
  choosenYear=null;
  
  // Topics initialization
  topics = [
    {topicName: "Arabic", selected: "topic"},
    {topicName: "Islamic", selected: "topic"},
    {topicName: "English", selected: "topic"},
    {topicName: "History", selected: "topic"},
    {topicName: "Sports", selected: "topic"},
  ];

  gender="";


  //When select and change values

  // select gender
  selectGender(gender: string){
    this.gender = gender;
  }


  // selected deselect topic
  selectTopic(topicName: string){
    for (let x = 0; x < this.topics.length; x++) {
      if (this.topics[x].topicName == topicName) {        //check for the selected topic
        
        //reverse value of the topic of selected or not
        if (this.topics[x].selected == "topic") {
          this.topics[x].selected = "topic selected";
        } else {
          this.topics[x].selected = "topic";
        }
      }
      
    }
  }

  // setting dates
  setDay(_xx: number){
    this.choosenDay = _xx;
  }
  setMonth(_xx: any){
    this.choosenMonth = _xx;
  }
  setYear(_xx: any){
    this.choosenYear = _xx;
  }


  // continue to payment
  continue(){

  }

}
