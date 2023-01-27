(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-resume></app-resume>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bot_bot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bot/bot.component */ "./src/app/bot/bot.component.ts");
/* harmony import */ var _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./resume/resume.component */ "./src/app/resume/resume.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _bot_bot_component__WEBPACK_IMPORTED_MODULE_3__["BotComponent"],
                _resume_resume_component__WEBPACK_IMPORTED_MODULE_4__["ResumeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bot/bot.component.css":
/*!***************************************!*\
  !*** ./src/app/bot/bot.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bot{\n    max-width: 75%!important;\n    position: relative;\n    left:25%;\n}\n#mini_me{\n    width:5%;\n}\n.client>li:first-child{\n    background: #111211;\n    color:white;\n}\n.bot>li:first-child{\n    background: rgba(63, 65, 63, 1);\n    text-align: right;\n    color:white;\n}\n.more_messages{\n    text-align: center;\n    font-weight: bold;\n    color:white;\n}\n.chat_window{\n    max-height:500px!important;\n    overflow: auto;\n}\n::-webkit-scrollbar {\n    width: 8px;\n}\n::-webkit-scrollbar-track {\n    -webkit-box-shadow: inset 0 0 0px #383A38; \n}\n::-webkit-scrollbar-thumb {\n    -webkit-box-shadow: inset 0 0 3px #262726; \n}\n"

/***/ }),

/***/ "./src/app/bot/bot.component.html":
/*!****************************************!*\
  !*** ./src/app/bot/bot.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row col-xs-12\">\n    <div class=\"well well-lg chat_window w-100\" style=\"background-color:rgba(63, 65, 63, 0.56)\"  #botContainer>\n      <div *ngIf=\"clientMessage.length >= 4\" class=\"more_messages\">. . .</div>\n        <ul class=\"list-group my-3\" *ngFor=\"let message of clientMessage\" \n        [ngClass]=\"message.avatar === 'Your Message' ? 'client' : 'bot'\">\n          <li class=\"list-group-item\">{{message.avatar}}</li>\n          <li class=\"list-group-item\">{{message.content}}</li>\n        </ul>\n    </div>\n    <div class=\"px-0 w-100\" style=\"float:left\">\n      <div class=\"input-group\" style=\"padding:0px\">\n        <input type=\"input\" class=\"form-control\" placeholder=\"Type here...\" #message/>\n        <span class=\"input-group-btn\">\n        <button type=\"button\" class=\"btn btn-dark left\" (click)=\"messageFromInput(message)\">SEND</button>\n        </span>\n      </div>    \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/bot/bot.component.ts":
/*!**************************************!*\
  !*** ./src/app/bot/bot.component.ts ***!
  \**************************************/
