$(document).ready(function () {
    $("form").submit(function (event) {
        $("#category-group").html();
        $("#product-group").html();
      var formData = {
        category: $("#category").val(),
        product: $("#product").val(),
      };
  
      $.ajax({
        type: "POST",
        url: "process.php",
        data: formData,
        dataType: "json",
        encode: true,
      }).done(function (data) {
        if (!data.success) {
            if (data.errors.category) {
              $("#category-group").addClass("has-error");
              $("#category-group").append(
                '<div class="help-block">' + data.errors.category + "</div>"
              );
            }
    
            if (data.errors.product) {
              $("#product-group").addClass("has-error");
              $("#product-group").append(
                '<div class="help-block">' + data.errors.product + "</div>"
              );
            }
    
          } else {
            location.reload();
            $("form").html(
              '<div class="alert alert-success">' + data.message + "</div>"
            );
          }
      });
  
      event.preventDefault();
    });
  });