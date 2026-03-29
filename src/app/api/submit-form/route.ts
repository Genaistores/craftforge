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
    I've got your info. Our team is already analyzing everything. You'll receive your personalized CraftForge Blueprint very soon.&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;&nbsp;&zwnj;
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
            <td style="background-color:#111C32;border-radius:20px;border:1px solid rgba(255,255,255,0.06);">

              <!-- ── HEADER ────────────────────────────────────────────── -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:48px 48px 0 48px;">

                    <!-- Headline -->
                    <h1 style="margin:0 0 24px;color:#F8FAFC;font-family:${FONT};font-size:26px;font-weight:700;line-height:1.3;letter-spacing:-0.02em;">
                      Hey — Max here.
                    </h1>

                    <!-- Body -->
                    <p style="margin:0;color:#94A3B8;font-family:${FONT};font-size:15px;line-height:1.8;">
                      I've got your info. Our team is already analyzing
                      everything. You'll receive your personalized
                      <strong style="color:#F97316;">CraftForge Blueprint</strong>
                      very soon. You're in good hands with the whole crew.
                    </p>

                  </td>
                </tr>
              </table>

              <!-- Spacer -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr><td style="height:40px;font-size:0;line-height:0;">&nbsp;</td></tr>
              </table>

              <!-- ── WHAT YOU TOLD ME ───────────────────────────────────── -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:0 48px 48px 48px;">

                    <p style="${sectionHeading}">What you told me</p>

                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                           style="border:1px solid rgba(255,255,255,0.04);border-radius:14px;">

                      <!-- Trade -->
                      <tr>
                        <td style="padding:24px 28px 22px 28px;">
                          <span style="${label}">Trade</span>
                          <span style="${value}">${tradeName}</span>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:0 28px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr><td style="height:1px;background-color:rgba(255,255,255,0.035);font-size:0;line-height:0;">&nbsp;</td></tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Service Area -->
                      <tr>
                        <td style="padding:22px 28px;">
                          <span style="${label}">City / Service Area</span>
                          <span style="${value}">${data.serviceArea}</span>
                        </td>
                      </tr>

                      <tr>
                        <td style="padding:0 28px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                            <tr><td style="height:1px;background-color:rgba(255,255,255,0.035);font-size:0;line-height:0;">&nbsp;</td></tr>
                          </table>
                        </td>
                      </tr>

                      <!-- Monthly Revenue -->
                      <tr>
                        <td style="padding:22px 28px 24px 28px;">
                          <span style="${label}">Rough Monthly Revenue</span>
                          <span style="${value}">${data.monthlyRevenue}</span>
                        </td>
                      </tr>

                    </table>
                  </td>
                </tr>
              </table>

              <!-- ── SIGNATURE ─────────────────────────────────────────── -->
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                <tr>
                  <td style="padding:0 48px 48px 48px;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="height:1px;background-color:rgba(255,255,255,0.05);font-size:0;line-height:0;">&nbsp;</td>
                      </tr>
                    </table>
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="padding-top:32px;">
                          <p style="margin:0 0 4px;color:#64748B;font-family:${FONT};font-size:14px;line-height:1.6;">Talk soon,</p>
                          <p style="margin:0 0 4px;color:#F1F5F9;font-family:${FONT};font-size:20px;font-weight:700;letter-spacing:-0.01em;">Max</p>
                          <p style="margin:0;color:#475569;font-family:${FONT};font-size:13px;">
                            Discovery Expert &nbsp;&middot;&nbsp; CraftForge
                          </p>
                        </td>
                      </tr>
                    </table>
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
      subject: "Max here — I've got your info.",
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
