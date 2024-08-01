const { Catering, Music, Decoration, Photography } = require('../models/models100');

exports.submitForm = async (req, res) => {
    const { name, email, phone, date, numberOfPeople, numberOfHours, services } = req.body;

    const selectedServices = Array.isArray(services) ? services : [services];

    const baseBooking = {
        name,
        email,
        phone,
        date,
        numberOfPeople,
        numberOfHours
    };

    const results = [];

    try {
        for (const service of selectedServices) {
            let Model, budget;

            switch(service) {
                case 'catering':
                    Model = Catering;
                    budget = 200 * numberOfPeople;
                    break;
                case 'music':
                    Model = Music;
                    budget = 100 * numberOfHours;
                    break;
                case 'decoration':
                    Model = Decoration;
                    budget = 150 * numberOfHours;
                    break;
                case 'photography':
                    Model = Photography;
                    budget = 120 * numberOfHours;
                    break;
                default:
                    continue;
            }

            const newBooking = new Model(baseBooking);
            await newBooking.save();

            results.push({
                service,
                budget
            });
        }

        res.render('result100', { 
            ...baseBooking,
            results
        });
    } catch (error) {
        console.error('Error saving booking:', error);
        res.status(500).send('Error saving booking');
    }
};