'use strict';

var ThunderMouse1Health;

ThunderMouse1Health=100

var TMAttack1;
var TMAttack2
var TMAttack3
var TMAttack4
var TMAttack5

var FireLizardHealth;

FireLizardHealth=75

var FLAttack1;
var FLAttack2
var FLAttack3
var FLAttack4
var FLAttack5

var Game
Game=1

var attackButton = document.getElementById("attackButton");


     attackButton.addEventListener('click', function(e)
     {
         attack();
    });

function attack()
{
while (Game==1){
  TMAttack1=Math.floor(Math.random()*40+20);
  FLAttack1=Math.floor(Math.random()*40+20);

var FLDED1
var TM1DED1

if (TMAttack1>FLAttack1) {FLDED1=FireLizardHealth-TMAttack1
alert("Thunder Mouse attcked. Fire Lizard's health is "+FLDED1+"/75")
TM1DED1=ThunderMouse1Health-0
}

if (FLAttack1>TMAttack1) {TM1DED1=ThunderMouse1Health-FLAttack1
alert("Fire Lizard attacked. Thunder Mouse's health is "+TM1DED1+"/100")
FLDED1=FireLizardHealth-0
}

if (FLDED1<0) {
alert("Fire Lizard is too tired to fight! Thunder Mouse Wins!")
Game-1
}

if (TM1DED1<0) {
  alert("Thunder Mouse is too tired. Try Again")
  Game-1
}

TMAttack2=Math.floor(Math.random()*40+20);
FLAttack2=Math.floor(Math.random()*40+20);


var FLDED2
var TM1DED2

if (TMAttack2>FLAttack2) {FLDED2=FLDED1-TMAttack2
  alert("Thunder Mouse attacked. Fire Lizard's health is "+FLDED2+"/75")
  TM1DED2=TM1DED1-0
}

 if (FLAttack2>TMAttack2) {TM1DED2=TM1DED1-FLAttack2
  alert("Fire Lizard attacked. Thunder Mouse's health is "+TM1DED2+"/100")
  FLDED2=FLDED1-0
}

if (FLDED2<0) {
alert("Fire Lizard is too tired to fight! Thunder Mouse Wins!")
Game-1
}

if (TM1DED2<0) {
  alert("Thunder Mouse is too tired. Try Again")
  Game-1
}

TMAttack3=Math.floor(Math.random()*40+20);
FLAttack3=Math.floor(Math.random()*40+20);

var FLDED3
var TM1DED3

if (TMAttack3>FLAttack3) {FLDED3=FLDED2-TMAttack3
  alert("Thunder Mouse attacked. Fire Lizard's health is "+FLDED3+"/75")
TM1DED3=TM1DED2-0
}

if (FLAttack3>TMAttack3) {TM1DED3=TM1DED2-FLAttack3
  alert("Fire Lizard attacked. Thunder Mouse's health is "+TM1DED3+"/100")
FLDED3=FLDED2-0
}

if (FLDED3<0) {
alert("Fire Lizard is too tired to fight! Thunder Mouse Wins!")
Game-1
}

if (TM1DED3<0) {
  alert("Thunder Mouse is too tired. Try Again")
  Game-1
}

TMAttack4=Math.floor(Math.random()*40+20);
FLAttack4=Math.floor(Math.random()*40+20);

var FLDED4
var TM1DED4

if (TMAttack4>FLAttack4) {FLDED4=FLDED3-TMAttack4
  alert("Thunder Mouse attacked. Fire Lizard's health is "+FLDED4+"/75")
TM1DED4=TM1DED3-0
}
if (FLAttack4>TMAttack4) {TM1DED4=TM1DED3-FLAttack4
  alert("Fire Lizard attacked. Thunder Mouse's health is "+TM1DED4+"/100")
  FLDED4=FLDED3-0
}

if (FLDED4<0) {
alert("Fire Lizard is too tired to fight! Thunder Mouse Wins!")
Game-1
}

if (TM1DED4<0) {
  alert("Thunder Mouse is too tired. Try Again")
  Game-1
}
}
}
