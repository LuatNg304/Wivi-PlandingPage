# 📑 BẢN MÔ TẢ CHI TIẾT NỘI DUNG LANDING PAGE WIVI (PHIÊN BẢN V2)

> **Tên sản phẩm:** WIVI — Nền tảng Quản trị Tài chính Cá nhân Tự Động & Kỷ Luật  
> **Phiên bản:** v2 (WIVI 2.0)  
> **Ngăn xếp công nghệ:** React + TypeScript + Vite + Tailwind CSS + Lucide Icons + Three.js (3D Interactive Model)  
> **Định hướng phong cách:** Apple-inspired Minimalist, Sang trọng, Hiện đại, Trực quan hóa dữ liệu và Tương tác cao  

---

## 📌 TỔNG QUAN KIẾN TRÚC TRANG LANDING PAGE

Trang Landing Page của WIVI được xây dựng theo dòng chảy tâm lý khách hàng (Customer Journey Funnel):
1. **Thu hút & Tạo ấn tượng ban đầu (Awareness):** Announcement Banner & Hero Section với Mô hình 3D tương tác và Marquee đối tác ngân hàng.
2. **Khơi gợi vấn đề & Giới thiệu giải pháp (Consideration):** Features General & Features Navs (Bóc tách công nghệ AI OCR + Phương pháp 6 Hũ + Chuỗi Kỷ luật).
3. **Trải nghiệm thực tế & Trực quan hóa giá trị (Engagement):** Calculator Section (Mô phỏng phân bổ thu nhập 6 hũ thời gian thực).
4. **Xây dựng niềm tin & Bằng chứng xã hội (Trust & Social Proof):** Testimonials Section & Lưới thông số 2x2.
5. **Chuyển đổi & Chốt hành động (Conversion):** Bảng giá 3 tầng (Pricing) & FAQ giải tỏa rào cản do dự & Banner tải app (HeroSectionAlt).
6. **Điều hướng mở rộng & Lưu giữ liên hệ (Retention):** 5-Column Footer & Form nhận bản tin Newsletter.

---

## 🔍 CHI TIẾT NỘI DUNG TỪNG SECTION

---

### 1. 📢 ANNOUNCEMENT BANNER (Thanh thông báo nổi đầu trang)
- **Vị trí:** Ghim cố định ở đỉnh màn hình (`fixed top-0`), nền kính mờ `backdrop-blur-md` tinh tế.
- **Badge:** `WIVI 2.0` (Màu xanh dương đậm nổi bật).
- **Nội dung hiển thị:**
  - Tiêu đề ngắn: **Chính thức ra mắt**
  - Thông điệp phụ: *Kỷ luật tài chính cùng AI Vision & Hũ tự động*
- **Kêu gọi hành động (CTA):** Nút bo tròn nhỏ `Trải nghiệm →` trỏ thẳng tới section `#pricing`.
- **Tương tác:** Nút đóng `(X)` cho phép người dùng tắt banner khi không có nhu cầu.

---

### 2. 🧭 NAVBAR (Thanh điều hướng toàn trang)
- **Thiết kế:** Dạng viên con nhộng (Pill Floating Nav), viền mảnh, bo tròn tối đa, nền trắng mờ 95% chuẩn Apple.
- **Logo thương hiệu:** Logo chữ **WIVI** đậm nét, hiện đại.
- **Menu điều hướng Desktop:**
  1. `Tính Năng` → `#features`
  2. `Phương Pháp` → `#jars`
  3. `Mô Phỏng` → `#calculator`
  4. `Bảng Giá` → `#pricing`
  5. `Đánh Giá` → `#testimonials`
  6. `Hỏi Đáp` → `#faq`
- **Phiên bản Mobile:** Menu Hamburger linh hoạt, khi mở sẽ trượt xuống danh sách liên kết kèm nút nổi bật **"Tải WIVI Miễn Phí"** (`#download`).

---

