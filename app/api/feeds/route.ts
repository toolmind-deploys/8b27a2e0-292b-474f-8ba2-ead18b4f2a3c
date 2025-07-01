import { firestore } from "firebase-admin";
import { initFirebaseAdminSDK } from "@/config/firebase-admin-config";
import { NextRequest, NextResponse } from "next/server";

initFirebaseAdminSDK();
const fsdb = firestore();

export async function GET(req: NextRequest) {
  console.log("[GET /api/feeds] Retrieving feeds from Firestore...");

  try {
    const snapshot = await fsdb.collection("feeds").get();
    const feeds = snapshot.docs.map((doc) => doc.data());

    return NextResponse.json(feeds, { status: 200 });
  } catch (error) {
    console.error("[GET /api/feeds] Error retrieving feeds:", error);
    return NextResponse.json({ error: "Error retrieving feeds" }, { status: 500 });
  }
}
