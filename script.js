function executeGlobalSearch() {
    const query = document.getElementById('globalSearchInput').value;
    console.log("Búsqueda del usuario: " + query);
}

// ADMIN
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const user = document.getElementById('username').value;
        const pass = document.getElementById('password').value;
        console.log("Credenciales ingresadas -> Usuario: " + user + " | Contraseña: " + pass);
    });
}

// SIGNUP
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nombres = document.getElementById('regNombres').value;
        const apellidos = document.getElementById('regApellidos').value;
        const email = document.getElementById('regEmail').value;
        const telefono = document.getElementById('regTelefono').value;
        const estrato = document.getElementById('regEstrato').value;
        const fecha = document.getElementById('regFecha').value;
        const sangre = document.getElementById('regSangre').value;
        
        const generoRadio = document.querySelector('input[name="genero"]:checked');
        const genero = generoRadio ? generoRadio.value : 'No especificado';
        
        const actividadesCheck = document.querySelectorAll('input[name="actividades"]:checked');
        let actividades = [];
        actividadesCheck.forEach(cb => actividades.push(cb.value));

        alert(`INFORMACIÓN REGISTRADA:\n\nNombres: ${nombres}\nApellidos: ${apellidos}\nEmail: ${email}\nTeléfono: ${telefono}\nEstrato: ${estrato}\nFecha Nacimiento: ${fecha}\nGrupo Sanguíneo: ${sangre}\nGénero: ${genero}\nActividades: ${actividades.join(', ')}`);
    });
}

// ABOUT
document.addEventListener("DOMContentLoaded", function() {
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
            aboutText.innerText = "Nuestra misión institucional es proveer soluciones web ágiles y de alta calidad técnica a través del cumplimiento de estándares internacionales y metodologías modernas.";
        } else if (tab === 'vision') {
            viewMisionVision.style.display = 'flex';
            viewEquipo.style.display = 'none';
            aboutTitle.innerText = "Visión";
            aboutText.innerText = "Para el año 2030, ser el portal líder interactivo de aprendizaje y desarrollo de software, consolidando un equipo de ingenieros con gran proyección global.";
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
    if(txt) {
        txt.style.fontSize = txt.style.fontSize === '22px' ? '16px' : '22px';
    }
}

function cambiarColorLetra() {
    const txt = document.getElementById('aboutText');
    if(txt) {
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
