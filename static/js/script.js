/* Made by Deltaion Lee on Github */

const avatars = [
  'ray.png',
  'flame.jpg',
  'telos.jpg',
  'oled.jpg',
  'orange.png',
  'cube.png',
  'dot.gif',
]
var avatar_index = 0;

function switch_avatar(choice = null) {
  if (choice != null) {
    avatar_index = choice;
  } else {
    avatar_index++;
  }
  if (avatar_index >= avatars.length) {
    avatar_index = 0;
  } else if (avatar_index < 0) {
    avatar_index = 0;
  }
  document.getElementById('avatar').src = 'static/assets/avatars/' + avatars[avatar_index];
  //return avatars[avatar_index];
}

function load() {
  switch_avatar(Math.floor(Math.random() * avatars.length)); // Random choice of avatar at load
}
