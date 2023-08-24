<?php
$activeScript = 'script6.js'; // výchozí hodnota

if (isset($_POST['selectedScript'])) {
    $activeScript = $_POST['selectedScript'];
}
?>

<!DOCTYPE html>
<html lang="cs">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test šifrování</title>
    <!-- Přidání Bootstrap 5 CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" rel="stylesheet">
</head>

<body class="bg-light">



    <div class="container mt-5">
        <div class="row justify-content-center">


            <div class="col-md-6">

            <div class="col-md-12 bg-light d-flex justify-content-end" style="margin-bottom: 20px;">

                <form method="post">
                    <div class="btn-group" role="group">
                        <button name="selectedScript" value="script6.js" type="submit"
                            class="btn btn-secondary <?= $activeScript == 'script6.js' ? 'active' : '' ?>">Rozložení
                            6x6</button>
                        <button name="selectedScript" value="script7.js" type="submit"
                            class="btn btn-secondary <?= $activeScript == 'script7.js' ? 'active' : '' ?>">Rozložení
                            7x7</button>
                    </div>
                </form>
            </div>
                <div class="card">
                    <div class="card-body">
                        <!-- Skripty -->
                        <script src="<?= $activeScript ?>"></script>

                        <form id="encryptionForm" class="form">
                            <div class="mb-3">
                                <label for="keyInput" class="form-label fw-bolder">Klíč šifry:</label>
                                <input type="text" id="keyInput" placeholder="Zadejte heslo nebo klíč"
                                    class="form-control">
                            </div>

                            <div class="mb-3">
                                <label for="methodSelect" class="form-label fw-bolder">Metoda:</label>
                                <select id="methodSelect" class="form-control">
                                    <option value="deriveKey">Vygeneruje náhodný klíč</option>
                                    <option value="manual">Manuální zadání klíče</option>
                                </select>
                            </div>

                            <div class="mb-3">
                                <label for="messageInput" class="form-label fw-bolder">Zpráva:</label>
                                <textarea id="messageInput" placeholder="Zadejte zprávu k šifrování nebo dešifrování"
                                    class="form-control" rows="4"></textarea>
                            </div>

                            <div class="mb-3">
                                <div class="form-check form-check-inline">
                                    <input type="radio" name="action" value="encrypt" id="encryptRadio"
                                        class="form-check-input" checked>
                                    <label class="form-check-label" for="encryptRadio">Šifrovat</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <input type="radio" name="action" value="decrypt" id="decryptRadio"
                                        class="form-check-input">
                                    <label class="form-check-label" for="decryptRadio">Dešifrovat</label>
                                </div>
                            </div>

                            <button type="button" class="btn btn-primary" onclick="handleAction()">Spustit</button>
                        </form>
                    </div>
                </div>
                <div class="mt-4">
                    <h4 class="fs-6">Použitý klíč:</h4>
                    <div class="alert alert-secondary" role="alert">
                        <p id="used-key-output"></p>
                    </div>

                    <h4 class="fs-6">Výsledek:</h4>
                    <div class="mb-3">
                        <textarea class="form-control" id="result-output" rows="4" readonly></textarea>
                        <button class="btn btn-primary mt-2" type="button" id="copyButton">Kopírovat výsledek</button>
                    </div>
                </div>

              
                <p><a href="https://github.com/AGPLCZ/LC4-cipher" target="_blank">https://github.com/AGPLCZ/LC4-cipher</a>
</p>


            </div>
        </div>
    </div>




    <!-- Přidání Bootstrap 5 JS a jeho závislostí -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>