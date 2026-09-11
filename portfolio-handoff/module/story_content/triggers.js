function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6WY6EjZ4MkD":
        Script1();
        break;
      case "6iQxRWwyLdu":
        Script2();
        break;
      case "5qjde6hihLh":
        Script3();
        break;
  }
}

window.InitExecuteScripts = function()
{
var player = GetPlayer();
var object = player.object;
var once = player.once;
var addToTimeline = player.addToTimeline;
var setVar = player.SetVar;
var getVar = player.GetVar;
var update = player.update;
var pointerX = player.pointerX;
var pointerY = player.pointerY;
var showPointer = player.showPointer;
var hidePointer = player.hidePointer;
var slideWidth = player.slideWidth;
var slideHeight = player.slideHeight;
var getKeyDown = player.getKeyDown;
var keydown = player.keydown;
var keyup = player.keyup;
window.Script1 = function()
{
  player.once(() => {
const target = object('6e0UG1OKLae');
const duration = 1000;
const easing = 'ease-out';
const id = '5vANaYmWACH';
const growAmount = 0.1;
const delay = 3750;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script2 = function()
{
  player.once(() => {
const target = object('5YAr2IM9gVk');
const duration = 1000;
const easing = 'ease-out';
const id = '6XPDEg5gBdW';
const growAmount = 0.1;
const delay = 3750;
addToTimeline(
target.animate(
[ {scale: `${1 + growAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

window.Script3 = function()
{
  player.once(() => {
const target = object('6IXJcAWAgbM');
const duration = 750;
const easing = 'ease-out';
const id = '6VIHYLKT1Cl';
const shrinkAmount = 0.1;
const delay = 3750;
addToTimeline(
target.animate(
[ {scale: `${1 - shrinkAmount}` } ]
,
  { fill: 'forwards', delay, duration, easing }
), id
);
});
}

};
