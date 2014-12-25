
/**
 * default.js
 *
 * README.md
 * > showMessage
 * > show post to HN or HN discussion link
 *
 * deps:
 *  jQuery 1.9
 */

/**
 * Static variables.
 */

var url = document.URL;
var title = document.title;

/**
 * Run scripts.
 */

HN_showHN();

/**
 * Get HN discussion URL.
 */

function HN_showHN() {
  var host = 'https://hn.algolia.com/api/v1/search?query=';
  var hn = 'https://news.ycombinator.com/item?id=';
  $.get(host + url, function(data) {
    if (!data.hits) return;
    var el = document.createElement('div');
    var a = document.createElement('a');
    if (data.hits.length === 1) {
      a.href = hn + data.hits[0].objectID;
      a.text = 'Discuss on HN';
    }
    if (data.hits.length === 0) {
      var link = 'https://news.ycombinator.com/submitlink?';
      url = 'u=' + encodeURI(url);
      title = 't=' + encodeURI(title);
      a.href = link;
      a.text = 'Submit to HN';
    }
    $(el).append(a);
    $(el).css('background', '#ff6600');
    showMessage(el);
  });
}

/**
 * Library of helper functions exposed to every page.
 */

/**
 * Show visual message.
 *
 * @param {element} el
 * @param {object} opts (optional)
 *
 * TODO: figure out how to merge `el` style with `defaultStyle`.
 */

function showMessage(el, opts) {
  var x = document.createElement('a');
  x.text = 'x';
  $(x).css({
    'position': 'absolute',
    'top': '5px',
    'right': '15px',
    'z-index': '101',
    'cursor': 'pointer'
  });
  $(x).click(function() { $(el).remove() });
  $(el).append($(x));
  var defaultOpts = { 'fade': true };
  opts = opts || {};
  opts = $.extend(opts, defaultOpts);
  var defaultStyle = {
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
    'background-color': '#dff0d8'
  };
  var id = '#' + $(el).attr('id');
  var style = $(el).attr('style');
  style = $.extend(style, defaultStyle);
  $(el).css(style);
  $('body').append(el);
  if (opts.fade)
    setTimeout(function() { $(id).remove() }, 3000);
}

/**
 * Show basic temporary notification to handle standard node callback signature.
 *
 * @param {Object} err
 * @param {Object} data
 */

function showNotification(err, data) {
  var el = document.createElement('div');
  var message = err || data;
  $(el).text(message);
  showMessage(el, { fade: true });
}