### 3. 🚀 HERO SECTION (Khu vực chào sân & Đối tác)
- **Vị trí:** Section mở đầu trang (`#hero`), nền chuyển sắc nhẹ (`from-blue-50/40 via-white to-white`) cùng hiệu ứng hào quang mờ (Ambient Glow).
- **Cột Trái (Nội dung & Kêu gọi hành động):**
  - **H1 Headline:** `Làm chủ tài chính cùng WIVI` (với từ "WIVI" nhấn xanh dương hoàng gia).
  - **Subtitle (Đoạn mô tả):**
    > *"Phương pháp Hũ kết hợp AI thị giác bóc tách hoá đơn 2s tự động. Xây dựng thói quen tài chính kỷ luật vững vàng và tự do thực sự."*
  - **Nút CTA chính (Primary CTA):** `Tải App Miễn Phí` (`#download`) — Viên con nhộng xanh dương, đổ bóng tương tác mượt.
  - **Nút CTA phụ (Secondary CTA):** `Xem Hũ Tự Động` (`#jars`) — Dạng viền xám tinh tế.
- **Cột Phải (Trực quan hóa công nghệ 3D):**
  - Frame bo cong 3D đa lớp (`HeroVisualFrame`) với hiệu ứng thẻ phụ ló góc (Peeking Card).
  - Tích hợp **Mô hình 3D tương tác trực tiếp (`Wivi3DModel`)** render qua Three.js từ file `.glb`, cho phép xoay/tương tác mượt mà trên nền Gradient Deep Blue.
- **Chân Section - Dải Marquee Đối tác Ngân hàng (`ClientsSection`):**
  - Chạy vô tận từ phải sang trái (Infinite Seamless Marquee).
  - Hiển thị logo và tên 9 ngân hàng hàng đầu tại Việt Nam: **Vietcombank, Techcombank, MB Bank, VPBank, ACB, BIDV, TPBank, VietinBank, Agribank**.

---

### 4. ⚡ FEATURES GENERAL (Trụ cột công nghệ & Minh họa Dashboard)
- **Vị trí:** `#features`.
- **Card Trực quan Lớn (Featured Visual Showcase):**
  - **Tiêu đề lớn:** `Quản lý tài chính không còn là gánh nặng tính toán`
  - **Nội dung:** Giải tỏa nỗi sợ ghi chép phức tạp hoặc dùng bảng tính Excel rườm rà. WIVI tự động hóa trong 2 giây.
  - **Cam kết nhanh:** *Không cần kiến thức kế toán • Tiết kiệm 45 phút mỗi tuần • Bảo mật tuyệt đối trên thiết bị.*
  - **Widget trực quan (Live Preview Widget):** Mô phỏng bảng tiến độ ngân sách tháng 09:
    - *Hũ Thiết Yếu (55%):* Đã dùng 68% (Thanh tiến độ xanh dương).
    - *Hũ Tự Do Tài Chính (10%):* Đạt 100% mục tiêu (Thanh tiến độ ngọc lục bảo).
    - *Hũ Hưởng Thụ (10%):* Đã dùng 72% (Thanh tiến độ xanh da trời).
- **Lưới Tính Năng 1/3 + 2/3 (Bento-style Grid):**
  - **Cột trái:** Tiêu đề dẫn dắt: `Trụ Cột Công Nghệ Kiến Tạo Kỷ Luật`.
  - **4 Khối IconBlock chi tiết:**
    1. **Tự Động Hoá Hũ Tài Chính:** Phân chia tự động 55% Thiết yếu, 10% Tự do, 10% Đầu tư/Tiết kiệm dài hạn, 10% Giáo dục, 10% Hưởng thụ, 5% Cho đi.
    2. **AI OCR Vision Quét Hoá Đơn 2s:** Tự động nhận diện tổng tiền, đơn vị bán lẻ (siêu thị, quán ăn, đổ xăng) và tự gán vào hũ tương ứng.
    3. **Chuỗi Kỷ Luật & Điểm Thói Quen:** Xây dựng văn hóa quản lý tiền bạc qua chuỗi Streak hàng ngày, mở khóa huy hiệu và đo điểm sức khỏe tài chính.
    4. **Dự Báo Bội Chi & Ngân Sách Ngày:** Tính toán hạn mức chi tiêu an toàn theo từng ngày để đảm bảo người dùng không bị "cháy túi" trước kỳ lương mới.

---

