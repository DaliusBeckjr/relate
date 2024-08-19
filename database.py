from pymongo.mongo_client import MongoClient
import certifi



def get_database():

    CONNECTION_STRING = "mongodb+srv://big_ups:143OddEven@cluster0.i9hpcce.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
        
    client = MongoClient(CONNECTION_STRING, tlsCAFile=certifi.where())

    db = client.relate_db
    
    try:
        client.admin.command("ping")
        print("Pinged your deployment. You successfully connected to MongoDB!")
    except Exception as e:
        print(e)
    
    return db

    collection_name = db['posts_collection']


