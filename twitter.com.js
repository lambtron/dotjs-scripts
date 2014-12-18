
/**
 * twitter.com.js
 *
 * README.md
 * > Listens for your following of users, automatically adds those users
 * > to your Dodo[1] list.
 *
 * deps:
 *  jQuery 1.9
 */

/**
 * Static variables.
 */

var host = 'https://dodo-twitter.herokuapp.com/api/';
var userId;

/**
 * Send request to server to add a new dodo.
 *
 * @param {String} userId
 * @param {String} dodoId
 * @param {Function} fn (optional)
 */

function addDodo(userId, dodoId, fn) {
  if (!userId) return;
  $.post(host + 'dodo', { userId: userId, dodoId: dodoId }, fn);
}

/**
 * Return twitter user id from follow button.
 *
 * @param {Element} button
 */

function getDodoId(button) {
  return $(button)
    .closest('div.account')
    .attr('data-user-id');
}

/**
 * On click for follow buttons, bind appropriate event listener.
 */

function bindFollowButtons() {
  $('.follow-button').click(function() {
    addDodo(userId, getDodoId(this), showMessage);
  });
}

/**
 * Show visual confirmation that dodo has been added.
 *
 * @param {Object or String} err
 * @param {Object or String} data
 */

function showMessage(err, data) {
  var notification = document.createElement('div');
  var message = err || data;
  var styles = {
    'position': 'fixed',
    'bottom': '0',
    'right': '0',
    'left': '0',
    'padding': '1em',
    'font-size': '1em',
    'text-align': 'center',
    'opacity': '0.9',
    'z-index': '100',
    'color': '#333',
    'background-color': '#dff0d8',
  };
  if (err) styles['background-color'] = '#f2dede';
  $(notification)
    .css(styles)
    .text(message)
    .attr('id', 'dodo-twitter-notification');
  $('body').append(notification);
  setTimeout(function() { $('#dodo-twitter-notification').remove() }, 3000);
}

/**
 * Set userId.
 */

function setUserId() {
  userId = $('#user-dropdown').find('img.avatar').attr('data-user-id');
  if (!userId)
    showMessage('Please login to use Dodo.', null);
}

/**
 * Start script!
 */

setUserId();
bindFollowButtons();
