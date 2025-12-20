$(document).ready(function() {
   function loadData(query = "") {
        $.ajax({
            url: "search.php",
            method: "GET",
            data: { keyword: query },
            success: function(data) {
                $('#hasil_tabel').html(data);
            }
        });
    }

    loadData(); 

    $('#keyword').on('keyup', function() {
        var cari = $(this).val();
        loadData(cari);
    });

    $('#alumniForm').on('submit', function(e) {
        e.preventDefault();

        const nim = $('#nim').val();
        const nama = $('#name').val();
        const tahun = $('#year').val();
        const email = $('#email').val();
        const wa = $('#whatsapp').val();

        const row = `
            <tr style="display:none; background-color: #e8f5e9;">
                <td>Baru</td>
                <td>${nim}</td>
                <td><strong>${nama}</strong></td>
                <td>${tahun}</td>
                <td>${email}</td>
                <td>${wa}</td>
            </tr>`;
        
        $('#hasil_tabel').prepend(row);
        $('#hasil_tabel tr:first').fadeIn(800);

        alert("Data " + nama + " berhasil ditambahkan!");
        this.reset();
    });

    $('#alumniTable').on('click', '.btn-delete', function() {
        if(confirm("Hapus data alumni ini?")) {
            $(this).closest('tr').fadeOut(400, function() {
                $(this).remove();
            });
        }
    });
});