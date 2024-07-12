//Import module
import mongoose from "mongoose";

// Function to connect with mongodb
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://user1:Pass@cluster0.fios3wg.mongodb.net/hospital?retryWrites=true&w=majority&appName=Cluster0"
    );

    console.log(`==> Database is connected <==`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1); // Exit process with failure
  }
};
// Export function
export default connectDB;