### 5. 🎯 FEATURES NAVS (Khám phá tính năng tương tác qua Tabs)
- **Vị trí:** `#jars`.
- **Tiêu đề:** `Cá nhân hoá cùng WIVI để kiểm soát dòng tiền tối ưu`.
- **Mô tả dẫn:** Hệ thống được tối ưu hóa theo phương pháp khoa học, giảm thiểu áp lực tinh thần khi theo dõi tiền bạc.
- **Hệ thống 3 Tabs tương tác chuyển đổi mượt mà:**
  - **Tab 1: Phương Pháp Hũ T. Harv Eker Tự Động**
    - *Nội dung:* Không cần tính nhẩm; tiền về tài khoản là tự động chia đều vào 6 quỹ khoa học.
    - *Widget xem trước:* Bảng tỷ lệ phân bổ chi tiết (NEC 55%, FFA 10%, LTSS 10%, EDU 10%).
  - **Tab 2: AI OCR Nhận Diện Hoá Đơn Trong 2 Giây**
    - *Nội dung:* Chụp hóa đơn tức thì, AI bóc tách VAT, đối tác, số tiền và gắn trực tiếp vào hũ.
    - *Widget xem trước:* Thẻ bóc tách biên lai Highlands Coffee Landmark (115.000 đ), tự động chỉ định hũ *Hưởng Thụ (PLAY - 10%)* với độ tin cậy AI đạt **99.4%**.
  - **Tab 3: Chuỗi Kỷ Luật & Quản Trị Mục Tiêu Ước Mơ**
    - *Nội dung:* Quản lý các cột mốc lớn (mua nhà, mua xe, du lịch); tự động tính thời gian hoàn thành.
    - *Widget xem trước:* Tiến độ quỹ *"Du lịch Nhật Bản"* (28.500.000 / 35.000.000 đ - 81%, còn 2 tháng) kèm huy hiệu *"Chuỗi Kỷ Luật: 24 Ngày Liên Tiếp"*.
  - **Link dẫn tiếp:** `Thử tính năng mô phỏng →` trỏ tới `#calculator`.

---

### 6. 🧮 CALCULATOR SECTION (Bộ giả lập phân bổ thu nhập 6 Hũ)
- **Vị trí:** `#calculator`.
- **Mục tiêu:** Tạo trải nghiệm "Hands-on" trực tiếp, giúp người dùng tự thấy dòng tiền của chính mình được phân chia ra sao.
- **Thu nhập mẫu cấu hình sẵn (Presets):**
  - `15 Triệu` (15.000.000 đ)
  - `25 Triệu` (25.000.000 đ - Mặc định)
  - `40 Triệu` (40.000.000 đ)
  - `60 Triệu` (60.000.000 đ)
  - Thanh trượt Range Slider tự do từ 5.000.000 đ đến 100.000.000 đ.
- **Bảng phân bổ 6 Hũ thời gian thực:**
  1. **Hũ NEC — Chi Tiêu Thiết Yếu (55%):** Tiền thuê nhà, hóa đơn điện nước, ăn uống cơ bản, đi lại xăng xe.
  2. **Hũ FFA — Tự Do Tài Chính (10%):** Đầu tư sinh lời dài hạn, tích lũy cổ phiếu, bất động sản.
  3. **Hũ LTSS — Tiết Kiệm Dài Hạn (10%):** Quỹ dự phòng khẩn cấp 6 tháng chi phí, tích lũy mua sắm tài sản lớn.
  4. **Hũ EDU — Phát Triển Bản Thân (10%):** Mua sách, tham gia khóa đào tạo chuyên môn, chứng chỉ.
  5. **Hũ PLAY — Hưởng Thụ Cuộc Sống (10%):** Du lịch nghỉ dưỡng, ăn uống cùng bạn bè, giải trí thư giãn.
  6. **Hũ GIVE — Cho Đi & Giúp Đỡ (5%):** Thiện nguyện, biếu gia đình, quà cáp tương thân tương ái.
- **Card Đánh giá Sức khỏe Tài chính bên phải:**
  - Tổng kết số tiền tích lũy và đầu tư mỗi năm.
  - Lời khuyên cá nhân hóa: Giữ tỷ lệ thiết yếu dưới 55% để gia tăng tốc độ độc lập tài chính.

---

