# Quick Test Checklist
## Post-Deployment Validation

Complete these tests immediately after deploying the updated website.

---

## ✅ 1. BASIC DEPLOYMENT CHECK

**Test:** Site loads successfully  
**URL:** https://trillionairedesigns.co.ke  
**Expected:** Homepage displays without errors  
**Status:** [ ]

---

## ✅ 2. STRUCTURED DATA VALIDATION

### Test with Google Rich Results Test

**URL:** https://search.google.com/test/rich-results  
**Test URL:** https://trillionairedesigns.co.ke  

**Expected Results:**
- [ ] Organization schema detected
- [ ] WebSite schema detected  
- [ ] 0 errors
- [ ] 0 warnings (or only minor warnings)

**Test URL:** https://trillionairedesigns.co.ke (homepage with LocalBusiness)

**Expected Results:**
- [ ] ProfessionalService/LocalBusiness schema detected
- [ ] Organization schema still present
- [ ] 0 errors

---

## ✅ 3. SCHEMA MARKUP VALIDATOR

**Tool:** https://validator.schema.org/  
**Method:** Fetch URL or paste JSON-LD

**Test 1 - Organization Schema:**
1. Copy JSON-LD from `src/app/layout.tsx` (organizationSchema)
2. Paste into validator
3. Check: [ ] No errors

**Test 2 - LocalBusiness Schema:**
1. Copy JSON-LD from `src/app/page.tsx` (localBusinessSchema)
2. Paste into validator
3. Check: [ ] No errors

---

## ✅ 4. METADATA PREVIEW

### Test Open Graph Tags

**Tool:** https://metatags.io/  
**Test URL:** https://trillionairedesigns.co.ke

**Check:**
- [ ] OG image displays (should show laptop with code brackets)
- [ ] Title: "Trillionaire Designs — Web, App, Systems & AI Development in Kenya"
- [ ] Description shows correctly
- [ ] Image dimensions: 1200×630

**Test on Social Media:**
- [ ] Share on Twitter/X - preview looks good
- [ ] Share on LinkedIn - preview looks good
- [ ] Share on WhatsApp - preview looks good

---

## ✅ 5. FAVICON CHECK

**Test:** Browser tab icon  
**Expected:**
- [ ] Code brackets icon visible in browser tab
- [ ] Lime green and black colors
- [ ] No broken icon (should not show browser default)

**Test Mobile:**
- [ ] Add to home screen on iPhone - Apple touch icon displays
- [ ] Add to home screen on Android - icon displays

---

## ✅ 6. ROBOTS.TXT

**URL:** https://trillionairedesigns.co.ke/robots.txt

**Expected Content:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /static/

