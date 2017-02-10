
$(document).ready(function() {
  $("input[type='image']").click(function(e) {
    e.preventDefault();
    $("input[type='file']").click();
  });
});
