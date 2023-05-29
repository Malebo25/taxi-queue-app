function TaxiQueue(numberOfPassengers,numberOftaxis) {
  let taxiPassenger = numberOfPassengers || 0;
  let taxi = numberOftaxis||0;
  function joinQueue() {
    // if (taxiPassenger < 12) {
    //   taxiPassenger++;
    // } else {
    //   taxiPassenger = 0;
    // }
	taxiPassenger++;
  }

  function leaveQueue() {
    if (taxiPassenger > 0) {
      taxiPassenger--;
    }
  }

  function joinTaxiQueue() {
    // if (taxiPassenger < 12) {
    //   taxiPassenger++;

    //   taxi++;
    // } else {
    //   taxi = 0;
    // }
	  taxi++;
  }

  function queueLength() {
    return taxiPassenger;
  }

  function taxiQueueLength() {
    return taxi;
  }

  function taxiDepart() {
	if (taxi > 0 && taxiPassenger>=12) {
    taxiPassenger -= 12;
    taxi--;
  }
	  
  }

  return {
    joinQueue,
    leaveQueue,
    joinTaxiQueue,
    queueLength,
    taxiQueueLength,
    taxiDepart,
  };
}
