---
name: skill-4s-slide
description: "Thiết kế bài thuyết trình 16:9 chuyên nghiệp, đậm chất Swiss editorial, bằng Renewal Green #BAD435, Graphite Teal #002E32, Pure White #FFFFFF, Graphite Industrial #1C1C1C và Cool Light Grey #F2F5F4. Dùng khi người dùng gọi $skill-4s-slide hoặc yêu cầu slide theo bộ nhận diện 4S mới."
---

# SKILL-4S-SLIDE — Professional PPT Art Direction

> **Đây là SKILL THIẾT KẾ**, không phải skill xử lý biên bản `$skill-4s`.
> Mục tiêu: cho thấy sự khác biệt giữa slide trắng/chữ đen cơ bản và slide có design system. Demo hoàn toàn không cần API, tài khoản Google hay công cụ trả phí.

## 1. Bài toán và đầu ra

Nhận **nội dung Markdown** và biến nó thành một bài thuyết trình **3 slide 16:9** phù hợp chiếu trên màn hình lớn. Nội dung phải giữ nguyên ý, nhưng thiết kế phải sắc nét, có chủ đích như một studio thương hiệu.

- Đối với demo: xuất `demos/skill-4s-slide/with-skill/index.html` (HTML/CSS/JS tự chứa, mở trình duyệt, phím mũi tên).
- Nếu người dùng yêu cầu PowerPoint thực sự: xuất thêm `.pptx` chỉnh sửa được bằng công cụ sẵn có, không lấy ảnh chụp slide làm toàn bộ nội dung.
- Không tự động tải thư viện, không yêu cầu OAuth, không phụ thuộc ảnh stock hay dịch vụ bên ngoài.
- Không gọi Guizang hoặc skill thiết kế khác cho demo so sánh này.

## 2. 4S — Quy trình bắt buộc

**S1 / SÀNG LỌC:** đọc `demos/skill-4s-slide/noi-dung.md`. Xác định một thông điệp chính/trang. Giữ nguyên định nghĩa Prompt, Instructions, Skill và mọi nguyên tắc kiểm chứng. Không bịa số liệu.

**S2 / SẮP XẾP:** ba slide theo đúng nhịp:
- **01 / IMPACT:** đại tiêu đề “AI KHÔNG CHỈ LÀ MỘT Ô CHAT” và thông điệp “Từ Prompt đến Skill”.
- **02 / EXPLAIN:** so sánh Prompt / Instructions / Skill bằng hệ 3 bậc, một yếu tố được làm nổi bật.
- **03 / APPLY:** đầu vào → bốn bước 4S → đầu ra, thêm nguyên tắc “không tự bịa”.
Không nhồi chữ hoặc làm cả ba trang cùng một layout.

**S3 / STYLIZE:** dùng design system dưới đây. Hãy thiết kế, không chỉ tô màu. Chú trọng nhịp thị giác, khoảng trắng, thứ tự nhìn và cường độ tương phản.

**S4 / SOÁT:** xem lại cả ba trang bằng trình duyệt hoặc render. Sửa chữ tràn, font tiếng Việt, contrast, padding, mất nội dung và những phần lặp bố cục. Chỉ giao khi tất cả có thể đọc trên máy chiếu.

## 3. Design system — KHÓA MÀU (nguồn: bảng màu người dùng đưa)

| Tên | HEX | Vai trò |
|---|---|---|
| **Renewal Green** | `#BAD435` | Điểm nhấn lớn: tấm màu, số bước, vòng tròn, keyword |
| **Graphite Teal** | `#002E32` | Nền chủ đạo tối, trang bìa và kết |
| **Pure White** | `#FFFFFF` | Chữ trên nền tối, nền slide sáng |
| **Graphite Industrial** | `#1C1C1C` | Chữ trên nền sáng, mảng tương phản phụ |
| **Cool Light Grey** | `#F2F5F4` | Nền trang giải thích, đường và secondary surface |

