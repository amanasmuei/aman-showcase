# Aman Muslim — Reminder & Content Templates

These templates define the standard output formats for all Aman Muslim content. Use these consistently for a clean, readable experience across Telegram, WhatsApp, or any interface.

---

## Template 1: Prayer Time Reminder

### Daily Prayer Times (full)
```
🕌 Waktu Solat — [City], [Date]

Subuh:    [TIME]  [STATUS]
Syuruk:   [TIME]
Zohor:    [TIME]  [← next prayer marker if applicable]
Asar:     [TIME]
Maghrib:  [TIME]
Isyak:    [TIME]

[🔥 Prayer streak: X days] | [or encouraging note if streak broken]
```

**STATUS options:**
- ✅ (confirmed prayed)
- ⏰ (upcoming — next prayer)
- (blank — future)

**Example:**
```
🕌 Waktu Solat — Kuala Lumpur, 29 Mac 2026

Subuh:    5:47 AM ✅
Syuruk:   7:01 AM
Zohor:    1:15 PM ⏰ (dalam 2 jam)
Asar:     4:35 PM
Maghrib:  7:22 PM
Isyak:    8:34 PM

🔥 Streak solat: 5 hari penuh!
```

### Single Prayer Reminder (upcoming)
```
⏰ [Prayer name] dalam [X] minit.

[Time] — Masa untuk bersiap?
```

**Example:**
```
⏰ Zohor dalam 30 minit.

1:15 PM — Masa untuk cari tempat solat?
```

### Prayer Confirmation Response
```
Alhamdulillah, [Prayer] disahkan ✅

Streak anda: [X] hari berturut-turut.
[Encouraging note]
```

---

## Template 2: Daily Hadith Format

```
📖 Hadith Hari Ini — #[N] dari 40 Hadith Imam Nawawi

[HADITH TITLE]

[Arabic text]

[Transliteration in italics]

[Translation — English and/or Malay]

[2-3 sentence lesson/reflection]

— Riwayat [Collection] (dari [Narrator] RA)

Progress: [N]/40 hadith 📚
```

**Example:**
```
📖 Hadith Hari Ini — #1 dari 40 Hadith Imam Nawawi

NIAT MENENTUKAN AMALAN

إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ

Innamal a'malu bin niyyat...

"Sesungguhnya setiap amalan itu bergantung kepada niatnya, dan sesungguhnya bagi setiap orang apa yang diniatkan..."

Setiap perkara yang kita buat boleh menjadi ibadah bila niatnya betul. Makan untuk kuat beribadah — itu pun dapat pahala. Apa niat anda hari ini?

— Riwayat Bukhari & Muslim (dari Umar ibn al-Khattab RA)

Progress: 1/40 hadith 📚
```

### Hadith Reflection Prompt (follows the hadith)
```
💭 Soalan untuk hari ini:
[1 reflection question related to the hadith]
```

---

## Template 3: Morning Adhkar Format

```
🌅 Adhkar Pagi — [Date]

Bismillahirrahmanirrahim.

[DHIKR 1]
[Arabic]
[Transliteration]
[Translation]
[Repetitions: Nx]

[DHIKR 2]
...

✅ Tandai siap bila selesai, atau taip "siap" untuk simpan rekod.
```

**Example (abbreviated):**
```
🌅 Adhkar Pagi — 29 Mac 2026

Bismillahirrahmanirrahim.

---
1. AYATUL KURSI (1x)
اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ...
Allahu la ilaha illa huwal hayyul qayyum...
"Allah — tiada tuhan melainkan Dia, Yang Maha Hidup, Yang terus-menerus mengurus makhluk-Nya..."
[Baca 1x]

---
2. SURAH AL-IKHLAS (3x)
قُلْ هُوَ اللَّهُ أَحَدٌ
Qul huwallahu ahad...
"Katakanlah: Dia-lah Allah, Yang Maha Esa..."
[Baca 3x]

---
3. TASBIH PAGI (100x)
سُبْحَانَ اللهِ وَبِحَمْدِهِ
SubhanAllahi wa bihamdihi
"Maha Suci Allah dan segala puji bagi-Nya"
[Baca 100x]

---
✅ Taip "siap adhkar pagi" bila selesai untuk rekod streak anda.
```

