
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
  var google = 'https://www.google.com/?gws_rd=ssl#q=' + encodeURI(url);
  $.get(google, function(data) {
    console.log(data);
    // var link = $('a[data-href=\"' + url + '\"]');
    // console.log(link);
  });
  // console.log(link);
  // window.location.href = link;
}
