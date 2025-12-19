$(document).ready(function() {
    $('#alumniForm').on('submit', function(e) {
        e.preventDefault();

        const data = {
            nama: $('#name').val(),
            tahun: $('#year').val(),
            email: $('#email').val(),
            wa: $('#whatsapp').val()
        };

        const row = `
            <tr style="display:none;">
                <td><strong>${data.nama}</strong></td>
                <td>${data.tahun}</td>
                <td>${data.email}</td>
                <td><a href="https://wa.me/${data.wa}" target="_blank" style="color:#25D366; font-weight:bold;">${data.wa}</a></td>
                <td><button class="btn-delete">Hapus</button></td>
            </tr>`;
        
        $('#hasil_tabel').append(row);
        $('#hasil_tabel tr:last').fadeIn(800);

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