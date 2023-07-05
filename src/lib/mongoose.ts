import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string; // your mongodb connection string
const options = {
  serverSelectionTimeoutMS: 5000,
};

declare global {
  var _mongoClientPromise: Promise<typeof mongoose>;
}

class Singleton {
  private static _instance: Singleton;
  private clientPromise: Promise<typeof mongoose>;
  private constructor() {
    this.clientPromise = mongoose.connect(uri, options);
    if (process.env.NODE_ENV === "development") {
      // In development mode, use a global variable so that the value
      // is preserved across module reloads caused by HMR (Hot Module Replacement).
      global._mongoClientPromise = this.clientPromise;
    }
  }

  public static get instance() {
    if (!this._instance) {
      this._instance = new Singleton();
    }
    return this._instance.clientPromise;
  }
}

const clientPromise = Singleton.instance;

// Export a module-scoped MongoClient promise. By doing this in a
// separate module, the client can be shared across functions.
export default clientPromise;
