import { revalidateTag } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export function GET(request: NextRequest) {
  const tag = request.nextUrl.searchParams.get("tag");

  if (!tag) {
    return;
  }

  revalidateTag(tag);

  return NextResponse.json({
    status: "success",
    tag,
  });
}
