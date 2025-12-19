<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Web Alumni UNIKU - Pencarian AJAX</title>
    <link rel="stylesheet" href="alumni.css">
</head>
<body>

<div class="form-container">
    <h3>Tambah Data Alumni</h3>
    <form id="alumniForm">
        <input type="text" id="name" placeholder="Nama Alumni" required>
        <input type="text" id="year" placeholder="Tahun Lulus" required>
        <input type="email" id="email" placeholder="Email (Contoh: name@mail.com)" required>
        <input type="text" id="whatsapp" placeholder="No WhatsApp (Contoh: 0812...)" required>
        <button type="submit" id="addBtn">Tambahkan Alumni</button>
    </form>
</div>

<hr>

<table id="alumniTable">
    <thead>
        <tr>
            <th>Nama Alumni</th>
            <th>Tahun Lulus</th>
            <th>Email</th>
            <th>No WhatsApp</th>
            <th>Aksi</th>
        </tr>
    </thead>
    <tbody id="hasil_tabel">
        </tbody>
</table>
</div>

<script src="script.js"></script>

</body>
</html>