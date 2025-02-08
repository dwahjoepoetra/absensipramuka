/* script.js */
const canvas = document.getElementById('signatureCanvas');
const ctx = canvas.getContext('2d');
let drawing = false;

canvas.addEventListener('mousedown', () => drawing = true);
canvas.addEventListener('mouseup', () => drawing = false);
canvas.addEventListener('mousemove', draw);

document.getElementById('clearSign').addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});

document.getElementById('attendanceForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const email = document.getElementById('email').value;
    const signatureData = canvas.toDataURL();
    
    document.getElementById('output').innerHTML = `<p><strong>Nama:</strong> ${name}</p>
                                                   <p><strong>NIM/NIP:</strong> ${id}</p>
                                                   <p><strong>Email:</strong> ${email}</p>
                                                   <img src="${signatureData}" alt="Tanda Tangan">`;
});

function draw(event) {
    if (!drawing) return;
    ctx.lineWidth = 2;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'black';
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(event.offsetX, event.offsetY);
}
