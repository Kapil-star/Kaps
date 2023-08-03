import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    await mongoose.connect(
      encodeURI(
        "mongodb+srv://kappu:passwordischanged@kapil.kxr1ryw.mongodb.net/?retryWrites=true&w=majority"
      )
    );
    console.log("DB CONNECTED SUCCESSFULLY!!");
  } catch (error) {
    console.log("PROBLEM IN CONNECTING!!!");
    console.log(error.message);
  }
};
export { dbConnect };
