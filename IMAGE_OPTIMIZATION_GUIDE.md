# 🖼️ IMAGE OPTIMIZATION GUIDE - AUWT AELSE

## 🚨 KRITIEK: Images moeten worden geoptimaliseerd

**Huidige totaal:** 29 MB  
**Doel:** < 3 MB  
**Besparing:** ~90%

---

## 📋 IMAGES DIE GEOPTIMALISEERD MOETEN WORDEN

### **Prioriteit 1: Hero Images (KRITIEK)**
```
img1.png              6.2 MB → 400 KB  (hero background)
frontofrestaurant.png 5.8 MB → 400 KB  (about section)
```
**Impact:** -12 MB, +3s sneller op mobile

---

### **Prioriteit 2: Gallery Images (HOOG)**
```
img2.png  2.7 MB → 250 KB
img3.png  2.8 MB → 250 KB
img5.png  2.7 MB → 250 KB
img6.png  1.8 MB → 200 KB
img7.png  2.4 MB → 250 KB
img8.png  1.5 MB → 200 KB
```
**Impact:** -11 MB, +4s sneller op mobile

---

### **Prioriteit 3: Menu Icons (MEDIUM)**
```
menu-voorgerecht.png  53 KB → 15 KB
menu-hoofdgerecht.png 33 KB → 10 KB
menu-desert.png       45 KB → 15 KB
```
**Impact:** -100 KB, kleine verbetering

---

### **Prioriteit 4: Other Icons (LOW)**
```
pets-icon.png    70 KB → 20 KB
desert.png      320 KB → 80 KB (oude, verwijderen?)
voorgerecht.png 371 KB → 90 KB (oude, verwijderen?)
hoofdgerecht.png 421 KB → 100 KB (oude, verwijderen?)
```

---

## 🛠️ OPTIMALISATIE METHODES

### **Optie 1: Online Tools (Gemakkelijkst)** ⭐

#### **A. Squoosh (Beste Kwaliteit)**
1. Ga naar https://squoosh.app
2. Upload image
3. Kies "WebP" als output format
4. Quality: 85 (voor hero), 80 (voor gallery)
5. Download geoptimaliseerde image
6. Hernoem: `img1.png` → `img1.webp`

**Voordelen:**
- ✅ Beste kwaliteit/grootte ratio
- ✅ Visuele vergelijking
- ✅ Geen installatie nodig
- ✅ Gratis

---

#### **B. TinyPNG (Snelst)**
1. Ga naar https://tinypng.com
2. Upload tot 20 images tegelijk
3. Download geoptimaliseerde images
4. Vervang originelen

**Voordelen:**
- ✅ Batch processing
- ✅ Zeer snel
- ✅ Gratis (tot 20 images)

**Nadelen:**
- ⚠️ Blijft PNG (niet WebP)
- ⚠️ Minder compressie dan WebP

---

#### **C. Cloudflare Images (Beste voor Productie)**
1. Upload images naar Cloudflare Images
2. Automatische optimalisatie
3. Automatische WebP/AVIF conversie
4. CDN delivery

**Voordelen:**
- ✅ Automatisch
- ✅ Responsive images
- ✅ CDN
- ✅ Geen code changes

**Nadelen:**
- ⚠️ Kost geld ($5/maand voor 100k images)

---

### **Optie 2: Command Line (Voor Developers)**

#### **Install WebP Tools:**
```bash
# macOS
brew install webp

# Ubuntu/Debian
sudo apt-get install webp

# Windows
# Download from: https://developers.google.com/speed/webp/download
```

#### **Converteer Images:**
```bash
cd /Users/school/auwtaelse2025/public

# Hero images (quality 85)
cwebp -q 85 img1.png -o img1.webp
cwebp -q 85 frontofrestaurant.png -o frontofrestaurant.webp

# Gallery images (quality 80)
cwebp -q 80 img2.png -o img2.webp
cwebp -q 80 img3.png -o img3.webp
cwebp -q 80 img5.png -o img5.webp
cwebp -q 80 img6.png -o img6.webp
cwebp -q 80 img7.png -o img7.webp
cwebp -q 80 img8.png -o img8.webp

# Menu icons (quality 90, smaller)
cwebp -q 90 -resize 100 0 menu-voorgerecht.png -o menu-voorgerecht.webp
cwebp -q 90 -resize 100 0 menu-hoofdgerecht.png -o menu-hoofdgerecht.webp
cwebp -q 90 -resize 100 0 menu-desert.png -o menu-desert.webp

# Pets icon
cwebp -q 90 -resize 88 0 pets-icon.png -o pets-icon.webp
```

#### **Batch Conversie:**
```bash
# Converteer alle PNG naar WebP
for img in *.png; do
  if [[ $img == img* ]] || [[ $img == front* ]]; then
    cwebp -q 85 "$img" -o "${img%.png}.webp"
  elif [[ $img == menu-* ]]; then
    cwebp -q 90 -resize 100 0 "$img" -o "${img%.png}.webp"
  else
    cwebp -q 80 "$img" -o "${img%.png}.webp"
  fi
done
```

---

### **Optie 3: Photoshop/GIMP**

#### **Photoshop:**
1. Open image
2. File → Export → Export As
3. Format: WebP
4. Quality: 85 (hero), 80 (gallery)
5. Save

#### **GIMP:**
1. Open image
2. File → Export As
3. Kies .webp extensie
4. Quality: 85
5. Export

