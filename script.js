$(document).ready(function() { 
       
    function searchAlumni(keyword) {
        $.ajax({
            url: "searchalumni.php",
            method: "POST",
            data: { query: keyword },
            success: function(response) {
                $('#hasil_tabel').html(response); 
            }
        });
    }

    searchAlumni('');

    $('#searchAlumni').on('keyup', function() {
        var value = $(this).val();
        searchAlumni(value);
    });

    $('#alumniForm').submit(function(event) {
        event.preventDefault(); 
        
        const name = $('#name').val();
        const year = $('#year').val();

        if (name && year) {
            const newRow = `<tr>
                <td>${name}</td>
                <td>${year}</td>
                <td><button class="delete">Hapus</button></td>
            </tr>`;
            $('#hasil_tabel').append(newRow); 
            this.reset();
            alert('Data alumni berhasil ditambahkan secara lokal!');
        }
    });

    $('#alumniTable').on('click', '.delete', function() {
        if (confirm('Apakah Anda yakin ingin menghapus data ini?')) { 
            $(this).closest('tr').remove(); 
        }
    });
});