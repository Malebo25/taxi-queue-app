
const passengerCounter = document.querySelector(".passenger_queue_count");
const joinBtn = document.querySelector(".join_queue");
const leaveBtn = document.querySelector(".leave_queue");

const taxiCounter = document.querySelector(".taxi_queue_count");
const taxiJoinBtn = document.querySelector(".join_taxi_queue");
const departBtn = document.querySelector(".depart");
// create Factory Function instance

const taxiQueue = TaxiQueue(localStorage.getItem("numPassengers"),localStorage.getItem("numTaxis"));
// localStorage.getItem("numPassengers");
passengerCounter.innerHTML = taxiQueue.queueLength();

taxiCounter.innerHTML = taxiQueue.taxiQueueLength();
// DOM events

joinBtn.addEventListener("click", function () {
    taxiQueue.joinQueue();
    // passengerCounter.innerHTML = taxiQueue.queueLength();
  localStorage.setItem("numPassengers", taxiQueue.queueLength());
  
  passengerCounter.innerHTML=taxiQueue.queueLength() ;

    
});
leaveBtn.addEventListener("click", function () {
  taxiQueue.leaveQueue();
  passengerCounter.innerHTML = taxiQueue.queueLength();
   localStorage.setItem("numPassengers", taxiQueue.queueLength());
});

taxiJoinBtn.addEventListener("click", function () {
  taxiQueue.joinTaxiQueue();
  localStorage.setItem("numTaxis", taxiQueue.taxiQueueLength());
  taxiCounter.innerHTML = taxiQueue.taxiQueueLength();

});

departBtn.addEventListener("click", function () {
  taxiQueue.taxiDepart();
  taxiCounter.innerHTML = taxiQueue.taxiQueueLength();
  passengerCounter.innerHTML = taxiQueue.queueLength();
  localStorage.setItem("numTaxis", taxiQueue.taxiQueueLength());
  localStorage.setItem("numPassengers", taxiQueue.queueLength());
  

});

