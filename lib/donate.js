exports.donate = (id, BotName, corohelp, tampilTanggal, tampilWaktu, instagramlu, whatsapplu, kapanbotaktif, grupch1, grupch2) => {
	return `🔰 -----[ *MENU DONASI ${BotName}* ]----- 🔰
  
Hi, *${id.split("@s.whatsapp.net")[0]}* 👋️
Mau donasi? ✨

⚠️ *${tampilTanggal}*
⚠️ *${tampilWaktu}*
☸════════════════════💠
║💠═♻Silahkan donasi di bawah ini: ═💠
🔘════════════════════💠
║╭──────────────────✒  
║│➸ *#PULSA : 082328023356*
║│➸ *#GOPAY : 082328023356*
║│➸ *#SAWERIA : saweria.co/Djarot*
║╰──────────✒
🔘════════════════════💠
║💠═════💠📺 *Iklan* :💠═════💠
☸════════════════════💠
✔ Follow akun instagram admin ${instagramlu}

⚠️ INFORMASI COVID-19 TERBARU!

⚠️ POSITIF: *${corohelp.confirmed.value}*
⚠️ SEMBUH: *${corohelp.recovered.value}*
⚠️ MENINGGAL: *${corohelp.deaths.value}*
⚠️ UPDATE: *${corohelp.lastUpdate}*

❄ _TETAP JAGA KESEHATAN DAN SELALU PAKAI MASKER!_

❄️ Mau pasang iklan di *${BotName} ?*
☎️ WA : *${whatsapplu}*
  
⚠️ Gunakan dengan bijak ‼️
⚠️ Bot ini berjalan ${kapanbotaktif} ‼️

👑️ Official Grub [1] : ${grupch1}

👑️ Official Grub [2] : ${grupch2}

☸═══════════════════💠
║ _*POWERED BY FIKRI LANGKAP*_
🔘════════════════════💠
║  $ignature.....!     
║    (_̅_̅_̅(̅_̅_̅_̅_̅_̅_̅_̅_̅̅_̅()ڪے
☸═══════▶🔰◀═══════💠`
}
