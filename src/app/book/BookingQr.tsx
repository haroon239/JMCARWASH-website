import QRCode from "qrcode";

export async function BookingQr() {
  const bookingUrl = "https://www.jmcarwash.ae/book";
  const qrDataUrl = await QRCode.toDataURL(bookingUrl, {
    width: 720,
    margin: 2,
    color: { dark: "#202226", light: "#ffffff" },
    errorCorrectionLevel: "H",
  });

  return (
    <div className="rounded-[22px] border border-[#e1e3e5] bg-white p-6 text-center shadow-[0_16px_45px_rgb(26_28_31_/.07)]">
      <p className="text-[11px] font-extrabold tracking-[.14em] text-[#74787d] uppercase">For reception &amp; customers</p>
      <h2 className="mt-2 text-2xl font-black tracking-[-.6px]">Scan to book</h2>
      {/* A generated data URL avoids relying on an external QR service. */}
      <img className="mx-auto mt-5 aspect-square w-full max-w-[230px]" src={qrDataUrl} alt="QR code linking to the JM Car Wash booking form" width="230" height="230" />
      <p className="mx-auto mt-3 max-w-[270px] text-xs leading-6 text-[#73777c]">Scan with any phone camera to open the secure booking form.</p>
      <a className="mt-5 inline-flex h-11 items-center justify-center rounded-lg border border-[#dfe1e3] bg-[#f7f8f8] px-5 text-xs font-extrabold text-[#292b2e] transition hover:bg-[#eceeef]" href={qrDataUrl} download="jm-car-wash-booking-qr.png">Download QR code</a>
    </div>
  );
}
