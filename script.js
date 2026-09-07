function executeGlobalSearch() {
    const query = document.getElementById('globalSearchInput').value;
    console.log("Búsqueda del usuario: " + query);
}

// ADMIN
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        console.log("Credenciales ingresadas -> Usuario: " + user + " | Contraseña: " + pass);
    });
}

// SIGN 
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const regexTexto = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]{3,30}$/;
        const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        const regexTelefono = /^\d{7,10}$/;
        const regexEstrato = /^[1-6]$/;

        const nombres = document.getElementById('regNombres');
        const apellidos = document.getElementById('regApellidos');
        const email = document.getElementById('regEmail');
        const telefono = document.getElementById('regTelefono');
        const estrato = document.getElementById('regEstrato');
        const fecha = document.getElementById('regFecha');
        const sangre = document.getElementById('regSangre');
        const generoRadio = document.querySelector('input[name="genero"]:checked');

        let isValid = true;

        function validarCampo(inputElement, regex) {
            const grupo = inputElement.parentElement;
            if (!regex.test(inputElement.value.trim())) {
                grupo.classList.add('invalid');
                isValid = false;
            } else {
                grupo.classList.remove('invalid');
            }
        }

        validarCampo(nombres, regexTexto);
        validarCampo(apellidos, regexTexto);
        validarCampo(email, regexEmail);
        validarCampo(telefono, regexTelefono);
        validarCampo(estrato, regexEstrato);

        if (fecha.value === "") {
            fecha.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            fecha.parentElement.classList.remove('invalid');
        }

        if (sangre.value === "") {
            sangre.parentElement.classList.add('invalid');
            isValid = false;
        } else {
            sangre.parentElement.classList.remove('invalid');
        }

        if (!generoRadio) {
            document.getElementById('errGenero').parentElement.classList.add('invalid');
            isValid = false;
        } else {
            document.getElementById('errGenero').parentElement.classList.remove('invalid');
        }

        const grupoGenero = document.getElementById('grupoGenero');
        if (!generoRadio) {
            grupoGenero.classList.add('invalid');
            isValid = false;
        } else {
            grupoGenero.classList.remove('invalid');
        }

        if (isValid) {
            const listaActividades = [];
            document.querySelectorAll('input[name="actividades"]:checked').forEach(cb => {
                listaActividades.push(cb.value);
            });

            alert(
                `¡REGISTRO EXITOSO!\n\n` +
                `Nombres: ${nombres.value.trim()}\n` +
                `Apellidos: ${apellidos.value.trim()}\n` +
                `Email: ${email.value.trim()}\n` +
                `Teléfono: ${telefono.value.trim()}\n` +
                `Estrato: ${estrato.value}\n` +
                `Fecha de Nacimiento: ${fecha.value}\n` +
                `Grupo Sanguíneo: ${sangre.value}\n` +
                `Género: ${generoRadio.value}\n` +
                `Actividades: ${listaActividades.length > 0 ? listaActividades.join(', ') : 'Ninguna'}`
            );

            location.href = 'admin.html';
        }
    });
}


// ABOUT
document.addEventListener("DOMContentLoaded", function () {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');

    const viewMisionVision = document.getElementById('viewMisionVision');
    const viewEquipo = document.getElementById('viewEquipo');
    const aboutTitle = document.getElementById('aboutTitle');
    const aboutText = document.getElementById('aboutText');

    if (viewMisionVision && viewEquipo) {
        if (tab === 'mision') {
            viewMisionVision.style.display = 'flex';
            viewEquipo.style.display = 'none';
            aboutTitle.innerText = "Misión";
            aboutText.innerText = "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..";
        } else if (tab === 'vision') {
            viewMisionVision.style.display = 'flex';
            viewEquipo.style.display = 'none';
            aboutTitle.innerText = "Visión";
            aboutText.innerText = "FOrtuna audaces iuvat, morturi te salutant, dum vita spes est, non sine pericolo";
        } else if (tab === 'equipo') {
            viewMisionVision.style.display = 'none';
            viewEquipo.style.display = 'block';
        } else {
            viewMisionVision.style.display = 'flex';
            aboutTitle.innerText = "Sobre Nosotros";
        }
    }
});

// MIS/VIS
function cambiarTamanoLetra() {
    const txt = document.getElementById('aboutText');
    if (txt) {
        txt.style.fontSize = txt.style.fontSize === '22px' ? '16px' : '22px';
    }
}

function cambiarColorLetra() {
    const txt = document.getElementById('aboutText');
    if (txt) {
        txt.style.color = txt.style.color === 'rgb(0, 123, 255)' ? '#333333' : '#007bff';
    }
}

// COMPAS
let currentSlide = 0;
function moveSlide(direction) {
    const slides = document.querySelectorAll('.slide');
    if (slides.length === 0) return;

    slides[currentSlide].classList.remove('active');
    currentSlide += direction;

    if (currentSlide >= slides.length) {
        currentSlide = 0;
    } else if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    }

    slides[currentSlide].classList.add('active');
}
