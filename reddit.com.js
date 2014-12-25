
/**
 * reddit.com.js
 *
 * README.md
 * > Automatically collapse children comments. Press '+' to expand.
 * > Automatically expand and load imgur links.
 * > Format AMAs so that all answered questions are on top in decreasing votes.
 *
 * deps:
 *  jQuery 1.9
 */

/**
 * Start scripts.
 *
 * TODO: refactor so only one function is called for one script.
 */

hideChildren();
addExpandButton();
loadImage();
formatAMA();

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
    $(this).closest('.comment').find('.child').toggle();
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
 * Load an image only if on comments page.
 */

function loadImage() {
  var thumbnail = $('a.thumbnail');
  if (thumbnail.length > 1) return;
  var href = thumbnail.attr('href');
  $('a.thumbnail img')
    .attr('src', href)
    .attr('width', '')
    .attr('height', '');
  thumbnail.removeClass('thumbnail');
}

/**
 * AMA format.
 */

function formatAMA() {
  var title = $('.entry a.title').text().toLowerCase();
  var amaFilter = ['ama', 'aua', 'ask us anything', 'ask me anything'];
  if (!amaFilter.join(',').indexOf(title)) return;
  var OP = $('a.author').text();
}
