import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/* ─── Types ──────────────────────────────────────────────────────────────── */

interface SubmitFormBody {
  trade: string;
  tradeOther?: string;
  serviceArea: string;
  monthlyRevenue: string;
  email: string;
}

/* ─── Email template ─────────────────────────────────────────────────────── */

const FONT =
  "-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif";

function buildEmailHtml(data: SubmitFormBody): string {
  const tradeName =
    data.trade === "Other" && data.tradeOther ? data.tradeOther : data.trade;

  const year = new Date().getFullYear();

  /* Reusable inline-style helpers */
  const label = `display:block;color:#475569;font-family:${FONT};font-size:11px;font-weight:600;letter-spacing:0.1em;text-transform:uppercase;margin-bottom:5px;`;
  const value = `color:#F1F5F9;font-family:${FONT};font-size:15px;font-weight:500;line-height:1.4;`;
  const sectionHeading = `margin:0 0 16px;color:#475569;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;`;
  const bodyText = `margin:0;color:#94A3B8;font-family:${FONT};font-size:15px;line-height:1.75;`;

  return `<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Max here — Your CraftForge Blueprint is incoming</title>
</head>
<body style="margin:0;padding:0;background-color:#09111F;">

  <!--[if !mso]><!-->
  <!-- Preheader (hidden preview text) -->
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;font-size:1px;color:#09111F;">
    Gauge is already pulling real market data for ${data.serviceArea}. Your CraftForge Blueprint is incoming.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
  </div>
  <!--<![endif]-->

  <!-- Outer wrapper -->
  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
         style="background-color:#09111F;">
    <tr>
      <td align="center" style="padding:44px 16px 56px;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
               style="max-width:600px;">

          <!-- ══ WORDMARK ══════════════════════════════════════════════════ -->
          <tr>
            <td style="padding-bottom:28px;" align="left">
              <table cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <!-- Icon tile -->
                  <td style="vertical-align:middle;padding-right:12px;">
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td width="40" height="40"
                            style="width:40px;height:40px;background-color:#1A2744;border:1px solid rgba(255,255,255,0.1);border-radius:10px;text-align:center;vertical-align:middle;">
                          <span style="color:#F97316;font-family:${FONT};font-size:19px;font-weight:800;line-height:1;">⚙</span>
                        </td>
                      </tr>
                    </table>
                  </td>
                  <!-- Text -->
                  <td style="vertical-align:middle;">
                    <span style="display:block;color:#F1F5F9;font-family:${FONT};font-size:17px;font-weight:700;letter-spacing:-0.01em;line-height:1.2;">CraftForge</span>
                    <span style="display:block;color:#334155;font-family:${FONT};font-size:11px;font-weight:600;letter-spacing:0.12em;text-transform:uppercase;margin-top:2px;">by Genaistores</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- ══ MAIN CARD ═════════════════════════════════════════════════ -->
          <tr>
            <td style="background-color:#111C32;border-radius:20px;border:1px solid rgba(255,255,255,0.07);">

              <!-- Orange top stripe -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td height="5"
                      style="height:5px;background:linear-gradient(90deg,#F97316 0%,#FB923C 100%);border-radius:20px 20px 0 0;font-size:0;line-height:0;">&nbsp;</td>
                </tr>
              </table>

              <!-- ── HEADER BLOCK ────────────────────────────────────────── -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:44px 44px 0 44px;">

                    <!-- Pill badge -->
                    <table cellpadding="0" cellspacing="0" role="presentation"
                           style="margin-bottom:30px;">
                      <tr>
                        <td style="background-color:rgba(249,115,22,0.1);border:1px solid rgba(249,115,22,0.28);border-radius:100px;padding:5px 14px;white-space:nowrap;">
                          <span style="color:#FB923C;font-family:${FONT};font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">
                            Frontier Expert &nbsp;·&nbsp; Discovery
                          </span>
                        </td>
                      </tr>
                    </table>

                    <!-- Headline -->
                    <h1 style="margin:0 0 20px;color:#F8FAFC;font-family:${FONT};font-size:26px;font-weight:700;line-height:1.25;letter-spacing:-0.02em;">
                      Hey — Max here.
                    </h1>

                    <!-- Intro copy -->
                    <p style="margin:0 0 16px;color:#94A3B8;font-family:${FONT};font-size:15px;line-height:1.75;">
                      Thanks for sharing a bit about your operation.
                    </p>
                    <p style="margin:0 0 16px;color:#94A3B8;font-family:${FONT};font-size:15px;line-height:1.75;">
                      I'm personally handing your info off to Gauge — our
                      sharpest analyst. He's already pulling real local market
                      data for your area and building your report.
                    </p>
                    <p style="margin:0 0 40px;color:#94A3B8;font-family:${FONT};font-size:15px;line-height:1.75;">
                      Your personalized
                      <strong style="color:#F97316;">CraftForge Blueprint</strong>
                      will be in your inbox very soon. You're in good hands
                      with the whole crew.
                    </p>

                  </td>
                </tr>
              </table>

              <!-- ── WHAT YOU TOLD ME ────────────────────────────────────── -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:0 44px 40px 44px;">

                    <p style="${sectionHeading}">What you told me</p>

                    <!-- Details card -->
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                           style="border:1px solid rgba(255,255,255,0.08);border-radius:14px;overflow:hidden;">

                      <!-- Trade -->
                      <tr>
                        <td style="padding:18px 22px;border-bottom:1px solid rgba(255,255,255,0.06);background-color:rgba(249,115,22,0.05);">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr>
                              <td>
                                <span style="${label}">Trade</span>
                                <span style="${value}">${tradeName}</span>
                              </td>
                              <td align="right" valign="middle">
                                <table cellpadding="0" cellspacing="0" role="presentation">
                                  <tr>
                                    <td width="8" height="8"
                                        style="width:8px;height:8px;background-color:#F97316;border-radius:50%;"></td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Service Area -->
                      <tr>
                        <td style="padding:18px 22px;border-bottom:1px solid rgba(255,255,255,0.06);background-color:rgba(255,255,255,0.02);">
                          <span style="${label}">City / Service Area</span>
                          <span style="${value}">${data.serviceArea}</span>
                        </td>
                      </tr>

                      <!-- Monthly Revenue -->
                      <tr>
                        <td style="padding:18px 22px;background-color:rgba(255,255,255,0.02);">
                          <span style="${label}">Rough Monthly Revenue</span>
                          <span style="${value}">${data.monthlyRevenue}</span>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:0 44px;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td height="1" style="height:1px;background-color:rgba(255,255,255,0.07);font-size:0;line-height:0;">&nbsp;</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- ── WHAT HAPPENS NEXT ───────────────────────────────────── -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:40px 44px 0 44px;">

                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:0 44px;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td height="1" style="height:1px;background-color:rgba(255,255,255,0.07);font-size:0;line-height:0;">&nbsp;</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <!-- ── SIGNATURE ───────────────────────────────────────────── -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:32px 44px 48px 44px;">
                    <p style="margin:0 0 3px;color:#64748B;font-family:${FONT};font-size:14px;line-height:1.6;">Talk soon,</p>
                    <p style="margin:0 0 3px;color:#F1F5F9;font-family:${FONT};font-size:20px;font-weight:700;letter-spacing:-0.01em;">Max</p>
                    <p style="margin:0;color:#475569;font-family:${FONT};font-size:13px;">
                      Discovery Expert &nbsp;&middot;&nbsp; CraftForge
                    </p>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- ══ FOOTER ════════════════════════════════════════════════════ -->
          <tr>
            <td style="padding-top:36px;text-align:center;">
              <p style="margin:0 0 6px;color:#1E293B;font-family:${FONT};font-size:12px;line-height:1.7;">
                You're receiving this because you requested a free CraftForge
                Blueprint.
              </p>
              <p style="margin:0;color:#1E293B;font-family:${FONT};font-size:12px;">
                <a href="https://genaistores.com"
                   style="color:#334155;text-decoration:underline;">genaistores.com</a>
                &nbsp;&middot;&nbsp;
                &copy; ${year} CraftForge by Genaistores. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>`;
}

/* ─── Route handler ──────────────────────────────────────────────────────── */

export async function POST(req: NextRequest) {
  try {
    const body: SubmitFormBody = await req.json();
    const { trade, tradeOther, serviceArea, monthlyRevenue, email } = body;

    if (!trade || !serviceArea || !monthlyRevenue || !email) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    console.log("[CraftForge] Intake form submission received:", {
      trade,
      tradeOther,
      serviceArea,
      monthlyRevenue,
      email
    });

    const { data, error } = await resend.emails.send({
      from: "Max <max@craftforge.genaistores.com>",
      to: [email],
      subject: "Max here — I've got your info and Gauge is already on it",
      html: buildEmailHtml(body)
    });

    if (error) {
      console.error("[CraftForge] Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    console.log("[CraftForge] Email sent successfully. Resend ID:", data?.id);
    return NextResponse.json({ success: true, id: data?.id });
  } catch (err) {
    console.error("[CraftForge] Unexpected error in submit-form route:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
