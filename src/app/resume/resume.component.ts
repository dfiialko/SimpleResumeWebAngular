import { element } from 'protractor';
import { Component, OnInit } from '@angular/core';
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
  // This array holds data for about me Section(Address,Interests,Profile)
  info: Array<{ icon: string, title: string, content: string }> = [
    {
      icon: 'flaticon-house',
      title: 'Address',
      content: ' 1194 St.Mathews Ave, Winnipeg, Manitoba, Canada'
    },
    {
      icon: 'flaticon-book',
      title: 'Interestes',
      content: 'Participating in IT Meetups and Organizations\nSpending a night in the mountains\nHelping people to the best of my abilities'
    },
    {
      icon: 'flaticon-avatar',
      title: 'Profile',
      content: 'Since I have moved to Canada, I was determined to make programming my long-time career.I dedicate most of my time to school and online courses in order to improve my knowledge and obtain experience in the industry.'
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
    { value: '25', name: 'JQuery', width: '25%' },
    { value: '95', name: 'CSS', width: '95%' },
    { value: '70', name: 'SQL', width: '70%' },
  ];

  experiences: Array<{ companyName: string, website: string, jobtitle: string, duration: string, shortContent: string, icon: string }> = [
    {
      companyName: 'Intouch Networks',
      icon: 'flaticon-monitor',
      website: 'www.intouchnetworks.ca',
      jobtitle: 'Computer Technician',
      duration: '6 Months',
      shortContent: 'I have installed,configured and maintained networks for new and existing clients.\nDuring my time working there I have implemented REST API services into the company website to improve user experience and allow customers to add services through the website./nWorked on companies website'
    },
    {
      companyName: 'College Pro',
      icon: 'flaticon-speaker',
      website: 'www.colegepro.com',
      jobtitle: 'Manager',
      duration: '5 Months',
      shortContent: 'I worked with HR department to recruit labourer workers for summer season\nSaved 15% of cost on every project by taking over service center functionality\nWorked directly with customers,conducting estimates,selling services and colecting feedback'
    },
    {
      companyName: 'Globus',
      icon: 'flaticon-phone-call',
      website: 'www.globus.ck.ua',
      jobtitle: 'Office Manager',
      duration: '1.5 years',
      shortContent: 'I have managed bulk sales of office supplies and computer equipment \nIncreased annual company sales by 23%\n'
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
