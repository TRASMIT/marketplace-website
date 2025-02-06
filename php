<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $targetDir = "ebooks/";
    $targetFile = $targetDir . basename($_FILES["ebook"]["name"]);
    $fileType = strtolower(pathinfo($targetFile, PATHINFO_EXTENSION));

    // Check if it's a PDF
    if ($fileType != "pdf") {
        echo "Sorry, only PDF files are allowed.";
        exit;
    }

    // Move uploaded file to the target directory
    if (move_uploaded_file($_FILES["ebook"]["tmp_name"], $targetFile)) {
        echo "The file " . basename($_FILES["ebook"]["name"]) . " has been uploaded.";
    } else {
        echo "Sorry, there was an error uploading your file.";
    }
}
?>

<?php
$directory = "ebooks/"; // Folder where eBooks are stored
$files = scandir($directory);

// Loop through files and display links for PDFs
foreach ($files as $file) {
    if (pathinfo($file, PATHINFO_EXTENSION) == 'pdf') {
        echo "<a href='$directory$file' target='_blank'>$file</a><br>";
    }
}
?>


<form action="upload.php" method="post" enctype="multipart/form-data">
    Select eBook to upload:
    <input type="file" name="ebook" id="ebook">
    <input type="submit" value="Upload eBook" name="submit">
</form>
