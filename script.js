$(document).ready(function() { 
    $('#alumniForm').on('submit', function(e) { 
        e.preventDefault(); 
        
        const name = $('#name').val(); 
        const year = $('#year').val(); 
        const email = $('#email').val(); 
        const whatsapp = $('#whatsapp').val(); 

        if (name && year && email && whatsapp) {
            const newRow = `<tr>
                <td>${name}</td>
                <td>${year}</td>
                <td>${email}</td>
                <td>${whatsapp}</td>
                <td><button class="delete">Hapus</button></td>
            </tr>`;

            $('#hasil_tabel').append(newRow); 

            this.reset(); 
            alert("Data alumni " + name + " berhasil ditambahkan!"); 
        } else {
            alert("Harap isi semua kolom!"); 
        }
    });

    $('#alumniTable').on('click', '.delete', function() { 
        if (confirm('Yakin ingin menghapus data ini?')) { 
            $(this).closest('tr').remove(); 
        }
    });
});