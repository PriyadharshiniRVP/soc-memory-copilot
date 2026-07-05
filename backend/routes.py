from fastapi import APIRouter
import asyncio

from models import InvestigationRequest

from services.threat_service import investigate_ip
from services.investigation_service import save_investigation
from services.feed_service import fetch_latest_pulses
from services.feed_database_service import save_feed

from memory.cognee_service import (
    remember_text,
    recall_text,
    build_memory_summary
)

router = APIRouter()


@router.post("/investigate")
def investigate(request: InvestigationRequest):

    # Step 1: Check previous memory
    previous_memory = asyncio.run(
        recall_text(request.target)
    )

    # Step 2: Get latest threat intelligence
    result = investigate_ip(request.target)

    # Step 3: Save investigation in MongoDB
    save_investigation(result)

    # Step 4: Store summary in Cognee
    summary = build_memory_summary(result)

    asyncio.run(
        remember_text(summary)
    )

    # Step 5: Attach previous memory for frontend
    result["memory"] = previous_memory

    return result
@router.get("/feed")
def get_feed():

    feed = fetch_latest_pulses()

    save_feed(feed)

    return feed