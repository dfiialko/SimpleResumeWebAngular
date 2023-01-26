import { element } from 'protractor';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
declare var jquery: any;
declare var $: any;
// tslint:disable:max-line-length
@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  botChat = false;
  @ViewChild('botContainer') botContainer: ElementRef;
  // This array holds data for about me Section(Address,Interests,Profile)
  info: Array<{ icon: string, title: string, content: string }> = [
    {
      icon: 'flaticon-avatar',
      title: 'Profile',
      content: 'Since I have moved to Canada, I was determined to make programming my long-time career.I dedicate most of my time to school and online courses in order to improve my knowledge and obtain experience in the industry.'
    },
    {
      icon: 'flaticon-book',
      title: 'Interests',
      content: 'Participating in IT Meetups and Organizations\nSelf-improvement\nHelping people to the best of my abilities'
    },
    {
      icon: 'flaticon-house',
      title: 'Address',
      content: ' 1189 Howe St, Vancouver, BC, Canada'
    }
  ];

  // This array holds data for Education Section (school name,honours)
  education: Array<{ img: string, schoolName: string, content: string }> = [
    {
      img: '../../assets/kneu_logo.jpg',
      schoolName: 'Kyiv National Economic University of Vadim Hetman',
      content: 'Bachelor Degree in Administrative Law\nParticipant of Debate Team\nParticipant of Ukraine Law Contests'
    },
    {
      img: '../../assets/logo.png',
      schoolName: 'Red River College',
      content: 'Business Information Technology Program \nHonour Roll of Red River College for achievements in studies\nMember of student organization Bits And Bytes\nAt the moment working on Industry project with Cassidy E-care'
    }

  ];
  // This array holds skills information
  skills: Array<{ value: string, name: string, width: string }> = [
    { value: '40', name: 'JAVA', width: '40%' },
    { value: '78', name: 'JAVASCRIPT', width: '78%' },
    { value: '95', name: 'HTML', width: '95%' },
    { value: '55', name: 'C#', width: '55%' },
    { value: '55', name: '.NET', width: '55%' },
    { value: '25', name: 'JQuery', width: '25%' },
    { value: '95', name: 'CSS', width: '95%' },
    { value: '70', name: 'SQL', width: '70%' },
    { value: '70', name: 'Ansible', width: '70%' },
  ];

  experiences: Array<{ companyName: string, website: string, jobtitle: string, duration: string, shortContent:Array<string>, icon: string }> = [
    {
      companyName: 'Prometric',
      icon: 'flaticon-monitor',
      website: 'www.prometric.com',
      jobtitle: 'Software Egineer II',
      duration: '2021-Present',
      shortContent: 
      ['Designed and implemented scalable APIs and background workers for automating internal processes of the company using .NET Core, RabbitMQ, MSSQL and Windows scheduling solutions.',
      'Led the development of several web applications, from identifying system requirements and dependencies to software implementation, database design, engineering, testing and monitoring',
      'Implemented a CI/CD Azure DevOps pipeline with GIT, MSBuild, Docker and Kubernetes.']
    },
    {
      companyName: 'Paragon',
      icon: 'flaticon-speaker',
      website: 'www.celpip.ca',
      jobtitle: 'Software Engineer I',
      duration: '2018-2021',
      shortContent: 
      ['Designed and developed CI/CD pipeline using Jenkins, Ansible, Powershell and Groovy Scripts, lowering application release time by 70%.',
      'Implemented and tested worldwide content delivery using AWS CDN, AWS S3, C# .NET.',
      'Configured a multi-tiered dev environment for the development team, providing them with an easier and more reliable way to test their changes and showcase work to the stakeholders.']
    },
    {
      companyName: 'Cassidy E-Care',
      icon: 'flaticon-phone-call',
      website: 'https://www.cassidye-care.com/',
      jobtitle: 'Intern Software Developer',
      duration: '2017-2018',
      shortContent: 
      ['Led the front-end development of a one-page application using MongoDB, Express JS, Angular, Node JS and Responsive Bootstrap Design.',
      'Collaborated with stakeholders to gather functional and non-functional requirements, design mockups, and develop the application content.']
    }


  ];
  constructor() {
    console.log(this.botChat + 'At beginning');
    // Slide in div when scrolled from top over 100px
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) {
        $('#skillset').stop().animate({ left: 0, color: 'blue' }, 1000, function () {
        });
      }
    });
    // Hide container if mouse clicked outside of it
    $(document).mouseup(function (e) {
      const container = $('.chat_bot');
      const chatbotButton = $('#chatbotButton');
      // if the target of the click isn't the container nor a descendant of the container
      if (!container.is(e.target) && container.has(e.target).length === 0 && !chatbotButton.is(e.target)) {
        container.hide();
        this.botChat = false;
      }
    });
  }
  ngOnInit() {
  }

  // Display bot window
  showBot() {
    this.botChat === false ? this.botChat = true : this.botChat = false;
  }

  // Scroll to target on click,make it smooth
  scroll(target) {
    target.scrollIntoView({ block: 'center', behavior: 'smooth' });
  }

}
