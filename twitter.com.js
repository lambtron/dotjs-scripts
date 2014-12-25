
/**
 * twitter.com.js
 *
 * README.md
 *
 * DODO:
 * > Listens for your following of users, automatically adds those users
 * > to your Dodo[1] list.
 *
 * deps:
 *  jQuery 1.9
 */

/**
 * Static variables.
 */

var userId;

/**
 * Start scripts
 */

dodo();

/**
 * Define `dodo` script.
 */

function dodo() {
  setUserId();
  setupDodo();
}

/**
 * On click for follow buttons, send POST to add to `dodo`.
 */

function setupDodo() {
  $('.follow-button').click(function() {
    var host = 'https://dodo-twitter.herokuapp.com/api/';
    var dodoId = $(this).closest('div.account').attr('data-user-id');
    $.post(host + 'dodo', { userId: userId, dodoId: dodoId }, showMessage);
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
 * Library of helper functions available for twitter.com.
 */

/**
 * Set userId.
 */

function setUserId() {
  userId = $('#user-dropdown').find('img.avatar').attr('data-user-id');
  if (!userId)
    showMessage('Please login to use Dodo.', null);
}
