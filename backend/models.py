from pydantic import BaseModel
from typing import Optional


class InvestigationRequest(BaseModel):
    target: str
    type: str | None = None


class InvestigationResponse(BaseModel):
    target: str
    country: Optional[str] = None
    pulse_count: int
    reputation: int
    asn: Optional[str] = None
    whois: Optional[str] = None

    # Placeholder for Cognee
    memory: Optional[str] = None