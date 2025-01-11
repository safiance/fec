document.getElementById('processFile').addEventListener('click', () => {
    const fileInput = document.getElementById('fileInput');
    const dataTable = document.getElementById('dataTable');

    if (fileInput.files.length === 0) {
        alert('Please select a file first!');
        return;
    }

    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
        const fileContent = event.target.result;
        const rows = fileContent.split('\n');
        let html = '<table><tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr>';

        rows.forEach(row => {
            const columns = row.split(';'); // Modify as per your FEC format
            if (columns.length > 1) {
                html += `<tr><td>${columns[0]}</td><td>${columns[1]}</td><td>${columns[2]}</td></tr>`;
            }
        });

        html += '</table>';
        dataTable.innerHTML = html;
    };

    reader.readAsText(file);
});
