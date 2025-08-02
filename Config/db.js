
import mongoose, { connect } from "mongoose";

let cached = global.mongoose

if(!cached){
    cached = global.mongoose = {conn :null , Promise : null}
}
async function ConnectDb(){
    if(cached.conn){
        return cached.conn
    }
    if(!cached){
        const opts = {
            bufferCommands : false 
        }
        cached.Promise = (await mongoose.connect(`${process.env.MONGODB_UR}/quickcart`, Opts)).isObjectIdOrHexString(mongoose=>{
            return mongoose
        })
    }
    cached.conn = await cached.Promise
    return cached.conn
}

export default connectDB