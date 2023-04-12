var screen=document.getElementById('screen')
var score=document.getElementById('score')
var options=document.getElementsByClassName('options')
var step=0;
var html=
        [
            {'question':'What does HTML stand for?','ans1':'Hyper Text Markup Language','ans2':'Hotmail','ans3':'Hyperlinks and Text Markup Language','ans4':'Home Tool Markup Language','sul':'Hyper Text Markup Language'},
            {'question':'Choose the correct HTML element for the largest heading:','ans1':'<head>','ans2':'<h6>','ans3':'<heading>','ans4':'<h1>','sul':'<h1>'},
            {'question':'How can you open a link in a new tab/browser window?','ans1':'<a href="url" target="_blank">','ans2':'<a href="url" target="new">','ans3':'<a href="url" new>','ans4':'<a href="url" windows>','sul':'<a href="url" target="_blank">'},
            {'question':'How can you make a numbered list?','ans1':'<ol>','ans2':'<list>','ans3':'<dl>','ans4':'<ul>','sul':'<ol>'},
        ]
var css=
        [
            {'question':'What does CSS stand for?','ans1':'Computer Style Sheets','ans2':'Colorful Style Sheets','ans3':'Creative Style Sheets','ans4':'Cascading Style Sheets','sul':'Cascading Style Sheets'},
            {'question':'Which HTML attribute is used to define inline styles?','ans1':'font','ans2':'style','ans3':'styles','ans4':'class','sul':'style'},
            {'question':'Which is the correct CSS syntax?','ans1':'body:color=black;','ans2':'{body;color:black;}','ans3':'{body:color=black;}','ans4':'body {color: black;}','sul':'body {color: black;}'},
            {'question':'How do you insert a comment in a CSS file?','ans1':'// this is a comment','ans2':'\'this is a comment','ans3':'/* this is a comment */','ans4':'// this is a comment //','sul':'/* this is a comment */'}
        ] 
var javascript=
        [
            {'question':'Inside which HTML element do we put the JavaScript?','ans1':'<scripting>','ans2':'<javascript>','ans3':'<script>','ans4':'<js>','sul':'<script>'},
            {'question':'What is the correct syntax for referring to an external script called "xxx.js"?','ans1':'<script link="xxx.js">','ans2':'<script src="xxx.js">','ans3':'<script href="xxx.js">','ans4':'<script name="xxx.js">','sul':'<script src="xxx.js">'},
            {'question':'How do you write "Hello World" in an alert box?','ans1':'msgBox("Hello World");','ans2':'alert("Hello World");','ans3':'alertBox("Hello World");','ans4':'msg("Hello World");','sul':'alert("Hello World");'},
            {'question':'How can you add a comment in a JavaScript?','ans1':'\'This is a comment','ans2':'//This is a comment','ans3':'<This is a comment>','ans4':'<!--This is a comment-->','sul':'//This is a comment'},
        ] 
var Questioins;

HomeScreen()
function HomeScreen(){
    screen.innerHTML='<h1 style="color:green;text-align:center">welcome !! choose one of the test elements on side to get to know your level in frontend</h1>'
    played=false
    $(function(){
        $('#screen-container').css('height','500px')
        $('.options').slideUp(0)
        $('.next').slideUp(0)
        $('#progress').slideUp(0)
        $('#show-answer').slideUp(0)
        $('.css').addClass('change')
        $('.javascript').addClass('change') 
        $('.html').addClass('change')                  
    })
    $('#over').text('/'+(html.length+css.length+javascript.length))
}

function set_the_answers(){
    // show new answers
    screen.innerText=Questioins[step]['question']
    options[0].innerText=Questioins[step]['ans1']
    options[1].innerText=Questioins[step]['ans2']
    options[2].innerText=Questioins[step]['ans3']
    options[3].innerText=Questioins[step]['ans4']
    // remove color and animation effect
    for(let el of options){             
        el.style='background-color:aqua;color:black'
        el.setAttribute('class','options')
    }
    $('#next').removeClass('change')
}

var is_the_answer_showed=false
function show_answer(){
    for(let el of options){
        if(el.innerText==Questioins[step]['sul']){
            el.style='background-color:pink'
            el.setAttribute('class','options moving')
            $('#next').addClass('change')
        }
    }
    is_the_answer_showed=true
}

