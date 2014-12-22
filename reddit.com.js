
/**
 * reddit.com.js
 *
 * README.md
 * > Automatically collapse children comments. Press '+' to expand.
 *
 * deps:
 *  jQuery 1.9
 */

/**
 * Hide children comments.
 */

function hideChildren() {
  $('.commentarea .comment .child').hide();
}

/**
 * Add '+' icon and bind event listener.
 */

function addExpandButton() {
  $('.tagline').append('<span class="expand-children">[+]</span>');
  $('.tagline .expand-children')
    .css('cursor', 'pointer')
    .click(function() {
    toggleExpandButton(this);
    $('.commentarea .comment .child').toggle();
  });
}

/**
 * Toggle expand button from + to -.
 *
 * @param {Element} el
 */

function toggleExpandButton(el) {
  if (~$(el).text().indexOf('+'))
    $(el).text('[-]');
  else
    $(el).text('[+]');
}

/**
 * Start script.
 */

hideChildren();
addExpandButton();
