document.addEventListener('click', function (event) {
    const ticketPrice = 550;

    const selectedSeatCounterText = document.getElementById('total-seat-count');
    let selectedSeatCounter = parseInt(selectedSeatCounterText.innerText);
    selectedSeatCounter = selectedSeatCounter + 1;
    selectedSeatCounterText.innerText = selectedSeatCounter;
    
    if (selectedSeatCounter > 4) {
        const notMoreThanFour = document.getElementById('not-more-than-four');
        notMoreThanFour.classList.remove('hidden');
    }

    const selectedSeatInfo = event.target;
    const selectedSeatId = selectedSeatInfo.id;
    selectedSeatInfo.classList.remove("bg-[#0307121A]");
    selectedSeatInfo.classList.add("bg-[#1DD100]", "text-white");
    

    // console.log(selectedSeatInfo);
    // console.log(selectedSeatId);
    // console.log(selectedSeatCounter);
});
