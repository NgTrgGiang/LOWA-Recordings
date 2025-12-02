# 🌐 Cập nhật Domain mới: lowarecordings.com

## Khi đã mua domain, làm theo các bước sau:

### 1. Cập nhật file `app/layout.js`

Tìm và thay đổi:
```javascript
metadataBase: new URL('https://lowa-recordings.vercel.app'),
```

Thành:
```javascript
metadataBase: new URL('https://lowarecordings.com'),
```

Và:
```javascript
url: 'https://lowa-recordings.vercel.app',
```

Thành:
```javascript
url: 'https://lowarecordings.com',
```

### 2. Cập nhật file `public/sitemap.xml`

Thay đổi:
```xml
<loc>https://lowa-recordings.vercel.app/</loc>
```

Thành:
```xml
<loc>https://lowarecordings.com/</loc>
```

### 3. Cập nhật file `public/robots.txt`

Thay đổi:
```
Sitemap: https://lowa-recordings.vercel.app/sitemap.xml
```

Thành:
```
Sitemap: https://lowarecordings.com/sitemap.xml
```

### 4. Cấu hình DNS tại nhà cung cấp domain

Thêm các DNS records sau:

**A Record:**
- Type: `A`
- Name: `@`
- Value: `76.76.21.21`
- TTL: `3600`

**CNAME Record:**
- Type: `CNAME`
- Name: `www`
- Value: `cname.vercel-dns.com`
- TTL: `3600`

### 5. Thêm domain vào Vercel

1. Vào https://vercel.com/dashboard
2. Chọn project `lowa-recordings`
3. Settings → Domains
4. Add Domain: `lowarecordings.com`
5. Add Domain: `www.lowarecordings.com`

### 6. Chờ DNS propagate (15 phút - 48 giờ)

Kiểm tra DNS đã hoạt động chưa:
- https://dnschecker.org

### 7. Deploy lại

```bash
git add .
git commit -m "Update domain to lowarecordings.com"
git push
```

### 8. Submit lại Google Search Console

1. Thêm property mới: `https://lowarecordings.com`
2. Verify ownership
3. Submit sitemap: `https://lowarecordings.com/sitemap.xml`

---

**Lưu ý:** Giữ lại domain cũ `lowa-recordings.vercel.app` để redirect về domain mới!
