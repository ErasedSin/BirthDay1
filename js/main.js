    const texts = [
      "JoJo me lembra o quanto você é única... cheia de estilo, força e estranheza boa.",
      "A escuridão de Berserk é como sua força: mesmo nos dias difíceis, você brilha.",
      "Valkyrie tem batalhas épicas — como as que você vence todo dia.",
      "Nosso próprio jogo de luta: juntos, lado a lado, vencendo qualquer fase.",
      "Mesmo nos momentos de medo, você é minha coragem.",
      "Um universo neon e caótico, como nossos sonhos mais doidos.",
      "Quando ouço ABBA, penso em você dançando, linda e livre.",
      "Esse quadro... é um segredo especial só nosso."
    ];

    function showNextFrame(index) {
      if (frames[index]) {
        frames[index].classList.add("fade-in");
        frames[index].style.display = "flex";
        // Posição aleatória centralizada
        frames[index].style.top = `${50 + (Math.random() * 10 - 5)}%`;
        frames[index].style.left = `${50 + (Math.random() * 10 - 5)}%`;
        frames[index].style.transform = "translate(-50%, -50%)";
      }
    }

    function showMemory(index) {
      diary.innerText = texts[index];
      diary.style.display = "block";

      // Move o quadro para o canto e permite reclicar
      const frame = frames[index];
      frame.classList.add("fly-away");

      diary.onclick = () => {
        diary.style.display = "none";
        showNextFrame(index + 1);
      };
    }
