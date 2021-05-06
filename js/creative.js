//Set The Main Previous Color To The WebSite.
document.documentElement.style.setProperty('--mainColor',localStorage.getItem('websiteColor'));

//Let The HeadLogo open a webPage while clicking on it.
let myHeadLogo = document.querySelector('.head-logo');
myHeadLogo.onclick = ()=>{
    window.open('weblearn.html','_self');
}

//Select The H2 Element From The HTML.
let myH2 = document.querySelector('h2');
//The Text That Element From The HTML Will Display.
let myText2 = 'We Are Creative Studio!';
//Enter The Counter With Value of 0.
let i =0;
//Enter The Interval To Auto Write The Above Text To The H2 HTML Element.
let myInterval = setInterval(_ =>{
    myH2.innerHTML += myText2[i];
    i++;
    if(i == myText2.length){
        clearInterval(myInterval);
        if(myH2.innerHTML.includes('Creative',0)){
            let myNewTxt = myH2.innerHTML.replace('Creative','<span>Creative</span>');
            myH2.innerHTML = myNewTxt;
        }
    }
},200);

//Enter The List of Images You Want To Select From It By Random.
let myImgs = ['creative01.jpg','creative02.jpg','creative03.jpg','creative04.jpg','creative05.jpg'];
//Set The Interval That The Images Will Changing Through.
let myImageInterval = setInterval(()=>{
    //Enter A Random Variable.
    let myRandomImage = Math.floor(Math.random()* myImgs.length);
    //Enter The Random Image To Background of The Section One.
    document.querySelector('.first-section').style.backgroundImage = 'url("img/'+myImgs[myRandomImage]+'")';
},10000);

/*Start of Message Section Buttons And Container*/
let myMessageBtn = document.querySelector('.send-text'),

    myCloseMessageBtn = document.querySelector('.close-message'),

    myMessageContainer = document.querySelector('.message-container'),

    myNewOverLay;

myMessageBtn.onclick = () =>{
    myMessageContainer.classList.toggle('hideMessageContainer');
    myMessageContainer.style.animationName = 'MoveMessage';
    myNewOverLay = document.createElement('div');
    myNewOverLay.classList.add('myNewOverLay');
    document.body.appendChild(myNewOverLay);
}
myCloseMessageBtn.onclick = () =>{
    myMessageContainer.classList.add('hideMessageContainer');
    document.body.removeChild(myNewOverLay);
}
/*End of Message Section Buttons And Container*/

/*Start of The Setting Box*/
let settingBox = document.querySelector('.setting-Box'),

    settingButton = settingBox.children[1];

settingButton.onclick = () =>{
    settingBox.classList.toggle('defaultLeft');
    //Toggle The Spin Class To The Icon.
    document.querySelector('.fa-gear').classList.toggle('fa-spin');
}

let inputColor = document.querySelector('input[type="color"]'),

    changeColorAltr = document.querySelector('.changeColor'),

    submitChangeColor = document.querySelector('.submitColor'),

    ResetColor = document.querySelector('.resetColor');
//Set The New Color To The WebSite.
changeColorAltr.onclick = () =>{
    inputColor.click();
    inputColor.onchange = () =>{
        submitChangeColor.onclick = () =>{
            //Set The Choosen Color From The Color Picker.
            document.documentElement.style.setProperty('--mainColor',inputColor.value);
            //Set The Choosen Color To The LocalStorage.
            localStorage.setItem('websiteColor',getComputedStyle(document.documentElement).getPropertyValue('--mainColor'));
        }    
    } 
}
//Reset The Original Color To The WebSite.
ResetColor.onclick = () =>{
    // Set The mainColor To The Original Color
    document.documentElement.style.setProperty('--mainColor','#f87b14');
    // Set The mainColor To The Original Color in LocalStorage
    localStorage.setItem('websiteColor','#f87b14');
}
/*End of The Setting Box*/

