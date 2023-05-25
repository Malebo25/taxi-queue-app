function TaxiQueue() {
	let taxiPassenger = 0;
	let taxi = 0;
	function joinQueue() {
		if (taxiPassenger <= 12) {
			
			taxiPassenger++;
		}
		 else {
		 	taxiPassenger=0;
		} 

	}

	function leaveQueue() {
		if (taxiPassenger > 0) {
			
			taxiPassenger--
		}
	}

	function joinTaxiQueue() {
		if (taxiPassenger <= 12) {
			taxiPassenger++;
			
			taxi++;
		}
		else {
			taxi=0;
		}
	}

	function queueLength() {
		return taxiPassenger;

	}

	function taxiQueueLength() {
		return taxi;

	}

	function taxiDepart() {
		taxi--;

	}

	return {
		joinQueue,
		leaveQueue,
		joinTaxiQueue,
		queueLength,
		taxiQueueLength,
		taxiDepart
	}
}