/*! exports provided: BotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BotComponent", function() { return BotComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var api_ai_javascript__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! api-ai-javascript */ "./node_modules/api-ai-javascript/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BotComponent = /** @class */ (function () {
    function BotComponent() {
        // Create instance of ApiAi client with access token
        this.client = new api_ai_javascript__WEBPACK_IMPORTED_MODULE_1__["ApiAiClient"]({ accessToken: '******************' });
        // Creates array of type Message for inputs
        this.clientMessage = [];
    }
    BotComponent.prototype.keyEvent = function (event) {
        if (event.key === 'Enter') {
            this.messageFromInput(this.inputMessage.nativeElement);
        }
    };
    BotComponent.prototype.ngOnInit = function () { };
    // Pass value from the input. Inserts it into message Array,also
    // Sends it with textRequest to the ApiAi Client.
    // Response is passed into the same array
    BotComponent.prototype.messageFromInput = function (message) {
        var _this = this;
        // Check if message is not empty,otherwise it would give an error
        if (message.value !== '') {
            this.clientMessage.push({
                avatar: 'Your Message',
                content: message.value
            });
            this.client.textRequest(message.value).then(function (response) {
                _this.clientMessage.push({
                    avatar: 'BOT',
                    content: response.result.fulfillment['speech'] || 'I can\'t seem to figure that out!'
                });
                setTimeout(function () { _this.botContainer.nativeElement.scrollTop = _this.botContainer.nativeElement.scrollHeight; }, 500);
                message.value = '';
            });
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('message'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BotComponent.prototype, "inputMessage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('botContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], BotComponent.prototype, "botContainer", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], BotComponent.prototype, "keyEvent", null);
    BotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bot',
            template: __webpack_require__(/*! ./bot.component.html */ "./src/app/bot/bot.component.html"),
            styles: [__webpack_require__(/*! ./bot.component.css */ "./src/app/bot/bot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BotComponent);
    return BotComponent;
}());



/***/ }),

/***/ "./src/app/resume/resume.component.css":
/*!*********************************************!*\
  !*** ./src/app/resume/resume.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#top_container{\n    background-color: rgba(112, 109, 109, 0.42);\n}\n#skillset{\n    padding:3rem;\n    background-color: rgba(112, 109, 109, 0.12);\n    border-radius: 25px;\n    position: relative;\n    left: -2000px;\n}\n.chat_bot{\n    position: absolute;;\n    width:25%;\n    height: 50%;\n    z-index: 300;\n    left:0;\n    top:40%;\n}\n.my_photo{\n    min-width: 200px;\n    max-width: 15%;\n    max-height: auto;\n    margin:auto;\n    border:1rem solid rgba(255, 255, 255, 0.63);\n}\n.vertical-center {\n    max-height: 50%;\n    min-height: 50%;  /* Fallback for browsers do NOT support vh unit */\n    display: flex;\n    align-items: center;\n }\n.name{\n     color:white;\n     font-weight: bold;\n     margin:auto;\n }\n#info_row{\n     background-color: #e6e6e6;\n     white-space: pre-line;\n }\n#education_row{\n     background-color: white;\n     white-space: pre-line;\n }\n#experience{\n     background-color: white;\n    white-space: pre-line;\n }\n#experience_row{\n     background-color: #e6e6e6;\n }\n.progress-bar{\n     background-color: #71ced2!important;\n }\n.progress{\n     background-color: white;\n }\n.school_logo{\n     max-width: 40px;\n }\n#experiences{\n    position: relative;\n    background-color: white;\n}\n.nav-item{\n    font-size: 2rem;\n    color:#71ced2;\n}\n#footer{\n    background-image: url('map.png');\n    background-size: cover;\n    background-repeat: no-repeat;\n    width: 100%;\n    height:100%;\n}\n#inside_footer{\n    background-color: rgba(112, 109, 109, 0.45);\n    width: 100%;\n    height:300px;\n}\n#resume-content{\n    text-align: left;\n}"

/***/ }),

