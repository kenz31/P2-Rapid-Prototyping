// JavaScript Document

//tabs
$('#myTab a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
})

$('#early').tooltip('hide');
$('#private').tooltip('hide');
$('#music').tooltip('hide');