### 7. 🌟 TESTIMONIALS & STATS (Đánh giá thực tế & Thông số uy tín)
- **Vị trí:** `#testimonials`.
- **Cột Trái — Câu chuyện khách hàng thực tế:**
  - Tiêu đề: `Kiểm Soát Tài Chính Đột Phá`.
  - Khách hàng: **Nguyễn Thuỳ Dung** (Senior Product Designer • TP. Hồ Chí Minh).
  - Trích dẫn:
    > *"Trước đây mỗi lần mở ví ra là mình thấy stress vì không biết tiền đã bay đi đâu. Dùng WIVI được 2 tháng, tính năng quét hoá đơn 2s và tự chia Hũ đã giúp mình tiết kiệm được 35% lương mà không phải kiêng khem khổ sở!"*
- **Cột Phải — Lưới Big Stats 2x2:**
  - `Mỗi ngày`: Theo dõi chi tiêu và giữ thói quen tiết kiệm đều đặn hơn.
  - `Tự động`: AI phân loại giao dịch và gợi ý cách chia hũ theo nhu cầu thực tế.
  - `1 App`: Quản lý chi tiêu, tiết kiệm và mục tiêu tài chính trong một nơi duy nhất.
  - `Linh hoạt`: Tùy chỉnh chiến lược tài chính theo phong cách sống và mục tiêu cá nhân.

---

### 8. 💎 PRICING SECTION (Bảng giá 3 tầng minh bạch)
- **Vị trí:** `#pricing`.
- **Thông điệp:** `Minh Bạch & Tiết Kiệm Tối Đa` — *Đầu tư một cốc cà phê mỗi tháng để tiết kiệm hàng triệu đồng và thảnh thơi cả đời.*
- **So sánh 3 gói dịch vụ:**

| Tiêu chí | Gói Cơ Bản (Starter) | WIVI Kỷ Luật Premium | WIVI Kỷ Luật Pro (Khuyên Dùng) |
| :--- | :--- | :--- | :--- |
| **Giá thành** | **0 đ** / Trọn đời | **29.000 đ** / tháng | **59.000 đ** / tháng *(Dùng thử 14 ngày)* |
| **Màu sắc thẻ** | Nền trắng viền xám | Gradient Xanh Cobalt (`#1e3a8a` → `#0284c7`) | Nền Dark Navy Sang Trọng (`#020617` → `#142d5c`), viền sáng nổi bật |
| **Phân bổ Hũ** | Tiêu chuẩn cơ bản | Toàn bộ tính năng hũ nâng cao | Toàn quyền nâng cao |
| **Quét hoá đơn AI OCR** | 30 lượt / tháng | **Không giới hạn lượt quét** (2s) | **Không giới hạn** (Ưu tiên xử lý tốc độ cao) |
| **Cảnh báo & Dự báo** | Không | Cảnh báo thời gian thực & dự báo số dư | Cảnh báo chuyên sâu + phân tích xu hướng |
| **Mục tiêu & Quỹ** | Cơ bản | Đa mục tiêu & Quỹ khẩn cấp | Không giới hạn mục tiêu |
| **Đồng bộ dữ liệu** | Lưu cục bộ trên thiết bị | Cloud Sync (iOS, Android, Web) | Tự động đồng bộ Ngân hàng & Ví điện tử |
| **Trợ lý tài chính** | Không | Không | **AI Cố vấn tài chính chuyên sâu 24/7** |
| **Quản trị gia đình** | Không | Không | Quản trị tài chính gia đình & đa thành viên |
| **Hỗ trợ khách hàng** | Tiêu chuẩn cộng đồng | Ưu tiên | Hỗ trợ 1:1 từ chuyên gia tài chính cấp cao |

- **Chân Section:** Liên hệ gói Doanh nghiệp / Gia đình: *"Bạn cần gói tài chính cho cả gia đình hoặc đội nhóm kinh doanh? -> Liên hệ tư vấn viên".*

---

