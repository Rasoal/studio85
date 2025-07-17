
// navbar.js

$(window).on("scroll", function () {
  console.log("Scroll detectado: " + $(this).scrollTop());
  
  if ($(this).scrollTop() > 400) {
    $(".navbar").addClass("navbar-solida");
    
    // Altera o logo para a versão com fundo escuro
    $(".img-logo").css("background-image", "url('imagens/logo.png')");
  } else {
    $(".navbar").removeClass("navbar-solida");

    // Volta o logo para a versão com fundo claro
    $(".img-logo").css("background-image", "url('imagens/logo1.png')");
  }
});


// ================== sobre ===========================

 document.addEventListener("DOMContentLoaded", function () {
  const contadores = document.querySelectorAll('.counter');
  let iniciado = false;

  const iniciarContagem = () => {
    console.log("🎯 Iniciando contagem...");
    contadores.forEach(contador => {
      const target = +contador.getAttribute('data-target');
      let atual = 0;
      const duracao = 2000; // tempo total da animação em milissegundos
      const passos = duracao / 30;
      const incremento = target / passos;

      const atualizarContador = () => {
        atual += incremento;
        if (atual < target) {
          contador.innerText = Math.floor(atual);
          setTimeout(atualizarContador, 30);
        } else {
          contador.innerText = target;
        }
      };

      atualizarContador();
    });
  };

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !iniciado) {
        console.log("👁️ Seção visível, disparando contagem.");
        iniciado = true;
        iniciarContagem();
      }
    });
  }, { threshold: 0.5 });

  const secaoNumeros = document.querySelector('.numeros-sobre');
  if (secaoNumeros) {
    observer.observe(secaoNumeros);
    console.log("✅ Observer ativado para .numeros-sobre");
  } else {
    console.log("❌ Não encontrou .numeros-sobre");
  }
});