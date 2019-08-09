// import TripModel from '../models/trips';
// import joi from 'joi';

// const Trip = {
   
 

//     create(req, res) {

//       const schema = {
//         seating_capacity : joi.number().required(),
//         bus_license_number : joi.string().required(),
//         origin : joi.string().required(),
//         destination : joi.string().required(),
//         trip_date : joi.date().required(),
//         fare: joi.number().required()
      
//       }

//         const result = joi.validate(req.body, schema);
//         const { body } = req;
//       if (result.error !== null) {
//         return res.status(400).send(result.error.details[0].message);
//       }
      
//       if(body.fare <0)
//       return res.status(400).send({status: 'error', error: `Fare can not be negative`})
//       if(body.seating_capacity <0)
//       return res.status(400).send({status: 'error', error: `seating capacity can not be negative`})
        
//       const token = req.header('token');
//       const trip = TripModel.create(body);
//       trip.token =token;
//       return res.status(201).send(trip);
//     },
//     /**
//      * 
//      * @param {object} req 
//      * @param {object} res 
//      * @returns {object} trips array
//      */
//     getAll(req, res) {
//       const trips = TripModel.findAll();
//       return res.status(200).send(trips);
//     },
//   /**
//    * 
//    * @param {object} req 
//    * @param {object} res
//    * @returns {object} trip object
//    */
//   getOne(req, res) {
//     const trip = TripModel.findOne(req.params.id);
//     if (!trip) {
//       return res.status(404).send({'message': 'trip not found'});
//     }
//     return res.status(200).send(trip);
//   },
//   /**
//    * 
//    * @param {object} req 
//    * @param {object} res 
//    * @returns {object} updated trip
//    */
//   update(req, res) {
//     const trip = TripModel.findOne(req.params.id);
//     if (!trip) {
//       return res.status(404).send({'message': 'trip not found'});
//     }
//     const updatedTrip = TripModel.update(req.params.id, req.body)
//     return res.status(200).send(updatedTrip);
//   },
//   /**
//    * 
//    * @param {object} req 
//    * @param {object} res 
//     * @returns {void} return statuc code 204 
//    */
//   delete(req, res) {
//     const trip = TripsModel.findOne(req.params.id);
//     if (!trip) {
//       return res.status(404).send({'message': 'trip not found'});
//     }
//     const ref = TripsModel.delete(req.params.id);
//     return res.status(204).send(ref);
//   }
// }
  
// export default Trip;