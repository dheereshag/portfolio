import { NextRequest, NextResponse } from "next/server";

export async function GET(req,res) {
    const response = await fetch("http://18.222.249.158:8080/skills");

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
   
    // Extract JSON data from the response
    const data = await response.json();
  
  const test = NextResponse.json(data);
   console.log(test);
  return NextResponse.json(data);
  
 

}
