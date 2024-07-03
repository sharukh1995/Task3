// scripts.js
$(document).ready(function () {
    $('#dataForm').on('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Serialize the form data
        var formData = $(this).serialize();

        // Send the form data to the server using AJAX
        $.ajax({
            type: 'POST',
            url: 'process_form.php',
            data: formData,
            success: function (response) {
                // Parse the JSON response from the server
                var data = JSON.parse(response);

                // Append the new data to the table
                $('#dataTable tbody').append(
                    '<tr>' +
                    '<td>' + data.name + '</td>' +
                    '<td>' + data.email + '</td>' +
                    '</tr>'
                );

                // Clear the form fields
                $('#dataForm')[0].reset();
            }
        });
    });
});
