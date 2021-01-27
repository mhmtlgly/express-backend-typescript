import { connect } from 'mongoose';

export const connectToDatabase = async () => {
  try {
    await connect(
      process.env.MONGODB_URI!,
      {
        // dbName: "mahos_db",
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        // useFindAndModify: false
      },
      () => console.log('Database is connected.'),
    );
  } catch (error) {
    console.log('could not connect to Database!');
    console.log(error);
  }
};

connectToDatabase();

export default connectToDatabase;
