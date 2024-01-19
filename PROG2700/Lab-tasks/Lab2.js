class TravelInfo {
    constructor(location) {
      this.location = location;
    }
  
    checkTravelStatus() {
      if (this.location.toLowerCase() === 'halifax') {
        this.displayOutput(`You are in Halifax. The airport is YHZ (Halifax Stanfield International Airport).`);
      } else {
        // Ask for user's location and destination if not in Halifax
        const userLocation = prompt('Where are you located?');
        const destination = prompt('Where are you going?');
        
        this.displayOutput(`You are traveling from ${userLocation} to ${destination}.`);
        
        // Check if it's between Jan 19 and Feb 19
        const currentDate = new Date();
        const isBetweenDates = currentDate >= new Date('2024-01-19') && currentDate <= new Date('2024-02-19');
  
        if (isBetweenDates) {
          this.displayOutput(`You are traveling between Jan 19 and Feb 19. Currently in Costa Rica.`);
        } else {
          this.displayOutput(`You are currently at home in Halifax.`);
        }
      }
    }
  
    displayOutput(message) {
      const outputDiv = document.getElementById('output');
      outputDiv.innerHTML = message;
      console.log(message); // Log to console as well
    }
  }
  
  // Example usage:
  const traveler = new TravelInfo('Halifax');
  traveler.checkTravelStatus();
  