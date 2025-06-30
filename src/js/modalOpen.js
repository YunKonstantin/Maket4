function openModal(type) {
  const modal = document.querySelector(".modal");
  const chatModal = document.querySelector('[data-atribute="chat"]');
  const callModal = document.querySelector('[data-atribute="call"]');
  const overlayChat = document.getElementById("overlay_modal-chat");
  const overlayCall = document.getElementById("overlay_modal-call");
  const closeBtn = document.getElementById("close");

  modal.classList.add("active");
  modal.classList.remove("hidden");

  if (type === "chat") {
    chatModal.classList.add("active");
    chatModal.classList.remove("hidden");
    overlayChat.classList.add("active");
    overlayChat.classList.remove("hidden");

    callModal.classList.remove("active");
    callModal.classList.add("hidden");
    overlayCall.classList.remove("active");
    overlayCall.classList.add("hidden");
  } else if (type === "call") {
    callModal.classList.add("active");
    callModal.classList.remove("hidden");
    overlayCall.classList.add("active");
    overlayCall.classList.remove("hidden");

    chatModal.classList.remove("active");
    chatModal.classList.add("hidden");
    overlayChat.classList.remove("active");
    overlayChat.classList.add("hidden");
  }

  closeBtn.style.display = "block";

  closeBtn.onclick = () => {
    modal.classList.remove("active");
    modal.classList.add("hidden");

    chatModal.classList.remove("active");
    chatModal.classList.add("hidden");
    overlayChat.classList.remove("active");
    overlayChat.classList.add("hidden");

    callModal.classList.remove("active");
    callModal.classList.add("hidden");
    overlayCall.classList.remove("active");
    overlayCall.classList.add("hidden");

    closeBtn.style.display = "none";
  };
}
