document.addEventListener("click", function (event) {
  const new15 = "NEW15";
  const couple20 = "Couple 20";
  const ticketPrice = 550;
  const getDiscountValue = getDiscountCode("discount-code");

  const clickedItemClassList = event.target.classList;
  if (clickedItemClassList.contains("selected-seat-item")) {
    const clickItemsId = event.target.id;

    if (
      clickedItemClassList.contains("bg-[#1DD100]") &&
      clickedItemClassList.contains("text-white")
    ) {
      unselectSeat(
        clickItemsId,
        ticketPrice,
        getDiscountValue,
        new15,
        couple20
      );
    } else {
      const currentActiveSeats = currentActiveSelectedSeat("total-seat-count");
      if (currentActiveSeats <= 3) {
        addSelectedSeatOnTotalSeatItem(
          clickItemsId,
          ticketPrice,
          getDiscountValue,
          new15,
          couple20
        );
      } else {
        ticketInfoTextHideOrShow("not-more-than-four", "remove");
      }
    }
  }

  // Apply Discount
  if (clickedItemClassList.contains("apply-discount")) {
    // const getDiscountValue = getDiscountCode("discount-code");

    if (getDiscountValue === new15 || getDiscountValue === couple20) {
      ticketInfoTextHideOrShow("discount-field", "remove");
      ticketInfoTextHideOrShow("apply-coupon-field", "add");

      const totalPriceText = document.getElementById("total-price");
      const totalPriceValue = parseInt(totalPriceText.innerText);

      if (getDiscountValue === new15) {
        // const discountedPriceValue = applyDiscountById("discount-price", totalPriceValue, 15);
        applyDiscountById("discount-price", totalPriceValue, 15);
      }
      if (getDiscountValue === couple20) {
        applyDiscountById("discount-price", totalPriceValue, 20);
      }

      const currentTotalPriceValue = currentActiveSelectedSeat("total-price");
      const currentDiscountedPrice =
        currentActiveSelectedSeat("discount-price");
      console.log(currentDiscountedPrice, currentTotalPriceValue);
      calculateGrandTotal(
        "grand-total",
        currentTotalPriceValue,
        currentDiscountedPrice
      );
    } else {
      const wrongCouponCode = document.getElementById("wrong-coupon-code");
      wrongCouponCode.classList.remove("hidden");
    }
  }
});

function unselectSeat(
  clickItemsId,
  ticketPrice,
  getDiscountValue,
  new15,
  couple20
) {
  deselectSeatItem(clickItemsId);
  const currentSeatSelect = decreaseSeatCounter("total-seat-count");
  removeSeatInfoOnTicketPurchasePart(clickItemsId, "ticket-info");

  if (currentSeatSelect === 0) {
    const getApplyButtonActive = document.getElementById("active-apply-button");
    getApplyButtonActive.classList.add("btn-disabled");
  }

  const currentActiveSeats = currentActiveSelectedSeat("total-seat-count");
  const totalPrice = findTotalPriceById(
    "total-price",
    ticketPrice,
    currentActiveSeats
  );

  const discountFieldAvailableOrNot = document.getElementById("discount-field");

  const currentTotalPriceValue = currentActiveSelectedSeat("total-price");
  const currentDiscountedPrice = currentActiveSelectedSeat("discount-price");
  // console.log(currentTotalPriceValue);

  if (discountFieldAvailableOrNot.classList.contains("hidden")) {
    calculateGrandTotal("grand-total", totalPrice, 0);
  } else {
    // Calculate Discount price
    calculateGrandTotal(
      "grand-total",
      currentTotalPriceValue,
      currentDiscountedPrice
    );
    // console.log(currentTotalPriceValue);
  }

  if (getDiscountValue === new15) {
    // const discountedPriceValue = applyDiscountById("discount-price", totalPriceValue, 15);
    const discountedPrice = applyDiscountById(
      "discount-price",
      currentTotalPriceValue,
      15
    );
    calculateGrandTotal("grand-total", currentTotalPriceValue, discountedPrice);
  }
  if (getDiscountValue === couple20) {
    const discountedPrice = applyDiscountById(
      "discount-price",
      currentTotalPriceValue,
      20
    );
    calculateGrandTotal("grand-total", currentTotalPriceValue, discountedPrice);
  }

  if (currentActiveSeats === 0) {
    ticketInfoTextHideOrShow("ticket-info-text", "remove");
  }
}

function addSelectedSeatOnTotalSeatItem(
  clickItemsId,
  ticketPrice,
  getDiscountValue,
  new15,
  couple20
) {
  // Seat select and seat counter increased
  const seatSelect = seatCounterById("total-seat-count");
  if (seatSelect > 0) {
    const getApplyButtonActive = document.getElementById("active-apply-button");
    getApplyButtonActive.classList.remove("btn-disabled");
  }

  // add background and text color by clicking on the selected Seat
  const choosenSeatItem = selectSeatItem(clickItemsId);
  // Ticket info general text hidden
  ticketInfoTextHideOrShow("ticket-info-text", "add");

  addSeatInfoOnTicketPurchasePart(
    "ticket-info",
    choosenSeatItem.innerText,
    ticketPrice
  );
  const totalPrice = findTotalPriceById("total-price", ticketPrice, seatSelect);

  const discountFieldAvailableOrNot = document.getElementById("discount-field");

  const currentTotalPriceValue = currentActiveSelectedSeat("total-price");
  const currentDiscountedPrice = currentActiveSelectedSeat("discount-price");

  if (discountFieldAvailableOrNot.classList.contains("hidden")) {
    calculateGrandTotal("grand-total", totalPrice, 0);
  } else {
    // Calculate Discount price
    calculateGrandTotal(
      "grand-total",
      currentTotalPriceValue,
      currentDiscountedPrice
    );
    // console.log(currentTotalPriceValue);
  }

  if (getDiscountValue === new15) {
    // const discountedPriceValue = applyDiscountById("discount-price", totalPriceValue, 15);
    const discountedPrice = applyDiscountById(
      "discount-price",
      currentTotalPriceValue,
      15
    );
    calculateGrandTotal("grand-total", currentTotalPriceValue, discountedPrice);
  }
  if (getDiscountValue === couple20) {
    const discountedPrice = applyDiscountById(
      "discount-price",
      currentTotalPriceValue,
      20
    );
    calculateGrandTotal("grand-total", currentTotalPriceValue, discountedPrice);
  }
}

// Get User Information
document
  .getElementById("phone-number")
  .addEventListener("keyup", function (event) {
    const givenPhoneNumberValue = event.target.value;
    if (givenPhoneNumberValue.length >= 11) {
      const enableConfirmApplyButton =
        document.getElementById("confirm-purchase");
      enableConfirmApplyButton.classList.remove("btn-disabled");
    }
  });

// Confirm Ticket Purchase
document
  .getElementById("confirm-purchase")
  .addEventListener("click", function () {
    const confirmPurchaseModal = document.getElementById(
      "confirm-purchase-modal"
    );
    confirmPurchaseModal.classList.remove("hidden");
  });

document.getElementById("close-modal").addEventListener("click", function () {
  const confirmPurchaseModal = document.getElementById(
    "confirm-purchase-modal"
  );
  confirmPurchaseModal.classList.add("hidden");
  location.reload();
});
