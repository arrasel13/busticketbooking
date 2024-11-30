document.addEventListener('click', function (event) {
    const ticketPrice = 550;
    const couponNew15 = 15;
    const couponCouple20 = 20;

    const findParentDiv = event.target.parentNode;
    const currentClickedItem = event.target.id;

    const childItemExists = findParentDiv.querySelector('#'+currentClickedItem);
    console.log(childItemExists);

    if (childItemExists) {
        const selectedSeat = document.getElementById(currentClickedItem);
        selectedSeat.classList.remove("bg-[#0307121A]");
        selectedSeat.classList.add("bg-[#1DD100]", "text-white");


        const selectedSeatCounterText = document.getElementById('total-seat-count');
        let selectedSeatCounter = parseInt(selectedSeatCounterText.innerText);
        selectedSeatCounter = selectedSeatCounter + 1;
        selectedSeatCounterText.innerText = selectedSeatCounter;
        
        if (selectedSeatCounter > 4) {
            const notMoreThanFour = document.getElementById('not-more-than-four');
            notMoreThanFour.classList.remove('hidden');
        }

        

        const findTicketInfoDiv = document.getElementById('ticket-info');
        console.log(findTicketInfoDiv);

        const ticketInfoText = document.getElementById('ticket-info-text');
        ticketInfoText.classList.add('hidden');
        
        const selectedSeatTextAdd = selectedSeat.innerText;

        const selectedTicketInfoText = document.createElement("div");
        selectedTicketInfoText.className = "flex justify-between mt-4";

        const p1 = document.createElement("p");
        p1.id = "ticket-serial";
        p1.className = "font-inter font-medium text-base text-[#03071299]";
        p1.textContent = selectedSeatTextAdd;
        selectedTicketInfoText.appendChild(p1);
        
        const p2 = document.createElement("p");
        p2.className = "font-inter font-medium text-base text-[#03071299]";
        p2.textContent = "Economy";
        selectedTicketInfoText.appendChild(p2);
        
        const p3 = document.createElement("p");
        p3.className = "font-inter font-medium text-base text-[#03071299]";
        p3.textContent = "550";
        selectedTicketInfoText.appendChild(p3);

        console.log(selectedTicketInfoText);
        findTicketInfoDiv.appendChild(selectedTicketInfoText);

        const totalPriceText = document.getElementById('total-price');
        const totalPrice = selectedSeatCounter * ticketPrice;
        totalPriceText.innerText = totalPrice;
        
        const discountPriceValue = document.getElementById('discount-price');
        const totalPriceValue = parseInt(totalPriceText.innerHTML);
        const discountedPrice = ((totalPriceValue * 15) / 100);
        discountPriceValue.innerText = discountedPrice;
        
        const grandTotalValue = document.getElementById('grand-total');
        const grandTotal = totalPriceValue - discountedPrice;
        grandTotalValue.innerText = grandTotal;

    } else {
        console.log('pai nai');
    }
    // const selectedSeatInfo = event.target;
    // const selectedSeatId = selectedSeatInfo.id;
    // const selectedSeat = document.getElementById(selectedSeatId);
    // selectedSeat.classList.remove("bg-[#0307121A]");
    // selectedSeat.classList.add("bg-[#1DD100]", "text-white");

    
    

    // console.log(selectedSeatInfo);
    // console.log(findParentDiv);
    // console.log(currentClickedItem);
    // console.log(selectedSeatCounter);
});

function discountCode() {
    const getDiscountCodeValue = document.getElementById('discount-code');
    const getDiscountCode = getDiscountCodeValue.value;
    console.log(getDiscountCode);
}