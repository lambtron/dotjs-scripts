
/**
 * reddit.com.js
 *
 * README.md
 *
 * COLLAPSE COMMENTS:
 * > Automatically collapse children comments. Press '+' to expand.
 * > Automatically expand and load imgur links.
 *
 * FORMAT AMA:
 * > Format AMAs so that all answered questions are on top in decreasing votes.
 *
 * deps:
 *  jQuery 1.9
 */

/**
 * Start scripts.
 */

// collapseComments();

/**
 * Collapse children comments.
 */

function collapseComments() {
  $('.commentarea .comment .child').hide();
  $('.tagline').append('<span class="expand-children">[+]</span>');
  $('.tagline .expand-children')
    .css('cursor', 'pointer')
    .click(function() {
    toggleExpandButton(this);
    $(this).closest('.comment').find('.child').toggle();
  });
  loadImage();

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
}

/**
 * Format AMAs.
 */

function formatAMA() {
  var title = $('.entry a.title').text().toLowerCase();
  var amaFilter = ['ama', 'aua', 'ask us anything', 'ask me anything'];
  if (!amaFilter.join(',').indexOf(title)) return;
  var OP = $('a.author').text();
}

/**
 * Library of private helper functions.
 */

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
