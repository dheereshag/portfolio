import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    // Extract the request body
    const body = await req.json();
    // Send a POST request to the /contact endpoint
    const response = await fetch("http://18.222.249.158:8080/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    // Extract JSON data from the response
    const data = await response.json();
    // Return the response data
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
