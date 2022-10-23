const mongoose = require ('mongoose');

const conndb = async()=>{
    try {
        await mongoose.connect('mongodb+srv://ala:ala@cluster0.qctv87r.mongodb.net/?retryWrites=true&w=majority');
        console.log('we are connected to the world');
    } catch (error) {
       console.log(error); 
    }
}

module.exports = conndb