**Không dùng bảng màu cũ**: #FF5B04, #075056, #233038, #FDF6E3, #F4D47C, #D3DDDD. Không tự thêm màu khác. Có thể dùng màu trong suốt của chính 5 màu trên.

### Ngôn ngữ hình ảnh
- **Swiss / Contemporary Tech Editorial**: typography to, gọn, mạnh; bố cục bất đối xứng; hình học có tiết chế; nhịp sáng–tối–sáng.
- Font: ưu tiên sans-serif (Arial, Helvetica, Inter nếu có); heading đậm 700–900, tight tracking; body nhẹ, dễ đọc; không dùng serif trang trí trong deck này.
- Tạo điểm đặc biệt bằng **lime panel bất đối xứng, oversized 01/02/03, các đường 1px, vòng tròn khuyết và grid kỹ thuật**; không dùng bóng đổ, gradient cầu vồng, biểu tượng robot hoặc ảnh stock.
- Trang 01: **Graphite Teal** + chữ **Pure White**, điểm nhấn **Renewal Green** chiếm vùng ảnh hình học đáng kể.
- Trang 02: **Cool Light Grey / Pure White**, chữ **Graphite Industrial** và **Graphite Teal**, một vùng lime nổi bật.
- Trang 03: **Pure White / Graphite Industrial**, vùng **Graphite Teal** cùng các mốc **Renewal Green** thể hiện chuỗi hành động.
- **Khoảng trắng**: không phủ 100% màn hình bằng nội dung; tối đa ~30–35 từ nội dung chính/trang (trừ nội dung có nhiều ý bắt buộc).
- Không dùng một mẫu “3 thẻ bo góc” cho tất cả slide. Ưu tiên typography, dải màu, panel góc vuông, đường kẻ mảnh.
- Mọi dòng chữ nội dung là HTML text thực, không gắn chữ vào ảnh. Giữ tiếng Việt có dấu.

## 4. Giao diện trình chiếu

- Nền trình chiếu mỗi trang tỉ lệ **16:9**; xử lý đúng khi nằm trong iframe.
- Chuyển trang bằng `← / →` và nút Previous/Next; có số trang.
- Không dùng thư viện ngoài hoặc gọi CDN.
- Mỗi slide là một `<section class="slide">` có headline và định nghĩa/đầu ra rõ ràng.
- Nếu có thể kiểm tra visual, ưu tiên 1600×900 và 1280×720; bảo đảm không overflow.

## 5. Demo trực tiếp trong Codex Web

**Đầu vào chung KHÔNG chứa bảng màu**: `demos/skill-4s-slide/noi-dung.md`. Điều này cố ý: phiên bản không skill chỉ biết nội dung và làm slide mặc định đơn giản; **phiên bản có skill sẽ tự áp dụng palette và art direction từ file này**.

Prompt:

> Dùng `$skill-4s-slide` tạo 3 slide từ `demos/skill-4s-slide/noi-dung.md`, lưu `demos/skill-4s-slide/with-skill/index.html`. Áp dụng đúng 5 màu và quy trình trong SKILL.md. Không dùng Guizang. Tạo mới từ nội dung, không sao chép bản HTML dự phòng có sẵn. Không sửa file khác.

**Nếu Codex không tự nhận tên skill**: yêu cầu đọc `.agents/skills/skill-4s-slide/SKILL.md` trực tiếp.

## 6. Ý nghĩa bài giảng

Điểm dạy học là: cùng **nguồn thông tin**, bản thường dùng màu trắng/đen và layout cơ bản; bản Skill áp dụng một **design system tái sử dụng**. Đây là ví dụ minh họa, không phải thí nghiệm chứng minh AI có skill luôn đẹp hơn.

Tránh đánh đồng `$skill-4s-slide` với `$skill-4s` (skill xử lý ghi chú).
