
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
 */

function showMessage(err, data) {
  // Show something on the web page.
  if (err) console.log(err);
  console.log(data);
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