Sitemap: https://trillionairedesigns.co.ke/sitemap.xml
Host: https://trillionairedesigns.co.ke
```

**Check:**
- [ ] File loads successfully
- [ ] Sitemap URL is present
- [ ] No unexpected disallows

---

## ✅ 7. SITEMAP.XML

**URL:** https://trillionairedesigns.co.ke/sitemap.xml

**Expected:**
- [ ] XML file loads without error
- [ ] All pages listed (/, /about, /contact, /services, /blog, etc.)
- [ ] Proper priorities set
- [ ] lastmod dates present
- [ ] changefreq specified

**Test Sitemap Validity:**
**Tool:** https://www.xml-sitemaps.com/validate-xml-sitemap.html  
**Check:** [ ] No errors

---

## ✅ 8. LOGO ACCESSIBILITY

**Test:** Logo image loads  
**URL:** https://trillionairedesigns.co.ke/brand/trillionaire-designs-logo.png

**Check:**
- [ ] Image loads successfully
- [ ] Not blocked by authentication
- [ ] Proper file size (should be under 500KB)
- [ ] Displays correct Trillionaire Designs logo

**Test OG Image:**
**URL:** https://trillionairedesigns.co.ke/brand/og-image.svg  
**Check:** [ ] Loads successfully

---

## ✅ 9. MANIFEST.JSON

**URL:** https://trillionairedesigns.co.ke/manifest.json

**Expected:**
- [ ] File loads successfully
- [ ] name: "Trillionaire Designs"
- [ ] theme_color: "#32cd32"
- [ ] background_color: "#0a0a0a"
- [ ] icons array present

---

## ✅ 10. PAGE TITLES (SPOT CHECK)

Visit each page and verify unique titles:

**Homepage:**  
Expected: "Trillionaire Designs — Web, App, Systems & AI Development in Kenya"  
Check: [ ]

**About:**  
Expected: "About Trillionaire Designs — Software Development Company in Nairobi, Kenya | Trillionaire Designs"  
Check: [ ]

**Contact:**  
Expected: "Contact Trillionaire Designs — Start a Software Project in Kenya | Trillionaire Designs"  
Check: [ ]

**Web Development Service:**  
Expected: "Website Development in Kenya — Professional Web Design & Development | Trillionaire Designs"  
Check: [ ]

---

## ✅ 11. GOOGLE SEARCH CONSOLE

**After Verification:**

1. **Add Property:**
   - [ ] Website added to Search Console
   - [ ] Verification successful

2. **Submit Sitemap:**
   - [ ] Sitemap submitted: https://trillionairedesigns.co.ke/sitemap.xml
   - [ ] Status: Success

3. **Check Coverage:**
   - [ ] No errors in coverage report
   - [ ] Pages are being indexed

4. **Rich Results:**
   - [ ] Check "Enhancements" section
   - [ ] Organization schema recognized
   - [ ] 0 errors

---

## ✅ 12. MOBILE RESPONSIVENESS

**Tool:** https://search.google.com/test/mobile-friendly  
**Test URL:** https://trillionairedesigns.co.ke

**Expected:**
- [ ] Page is mobile-friendly
- [ ] Text readable without zooming
- [ ] Tap targets appropriately sized

---

## ✅ 13. PAGE SPEED

**Tool:** https://pagespeed.web.dev/  
**Test URL:** https://trillionairedesigns.co.ke

**Target Scores:**
- [ ] Mobile Performance: 70+
- [ ] Desktop Performance: 90+
- [ ] Accessibility: 95+
- [ ] Best Practices: 90+
- [ ] SEO: 95+

*(Don't worry if performance is lower initially - focus on SEO score)*

---

## ✅ 14. STRUCTURED DATA IN GOOGLE SEARCH CONSOLE

**After 1-2 Weeks:**

1. Go to: Search Console → Enhancements → Unparsed structured data  
2. Check for:
   - [ ] Organization schema parsed
   - [ ] LocalBusiness schema parsed
   - [ ] No critical errors
   - [ ] Valid items count increasing

---

## ✅ 15. LIVE SEARCH TEST

**After 2-4 Weeks:**

**Google Search:** "Trillionaire Designs"

**Look for:**
- [ ] Favicon appears in search result
- [ ] Correct meta description shows
- [ ] Sitelinks may appear
- [ ] No "missing: logo" or "missing: image" warnings

**Google Search:** "site:trillionairedesigns.co.ke"

**Check:**
- [ ] All pages indexed
- [ ] No unexpected pages
- [ ] No blocked resources

---

## 📊 RESULTS TIMELINE

| Timeline | Expected Result | Check |
|----------|----------------|-------|
| Day 1 | Structured data validates | [ ] |
| Week 1 | Google indexes updates | [ ] |
| Week 2 | Logo appears in searches | [ ] |
| Month 1 | Sitelinks appear | [ ] |
| Month 3 | Rich results consistent | [ ] |
| Month 6+ | Knowledge Panel eligible | [ ] |

---

## 🚨 COMMON ISSUES & FIXES

### Issue: Structured Data Errors
**Fix:** Use Google Rich Results Test to identify exact error. Common issues:
- Missing required fields
- Invalid date formats
- Incorrect @type
- Broken URLs

### Issue: Logo Not Appearing
**Possible Causes:**
- Image blocked by robots.txt
- Image too large (>5MB)
- Image not accessible (404 error)
- Wrong format (must be PNG, JPG, or WebP)

### Issue: OG Image Not Showing
**Possible Causes:**
- Cache (wait 24-48 hours)
- Image dimensions wrong (must be 1200×630 recommended)
- Meta tags not in `<head>`

### Issue: Pages Not Indexing
**Check:**
- robots.txt not blocking
- Pages in sitemap.xml
- No `noindex` meta tag
- Server responding with 200 (not 404 or 500)

---

## ✅ FINAL APPROVAL

After completing all checks:

- [ ] All tests passed
- [ ] No critical errors
- [ ] Structured data valid
- [ ] Images loading correctly
- [ ] Google Search Console verified
- [ ] Sitemap submitted
- [ ] Ready for Google Business Profile setup

**Date Completed:** ___________  
**Tested By:** ___________  
**Status:** ✅ READY FOR PRODUCTION

---

## 📞 NEXT STEP

**Set up Google Business Profile**  
Guide: `GOOGLE_BUSINESS_PROFILE_SETUP.md`

---

**Quick Reference Version 1.0**  
Last Updated: November 3, 2026
