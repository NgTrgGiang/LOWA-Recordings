'use client';

export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <a href="#home" className="nav-logo">
            <img src="/assets/LOGO-03.png" alt="LOWA Recordings Logo" />
          </a>

          <ul className="nav-menu">
            <li><a href="#home" className="nav-link">Trang Chủ</a></li>
            <li><a href="#services" className="nav-link">Dịch Vụ</a></li>
            <li><a href="#partners" className="nav-link">Đối Tác</a></li>
            <li><a href="#portfolio" className="nav-link">Portfolio</a></li>
            <li><a href="#equipment" className="nav-link">Thiết Bị</a></li>
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
            <h2 className="section-title">Dịch Vụ Của Chúng Tôi</h2>
            <p className="section-subtitle">
              Cung cấp đầy đủ các dịch vụ sản xuất âm nhạc chuyên nghiệp
            </p>
          </div>

          <div className="grid grid-3">
            <div className="card service-card">
              <div className="service-icon">🎙️</div>
              <h3>Recording</h3>
              <p>Thu âm chất lượng cao với thiết bị chuyên nghiệp và kỹ thuật viên giàu kinh nghiệm</p>
            </div>

            <div className="card service-card">
              <div className="service-icon">🎚️</div>
              <h3>Mixing & Mastering</h3>
              <p>Trộn và làm chủ âm thanh để tạo ra sản phẩm hoàn hảo, sẵn sàng phát hành</p>
            </div>

            <div className="card service-card">
              <div className="service-icon">🎵</div>
              <h3>Music Production</h3>
              <p>Sản xuất âm nhạc từ ý tưởng đến sản phẩm hoàn chỉnh với đội ngũ producer chuyên nghiệp</p>
            </div>

            <div className="card service-card">
              <div className="service-icon">🎧</div>
              <h3>Podcast Recording</h3>
              <p>Ghi âm podcast chất lượng cao với không gian cách âm tối ưu</p>
            </div>

            <div className="card service-card">
              <div className="service-icon">🎹</div>
              <h3>Beat Making</h3>
              <p>Sáng tác và sản xuất beat theo yêu cầu với nhiều thể loại khác nhau</p>
            </div>

            <div className="card service-card">
              <div className="service-icon">🎬</div>
              <h3>Audio Post-Production</h3>
              <p>Hậu kỳ âm thanh cho phim, quảng cáo và các dự án media</p>
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
                <img src="/assets/partner-1.png" alt="Partner 1" />
              </div>
              <div className="partner-logo">
                <img src="/assets/partner-2.png" alt="Partner 2" />
              </div>
              <div className="partner-logo">
                <img src="/assets/partner-3.png" alt="Partner 3" />
              </div>
              <div className="partner-logo">
                <img src="/assets/partner-4.png" alt="Partner 4" />
              </div>
              <div className="partner-logo">
                <img src="/assets/partner-5.png" alt="Partner 5" />
              </div>
              <div className="partner-logo">
                <img src="/assets/partner-6.png" alt="Partner 6" />
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
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID_2"
                    title="Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Tên bài hát 2</h4>
                  <p>Nghệ sĩ 2</p>
                </div>
              </div>
              {/* Video 8 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID_2"
                    title="Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Tên bài hát 2</h4>
                  <p>Nghệ sĩ 2</p>
                </div>
              </div>
              {/* Video 9 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID_2"
                    title="Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Tên bài hát 2</h4>
                  <p>Nghệ sĩ 2</p>
                </div>
              </div>
              {/* Video 10 */}
              <div className="card portfolio-item" data-category="pop">
                <div className="portfolio-video">
                  <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/VIDEO_ID_2"
                    title="Video 2"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>
                <div className="portfolio-info">
                  <h4>Tên bài hát 2</h4>
                  <p>Nghệ sĩ 2</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section id="equipment" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Thiết Bị Âm Thanh</h2>
            <p className="section-subtitle">
              Những sản phẩm chúng mình tin tưởng dùng
            </p>
          </div>

          <div className="grid grid-4">
            {[1, 2, 3, 4].map((item) => (
              <a key={item} href="https://shopee.vn/" target="_blank" rel="noopener noreferrer" className="equipment-link">
                <div className="card equipment-card">
                  <div className="equipment-image">
                    <img src="/assets/equipment-1.jpg" alt="Loại sản phẩm" />
                  </div>
                  <h4>Tên sản phẩm</h4>
                  <p className="equipment-category">Loại sản phẩm</p>
                </div>
              </a>
            ))}
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

            <form id="booking-form" className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-name" className="form-label">Họ và Tên *</label>
                  <input type="text" id="booking-name" className="form-input" placeholder="Nguyễn Văn A" required />
                </div>

                <div className="form-group">
                  <label htmlFor="booking-email" className="form-label">Email *</label>
                  <input type="email" id="booking-email" className="form-input" placeholder="example@email.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-phone" className="form-label">Số Điện Thoại *</label>
                  <input type="tel" id="booking-phone" className="form-input" placeholder="0987654321" required />
                </div>

                <div className="form-group">
                  <label htmlFor="booking-service" className="form-label">Dịch Vụ *</label>
                  <select id="booking-service" className="form-select" required>
                    <option value="">Chọn dịch vụ</option>
                    <option value="recording">Recording</option>
                    <option value="mixing">Mixing & Mastering</option>
                    <option value="production">Music Production</option>
                    <option value="podcast">Podcast Recording</option>
                    <option value="beat">Beat Making</option>
                    <option value="post">Audio Post-Production</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="booking-date" className="form-label">Ngày *</label>
                  <input type="date" id="booking-date" className="form-input" required />
                </div>

                <div className="form-group">
                  <label htmlFor="booking-time" className="form-label">Giờ *</label>
                  <select id="booking-time" className="form-select" required>
                    <option value="">Chọn giờ</option>
                    <option value="09:00">09:00</option>
                    <option value="10:00">10:00</option>
                    <option value="11:00">11:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="15:00">15:00</option>
                    <option value="16:00">16:00</option>
                    <option value="17:00">17:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="booking-notes" className="form-label">Ghi Chú</label>
                <textarea
                  id="booking-notes"
                  className="form-textarea"
                  placeholder="Thông tin thêm về dự án của bạn..."
                />
              </div>

              <div className="form-buttons">
                <button type="submit" className="btn btn-primary btn-large">Đặt Lịch Ngay</button>
                <a
                  href="https://www.facebook.com/messages/t/624755474835140"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-large"
                >
                  <i className="fab fa-facebook-messenger"></i> Chat Messenger
                </a>
              </div>
            </form>
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
