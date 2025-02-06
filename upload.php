<?php
// Check if a file has been uploaded
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Specify the target directory for uploaded files
    $targetDir = "ebooks/";  // Folder where eBooks will be stored
    $targetFile = $targetDir . basename($_FILES["ebook"]["name"]);
    $fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Validate if the uploaded file is a PDF
    if ($fileType != "pdf") {
        echo "Sorry, only PDF files are allowed.";
        exit;
    }

    // Check if the file already exists
    if (file_exists($targetFile)) {
        echo "Sorry, the file already exists.";
        exit;
    }

    // Attempt to upload the file
    if (move_uploaded_file($_FILES["ebook"]["tmp_name"], $targetFile)) {
        // Redirect back to the upload page with success status
        header("Location: upload_form.php?status=success");
        exit;
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>
