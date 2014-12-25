
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
 * Start scripts.
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
    $.post(host + 'dodo', { userId: userId, dodoId: dodoId }, showNotification);
  });
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
