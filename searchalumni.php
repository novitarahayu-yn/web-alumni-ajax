<?php
$conn = mysqli_connect("localhost", "root", "", "db_alumni");

if (!$conn) {
    die("Koneksi gagal");
}

$keyword = isset($_POST['query']) ? mysqli_real_escape_string($conn, $_POST['query']) : "";
$sql = "SELECT * FROM alumni WHERE nama LIKE '%$keyword%' OR nim LIKE '%$keyword%'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
    echo "<tr>
            <td>{$row['nama']}</td>
            <td>{$row['tahun_lulus']}</td>
            <td>{$row['email']}</td>
            <td>{$row['no_wa']}</td>
            <td><button class='delete'>Hapus</button></td>
          </tr>";
}

} else {
    echo "<tr><td colspan='3' align='center'>Data alumni tidak ditemukan</td></tr>";
}
?>