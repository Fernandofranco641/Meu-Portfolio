// ===== ANIMAÇÕES DO PORTFÓLIO =====

document.addEventListener("DOMContentLoaded", () => {

    // Entrada do conteúdo principal
    setTimeout(() => {
        document.querySelector(".anim-left")?.classList.add("show");
        document.querySelector(".anim-right")?.classList.add("show");
    }, 200);

    // Animações conforme rolagem
    const animados = document.querySelectorAll(
        ".anim-card, .anim-section"
    );

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    animados.forEach(el => observer.observe(el));

    // Efeito de digitação no cargo
    const cargo = document.querySelector(".hero h2");

    if (cargo) {
        const texto = cargo.textContent.trim();
        cargo.textContent = "";

        let i = 0;

        function digitar() {
            if (i < texto.length) {
                cargo.textContent += texto[i];
                i++;
                setTimeout(digitar, 65);
            }
        }

        setTimeout(digitar, 900);
    }

    // Movimento 3D da janela de código
    const codigo = document.querySelector(".codigo");

    if (codigo && window.innerWidth > 1000) {
        document.addEventListener("mousemove", e => {
            const x = (e.clientX / window.innerWidth - .5) * 2;
            const y = (e.clientY / window.innerHeight - .5) * 2;

            codigo.style.transform =
                `translateY(${-y * 5}px) rotateY(${x * 2}deg) rotateX(${-y * 1.5}deg)`;
        });

        codigo.addEventListener("mouseleave", () => {
            codigo.style.transform = "";
        });
    }

    // Rolagem suave
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", e => {
            const destino = document.querySelector(link.getAttribute("href"));

            if (destino) {
                e.preventDefault();
                destino.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
});
