import moment from 'moment';
import uuid from 'uuid';

class Bookings {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
      this.bookings = [
          {
            
            ​id:​ 1,​
            trip_id:​1,
            user_id:1,​
            created_on:Date​,
             
            }
      ];
    }
    /**
     * 
     * @returns {object} bookings object
     */
    create(data) {
      const newBooking = {
        id: this.bookings.length +1,
        seating_capacity:data.seating_capacity,
        bus_license_number:data.bus_license_number,
        origin: data.origin,
        destination:data.destination,
        trip_date: ​data.date,
        fare:​ ​data.fare,
      };
      this.bookings.push(newTrip);
      return newTrip
    }
    /**
   * 
   * @param {uuid} id
   * @returns {object} bookings object
   */
  findOne(id) {
    return this.bookings.find(trip => trip.id === id);
  }
  /**
   * @returns {object} returns all bookings
   */
  findAll() {
    return this.bookings;
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  update(id, data) {
    const bookings = this.findOne(id);
    const index = this.bookings.indexOf(bookings);
    this.bookings[index].seating_capacity = data['seating_capacity'] || bookings.seating_capacity;
    this.bookings[index].bus_license_number = data['bus_license_number'] || bookings.bus_license_number;
    this.bookings[index].origin = data['origin'] || bookings.origin;
    this.bookings[index].destination = data['origin'] || bookings.destination;
    this.bookings[index].trip_date = moment.now()
    this.bookings[index].fare = data['origin'] || bookings.fare;
    return this.bookings[index];
  }
  /**
   * 
   * @param {uuid} id 
   */
  delete(id) {
    const trip = this.findOne(id);
    const index = this.bookings.indexOf(trip);
    this.bookings.splice(index, 1);
    return {};
  }

  }
export default new Bookings();