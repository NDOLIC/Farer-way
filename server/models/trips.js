// import moment from 'moment';
// import uuid from 'uuid';

// class Trips {
//     /**
//      * class constructor
//      * @param {object} data
//      */
//     constructor() {
//       this.trips = [
//       ];
//     }
//     /**
//      * 
//      * @returns {object} reflection object
//      */
//     create(data) {
//       const newTrip = {
//           id: this.trips.length +1,
//           seating_capacity:data.seating_capacity,
//           bus_license_numbe: data.bus_license_number,
//           origin: data.origin,
//           destination:data.destination,
//           trip_date: data.date,
//           fare: data.fare,
//       };
//       this.trips.push(newTrip);
//       return newTrip
//     }
//     /**
//    * 
//    * @param {uuid} id
//    * @returns {object} trips object
//    */
//   findOne(id) {
//       return this.trips.find(trip => trip.id == id);
//   }
//   /**
//    * @returns {object} returns all trips
//    */
//   findAll() {
//     return this.trips;
//   }
//   /**
//    * 
//    * @param {uuid} id
//    * @param {object} data 
//    */
//   update(id, data) {
//     const trips = this.findOne(id);
//     const index = this.trips.indexOf(trips);
//     this.trips[index].seating_capacity = data['seating_capacity'] || trips.seating_capacity;
//     this.trips[index].bus_license_number = data['bus_license_number'] || trips.bus_license_number;
//     this.trips[index].origin = data['origin'] || trips.origin;
//     this.trips[index].destination = data['origin'] || trips.destination;
//     this.trips[index].trip_date = moment.now()
//     this.trips[index].fare = data['origin'] || trips.fare;
//     return this.trips[index];
//   }
//   /**
//    * 
//    * @param {uuid} id 
//    */
//   delete(id) {
//     const trip = this.findOne(id);
//     const index = this.trips.indexOf(trip);
//     this.trips.splice(index, 1);
//     return {};
//   }

//   }
// export default new Trips();