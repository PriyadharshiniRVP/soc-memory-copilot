from database import threat_feed_collection


def save_feed(feed):

    threat_feed_collection.delete_many({})

    if len(feed) > 0:
        documents = [item.copy() for item in feed]

        threat_feed_collection.insert_many(documents)