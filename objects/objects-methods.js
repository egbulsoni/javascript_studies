let restaurant = {
    name: 'Burger Billy',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (guests) {
        if (this.checkAvailability(guests)){
            this.guestCount += guests
        }
        return this.guestCount
    },
    removeParty: function (guests) {
        if (this.guestCount > 0){
            this.guestCount -= guests
        }
        return this.guestCount
    }
}

console.log(restaurant.seatParty(72))
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))
// let status = restaurant.checkAvailability(4)
// console.log(status)