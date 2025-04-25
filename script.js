// Función para abrir una nueva ventana con la lista de regalos y botones
function abrirVentanaListaRegalos() {
    const ventana = window.open('', 'Lista de Regalos', 'width=400,height=300,resizable=yes,scrollbars=yes');
    
    // Contenido de la ventana emergente
    ventana.document.write(`
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Lista de Regalos</title>
            <style>
                body {
                    font-family: 'Segoe UI', sans-serif;
                    padding: 20px;
                    text-align: center;
                    background-color: #fff8e1;
                }
                h2 {
                    color: #e91e63;
                }
                .btn {
                    padding: 10px 20px;
                    margin: 10px;
                    font-size: 16px;
                    background-color: #ffc107;
                    color: #333;
                    border: none;
                    border-radius: 8px;
                    cursor: pointer;
                    transition: background-color 0.3s;
                }
                .btn:hover {
                    background-color: #e0a800;
                }
            </style>
        </head>
        <body>
            <h2>Lista de Regalos</h2>
            <p>Tu presencia es lo más importante. Si deseas traer pañales o wipes estos seran de gran ayuda ♥</p>
            <div>
                <button class="btn" onclick="window.location.href='https://www.amazon.com/baby-reg/marialbis-gonzlez-mayo-2025-miami/2K7YNHJ6FPD7W'">Amazon</button>
                <button class="btn" onclick="window.location.href='https://bebemundo.com.do/'">Bebe Mundo</button>
            </div>
        </body>
        </html>
    `);
}

// Animación de hover cada 5 segundos
const beeImage = document.getElementById('beeImage');
setInterval(() => {
    beeImage.style.transform = 'scale(1.1)';
    setTimeout(() => {
        beeImage.style.transform = 'scale(1)';
    }, 500);
}, 5000);

// Función para abrir una ventana emergente
function abrirVentana(url) {
    window.open(url, 'popup', 'width=600,height=500,resizable=yes,scrollbars=yes');
}
