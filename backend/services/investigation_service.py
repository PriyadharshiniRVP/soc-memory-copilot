from database import investigations_collection


def save_investigation(result: dict):
    investigations_collection.insert_one(result)