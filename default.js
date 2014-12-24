
/**
 * Loaded on every request.
 */

var HN_host = 'https://hn.algolia.com/api/v1/search?query=';
var HN_hn = 'https://news.ycombinator.com/item?id=';
var url = document.URL;
var title = document.title;

/**
 * Main script.
 */

HN_getHNurl();

/**
 * Get HN discussion URL.
 */

function HN_getHNurl() {
  $.get(HN_host + url, function(data) {
    if (!data.hits) return;
    var el = document.createElement('div');
    var a = document.createElement('a');
    if (data.hits.length === 1) {
      a.href = HN_hn + data.hits[0].objectID;
      a.text = 'Discuss on HN';
    }
    if (data.hits.length === 0) {
      a.href = HN_getSubmitURL(title, url);
      a.text = 'Submit to HN';
    }
    $(el).append(a);
    $(el).css('bgcolor', '#ff6600');
    showMessage(el);
  });
}

/**
 * Get submit to HN link.
 *
 * @param {string} title
 * @param {string} url
 */

function HN_getSubmitURL(title, url) {
  title = title || '';
  url = url || '';
  var host = 'https://news.ycombinator.com/submitlink?';
  url = 'u=' + encodeURI(url);
  title = 't=' + encodeURI(title);
  return host + url + '&' + title;
}

/**
 * Library.
 */

/**
 * Show visual message.
 *
 * @param {element} el
 * @param {object} opts (optional)
 */

function showMessage(el, opts) {
  var defaultOpts = {
    'fade': true
  };
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
  // var style = $.extend($(el).css(), defaultStyle);
  // console.log(style);
  $(el).css(defaultStyle);
  $('body').append(el);
  if (opts.fade)
    setTimeout(function() { $(id).remove() }, 3000);
}
