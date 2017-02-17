var data;
$(document).ready(function() {
  $.get('/data', function(result) {
    data = result;
  });
  initializePage();
});

function initializePage() {
  $('#groupMember').click(function() {
    $('#groupMember').remove();
  });
}
