AOS.init();
/* 
data-aos="fade-up"
data-aos="fade-down"
data-aos="fade-left"
data-aos="fade-right"

data-aos="zoom-in"
data-aos="zoom-out"

fonte: https://michalsnik.github.io/aos/
npm: https://www.npmjs.com/package/aos
*/

document.addEventListener("DOMContentLoaded", () => {
  const counters = document.querySelectorAll(".counter");
  const speed = 200;

  const updateCount = (counter) => {
    const target = +counter.getAttribute("data-target");
    const currentCount = +counter.innerText;
    const increment = target / speed;

    if (currentCount < target) {
      counter.innerText = Math.ceil(currentCount + increment);
      setTimeout(() => updateCount(counter), 30);
    } else {
      counter.innerText = target;
    }
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          updateCount(entry.target);
          observer.unobserve(entry.target); // Para garantir que o contador não reinicie
        }
      });
    },
    {
      threshold: 0.1, // Ajuste conforme necessário
    }
  );

  counters.forEach((counter) => {
    observer.observe(counter);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const tamanhoTela = window.innerWidth;
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const cardCopy = card.querySelector(".card-copy");
      if (cardCopy && tamanhoTela < 1024) {
        cardCopy.classList.toggle("active");
      }
    });
  });
});
