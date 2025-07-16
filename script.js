
fetch('data.json')
    .then(response => response.json())
    .then(data => initMalla(data));

function initMalla(asignaturas) {
    const malla = document.getElementById("malla");
    asignaturas.forEach(ramo => {
        const div = document.createElement("div");
        div.className = `ramo ${ramo.estado} ${ramo.categoria}`;
        div.textContent = `${ramo.nombre} (${ramo.creditos} cr)`;
        div.onclick = () => marcarRamo(ramo.codigo, asignaturas);
        malla.appendChild(div);
    });
}

function marcarRamo(codigo, asignaturas) {
    // Lógica de aprobación y desbloqueo (a completar)
    alert("Función de aprobar ramo próximamente.");
}
