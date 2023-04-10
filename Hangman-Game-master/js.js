var x = document.getElementById("bg");
    function playAudio() { 
        x.play(); 
      } 
      playAudio();

      function pauseAudio() { 
        x.pause(); 
      } 

      document.querySelector('.pause')

var data = ["bmw","opel","kia","mercedes","ferrari","hyundai","mazda","chevrolet","bentley","toyota"];
var word = "";
var herf = [];
var h = "";
var score = 0;
var losescore = 0;
var qalan = 9;
var net2 ='';
word = data[Math.ceil(Math.random()*10)];
for(var aa=0;aa<word.length;aa++){
    net2 +=" _ ";
    document.querySelector('.current').innerHTML = net2;
}

window.onkeypress = function(e){
    document.querySelector('.photo').src = "./images/question.png";
    if(e.key != " "){
    var netice = "";
    if(herf.length == 0){
        herf.push(e.key);
        if(word.indexOf(e.key) == -1){
            qalan-=1;
        }
    }else{
        if(herf.indexOf(e.key) == -1 ){
            herf.push(e.key);
            if(word.indexOf(e.key) == -1){
                qalan-=1;
        }
        }
    }
    document.querySelector('.already').innerHTML = herf;
    
    
    
    
    for(var a=0;a<word.length;a++){
        if(herf.indexOf(word[a]) >= 0){
            netice += word[a];
        }else{
            netice += " _ ";
           
        }
    }
document.querySelector('.current').innerHTML = netice;
document.querySelector('.remaining').innerHTML = qalan;

if(qalan == 0){
    losescore ++;
    document.querySelector('.losescore').innerHTML = losescore;
    var sozsirasi = Math.ceil(Math.random()*10);
    word = data[sozsirasi];
    herf=[];
    qalan = 9;
    var x = document.getElementById("falseAudio");
    function playAudio() { 
        x.play(); 
      } 
      playAudio();
    
}

if(netice.indexOf("_") == -1){

    document.querySelector('.photo').src = "./images/"+word+".jpg";
    score ++;
    document.querySelector('.score').innerHTML = score;
    var sozsirasi = Math.ceil(Math.random()*10);
    word = data[sozsirasi];
    herf=[];
    qalan = 9;
    var x = document.getElementById("trueAudio");
    function playAudio() { 
        x.play(); 
      } 

      playAudio();
    
}
netice = "";
}
}