### Evening Adhkar Format
Same structure as morning, with header changed to:
```
🌆 Adhkar Petang — [Date]
```

### After-Solat Dhikr Format
```
🤲 Zikir Selepas Solat

1. Astaghfirullah (3x)
   أَسْتَغْفِرُ اللهَ
   "Aku memohon keampunan Allah"

2. Allahumma antas salam... (1x)
   اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ
   "Ya Allah, Engkaulah As-Salam dan dari-Mu datangnya keselamatan..."

3. SubhanAllah (33x) | Alhamdulillah (33x) | Allahu Akbar (33x)

4. La ilaha illallah wahdahu la sharika lah... (1x)
   لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ
   "Tiada tuhan selain Allah, Esa, tiada sekutu bagi-Nya..."

5. Ayatul Kursi (1x)
```

---

## Template 4: Weekly Ibadah Report

```
📊 Laporan Ibadah Mingguan — [Date Range]

SOLAT MINGGU INI:
        Subuh  Zohor  Asar  Maghrib  Isyak
Isnin:    ✅     ✅    ✅      ✅       ✅
Selasa:   ✅     ✅    ✅      ✅       ✅
Rabu:     ⬜     ✅    ✅      ✅       ✅
Khamis:   ✅     ✅    ✅      ✅       ✅
Jumaat:   ✅     ✅    ✅      ✅       ✅
Sabtu:    ✅     ✅    ⬜      ✅       ✅
Ahad:     ✅     ✅    ✅      ✅       ✅

Disahkan: 33/35 solat

HADITH 40 PROGRESS:
[====>         ] 12/40 (30%)
MasyaAllah! 12 hadith dipelajari.

STREAK:
🔥 Adhkar pagi: 5 hari berturut-turut
✨ Hadith harian: 7 hari berturut-turut

PENCAPAIAN MINGGU INI:
- Selesai Hadith #10 (Makanan halal & du'a diterima)
- 5 hari adhkar pagi tanpa putus

[Encouraging closing note]
```

---

## Template 5: Ramadan Schedule Format

```
🌙 Jadual Ramadan — [Date], [Hijri Date]
Hari ke-[N] Ramadan

JADUAL HARI INI:
Sahur berakhir (Imsak): [TIME]  ⏰
Subuh:                  [TIME]
Syuruk:                 [TIME]
Zohor:                  [TIME]
Asar:                   [TIME]
Berbuka puasa:          [TIME]  🍽️
Maghrib:                [TIME]
Isyak:                  [TIME]
Tarawih:                [TIME]  🌙

SUNNAH RAMADAN HARI INI:
- Sahur: jangan tinggal, walaupun sedikit
- Berbuka dengan tamar dan air
- Tarawih: [X] rakaat
- Tilawah: [target pages]

DU'A BERBUKA PUASA:
اللَّهُمَّ لَكَ صُمْتُ وَبِكَ آمَنْتُ وَعَلَى رِزْقِكَ أَفْطَرْتُ
"Allahumma laka sumtu wa bika amantu wa 'ala rizqika aftartu"
"Ya Allah, kerana-Mu aku berpuasa, kepada-Mu aku beriman, dan dengan rezeki-Mu aku berbuka"

[Note for last 10 nights if applicable]
```

**Last 10 Nights Alert:**
```
✨ MALAM LAYLATUL QADR

Malam ini adalah malam ganjil ke-[N] — antara malam yang paling dicari.

Du'a khusus Laylatul Qadr:
اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي
"Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'anni"
"Ya Allah, sesungguhnya Engkau Maha Pemaaf, Engkau suka memaafkan, maka maafkanlah aku"
(Riwayat Tirmidhi — dari Aisha RA, disahihkan)

Perbanyakkan ibadah malam ini. InsyaAllah.
```

---

*All templates use clear, consistent formatting. Arabic text is always followed by transliteration and translation — never shown alone. Sources are always cited. Encouragement is always genuine, never performative.*
