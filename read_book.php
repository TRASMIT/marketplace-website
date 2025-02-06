<?php
if (isset($_GET['book'])) {
    $book = $_GET['book'];
} else {
    $book = 'default.pdf';  // Default book if none is selected
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Read eBook</title>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.10.377/pdf.min.js"></script>
    <style>
        #pdf-viewer {
            width: 100%;
            height: 100vh;
        }
    </style>
</head>
<body>
    <div id="pdf-viewer"></div>

    <script>
        const url = '<?php echo $book; ?>';  // Dynamically load the book

        pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
            const pdfDoc = pdfDoc_;
            const viewer = document.getElementById('pdf-viewer');
            let pageNum = 1;

            function renderPage(pageNum) {
                pdfDoc.getPage(pageNum).then(function(page) {
                    const scale = 1.5;
                    const viewport = page.getViewport({ scale: scale });

                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    viewer.appendChild(canvas);

                    page.render({
                        canvasContext: context,
                        viewport: viewport
                    });
                });
            }

            renderPage(pageNum);
        });
    </script>
</body>
</html>
