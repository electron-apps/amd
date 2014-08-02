/**!
 * amd - scripts/index.js
 *
 * Copyright(c) fengmk2 and other contributors.
 * MIT Licensed
 *
 * Authors:
 *   fengmk2 <fengmk2@gmail.com> (http://fengmk2.github.com)
 */

'use strict';

/**
 * Module dependencies.
 */

var $ = require('jquery');
require('jquery-autosize');
var marked = require('marked');

function render() {
  // need to remove
  var markdown = $('#markdown').val();
  $('#html').html(marked(markdown));
}

render();

$('#markdown').on('blur keyup paste', render);

$(document).ready(function () {
  $('textarea').autosize();
});