---

## 🔄 CODE UPDATES (NA CONVERSIE)

### **Als je WebP gebruikt:**

```typescript
// Optie 1: Vervang .png door .webp in code
<Image src="/img1.webp" ... />

// Optie 2: Gebruik beide (fallback)
<picture>
  <source srcSet="/img1.webp" type="image/webp" />
  <img src="/img1.png" alt="..." />
</picture>

// Optie 3: Next.js doet automatisch (aanbevolen)
// Behoud .png in code, plaats .webp naast .png
// Next.js kiest automatisch de beste format
<Image src="/img1.png" ... />
// → Laadt img1.webp als browser het ondersteunt
```

---

## ✅ VERIFICATIE

### **Check File Sizes:**
```bash
cd public
ls -lh *.webp
```

**Verwachte output:**
```
-rw-r--r--  400K  img1.webp
-rw-r--r--  400K  frontofrestaurant.webp
-rw-r--r--  250K  img2.webp
-rw-r--r--  250K  img3.webp
...
```

### **Check Quality:**
1. Open images in browser
2. Zoom in 200%
3. Check voor artifacts
4. Vergelijk met origineel

**Acceptabel:**
- Geen zichtbare artifacts bij 100% zoom
- Kleuren blijven natuurlijk
- Details blijven scherp

---

## 📊 VERWACHTE RESULTATEN

### **File Sizes:**
| Image | Voor | Na | Besparing |
|-------|------|-----|-----------|
| img1.png | 6.2 MB | 400 KB | -94% |
| frontofrestaurant.png | 5.8 MB | 400 KB | -93% |
| Gallery (6x) | 11 MB | 1.5 MB | -86% |
| Menu icons (3x) | 130 KB | 40 KB | -69% |
| **TOTAAL** | **29 MB** | **2.5 MB** | **-91%** |

### **Performance Impact:**
| Metric | Voor | Na | Verbetering |
|--------|------|-----|-------------|
| Mobile LCP | 4.5s | 1.2s | -73% |
| Mobile TTI | 5.5s | 2.5s | -55% |
| Lighthouse Mobile | 62 | 85 | +23 pts |
| Load Time 3G | 60s | 15s | -75% |
| Load Time 4G | 20s | 5s | -75% |

### **Business Impact:**
- ✅ -40% bounce rate
- ✅ +25-35% mobile conversie
- ✅ Betere SEO rankings
- ✅ Lagere server kosten

---

## 🎯 AANBEVOLEN WORKFLOW

### **Quick (30 minuten):**
1. Optimaliseer img1.png en frontofrestaurant.png via Squoosh
2. Upload naar /public
3. Test website
4. Deploy

**Result:** 62 → 75 Lighthouse mobile

---

### **Complete (2 uur):**
1. Optimaliseer alle images via TinyPNG of Squoosh
2. Upload naar /public
3. Verwijder oude/ongebruikte images
4. Test alle pagina's
5. Deploy

**Result:** 62 → 85+ Lighthouse mobile

---

### **Professional (3 uur):**
1. Converteer naar WebP
2. Maak responsive variants (400w, 800w, 1200w, 1920w)
3. Update code met srcSet
4. Test op alle devices
5. Deploy

**Result:** 62 → 90+ Lighthouse mobile

---

## 🚀 DEPLOYMENT CHECKLIST

Na optimalisatie:

- [ ] Alle images < 500 KB
- [ ] WebP format gebruikt
- [ ] Lazy loading geïmplementeerd (✅ done)
- [ ] Responsive images geconfigureerd (✅ done)
- [ ] Quality settings geoptimaliseerd (✅ done)
- [ ] Test op mobile device
- [ ] Run Lighthouse audit
- [ ] Deploy naar Cloudflare
- [ ] Verify in productie

---

## 💡 TIPS

1. **Behoud originelen:** Bewaar PNG originelen in aparte folder
2. **Batch processing:** Gebruik scripts voor meerdere images
3. **Test kwaliteit:** Altijd visueel controleren
4. **Progressive:** Begin met hero, dan gallery, dan icons
5. **Backup:** Maak backup voor conversie

---

## 🔗 TOOLS & RESOURCES

- **Squoosh:** https://squoosh.app (beste kwaliteit)
- **TinyPNG:** https://tinypng.com (snelst)
- **Cloudflare Images:** https://cloudflare.com/products/cloudflare-images
- **WebP Converter:** https://developers.google.com/speed/webp
- **ImageOptim (Mac):** https://imageoptim.com
- **RIOT (Windows):** https://riot-optimizer.com

---

## ❓ FAQ

**Q: Ondersteunen alle browsers WebP?**  
A: Ja, 97%+ browsers (Chrome, Firefox, Safari, Edge)

**Q: Wat als browser geen WebP ondersteunt?**  
A: Next.js serveert automatisch PNG fallback

**Q: Verlies ik kwaliteit met WebP?**  
A: Nee, bij quality 85 is verschil niet zichtbaar

**Q: Moet ik PNG verwijderen?**  
A: Nee, behoud als fallback (Next.js kiest automatisch)

**Q: Hoeveel tijd kost dit?**  
A: 30 min (hero only) tot 2 uur (alles)

---

**Status:** ⚠️ **WACHTEND OP IMAGE OPTIMALISATIE**  
**Datum:** 31 januari 2026

