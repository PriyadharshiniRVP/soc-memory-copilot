import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OTX_API_KEY")

HEADERS = {
    "X-OTX-API-KEY": API_KEY
}


def fetch_latest_pulses():

    url = "https://otx.alienvault.com/api/v1/pulses/subscribed"

    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        raise Exception("Unable to fetch OTX pulses")

    data = response.json()

    return data.get("results", [])