
const mongoose = require('mongoose');

const DBconnect = async () => {
    try {
        const con = await mongoose.connect(process.env.DBURL);
        
    } catch (error) {
        process.exit(1);
    }
}
module.exports = DBconnect;