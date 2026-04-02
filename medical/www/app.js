(function () {
  const PLACEHOLDER_IMAGE = "assets/placeholder-anatomia.svg";

  const state = {
    deck: [],
    index: 0,
    flipped: false,
  };

  const el = {
    card: document.getElementById("studyCard"),
    cardInner: document.getElementById("cardInner"),
    cardImage: document.getElementById("cardImage"),
    imageStatus: document.getElementById("imageStatus"),
    cardTitle: document.getElementById("cardTitle"),
    cardDescription: document.getElementById("cardDescription"),
    progressLabel: document.getElementById("progressLabel"),
    reshuffleBtn: document.getElementById("reshuffleBtn"),
  };

  function setImageStatus(message) {
    if (!message) {
      el.imageStatus.hidden = true;
      el.imageStatus.textContent = "";
      return;
    }

    el.imageStatus.hidden = false;
    el.imageStatus.textContent = message;
  }

  function shuffle(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function getCurrentCard() {
    return state.deck[state.index];
  }

  function updateProgress() {
    const total = state.deck.length;
    const current = Math.min(state.index + 1, total || 1);
    el.progressLabel.textContent = `Card ${current} de ${total || 1}`;
  }

  function renderCard() {
    const card = getCurrentCard();
    if (!card) {
      return;
    }

    // Muestra placeholder primero para evitar cuadros en blanco mientras carga.
    el.cardImage.src = PLACEHOLDER_IMAGE;
    setImageStatus("Cargando imagen...");

    const candidate = new Image();
    candidate.onload = function onCandidateLoad() {
      if (!candidate.naturalWidth || !candidate.naturalHeight) {
        el.cardImage.src = PLACEHOLDER_IMAGE;
        setImageStatus("Imagen no disponible");
        return;
      }

      el.cardImage.src = card.image;
      setImageStatus("");
    };
    candidate.onerror = function onCandidateError() {
      el.cardImage.src = PLACEHOLDER_IMAGE;
      setImageStatus("Imagen no disponible");
      console.warn("No se pudo cargar:", card.image);
    };
    candidate.src = card.image;

    el.cardTitle.textContent = card.title;
    el.cardDescription.textContent = card.description;
    el.cardInner.classList.remove("is-flipped");
    state.flipped = false;
    updateProgress();
  }

  function nextCard() {
    if (state.deck.length === 0) {
      return;
    }

    if (state.index >= state.deck.length - 1) {
      state.deck = shuffle(state.deck);
      state.index = 0;
    } else {
      state.index += 1;
    }

    renderCard();
  }

  function flipCurrentCard() {
    el.cardInner.classList.add("is-flipped");
    state.flipped = true;
  }

  function onCardTap() {
    if (!state.flipped) {
      flipCurrentCard();
      return;
    }

    nextCard();
  }

  function initDeck() {
    if (!Array.isArray(window.ANATOMY_CARDS) || window.ANATOMY_CARDS.length === 0) {
      window.ANATOMY_CARDS = [
        {
          id: 1,
          title: "Sin contenido",
          description: "Carga tus imagenes y datos en www/data/cards.js para comenzar.",
          image: PLACEHOLDER_IMAGE,
        },
      ];
    }

    state.deck = shuffle(window.ANATOMY_CARDS);
    state.index = 0;
    renderCard();
  }

  el.card.addEventListener("click", onCardTap);
  el.reshuffleBtn.addEventListener("click", function onReset() {
    state.deck = shuffle(state.deck);
    state.index = 0;
    renderCard();
  });

  initDeck();
})();
