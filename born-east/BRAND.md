# Born East Solutions — Brand Guidelines

Version 1.0 · October 2026

**Source of truth:** the live site code in this folder (`style.css`, the HTML pages, `i18n.js`, `chat.js`). Every value below comes from that code. Where something is a *suggestion* (for example colour ratios), it says so.

A designed PDF version is kept at `KSquad-shots/born-east-brand-guidelines.pdf`. It is not stored in this repo.

> **สรุปภาษาไทย:** คู่มือนี้รวบรวมหน้าตา น้ำเสียง และกฎการใช้แบรนด์ Born East Solutions ทุกค่าสี ฟอนต์ และขนาด ดึงมาจากโค้ดเว็บไซต์จริง ไม่มีการแต่งเพิ่ม ส่วนที่เป็น “คำแนะนำ” จะระบุไว้ชัดเจน

---

## 1. Brand overview & positioning

Born East Solutions is a small UK business-support consultancy for restaurants, cafés, pubs, takeaways and other independent businesses. The owner is Thai, and the website is fully bilingual (English / Thai).

- **Tagline:** “Your Business. Our Support.” / “ธุรกิจของคุณ เราพร้อมดูแล”
- **Descriptor:** “Business support for hospitality and independent businesses.”
- **Positioning (value line):** “Practical HR, food safety, business planning and customer experience solutions for restaurants, cafés, pubs and independent businesses in the UK.”
- **Why we exist (About):** “Born East Solutions was created to offer independent business owners a straightforward way to access support with the responsibilities that come with running a business.”
- **Approach:** “understanding first, then working together”, with a background in HR and business management.

**Services**

| English | Thai |
|---|---|
| People & Employment | งานบุคคลและการจ้างงาน |
| Food Safety Support | งานเอกสารความปลอดภัยด้านอาหาร |
| Business Planning | การวางแผนธุรกิจ |
| Customer Experience | ประสบการณ์ลูกค้า |

**Who we work with:** “Our main focus is independent restaurants, cafés, pubs, takeaways and other hospitality businesses. We also support independent shops and small businesses where our services are a good fit.”

**How we work:** 01 Advice & Consultation · 02 Project Support · 03 Ongoing Support. “We agree the scope and fee before work begins.”

**Brand phrases (stickers):** `people · process · progress` · `ideas · support · progress` · `practical support for real businesses` · `independent businesses, stronger together`

> **สรุปภาษาไทย:** Born East Solutions คือที่ปรึกษาธุรกิจขนาดเล็กในสหราชอาณาจักร ดูแลร้านอาหาร คาเฟ่ ผับ ร้านสั่งกลับบ้าน และธุรกิจอิสระ ใน 4 ด้าน: งานบุคคลและการจ้างงาน, เอกสารความปลอดภัยอาหาร, การวางแผนธุรกิจ และประสบการณ์ลูกค้า สโลแกนหลักคือ “ธุรกิจของคุณ เราพร้อมดูแล” บุคลิกแบรนด์เป็นกันเอง ใช้ได้จริง และตกลงขอบเขตงานกับค่าบริการให้ชัดเจนก่อนเริ่มงานเสมอ

---

## 2. Logo (in development)

The final logo **is in development**. Until it is approved, the site header uses a **text logo**: “BORN EAST” with a lime “SOLUTIONS” bar underneath.

| Part | Font | Size | Weight / spacing | Colour |
|---|---|---|---|---|
| `BORN EAST` (`.b1`) | Bricolage Grotesque | 1.4rem (1.22rem under 380px) | 800, letter-spacing −0.02em | #121212 on light, #F6F5F0 on dark (`.brand.light`) |
| `SOLUTIONS` bar (`.b2`) | DM Sans (inherited) | 0.6rem | 700, letter-spacing 0.4em (0.32em under 380px) | #121212 text on #C6F432, radius 99px, padding 2px 6px, 4px gap above |

Both lines are stacked (line-height 1), never wrap, and the bar is centred. On dark backgrounds the wordmark turns off-white; the SOLUTIONS bar stays ink-on-lime.

### Final logo — placeholder

