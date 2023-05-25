function TaxiQueue() {
	let taxiPassenger = [];
	let taxi = [];
	function joinQueue() {
		if (taxiPassenger.length <= 12) {
			
			taxiPassenger.push(1);
		}
		else {
			taxi = [];
		} 

	}

	function leaveQueue() {
		taxiPassenger.pop(1);
	}

	function joinTaxiQueue() {
		if (taxiPassenger.length <= 12) {
			taxiPassenger.push(1);
			
			taxi.push(1);
		}
		else {
			return false;
		}
	}

	function queueLength() {
		return taxiPassenger.length;

	}

	function taxiQueueLength() {
		return taxi.length;

	}

	function taxiDepart() {
		taxi.pop(1);

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