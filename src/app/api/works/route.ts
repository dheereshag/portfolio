import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, res: NextResponse) {
  try {
    const response = await fetch("http://18.222.249.158:8080/works");
    // Extract JSON data from the response
    const data = await response.json();

    const test = NextResponse.json(data);
    console.log(test);
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
  }
}
