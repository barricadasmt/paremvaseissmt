document.addEventListener("DOMContentLoaded", function () {
    // The Google Form URL
    const googleFormUrl = "https://docs.google.com/forms/d/1RAUyOkWShT3ZdPlsTO335xVvBwEhhCw0oavyLDqccGk/edit?pli=1"; // Replace with your actual Google Form link

    // Grab the button
    const formButton = document.getElementById("formButton");

    // When the button is clicked, open the Google Form in a popup
    formButton.addEventListener("click", function () {
        window.open(
            googleFormUrl,
            "GoogleFormPopup",
            "width=700,height=700,scrollbars=yes,resizable=yes"
        );
    });
});
