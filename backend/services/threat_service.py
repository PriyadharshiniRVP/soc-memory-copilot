import os
import requests
import ipaddress
from dotenv import load_dotenv

load_dotenv()

API_KEY = os.getenv("OTX_API_KEY")

HEADERS = {
    "X-OTX-API-KEY": API_KEY
}


def investigate_indicator(target: str, indicator_type: str = None):
    """
    Investigate an IOC using AlienVault OTX.
    Supports IPv4 and Domain indicators.
    """

    # Detect type automatically if frontend doesn't send it
    if indicator_type is None:
        try:
            ipaddress.ip_address(target)
            indicator_type = "IPv4"
        except ValueError:
            indicator_type = "domain"

    url = (
        f"https://otx.alienvault.com/api/v1/"
        f"indicators/{indicator_type}/{target}/general"
    )

    response = requests.get(url, headers=HEADERS)

    response.raise_for_status()

    data = response.json()

    return {
        "target": target,
        "type": indicator_type,
        "country": data.get("country_name"),
        "pulse_count": data.get("pulse_info", {}).get("count", 0),
        "reputation": data.get("reputation"),
        "asn": data.get("asn"),
        "whois": data.get("whois"),
    }