/***/ "./src/app/resume/resume.component.html":
/*!**********************************************!*\
  !*** ./src/app/resume/resume.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" id=\"top_container\">\n  \n  <div class=\"row\">\n    <div class=\"top w-100\">\n      <div class=\"vertical-center\">\n        <h1 class=\"name mx-auto\">DENYS FIIALKO</h1>\n      </div>\n      <div *ngIf=\"botChat\" class=\"chat_bot sticky-left\" #botContainer>\n        <app-bot></app-bot>\n      </div>\n      <div class=\"col-8 text-center\">\n        <!-- <button class=\"btn btn-dark\" (click)=\"showBot()\" id=\"chatbotButton\">Chat with my Bot</button> -->\n        <img src=\"./assets/me.jpg\" class=\"rounded-circle my_photo\" />\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid pt-5 w-100\" style=\"background-color:white\">\n  <div class=\"row py-5\">\n      <nav class=\"navbar mx-auto sticky-top\" style=\"z-index: 300\">\n          <ul class=\"navbar-nav mr-auto\" style=\"display: inline\">\n            <li style=\"display: inline-block;cursor:pointer\" class=\"nav-item\" (click)=\"scroll(aboutme)\">ABOUT ME /</li>\n            <li style=\"display: inline-block;cursor:pointer\" class=\"nav-item\" (click)=\"scroll(ed)\">EDUCATION /</li>\n            <li style=\"display: inline-block;cursor:pointer\" class=\"nav-item\" (click)=\"scroll(skillset)\">SKILLSET /</li>\n            <li style=\"display: inline-block;cursor:pointer\" class=\"nav-item\" (click)=\"scroll(exp)\">EXPERIENCES</li>\n          </ul>\n        </nav>\n    <div class=\"col-12 mx-auto mt-5\" >\n      <h1 class=\"text-center\">PERSONAL DETAILS</h1>\n    </div>\n  </div>\n  <!-- <hr> -->\n  <!-- <div class=\"row\">\n    <div class=\"col-8 mx-auto mt-5\">\n      <span class=\"text-left\">To build this website I have used Angular 4, Bootstrap 4, HTML, CSS, JavaScript and Jquery.It also implements chatbot\n        built with ApiAi. Link to the code in Git repository : \n      </span>\n    </div>\n  </div> -->\n  <!-- <hr> -->\n  <!-- ABOUT ME START -->\n  <div class=\"row text-center pb-5\" id=\"info_row\" #aboutme>\n    <div class=\"col-md-4 col-sm-1 mx-auto mt-5\" *ngFor=\"let about_me of info\">\n      <i class=\"{{about_me.icon}}\"></i>\n      <h3>{{about_me.title}}</h3>\n      <p class=\"w-100 text-center mx-auto\">\n        {{about_me.content}}\n      </p>\n    </div>\n  </div>\n  <!-- ABOUT ME FINISHED -->\n  <!-- EDUCATION START -->\n  <h2 class=\"text-center pt-5\">Education</h2>\n  <div class=\"row text-center py-5\" #ed id=\"education_row\">\n    <div class=\"col-md-6 col-sm-1 mx-auto mt-5\" *ngFor=\"let schoolInfo of education\">\n      <h3>{{schoolInfo.schoolName}} <img class=\"col-xs-2 float-left\" src=\"{{schoolInfo.img}}\" class=\"school_logo\" /></h3>\n      <p class=\"w-80 mx-auto\">\n        {{schoolInfo.content}}\n      </p>\n    </div>\n  </div>\n  <!-- EDUCATION FINISH -->\n</div>\n<!-- SKILLS START-->\n<div class=\"container-fluid\" style=\"background-color: white\" #skillset>\n  <div class=\"container pt-5\" id=\"skillset\">\n    <h2 class=\"text-center\">Skillset</h2>\n    <div class=\"row mb-2\" *ngFor=\"let skill of skills\">\n      <div class=\" col-xs-12 progress w-75 mx-auto\">\n        <div class=\"progress-bar progress-bar-striped progress-bar-animated\" role=\"progressbar\" aria-valuenow=\"{skill.value}\" aria-valuemin=\"0\"\n          aria-valuemax=\"100\" [style.width]=\"skill.width\">\n          {{skill.name}}\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- SKILLS FINISH -->\n<div class=\"container-fluid pt-5\" #exp id=\"experience\" >\n  <h2 class=\"text-center\">Experiences</h2>\n  <div class=\"row text-center my-5\" id=\"experience_row\">\n    <div class=\"col-md-4 col-sm-2\" *ngFor=\"let experience of experiences\" >\n      <h3 style=\"border:2px solid #71ced2;color:#71ced2 \">{{experience.companyName}}</h3>\n      <p style=\"color:#71ced2\">{{experience.website}}</p>\n      <span class=\"{{experience.icon}}\"></span>\n      <p style=\"color:#3a3a3a;font-weight:bold\">{{experience.jobtitle}}</p>\n      <p>{{experience.duration}}</p>\n      <p class=\"resume-content\" *ngFor=\"let content of experience.shortContent\"> {{ content }}</p>\n      <!-- <p>{{experience.shortContent}}</p> -->\n    </div>\n  </div>\n</div>\n<div class=\"container-fluid footer p-0\" id=\"footer\" style=\"overflow: hidden\">\n  <div class=\"container-fluid p-0\" id=\"inside_footer\">\n    <div class=\"row text-center px-0\" style=\"color:white\">\n      <div class=\"col-12 py-5 px-0\"> \n          <h3 >CONTACT ME</h3>\n          <p>denys.fiialko@gmail.com</p>\n          <p>604 - 230 - 36772</p>\n      </div>\n        \n        \n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/resume/resume.component.ts":
/*!********************************************!*\
  !*** ./src/app/resume/resume.component.ts ***!
  \********************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// tslint:disable:max-line-length
var ResumeComponent = /** @class */ (function () {
    function ResumeComponent() {
        this.botChat = false;
        // This array holds data for about me Section(Address,Interests,Profile)
        this.info = [
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
        this.education = [
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
        this.skills = [
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
        this.experiences = [
            {
                companyName: 'Prometric',
                icon: 'flaticon-monitor',
                website: 'www.prometric.com',
                jobtitle: 'Software Egineer II',
                duration: '2021-Present',
                shortContent: ['Designed and implemented scalable APIs and background workers for automating internal processes of the company using .NET Core, RabbitMQ, MSSQL and Windows scheduling solutions.',
                    'Led the development of several web applications, from identifying system requirements and dependencies to software implementation, database design, engineering, testing and monitoring',
                    'Implemented a CI/CD Azure DevOps pipeline with GIT, MSBuild, Docker and Kubernetes.']
            },
            {
                companyName: 'Paragon',
                icon: 'flaticon-speaker',
                website: 'www.celpip.ca',
                jobtitle: 'Software Engineer I',
                duration: '2018-2021',
                shortContent: ['Designed and developed CI/CD pipeline using Jenkins, Ansible, Powershell and Groovy Scripts, lowering application release time by 70%.',
                    'Implemented and tested worldwide content delivery using AWS CDN, AWS S3, C# .NET.',
                    'Configured a multi-tiered dev environment for the development team, providing them with an easier and more reliable way to test their changes and showcase work to the stakeholders.']
            },
            {
                companyName: 'Cassidy E-Care',
                icon: 'flaticon-phone-call',
                website: 'https://www.cassidye-care.com/',
                jobtitle: 'Intern Software Developer',
                duration: '2017-2018',
                shortContent: ['Led the front-end development of a one-page application using MongoDB, Express JS, Angular, Node JS and Responsive Bootstrap Design.',
                    'Collaborated with stakeholders to gather functional and non-functional requirements, design mockups, and develop the application content.']
            }
        ];
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
            var container = $('.chat_bot');
            var chatbotButton = $('#chatbotButton');
            // if the target of the click isn't the container nor a descendant of the container
            if (!container.is(e.target) && container.has(e.target).length === 0 && !chatbotButton.is(e.target)) {
                container.hide();
                this.botChat = false;
            }
        });
    }
    ResumeComponent.prototype.ngOnInit = function () {
    };
    // Display bot window
    ResumeComponent.prototype.showBot = function () {
        this.botChat === false ? this.botChat = true : this.botChat = false;
    };
    // Scroll to target on click,make it smooth
    ResumeComponent.prototype.scroll = function (target) {
        target.scrollIntoView({ block: 'center', behavior: 'smooth' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('botContainer'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ResumeComponent.prototype, "botContainer", void 0);
    ResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-resume',
            template: __webpack_require__(/*! ./resume.component.html */ "./src/app/resume/resume.component.html"),
            styles: [__webpack_require__(/*! ./resume.component.css */ "./src/app/resume/resume.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ResumeComponent);
    return ResumeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/denysfiialko/Projects/SimpleResumeWebAngular/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
