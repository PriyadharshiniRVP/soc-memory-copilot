import os
import httpx
from dotenv import load_dotenv

load_dotenv()

BASE_URL = os.getenv("COGNEE_BASE_URL")
API_KEY = os.getenv("COGNEE_API_KEY")
TENANT_ID = os.getenv("COGNEE_TENANT_ID")

HEADERS = {
    "X-Api-Key": API_KEY,
    "X-Tenant-Id": TENANT_ID
}


async def remember_text(text: str):

    url = f"{BASE_URL}/api/v1/remember"

    files = {
        "data": ("investigation.txt", text)
    }

    data = {
        "datasetName": "soc_memory"
    }

    try:

        async with httpx.AsyncClient(timeout=120) as client:

            response = await client.post(
                url,
                headers=HEADERS,
                files=files,
                data=data
            )

        print("========== REMEMBER ==========")
        print(response.status_code)
        print(response.text)

        if response.status_code != 200:
            return None

        return response.json()

    except Exception as e:

        print("Remember Error:", e)
        return None


async def recall_text(query: str):

    url = f"{BASE_URL}/api/v1/recall"

    payload = {
        "query": query,
        "datasets": ["soc_memory"],
        "topK": 5
    }

    try:

        async with httpx.AsyncClient(timeout=120) as client:

            response = await client.post(
                url,
                headers={
                    **HEADERS,
                    "Content-Type": "application/json"
                },
                json=payload
            )

        print("========== RECALL ==========")
        print(response.status_code)
        print(response.text)

        if response.status_code != 200:
            return None

        return response.json()

    except Exception as e:

        print("Recall Error:", e)
        return None


def build_memory_summary(result: dict):

    return f"""
SOC Investigation Report

Target IP: {result['target']}

Country: {result['country']}

ASN: {result['asn']}

Reputation: {result['reputation']}

Pulse Count: {result['pulse_count']}

Analyst Decision:
Investigation completed using AlienVault OTX.

Recommendation:
Store this investigation for future reference.
"""