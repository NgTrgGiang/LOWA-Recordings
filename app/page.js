'use client';

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <img src="/assets/Logo Watermark (với chữ).png" alt="LOWA Recordings Logo" />
          </a>

          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Trang Chủ</a></li>
            <li><a href="#services" className="nav-link">Dịch Vụ</a></li>
            <li><a href="#partners" className="nav-link">Đối Tác</a></li>
            <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li><a href="#pricing" className="nav-link">Bảng giá</a></li>
            <li><a href="#contact" className="nav-link">Liên Hệ & Đặt Lịch</a></li>
          </ul>

          <div className="nav-toggle">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="hero-left">
            <img src="/assets/logo.jpg" alt="LOWA Recordings" className="hero-logo" />
          </div>

          <div className="hero-right">
            <h1 className="hero-title">
              Welcome to <span className="text-gradient">LOWA Recordings</span>
            </h1>
            <p className="hero-subtitle">
              Phòng thu âm chuyên nghiệp với thiết bị hiện đại, mang đến chất lượng âm thanh đỉnh cao cho nghệ sĩ và nhạc sĩ
            </p>
            <div className="hero-cta">
              <a href="#contact" className="btn btn-primary btn-large">Đặt Lịch Ngay</a>
              <a href="#portfolio" className="btn btn-outline btn-large">Xem Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Dịch Vụ LOWA</h2>
            <p className="section-subtitle">
              Giải pháp âm thanh toàn diện cho mọi nhu cầu sản xuất của bạn
            </p>
          </div>

          <div className="services-grid">
            <div className="card service-card">
              <div className="service-icon">🎙️</div>
              <h3>Thu Âm</h3>
              <p>Phòng thu cách âm chuyên nghiệp với thiết bị cao cấp, mang đến chất lượng âm thanh tinh khiết và chân thực nhất cho giọng hát và nhạc cụ</p>
            </div>

            <div className="card service-card">
              <div className="service-icon">🎚️</div>
              <h3>Mixing & Mastering</h3>
              <p>Trộn và làm chủ âm thanh với kỹ thuật hiện đại, tối ưu hóa từng chi tiết để tạo ra sản phẩm hoàn hảo, sẵn sàng phát hành trên mọi nền tảng</p>
            </div>

            <div className="card service-card">
              <div className="service-icon">🎼</div>
              <h3>Hòa Âm Phối Khí</h3>
              <p>Sáng tạo và phối khí chuyên nghiệp, biến ý tưởng âm nhạc của bạn thành tác phẩm hoàn chỉnh với âm sắc phong phú và độc đáo</p>
            </div>

            <div className="card service-card">
              <div className="service-icon">🎵</div>
              <h3>Music Production</h3>
              <p>Sản xuất âm nhạc từ A-Z, từ sáng tác, thu âm, phối khí đến hoàn thiện, đồng hành cùng bạn trong mọi giai đoạn sáng tạo</p>
            </div>

            <div className="card service-card">
              <div className="service-icon">🎧</div>
              <h3>Voice Off/ Voice Over/ Podcast</h3>
              <p>Ghi âm lồng tiếng, thuyết minh và podcast chất lượng cao với không gian cách âm tối ưu, phù hợp cho mọi dự án truyền thông</p>
            </div>

            <div className="card service-card">
              <div className="service-icon">🎬</div>
              <h3>Sản Xuất TVC</h3>
              <p>Sản xuất âm thanh cho quảng cáo TVC chuyên nghiệp, từ thu âm voice over, sound design đến hậu kỳ âm thanh hoàn chỉnh</p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Clients Section */}
      <section id="partners" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Đối Tác & Khách Hàng</h2>
            <p className="section-subtitle">
              Những doanh nghiệp và nghệ sĩ đã tin tưởng hợp tác cùng chúng tôi
            </p>
          </div>

          <div className="partners-container">
            <div className="partners-logos">
              <div className="partner-logo">
                <img src="/assets/mixigaming.png" alt="Partner 1" />
              </div>
              <div className="partner-logo">
                <img src="/assets/samsung.png" alt="Partner 2" />
              </div>
              <div className="partner-logo">
                <img src="/assets/lienquanmobile.png" alt="Partner 3" />
              </div>
              <div className="partner-logo">
                <img src="/assets/msb.jpg" alt="Partner 4" />
              </div>
              <div className="partner-logo">
                <img src="/assets/rapviet.jpg" alt="Partner 5" />
              </div>
              <div className="partner-logo">
                <img src="/assets/vietcombank.jpg" alt="Partner 6" />
              </div>
              <div className="partner-logo">
                <img src="/assets/domino.png" alt="Partner 7" />
              </div>
            </div>

            <div className="partners-video">
              <div className="video-wrapper">
                <video controls poster="/assets/Screenshot_1.png">
                  <source src="/assets/LOWARecordingsAdvertisingClip.mp4" type="video/mp4" />
                  <source src="/assets/LOWARecordingsAdvertisingClip.webm" type="video/webm" />
                  Trình duyệt của bạn không hỗ trợ video.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Portfolio</h2>
            <p className="section-subtitle">
              Những dự án âm nhạc chúng tôi đã thực hiện
            </p>
          </div>

          {/* Phần 1: Sản Phẩm Nghệ Sĩ */}
          <div style={{ marginBottom: 'var(--spacing-3xl)' }}>
            <h3 style={{
              textAlign: 'center',
              fontSize: '2rem',
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--primary-purple)'
            }}>
              Sản Phẩm Nghệ Sĩ
            </h3>

            <div className="grid grid-3 portfolio-grid">
              {/* Video 1 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/AmMTORKZ5Go?si=QLMyPnLQ5DjORP-6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="portfolio-info">
                  <h4>Hạ Cánh</h4>
                  <p>Mason Nguyễn ft NOT AFRAID & Chariot</p>
                </div>
              </div>

              {/* Video 2 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/edM8W8WwfsQ?si=rqwFUWk3FDm5V4Kg"
                    title="Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Chưa bao giờ mẹ kể</h4>
                  <p>Quân A.P & Cara</p>
                </div>
              </div>
              {/* Video 3 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/ABuY4KUUVcI?si=NaLY09vwZOlVWDRn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="portfolio-info">
                  <h4>Một Ngày Chẳng Nắng</h4>
                  <p>Pháo </p>
                </div>
              </div>
              {/* Video 4 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/ScthmJSVoYs?si=iztjBSC7i8xD9W-Q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="portfolio-info">
                  <h4>SỬA SANG ĐÀNG HOÀNG</h4>
                  <p>GILL</p>
                </div>
              </div>
              {/* Video 5 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/1xh0u88e6Q4?si=68mx07nqFG5UMGbY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="portfolio-info">
                  <h4>Những Câu Nói Anh Từng Chờ</h4>
                  <p>Dương Domic</p>
                </div>
              </div>
              {/* Video 6 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/czuKlo08XMo?si=o2fJpBKpOwbzJeiG" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="portfolio-info">
                  <h4>Píc Cờ Bô , Píc Cơ Bồ</h4>
                  <p>Cường Seven ft VNA</p>
                </div>
              </div>  {/* Video 6 */}
            </div>  {/* ĐÓNG grid Nghệ Sĩ */}
          </div>  {/* ĐÓNG phần Nghệ Sĩ */}

          {/* Phần 2: Sản Phẩm TVC */}
          <div>
            <h3 style={{
              textAlign: 'center',
              fontSize: '2rem',
              marginBottom: 'var(--spacing-xl)',
              color: 'var(--primary-purple)'
            }}>
              Sản Phẩm TVC
            </h3>

            <div className="grid grid-3 portfolio-grid">  {/* ← THÊM grid container */}
              {/* Video 7 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/SJO_5Xr8Rfc?si=VPKOBFLExqFIDBlq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="portfolio-info">
                  <h4>ĐI BAO XA (DA BOUNCY)</h4>
                  <p>GILL x RPT ORIJINN x RZ MAS</p>
                </div>
              </div>
              {/* Video 8 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/QUOqxK5nEak?si=H9jF_VHzlpFDSnep" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="portfolio-info">
                  <h4>LAZADA 11.11 - 1 NGÀY SALE TO</h4>
                  <p>SEVENTEEN</p>
                </div>
              </div>
              {/* Video 9 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/kzF6cjUEP_Q?si=6YVVBUDOBxCwSekE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="portfolio-info">
                  <h4>Có TIGER, Tết ăn cơm nhà mới là Tết nhất</h4>
                </div>
              </div>
              {/* Video 10 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe width="560" height="315" src="https://www.youtube.com/embed/krt1pHIBjMg?si=LJK_HJdjH1mDzEyf" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
                <div className="portfolio-info">
                  <h4>MAXSUN ĐI CÙNG TA</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Bảng Giá</h2>
            <p className="section-subtitle">
              Các gói dịch vụ linh hoạt phù hợp với mọi nhu cầu
            </p>
          </div>

          <div className="pricing-tabs-container">
            {/* Tabs */}
            <div className="pricing-tabs">
              <div className="pricing-tab active" data-tab="tab1">
                <h3>Thu Âm Nhạc Cụ</h3>
              </div>
              <div className="pricing-tab" data-tab="tab2">
                <h3>Phối Beat</h3>
              </div>
              <div className="pricing-tab" data-tab="tab3">
                <h3>Gói Studio</h3>
              </div>
            </div>

            {/* Tab Content - Images */}
            <div className="pricing-tab-content">
              <div className="pricing-image active" data-content="tab1">
                <img src="/assets/pricing-nhaccu.png" alt="Thu Âm Nhạc Cụ" />
              </div>
              <div className="pricing-image" data-content="tab2">
                <img src="/assets/pricing-beat.png" alt="Phối Beat" />
              </div>
              <div className="pricing-image" data-content="tab3">
                <img src="/assets/pricing-vocal.png" alt="Thu Âm Vocal" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Liên Hệ & Đặt Lịch</h2>
            <p className="section-subtitle">
              Hãy liên hệ với chúng tôi để được tư vấn chi tiết
            </p>
          </div>

          <div className="contact-container">
            {/* Left: Contact Info */}
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Địa Chỉ</h4>
                  <p>145 ngõ 169 đường Hoàng Mai, Hoàng Văn Thụ, Hoàng Mai, Hanoi, Vietnam</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Điện Thoại</h4>
                  <p>(+84) 81 883 6868</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>lowarecordings@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⏰</div>
                <div>
                  <h4>Giờ Làm Việc</h4>
                  <p>Thứ 2 - Chủ Nhật: 9:00 - 22:00</p>
                </div>
              </div>
            </div>

            {/* Right: Image + Messenger Button */}
            <div className="contact-image-section">
              <div className="contact-image-wrapper">
                <img src="/assets/contact-image.jpg" alt="LOWA Recordings Studio" />
              </div>
              <a
                href="https://www.facebook.com/messages/t/624755474835140"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-large messenger-btn"
              >
                <i className="fab fa-facebook-messenger"></i> Chat Messenger
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="social-icons-grid">
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="Instagram">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="YouTube">
                <i className="fab fa-youtube"></i>
              </a>
              <a href="https://www.facebook.com/lowa.recordings" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="Facebook">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="social-box" aria-label="TikTok">
                <i className="fab fa-tiktok"></i>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2021 LOWA Recordings</p>
            <p>Designed by NgTruongGiang from AITG</p>
            <div className="footer-legal">
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Cookies Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
