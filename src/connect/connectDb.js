import mongoose from 'mongoose';

const connectMongo = async()=> {
    try{
        await mongoose.connect('mongodb+srv://faisal18:grXtNwFGwLyLaYH6@cluster0.clytiau.mongodb.net/NextCrud');
        console.log('DB connected')
    }catch(err){
        console.log('err', err)
    }
}

export default connectMongo;