### 9. ❓ FAQ SECTION (Giải đáp thắc mắc thường gặp)
- **Vị trí:** `#faq`.
- **Thiết kế:** Giao diện Accordion 2 cột mở/đóng mượt mà.
- **Bộ 5 câu hỏi cốt lõi:**
  1. **Phương pháp Hũ tài chính trong WIVI hoạt động như thế nào?**  
     -> Giải thích cơ chế 6 hũ T. Harv Eker, tỷ lệ mặc định khoa học và khả năng tùy chỉnh linh hoạt.
  2. **Tính năng AI OCR bóc tách hoá đơn có chính xác không?**  
     -> Nhận diện độ chính xác trên 99.4% trong 2 giây, tối ưu cho hóa đơn tại Việt Nam (Vietcombank, MoMo, siêu thị, cây xăng...).
  3. **Dữ liệu tài chính cá nhân của tôi có được bảo mật an toàn không?**  
     -> Cam kết mã hóa đầu cuối AES-256 trên thiết bị, không lưu trữ mật khẩu ngân hàng, không OTP, không bán dữ liệu.
  4. **Tôi có thể dùng WIVI trên nhiều thiết bị không?**  
     -> Hỗ trợ đồng bộ Cloud đa nền tảng qua Apple ID hoặc Google (iPhone, Android, Tablet, Web).
  5. **Nếu tôi vượt quá hạn mức của một hũ thì WIVI sẽ xử lý ra sao?**  
     -> Cảnh báo bội chi lập tức và đề xuất trích bù thông minh từ hũ Giải trí sang Thiết yếu hoặc giảm mức chi an toàn các ngày tiếp theo.

---

### 10. 📲 CALL TO ACTION BANNER (HeroSectionAlt)
- **Vị trí:** `#download` (Ngay trước Footer).
- **Tiêu đề:** `Sẵn sàng làm chủ tài chính cùng WIVI?`
- **Mô tả:** *Gia nhập cộng đồng hơn 50.000 người trẻ kiểm soát dòng tiền tự động, xây dựng chuỗi thói quen kỷ luật và chạm tới tự do tài chính.*
- **Nút tải ứng dụng:**
  - Huy hiệu chính thức `Google Play Store` (`/google-play-badge.svg`).
  - Huy hiệu chính thức `Apple App Store` (`/app-store-badge.svg`).
- **Cam kết uy tín:** *Miễn phí trọn đời • Không cần thẻ tín dụng • Cài đặt trong 30 giây.*

---

### 11. 🏢 FOOTER SECTION (Chân trang 5 cột hoàn chỉnh)
- **Vị trí:** Chân trang.
- **Cột 1 (Thương hiệu & Tải app):**
  - Logo WIVI + Slogan cốt lõi.
  - Hai badge App Store và Google Play.
- **Cột 2 (Hệ Sinh Thái):** Phương Pháp Hũ, AI OCR Quét Bill, Mô Phỏng Phân Bổ, Bảng Giá Dịch Vụ.
- **Cột 3 (Công Ty):** Về WIVI, Tuyển Dụng *(Badge "Tuyển dụng!")*, Chính Sách Bảo Mật, Điều Khoản Sử Dụng.
- **Cột 4 & 5 (Đăng ký nhận tin tức):**
  - Form Newsletter nhập email nhận bản tin mẹo tài chính hàng tuần.
  - Phản hồi trạng thái xác nhận tức thì khi đăng ký thành công.
- **Dòng bản quyền:** Bản quyền thuộc về WIVI 2026. Mọi quyền được bảo lưu.

---

## 🎨 THÔNG SỐ GIAO DIỆN & TỔNG THỂ VISUAL DESIGN
- **Gam màu chủ đạo (Color Palette):**
  - `Primary Blue`: `#2563eb` / `#0066cc` (Nút bấm chính, điểm nhấn, liên kết kích hoạt).
  - `Emerald Accent`: `#10b981` (Tự do tài chính, chỉ số tích cực).
  - `Sky Blue Accent`: `#0284c7` (Hưởng thụ, tính năng thông minh).
  - `Background Canvas`: Phối hợp giữa `#ffffff` và `slate-50` tạo nhịp điệu không gian thoáng đãng.
  - `Dark Hero Elements`: Gradient sâu thẳm (`#020617` đến `#1e3a8a`) làm nổi bật gói Pro và mô hình 3D.
- **Hiệu ứng đặc trưng (Interactive Micro-interactions):**
  - Hiệu ứng kính mờ (Glassmorphism & Backdrop blur) trên Navbar và Announcement Banner.
  - Vòng quay Marquee mượt mà không điểm dừng cho các logo ngân hàng.
  - Mô hình 3D tương tác đa chiều qua Three.js.
  - Accordion FAQ mượt mà, phản hồi lập tức.
  - Bộ giả lập tính toán phản hồi trực tiếp khi kéo thanh trượt thu nhập.