- Primary logo: *to be added*
- Reversed logo (on #121212): *to be added*
- Icon / favicon: *to be added*
- Clear space, minimum size, colour versions, misuse examples: *to be added when approved*

Do not create unofficial logo marks in the meantime.

> **สรุปภาษาไทย:** โลโก้จริง “อยู่ระหว่างการออกแบบ” ตอนนี้ใช้โลโก้ตัวอักษร “BORN EAST” (Bricolage Grotesque หนา 800) กับแถบเขียวมะนาวคำว่า “SOLUTIONS” บนพื้นเข้มให้ตัวอักษรเป็นสีขาวนวล แต่แถบ SOLUTIONS ยังเป็นตัวดำบนพื้นเขียวมะนาว ห้ามทำโลโก้ขึ้นเองจนกว่าโลโก้จริงจะได้รับอนุมัติ

---

## 3. Colour palette

The site is a “single-accent lime theme” (comment in `style.css`).

### Core colours

| Name | HEX | RGB | CSS variable | Use |
|---|---|---|---|---|
| Off-white | `#F6F5F0` | 246, 245, 240 | `--bg` | Page background; text on dark panels |
| Near-black | `#121212` | 18, 18, 18 | `--ink`, `--line` | Text, all borders, offset shadows, dark panels, primary buttons |
| Neon lime | `#C6F432` | 198, 244, 50 | `--lime` | Highlights, stickers, number badges, feature cards, focus rings |

### Supporting neutrals (found in `style.css`)

| HEX | RGB | Where it is used |
|---|---|---|
| `#FFFFFF` (`--card`, written `#fff`) | 255, 255, 255 | Cards, eyebrow pills, panels |
| `#4A4A4A` (`--muted`) | 74, 74, 74 | Lead text, notes, small print |
| `#262626` | 38, 38, 38 | Service-card body text |
| `#2A2A2A` | 42, 42, 42 | Model-card body text |
| `#1F1F1F` | 31, 31, 31 | Panels inside dark sections |
| `#444444` (written `#444`) | 68, 68, 68 | Borders inside dark sections |
| `#333333` (written `#333`) | 51, 51, 51 | Footer divider (1px) |
| `#CFCFCF` | 207, 207, 207 | Footer text, chat subtitle, notes on dark |
| `#D8D8D8` | 216, 216, 216 | Lead text on dark sections |
| `#DDDDDD` (written `#ddd`) | 221, 221, 221 | Paragraph in “Who we work with” |

### Tints & system colours (functional only)

| Value | Meaning | Where |
|---|---|---|
| `#C6F43255` | Lime ≈33% | Language-button hover |
| `#C6F43233` | Lime 20% | Chat language hover |
| `#C6F4322E` | Lime ≈18% | Form success note |
| `#F6F5F0E6` | Off-white 90% | Sticky header (with blur) |
| `#8A1C00` on `#FFF1EC` | Error red on pale pink | Error messages only (forms, chat) |

### Suggested usage ratio (guidance, not from code)

**Off-white ~55% · Near-black ~30% · Lime ~15%.** Greys and white count within the off-white / near-black share. Tints and error red stay very small.

How lime is used on the site:
- The `.u` highlight marker on one phrase per heading (lime background, radius 0.18em).
- Stickers, number badges (`.nb`), tick icons, the “Ask us” chat button.
- Alternate card backgrounds: service cards cycle lime / ink / white / lime; model cards cycle white / lime / ink.
- Input focus ring `outline: 3px solid #C6F432`; hover shadow on dark buttons turns lime.

> **สรุปภาษาไทย:** สีหลัก 3 สี: ขาวนวล #F6F5F0 (พื้นหลัง), ดำเกือบสนิท #121212 (ตัวอักษร เส้นขอบ เงา) และเขียวมะนาว #C6F432 (สีเน้น) สัดส่วนที่แนะนำ ขาวนวล 55% · ดำ 30% · เขียวมะนาว 15% สีเทาและสีขาวเป็นสีเสริม ใช้ตัวดำบนพื้นเขียวมะนาวได้ แต่ห้ามใช้ตัวขาวบนพื้นเขียวมะนาว

---

## 4. Typography (English & Thai)

### Fonts (Google Fonts, loaded on every page)

```
https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,700&family=Noto+Sans+Thai:wght@400;500;600;700;800&display=swap
```

| Font | Role | Weights loaded |
|---|---|---|
| **Bricolage Grotesque** | Display: headings, logo, stickers, marquee, number badges, chat title & button | 500, 700, 800 (opsz 12–96) |
| **DM Sans** | Body, navigation, buttons, pills, forms, chat | 400, 500, 700 (opsz 9–40) |
| **Noto Sans Thai** | All Thai text (second in every stack) | 400, 500, 600, 700, 800 |

Font stacks:
- Body: `'DM Sans','Noto Sans Thai',system-ui,sans-serif`
- Headings h1–h4, `.b1`, `.stk`, marquee, chat button/title: `'Bricolage Grotesque','Noto Sans Thai',sans-serif`
- Nav, buttons, pills, inputs, language switch, chat: `'DM Sans','Noto Sans Thai',sans-serif`

Note: nav links and dropdown items use weight 600, but DM Sans is only loaded at 400/500/700, so browsers show the nearest loaded weight.

### Hierarchy (English)

All headings: Bricolage Grotesque 800, letter-spacing −0.035em, line-height 0.98.

| Role | Desktop / default | Phone (≤600px) | Line-height · spacing |
|---|---|---|---|
| Home hero H1 | `clamp(3rem, 8vw, 7rem)` | `clamp(2.2rem, 10.4vw, 2.9rem)` | 0.98 (1.02 phone) |
| H1 (base) | `clamp(2.8rem, 6.6vw, 5.6rem)` | `clamp(2.2rem, 10.4vw, 2.9rem)` | 0.98 |
| Sub-page hero H1 | `clamp(2.6rem, 6vw, 5rem)` | `clamp(1.95rem, 8.6vw, 2.45rem)` | 0.98 (1.04 phone) |
| H2 | `clamp(2rem, 4.4vw, 3.6rem)` | `clamp(1.7rem, 7.6vw, 2.05rem)` | 0.98 (1.04 phone) |
| “Who” H2 (big) | `clamp(2.4rem, 5.5vw, 4.6rem)` | `clamp(1.95rem, 9vw, 2.5rem)` | 0.98 |
| CTA H2 | `clamp(2.2rem, 5vw, 4rem)` | `clamp(1.9rem, 8.6vw, 2.4rem)` | 0.98 |
| H3 | 1.35rem | 1.35rem | 1.15 (1.18 phone), −0.02em |
| Service-card H3 | `clamp(1.8rem, 3vw, 2.4rem)` | same | 1.15 |
| Step / legal H3 | 1.15rem | same | 1.15 |
| Body (DM Sans 400) | 17px | 17px | 1.6 |
| Lead (#4A4A4A) | 1.18rem | 1.06rem | 1.6 (1.62 phone) |
| Hero value line (700) | 1.08rem | 1rem | 1.5 phone |
| Service-card text | 16.5px | same | 1.55 |
| Eyebrow (700, UPPERCASE) | 13px, letter-spacing 0.08em | 12px, 0.06em | 1.35 phone |
| Sticker (Bricolage 700) | 1rem | `clamp(12.5px, 3.9vw, 15.5px)` | 1.2, −0.01em |
| Marquee (Bricolage 700) | 1.3rem | same | — |
| Nav link (DM Sans 600) | 15px | 17px in mobile menu | — |
| Button / pill (DM Sans 700) | 16px / 15px | 15px / 14.5px | 1.25 phone |
| Chat message | 15px | 15.5px | 1.45 (1.55 phone) |
| Note / footer / chat fine print | 14px / 13px / 12px | same | — |

### Thai rules (`html.lang-th`)

- Body line-height **1.75**; headings line-height **1.3**, letter-spacing −0.01em.
- Eyebrows are **not uppercased**: 13.5px, letter-spacing 0.02em (12.5px, 0 on phones).
- Lead 1.12rem (line-height 1.75 on phones); chat bubbles and service-card text line-height 1.7; stickers line-height 1.5; `.u` highlight padding .02em .14em, line-height 1.45.
- Thai service titles show a small English subtitle (`.en-sub`: DM Sans 600, 0.55em, 70% opacity).
- Line breaking: `word-break:normal; line-break:auto`. Never `keep-all` (it breaks Thai).

| Role (Thai) | Desktop | Phone (≤600px) | Line-height |
|---|---|---|---|
| Home hero H1 | `clamp(2.4rem, 5.6vw, 5rem)` | `clamp(1.85rem, 8.4vw, 2.3rem)` | 1.3 (1.28 phone) |
| Sub-page hero H1 | `clamp(2.1rem, 4.6vw, 3.9rem)` | `clamp(1.65rem, 7.4vw, 2rem)` | 1.3 |
| H2 | as English | `clamp(1.42rem, 6.4vw, 1.75rem)` | 1.3 (1.32 phone) |
| “Who” H2 | as English | `clamp(1.6rem, 7.4vw, 2rem)` | 1.3 |
| CTA H2 | as English | `clamp(1.55rem, 7vw, 1.95rem)` | 1.3 |

> **สรุปภาษาไทย:** หัวข้อใช้ Bricolage Grotesque หนา 800 เนื้อหาใช้ DM Sans ขนาด 17px ภาษาไทยใช้ Noto Sans Thai อัตโนมัติ เวลาแสดงภาษาไทย ระยะบรรทัดกว้างขึ้น (เนื้อหา 1.75 หัวข้อ 1.3) หัวข้อไทยเล็กกว่าอังกฤษเล็กน้อย และไม่ใช้ตัวพิมพ์ใหญ่ในป้ายหัวข้อ

---

## 5. Shape, borders, shadows & spacing

Style: friendly neo-brutalism — thick black outlines, hard offset shadows (no blur), very round corners, slight tilts.

### Borders

| Value | Where |
|---|---|
| **2px solid #121212** | Standard: cards, buttons, pills, stickers, inputs, images, chat |
| 2px solid #444444 | Panels and pills inside dark sections |
| 6px solid #C6F432 (left) | Note / callout blocks |
| 1.5px solid #121212 | Dot inside eyebrow labels |
| 1px solid #333333 | Footer divider |
| 3px solid #C6F432 outline, 1px offset | Input focus |
| 3px solid #121212 outline, 3px offset | Expandable card focus |

### Radius

| Value | Where |
|---|---|
| **999px** | Buttons, pills, stickers, eyebrows, badges, language switch, chat input |
| 34px | Hero image frame, footer top corners |
| **26px (`--r`)** | Cards, panels, chat window |
| 22px | Images inside frames, mobile menu, chat window on phones |
| 20px | Situation and legal list cards |
| 18px | Dropdown, card images, chat bubbles |
| 14px / 12px / 10px | Inputs / dropdown items & chat inputs / error box |
| 6px | Chat bubble tail corner |
| 0.18em | `.u` highlight |

### Offset shadows (no blur)

| Value | Where |
|---|---|
| `3px 3px 0 #121212` | Stickers, chat choice buttons |
| `4px 4px 0 #C6F432` | Hover on dark buttons/pills |
| `4px 4px 0 #121212` | Hover on ghost and lime buttons; chat window on phones |
| **`5px 5px 0 #121212` (`--sh`)** | Cards, forms, dropdown, chat floating button |
| `8px 8px 0 #121212` | Hero frame, chat window, chat button hover |
| `9px 9px 0 #121212` | Service card hover |

### Motion

- Buttons lift `translate(-3px,-3px)` on hover; cards −4px to −6px.
- Stickers rotate −3°, hover to +2° and scale 1.04.
- Hero frame rotates 1.2°; marquee band −1°.
- Animations stop under `prefers-reduced-motion: reduce`.

### Spacing & layout

| Token | Value |
|---|---|
| Content width | max 1240px |
| Side padding | 28px (18px ≤620px) |
| Section padding | 90px top/bottom (64px ≤900px) |
| Header | 76px tall, sticky |
| Gaps | 20px card grids · 16px lists · 14px CTA row (10px phone) |
| Card padding | 22–34px; large panels 56–70px |

> **สรุปภาษาไทย:** สไตล์ “นีโอบรูทัลลิสต์ที่เป็นมิตร”: ขอบดำหนา 2px ทุกชิ้น เงาทึบเยื้องขวาล่างไม่เบลอ (มาตรฐาน 5px 5px) มุมโค้งมนมาก (ปุ่ม 999px การ์ด 26px) เอียงเล็กน้อย ชี้แล้วยกตัวขึ้น ความกว้างเนื้อหาสูงสุด 1240px

---

## 6. UI components

### Buttons (`.btn`)
- Primary: ink fill, off-white text, 2px ink border, radius 999px, padding 16px 28px, DM Sans 700 16px. Phone: 14px 22px, 15px.
- Hover: lifts −3px/−3px with `4px 4px 0` **lime** shadow; the 18px arrow icon moves right and rotates −12°.
- Ghost (`.btn.ghost`): white fill, ink text; hover shadow is ink.

### Pills (`.pill`)
- Same style as buttons, padding 12px 22px, 15px (header “Get in Touch”). Phone: 11px 18px, 14.5px.
- `.pill.light`: lime fill, ink text (shown as ink pill inside the lime CTA panel).

### Small controls
- **Eyebrow:** white pill, 2px ink border, 13px 700 uppercase, letter-spacing 0.08em, padding 6px 14px, lime dot with 1.5px ink ring. On dark: transparent with off-white border/text.
- **Language switch:** white pill container, 2px border, 3px padding; buttons DM Sans 700 13px; active = ink with lime text.
- **Number badge (`.nb`):** lime pill, min-width 52px, height 36px, Bricolage 800 1.05rem.
- **Card arrow (`.circ`):** 46px circle, ink with off-white arrow (lime on ink cards); rotates −45° on hover.

### Stickers (`.stk`)
Short lowercase phrases. Bricolage 700, 1rem, lime fill, ink text, 2px ink border, radius 999px, padding 8px 16px, shadow `3px 3px 0`, rotated −3°. One line on phones (font scales). Thai stickers line-height 1.5.

### Highlight & marquee
- `.u` highlight: lime background behind one key phrase per heading.
- Marquee: ink band, off-white Bricolage 700 1.3rem text, lime ✦ separators, tilted −1°.

### Cards
- Service card: white/lime/ink background, 2px ink border, radius 26px, shadow `5px 5px 0`, padding 34px 34px 90px, H3 `clamp(1.8rem,3vw,2.4rem)`, text 16.5px. Order: lime → ink → white → lime. Hover: −4px lift, −0.4° tilt, `9px 9px 0` shadow.
- Step (`.hw`), model, legal, list and form cards use the same 2px border + radius + offset shadow rule.
- Dark-section panels: #1F1F1F with 2px #444 border.

### Chat widget
- **Floating button:** lime pill “Ask us” / “ถามเรา”, Bricolage 700 16px, padding 14px 22px, shadow `5px 5px 0`; open state = ink with lime text.
- **Window:** 370px wide, off-white, 2px ink border, radius 26px, shadow `8px 8px 0`. On phones near full-screen, radius 22px, shadow `4px 4px 0`.
- **Header:** ink band; “Born East” Bricolage 800 1.2rem; subtitle “Quick questions about our services” in #CFCFCF 13px; 38px round lime close button; EN/TH picker with lime outline.
- **Bubbles:** 2px ink border, radius 18px, 15px text. Bot = white, 6px bottom-left corner. Visitor = lime, 6px bottom-right corner.
- **Input row:** white bar with 2px top border; pill input; 46px round ink send button with lime icon.
- **Choice buttons:** white pills, DM Sans 700 15px; suggested option lime with `3px 3px 0` shadow.
- **Errors:** #8A1C00 bold 13px on #FFF1EC, 2px ink border, radius 10px.

### Forms
Inputs: 2px ink border, radius 14px, off-white fill, padding 13px 16px, focus ring 3px lime. Labels DM Sans 700 14.5px. Form in a white card, radius 26px, padding 34px, shadow `5px 5px 0`.

> **สรุปภาษาไทย:** ปุ่มหลักสีดำ ตัวขาวนวล โค้งเต็ม ชี้แล้วยกขึ้นพร้อมเงาเขียวมะนาว ปุ่มรองพื้นขาว สติกเกอร์เป็นวลีสั้นพื้นเขียวมะนาวเอียง −3° การ์ดมีมุมโค้ง 26px ขอบดำ 2px เงาเยื้อง 5px สลับสีเขียวมะนาว/ดำ/ขาว แชทมีหัวสีดำ ฟองข้อความบอทสีขาว ฟองข้อความลูกค้าสีเขียวมะนาว ปุ่มลอย “ถามเรา” สีเขียวมะนาว

---

## 7. Tone of voice

**Friendly. Practical. Plain English.** We talk like a helpful person who knows hospitality — not a law firm, not an ad agency.

English:
- UK spelling (organise, colour, café).
- Lead with the owner’s situation, then how we help. Use real examples (“a restaurant owner seeking guidance on a staff performance concern”).
- Headlines in Title Case with full stops for punch: “Your Business. Our Support.”
- Stickers lowercase with middle dots: “people · process · progress”.
- With legal topics, describe support and record-keeping; never promise legal outcomes.

Thai:
- Natural, polite business Thai, as a Thai owner would speak to a client — not word-for-word translation.
- Site messages use the polite particle “ครับ” (e.g. “ขอบคุณครับ”).
- Keep business words Thai owners already use (e.g. HR). Service titles may carry a small English subtitle.
- Examples: “มาคุยเรื่องธุรกิจของคุณกัน” (Let’s Talk About Your Business.) · “ความช่วยเหลือที่ใช้ได้จริง สำหรับธุรกิจจริง” (practical support for real businesses).

**Golden rule — never invent:** prices, credentials or qualifications, testimonials or reviews, client names, statistics or contact details. The site says “Fees are discussed and agreed before work begins” and “Contact details coming soon.” Keep it that way until the owner provides real information.

> **สรุปภาษาไทย:** น้ำเสียงเป็นกันเอง ใช้ได้จริง เข้าใจง่าย ภาษาอังกฤษใช้แบบ UK ประโยคสั้น ไม่มีศัพท์ยาก ภาษาไทยใช้ภาษาธุรกิจที่เป็นธรรมชาติและสุภาพ (ลงท้าย “ครับ”) ไม่แปลตรงตัว กฎสำคัญที่สุด: ห้ามแต่งราคา คุณวุฒิ ใบรับรอง หรือรีวิวลูกค้าขึ้นเองเด็ดขาด

---

## 8. Do & don’t

| ✓ Do | ✕ Don’t |
|---|---|
| Use off-white #F6F5F0 as the main background | Put white or off-white text on lime |
| Put near-black #121212 text on lime #C6F432 | Put lime text on off-white or white |
| Give every card, button and image a 2px ink border | Add new accent colours or gradients (red = errors only) |
| Use hard offset shadows (3/5/8px) with no blur | Use soft, blurred drop shadows |
| Use full pill radius (999px) for buttons and labels | Use thin 1px outlines on cards or buttons |
| Highlight one key phrase per heading in lime | Flood whole pages with lime |
| Bricolage Grotesque 800 for headings, DM Sans for body | Uppercase Thai or use `keep-all` line breaking |
| Let Thai use Noto Sans Thai with roomier line-height | Stretch, outline or recolour the text logo |
| Keep stickers short, lowercase, slightly tilted | Invent prices, credentials, testimonials or contact details |
| Write plain UK English and natural Thai | Use jargon, legal promises or hard-sell language |
| On price questions: fees are agreed before work begins | Publish machine-translated Thai without a native check |
| Use the text logo until the final logo is approved | Create an unofficial logo mark |

> **สรุปภาษาไทย:** ควรทำ: พื้นขาวนวล ตัวดำบนเขียวมะนาว ขอบดำ 2px เงาทึบไม่เบลอ ปุ่มโค้งเต็ม ไฮไลต์คำเดียวต่อหัวข้อ ใช้โลโก้ตัวอักษรไปก่อน ไม่ควรทำ: ตัวขาวบนเขียวมะนาว เพิ่มสีใหม่หรือไล่สี เงาเบลอ ใช้เขียวมะนาวเต็มหน้า เผยแพร่ภาษาไทยที่แปลด้วยเครื่องโดยไม่ตรวจ หรือแต่งราคา/คุณวุฒิ/รีวิวขึ้นเอง

---

## 9. Accessibility & contrast

WCAG 2.1 contrast ratios (AA = 4.5:1 normal text, 3:1 large; AAA = 7:1).

| Text | Background | Ratio | Result |
|---|---|---|---|
| #121212 ink | #F6F5F0 off-white | 17.16 : 1 | AAA ✓ |
| #121212 ink | #FFFFFF white | 18.73 : 1 | AAA ✓ |
| #121212 ink | #C6F432 lime | 14.62 : 1 | AAA ✓ |
| #C6F432 lime | #121212 ink | 14.62 : 1 | AAA ✓ |
| #C6F432 lime | #1F1F1F dark panel | 12.86 : 1 | AAA ✓ |
| #F6F5F0 off-white | #121212 ink | 17.16 : 1 | AAA ✓ |
| #CFCFCF grey | #121212 ink | 12.02 : 1 | AAA ✓ |
| #4A4A4A muted | #F6F5F0 off-white | 8.12 : 1 | AAA ✓ |
| #4A4A4A muted | #C6F432 lime | 6.92 : 1 | AA ✓ |
| #8A1C00 error | #FFF1EC | 8.48 : 1 | AAA ✓ |
| **#FFFFFF white** | **#C6F432 lime** | **1.28 : 1** | **Fail ✕** |
| **#F6F5F0 off-white** | **#C6F432 lime** | **1.17 : 1** | **Fail ✕** |
| **#C6F432 lime** | **#F6F5F0 off-white** | **1.17 : 1** | **Fail ✕** |

- **Lime on near-black is fine** (14.62:1) — use it on dark sections, footer headings, active toggles.
- **White text on lime is not** (1.28:1) — on lime, always use near-black text.

Already built in: visible focus rings (3px lime on inputs, 3px ink on expandable cards); animations stop with reduced motion; decorative icons `aria-hidden`; labelled menu/language controls; page language set (`en-GB` / `th`).

> **สรุปภาษาไทย:** ตัวดำบนพื้นขาวนวลหรือเขียวมะนาว และตัวเขียวมะนาวบนพื้นดำ อ่านง่ายมาก (AAA) แต่ตัวขาวบนเขียวมะนาว (1.28:1) และตัวเขียวมะนาวบนขาวนวล (1.17:1) อ่านไม่ออก ห้ามใช้ เว็บไซต์มีเส้นโฟกัสชัดเจน หยุดแอนิเมชันได้ และระบุภาษาของหน้าแล้ว

---

## 10. Token reference

```css
:root {
  --bg: #F6F5F0;   /* off-white page background */
  --ink: #121212;  /* near-black text, borders, shadows */
  --muted: #4a4a4a;/* secondary text */
  --lime: #C6F432; /* the single accent */
  --card: #fff;    /* card surfaces */
  --line: #121212; /* border colour (same as ink) */
  --r: 26px;       /* card radius */
  --sh: 5px 5px 0 var(--ink); /* standard offset shadow */
}
```

Breakpoints: ≤1080px (service grid 2 columns) · ≤900px (burger menu, single column, 64px sections) · ≤620px / ≤600px (phone type scale, 18px side padding, one-line stickers, full-screen chat) · ≤380px (smaller logo).

> **สรุปภาษาไทย:** ส่วนนี้สำหรับนักพัฒนาเว็บ: ตัวแปร CSS ทั้งหมดจาก style.css และขนาดหน้าจอที่การออกแบบเปลี่ยน หากจะแก้สีหรือฟอนต์ ให้แก้ที่ตัวแปรเหล่านี้ที่เดียว
