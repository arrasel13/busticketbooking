function currentActiveSelectedSeat(eventId) {
  const currentActiveSeatsText = document.getElementById(eventId);
  const currentActiveSeats = parseInt(currentActiveSeatsText.innerText);

  return currentActiveSeats;
}

function seatCounterById(eventId) {
  const selectedSeatCounterText = document.getElementById(eventId);
  let selectedSeatCounter = parseInt(selectedSeatCounterText.innerText);
  selectedSeatCounter = selectedSeatCounter + 1;
  selectedSeatCounterText.innerText = selectedSeatCounter;

  return selectedSeatCounter;
}

function decreaseSeatCounter(eventId) {
  const selectedSeatCounterText = document.getElementById(eventId);
  let selectedSeatCounter = parseInt(selectedSeatCounterText.innerText);
  decreaseSeatCounterValue = selectedSeatCounter - 1;
  selectedSeatCounterText.innerText = decreaseSeatCounterValue;

  return selectedSeatCounter;
}

function ticketInfoTextHideOrShow(elementId, action) {
  const ticketInfoText = document.getElementById(elementId);
  if (action === "add") {
    ticketInfoText.classList.add("hidden");
  }
  if (action === "remove") {
    ticketInfoText.classList.remove("hidden");
  }
}

function selectSeatItem(eventId) {
  const selectedSeatItem = document.getElementById(eventId);
  //     const selectedSeatItemsClasses
  //   //   selectedSeatItem.classList("bg-[#0307121A]", "selected");
  selectedSeatItem.classList.remove("bg-[#0307121A]");
  selectedSeatItem.classList.add("bg-[#1DD100]", "text-white");
  return selectedSeatItem;
}

function deselectSeatItem(eventId) {
  const selectedSeatItem = document.getElementById(eventId);
  selectedSeatItem.classList.remove("bg-[#1DD100]", "text-white");
  selectedSeatItem.classList.add("bg-[#0307121A]");

  return;
}

function addSeatInfoOnTicketPurchasePart(elementId, selectedSeat, ticketprice) {
  const findTicketInfoDiv = document.getElementById(elementId);

  const selectedTicketInfoText = document.createElement("div");
  selectedTicketInfoText.className = `flex justify-between mt-4 ${selectedSeat.toLowerCase()}`;

  const p1 = document.createElement("p");
  p1.id = "ticket-serial";
  p1.className = "font-inter font-medium text-base text-[#03071299]";
  p1.textContent = selectedSeat;
  selectedTicketInfoText.appendChild(p1);

  const p2 = document.createElement("p");
  p2.className = "font-inter font-medium text-base text-[#03071299]";
  p2.textContent = "Economy";
  selectedTicketInfoText.appendChild(p2);

  const p3 = document.createElement("p");
  p3.className = "font-inter font-medium text-base text-[#03071299]";
  p3.textContent = `${ticketprice}`;
  selectedTicketInfoText.appendChild(p3);

  findTicketInfoDiv.appendChild(selectedTicketInfoText);
}

function removeSeatInfoOnTicketPurchasePart(elementId, parentId) {
  const ticketInfoDiv = document.getElementById(parentId);
  const divNeedToRemove = ticketInfoDiv.querySelector(`.${elementId}`);
  divNeedToRemove.remove();
}

// Discount code
function discountCode(eventId) {
  const getDiscountCodeValue = document.getElementById(eventId);
  const getDiscountCode = getDiscountCodeValue.value;

  return getDiscountCode;
}
