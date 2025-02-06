<?php
if (isset($_GET['file'])) {
    $file = $_GET['file'];
    $filePath = 'ebooks/' . $file; // Assuming eBooks are stored in the "ebooks" folder

    if (file_exists($filePath)) {
        header('Content-Type: application/pdf');
        header('Content-Disposition: attachment; filename="' . basename($filePath) . '"');
        readfile($filePath);
        exit;
    } else {
        echo "File not found.";
    }
} else {
    echo "No file specified.";
}
?>