/*Start Animating Elements During Scrolling and Reaching It*/
//Selecting SkillsContainer 
let mySkillsContainer = document.querySelector('.skills-container');
//SkillsContainer offsetheight
let mySkillsContainerOffsetHeight = mySkillsContainer.offsetHeight;
//Selecting The ProgressBar
let myProgress = document.querySelectorAll('progress');
//Selecting The About Section Paragraphs
let myAboutP = document.querySelectorAll('.skills-container .left-aside p');
let myContactContainer = document.querySelector('.contact-container');
let mySubmitBtn = document.querySelector('input[type = submit]');
window.onscroll = () =>{
    //Check If The SkillsContainer Reached or Not.
    if(document.documentElement.scrollTop >= mySkillsContainerOffsetHeight){
        myAboutP.forEach(el =>{
            el.style.marginLeft = '0px';
        });  
        setTimeout(()=>{
            mySkillsContainer.style.left = '0';
            //Remove hideClass From All Progress Elements.
            myProgress.forEach(progress=>{
                progress.classList.remove('hideClass');
                progress.style.width = '345px';
            });
            myProgress[0].style.animationName = 'first-progress';
            myProgress[1].style.animationName = 'sec-progress';
            myProgress[2].style.animationName = 'third-progress'; 
            myProgress[3].style.animationName = 'forth-progress'; 
            myProgress[4].style.animationName = 'fifth-progress'; 
        },450);
    }
    //Contact Section
    if(document.documentElement.scrollTop >= 900){
        myContactContainer.style.left = '0px';
        setTimeout(()=>{
            mySubmitBtn.style.animationName = 'fadein';
        },700)
    }
    //OurTeam Section
    if(document.documentElement.scrollTop >= document.querySelector('.our-team-container').offsetHeight){
        document.querySelector('.our-team-container').style.left = '0px';
    }
}
/*End Animating Elements During Scrolling and Reaching It*/

/*Start Replacing placeholder and dataset*/
// Select The Placeholder OF The Input
let allPlaceholder = document.querySelectorAll('div .input');

allPlaceholder.forEach(placeholder =>{
    placeholder.onfocus = () =>{
        //Get The Placeholder Value and Set It Into The data-placeholder.
        placeholder.dataset.placeholder = placeholder.getAttribute('placeholder');
        //Set Empty To The Placeholder Value.
        placeholder.setAttribute('placeholder','');
    }
    placeholder.onblur = () =>{
        //Set The Value OF Placeholder With The Value OF data-placeholder.
        placeholder.setAttribute('placeholder',placeholder.dataset.placeholder);
        placeholder.setAttribute('data-placeholder','');
    }
});
/*End Replacing placeholder and dataset*/

/*Start Popup Section*/
let ourTeamDivs = document.querySelectorAll('.our-team-container div'),

    ourTeamImg = document.querySelectorAll('.our-team-container div img'),

    ourTeamSpan = document.querySelectorAll('.our-team-container div span'),

    ourTeamP = document.querySelectorAll('.our-team-container div p'),

    myNewDiv,

    myNewImg,

    myNewSpan,

    myNewCloseBtn;

ourTeamDivs.forEach(teamDiv =>{
    teamDiv.onclick = function(){
        //Create NewOverlay
        myNewOverLay = document.createElement('div');
        //Add Class To NewOverlay
        myNewOverLay.classList.add('myNewOverLay');
        //Append NewOverlay To Body
        document.body.appendChild(myNewOverLay);

        //Create New Container To Images
        myNewDiv = document.createElement('div');
        //Set New Class To New Container
        myNewDiv.classList.add('newTeamContainer');
        //Append New Container To Body
        document.body.appendChild(myNewDiv);

        //Create New Image inside The New Container
        myNewImg = document.createElement('img');
        //Set New Image src With The New Container Image
        myNewImg.setAttribute('src', teamDiv.children[0].getAttribute('src'));
        //Append The New Image To The New Container
        myNewDiv.appendChild(myNewImg);

        //Create New Span inside The New Container
        myNewSpan = document.createElement('span');
        //Set New Span textContent With The New Container
        myNewSpan.textContent = teamDiv.children[1].textContent;
        //Append The New Span To The New Container
        myNewDiv.appendChild(myNewSpan);


        //Create New Button inside The New Container
        myNewCloseBtn = document.createElement('button');
        //Set New P textContent With The New Container
        myNewCloseBtn.textContent = 'X';
        //Append The New P To The New Container
        myNewDiv.appendChild(myNewCloseBtn);

        //Make The Close Button Close The Popup
        myNewCloseBtn.onclick = () =>{
            document.body.removeChild(myNewOverLay);
            document.body.removeChild(myNewDiv);
        }

        console.log(teamDiv.children[1].textContent);
        
    }
})
/*End Popup Section*/

/*Start OF NavBAr Responsive Button*/

/*End OF NavBAr Responsive Button*/