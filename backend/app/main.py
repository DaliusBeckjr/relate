from fastapi import FastAPI
import certifi
from backend.app.database.database import get_database

app = FastAPI()

dbname = get_database()


from pymongo.mongo_client import MongoClient

uri = "mongodb+srv://big_ups:143OddEven@cluster0.i9hpcce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

# Create a new client and connect to the server
client = MongoClient(uri, tlsCAFile=certifi.where())

# Send a ping to confirm a successful connection
try:
    client.admin.command("ping")
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)


@app.get("/")
async def root():
    return {"message": "whats good"}