var update_score=$('.update-score')
function update_level(){
    if(Questioins==html){
        update_score[0].innerText=progress_bar.style.width
    }
    else if(Questioins==css){
        update_score[1].innerText=progress_bar.style.width
    }
    else if(Questioins==javascript){
        update_score[2].innerText=progress_bar.style.width
    }
}

var progress=0;var point=0;var progress_bar=document.getElementById('progress');var played=true
function click_the_answer(e){
    if(played && is_the_answer_showed==false){
        if(e.innerText==Questioins[step]['sul'] ){
            point++
            score.innerText=point
            e.style='background-color:green;color:gold'
            e.setAttribute('class','options moving')
            progress=progress+(100/Questioins.length)
            progress_bar.style='width:'+progress+'%'
            update_level() 
        }
        else{
            e.style='background-color:red'
            e.setAttribute('class','options moving')
            for(let el of options){
                if(el.innerText==Questioins[step]['sul']){
                    el.style='background-color:green;color:gold'
                }
            }
        }
        played=false
    }  
}

// had 3 varibales kitsta3mlo f function switche() bach mat3awdch dwz same test 2 marat 
var htmlTest=true;   var cssTest=true;   var javascriptTest=true ;var turn;var finished=0
function next(){
    is_the_answer_showed=false
    played=true
    if(step<Questioins.length-1){
        step++
        set_the_answers()
        finished++
    }else{
        screen.innerHTML='<div><h1 class="move" style="color:green;text-align:center">YOU FINISHED '+turn+' TEST</h1><p style="text-align:center;color:red">choose another test</p></div>'
        played=false
        $(function(){
            $('#screen-container').css('height','500px')
            $('.options').slideUp(500)
            $('.next').slideUp(500)
            $('#progress').slideUp(500)
            $('#show-answer').slideUp(500)
            change_Test_Btn_color_makeIt_disabled()                    
        })
        if(finished==(html.length+css.length+javascript.length)){  
            if(Number(score.innerText)>=(((html.length+css.length+javascript.length)*0.58))){
                setTimeout(()=>{screen.innerHTML='<h1 style="color:blue;text-align:center">YOU HAVE DONE WELL!!😎</h1>'},2500)}
                else{
                    setTimeout(()=>{screen.innerHTML='<h1 style="color:blue;text-align:center">YOU HAVE FAILED 😭😭YOU ARE LOOSER NOW !! try again><</h1>'},2500)
                }
            }    
    }
}
function change_Test_Btn_color_makeIt_disabled(){
    $(function(){
        if(Questioins==html){
            $('.html').css('cursor','not-allowed')
            $('.css').addClass('change')
            $('.javascript').addClass('change')
            htmlTest=false
        }
        else if(Questioins==css){
            $('.html').css('cursor','not-allowed')
            $('.css').css('cursor','not-allowed')
            $('.javascript').addClass('change')
            cssTest=false      
        }
        else if(Questioins==javascript){
            $('.javascript').css('cursor','not-allowed')
            javascriptTest=false
        }
    })
}

function switche(e){
    if(e.innerText=='HTML' && htmlTest==true){
        Questioins=html 
        turn='HTML'
        begin()         
    }
    else if(e.innerText=='CSS' && cssTest){
        Questioins=css
        turn='CSS'
        begin()    
    }
    else if(e.innerText=='JAVASCRIPT' && javascriptTest){
        Questioins=javascript
        turn='JAVASCRIPT'
        begin()   
    }
}

function begin(){
    progress=0;  progress_bar.style='width:0%';  played=true;step=0
    finished++
    $(function(){
        $('#screen-container').css('height','230px')
            $('.options').slideDown(500)
            $('.next').slideDown(500)
            $('#progress').slideDown(500)
            $('#show-answer').slideDown(500)
            $('.html').removeClass('change')
            $('.css').removeClass('change')
            $('.javascript').removeClass('change')
    })
    set_the_answers()
    setInterval(shadows,1000)
}

var shadow=true
function shadows(){
    if(shadow){
        $(screen).addClass('gold')
        shadow=false
    }else{
        $(screen).removeClass('gold')
        shadow=true
    }
}