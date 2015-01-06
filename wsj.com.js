
/**
 * wsj.com.js
 *
 * README.md
 *
 * removePaywall:
 * > Gets rid of paywall.
 *
 * deps:
 *  jQuery 1.9
 */

/**
 * Static variables.
 */

/**
 * Start scripts.
 */

removePaywall();

/**
 * Define `removePaywall` script.
 */

function removePaywall() {
  if ($('.wsj-snippet-login').length !== 1) return;
  var query = 'https://googlesearch.herokuapp.com/api/search?query=';
  $.get(query + encodeURI(url), function(data) {
    if (!data || data.length === 0 || !data[0].link) return;
    window.location.href = data[0].link;
  });
}
