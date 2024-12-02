document.addEventListener("click", function (event) {
  const NEW15 = 15;
  const couple20 = 20;
  const ticketPrice = 550;

  const clickedItemClassList = event.target.classList;
  //   console.log(clickedItemClassList);

  if (clickedItemClassList.contains("selected-seat-item")) {
    const clickItemsId = event.target.id;

    if (
      clickedItemClassList.contains("bg-[#1DD100]") &&
      clickedItemClassList.contains("text-white")
    ) {
      deselectSeatItem(clickItemsId);
      decreaseSeatCounter("total-seat-count");
      removeSeatInfoOnTicketPurchasePart(clickItemsId, "ticket-info");

      const currentActiveSeats = currentActiveSelectedSeat("total-seat-count");

      if (currentActiveSeats === 0) {
        ticketInfoTextHideOrShow("ticket-info-text", "remove");
      }
    } else {
      const currentActiveSeats = currentActiveSelectedSeat("total-seat-count");
      if (currentActiveSeats <= 3) {
        // Seat select and seat counter increased
        const seatSelect = seatCounterById("total-seat-count");
        // add background and text color by clicking on the selected Seat
        const choosenSeatItem = selectSeatItem(clickItemsId);
        // Ticket info general text hidden
        ticketInfoTextHideOrShow("ticket-info-text", "add");

        addSeatInfoOnTicketPurchasePart(
          "ticket-info",
          choosenSeatItem.innerText,
          ticketPrice
        );
      } else {
        ticketInfoTextHideOrShow("not-more-than-four", "remove");
      }
    }
  }

  if (clickedItemClassList.contains("apply-discount")) {
    const getDiscountValue = discountCode("discount-code");

    if (getDiscountValue === "NEW15" || getDiscountValue === "Couple 20") {
      ticketInfoTextHideOrShow("discount-field", "remove");
      ticketInfoTextHideOrShow("apply-coupon-field", "add");
    }
  }
});
