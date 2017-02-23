var data;
$(document).ready(function() {
  $.get('/data', function(result) {
    data = result;
  });
  initializePage();
});

function initializePage() {
  $('#removeMember').click(function() {
    $('#groupMember').remove();
  });
}
