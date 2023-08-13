/* Made by Deltaion Lee on Github */

const avatars = [
  'ray.png',
  'flame.jpg',
  'telos.jpg',
  'oled.jpg',
  'orange.png',
  'cube.png',
]
var avatar_index = 0;

function switch_avatar() {
  avatar_index++;
  if (avatar_index >= avatars.length) {
    avatar_index = 0;
  }
  document.getElementById('avatar').src = 'static/assets/avatars/' + avatars[avatar_index];
  //return avatars[avatar_index];
}