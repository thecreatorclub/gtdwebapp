import { randomUUID } from "crypto";
import { NextResponse, type NextRequest } from "next/server";
import { authOptions } from "~/server/auth";

import { cookies } from "next/headers";

const handler = async (req: NextRequest, res: NextResponse) => {
  if (process.env.E2E !== "true") {
    throw new Error("This endpoint is only available in E2E mode");
  }
  const sessionToken = randomUUID();
  const sessionExpiry = new Date(Date.now() + 1024 * 1000);

  if (authOptions.adapter?.createSession) {
    // you can modify this to accept the user id that you want to log in
    await authOptions.adapter.createSession({
      sessionToken: sessionToken,
      userId: "1",
      expires: sessionExpiry,
    });

    cookies().set("next-auth.session-token", sessionToken, {
      // expires: sessionExpiry,
    });
  }

  return NextResponse.json({ loggedIn: true });
};

export { handler as GET, handler as POST };
