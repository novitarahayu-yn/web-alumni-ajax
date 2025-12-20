<?php
$conn = mysqli_connect("localhost", "root", "", "db_alumni");

if (!$conn) {
    die("Koneksi gagal: " . mysqli_connect_error());
}

$keyword = isset($_GET['keyword']) ? mysqli_real_escape_string($conn, $_GET['keyword']) : "";

$sql = "SELECT * FROM alumni WHERE 
        nama LIKE '%$keyword%' OR 
        nim LIKE '%$keyword%' 
        ORDER BY id_alumni DESC";

$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        echo "<tr>
                <td>{$row['id_alumni']}</td>
                <td>{$row['nim']}</td>
                <td><strong>" . htmlspecialchars($row['nama']) . "</strong></td>
                <td>{$row['tahun_lulus']}</td>
                <td>" . htmlspecialchars($row['email']) . "</td>
                <td>" . htmlspecialchars($row['no_wa']) . "</td>
                <td>
                    <button class='btn-delete'>Hapus</button>
                </td>
              </tr>";
    }
} else {
    echo "<tr><td colspan='7' align='center'>Data alumni tidak ditemukan</td></tr>";
}

mysqli_close($conn);
?>