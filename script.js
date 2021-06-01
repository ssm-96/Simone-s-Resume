
var navbar = document.getElementById("menu");
var homediv = document.getElementById("home");
var homeheight = homediv.scrollHeight;
var firstgame = document.getElementById("baccarat");
var secondgame = document.getElementById("blackjack");
var thirdgame = document.getElementById("roulette");
var waitress = document.getElementById("waitress");
var mcdonald = document. getElementById("mcdonald");
var introduction = document.getElementById("introduction");
var project = document.getElementById("project");

window.onscroll = function () {

    if (window.pageYOffset > homeheight) {
        navbar.style.opacity = 1; 
        console.log(homeheight);
    } else {
        navbar.style.opacity = 0; 
    }
    }

window.onload = showText();
            function showText () {
                var first = document.getElementById("header1");
                var second = document.getElementById("header2"); 
                var third = document.getElementById("header3"); 
                var fourth = document.getElementById("header4"); 
                var alltext = document.getElementById("everything");

                function opacityUp(showthis) {
                    var x = 0;
                    var fadein = setInterval (function() {
                        if (x <= 0.98) {
                        x += 0.01;
                        showthis.style.opacity = x;
                            }
                        if (x >= 0.98) {
                        x = 1; 
                        showthis.style.opacity = x;

                        clearInterval(fadein);
                        }}, 22);

                        }
                        setTimeout(firstshowing, 1000);
                        setTimeout(secondshowing, 2000);
                        setTimeout(thirdshowing, 3000);
                        setTimeout(fourthshowing, 4000);
                        setTimeout(showpage, 5000)

                        function firstshowing () {
                            opacityUp(first);
                        }

                        function secondshowing () {
                            opacityUp(second);
                        }

                        function thirdshowing () {
                            opacityUp(third);
                        }

                        function fourthshowing () {
                            opacityUp(fourth);
                        }

                        function showpage () {
                            opacityUp(alltext); 
                        }
                        
                }

firstgame.addEventListener('click', 
    function () {
    firstgame.style.backgroundColor = "#ffbbbb";
    firstgame.style.color = "black"; 
    height= 300; 
    width = 400;
    })

secondgame.addEventListener('click', 
    function () {
        secondgame.style.backgroundColor = "#ffbbbb"; 
        secondgame.style.color = "black"; 
        height= 300; 
    width = 400;
        })

thirdgame.addEventListener('click', 
function () {
    thirdgame.style.backgroundColor = "#ffbbbb"; 
    thirdgame.style.color = "black"; 
    height= 300; 
    width = 400;
    })
    waitress.addEventListener('click', 
function () {
    waitress.style.backgroundColor = "#ffbbbb"; 
    waitress.style.color = "black"; 
    height= 300; 
    width = 400;
    })
    mcdonald.addEventListener('click', 
function () {
    mcdonald.style.backgroundColor = "#ffbbbb"; 
    mcdonald.style.color = "black"; 
    height= 300; 
    width = 400;
    })
  window.addEventListener('scroll', function () {
                var homeheight = document.getElementById("home").scrollHeight;
                var introductionheight = homeheight + document.getElementById("introduction").scrollHeight;
                var projectheight = introductionheight + document.getElementById("project").scrollHeight;
           

            if(window.pageYOffset < homeheight) {
                document.getElementById("menuhome").style.backgroundColor = "white";
                document.getElementById("menuintroduction").style.backgroundColor = "pink";
                document.getElementById("menuproject").style.backgroundColor = "pink";
                
            }
            if(window.pageYOffset > homeheight && window.pageYOffset < introductionheight) {
                document.getElementById("menuhome").style.backgroundColor = "pink";
                document.getElementById("menuintroduction").style.backgroundColor = "white";
                document.getElementById("menuproject").style.backgroundColor = "pink";
                
            }
            if(window.pageYOffset > introductionheight && window.pageYOffset < projectheight) {
                document.getElementById("menuhome").style.backgroundColor = "pink";
                document.getElementById("menuintroduction").style.backgroundColor = "pink";
                document.getElementById("menuproject").style.backgroundColor = "white";
                
            }

        })
            
        