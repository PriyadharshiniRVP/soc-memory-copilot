from pymongo import MongoClient
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

client = MongoClient(MONGO_URI)

db = client["threatvault"]

investigations_collection = db["investigations"]

threat_feed_collection = db["threat_feed"]