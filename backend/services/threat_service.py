import os
import requests
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OTX_API_KEY")

HEADERS = {
    "X-OTX-API-KEY": API_KEY
}


def investigate_ip(ip: str):
    url = f"https://otx.alienvault.com/api/v1/indicators/IPv4/{ip}/general"

    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        raise Exception("Failed to fetch data from AlienVault")

    data = response.json()

    return {
        "target": ip,
        "country": data.get("country_name"),
        "pulse_count": data.get("pulse_info", {}).get("count", 0),
        "reputation": data.get("reputation"),
        "asn": data.get("asn"),
        "whois": data.get("whois"),
    }