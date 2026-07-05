import requests

API_KEY = "355fad778008f89d58fc722ca26352de3cc7396e0e8d4c4ddeaf2918a741cbd5"

headers = {
    "X-OTX-API-KEY": API_KEY
}

url = "https://otx.alienvault.com/api/v1/indicators/IPv4/8.8.8.8/general"

response = requests.get(url, headers=headers)

print(response.status_code)
print(response.json())