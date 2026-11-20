---
name: skill-4s-slide
description: "Thiết kế slide HTML 16:9 đẹp, nhất quán từ nội dung Markdown theo hệ màu 4S: Orange #FF5B04, Midnight Green #075056, Gunmetal #233038, Ivory Cream #FDF6E3, Sand Yellow #F4D47C, Light Silver #D3DDDD. Dùng khi được gọi $skill-4s-slide hoặc khi yêu cầu slide demo 4S theo bảng màu này."
---

# Skill-4S-Slide — Từ nội dung thành slide có art direction

**Mục đích:** Đóng gói một quy trình thiết kế thành Skill dễ hiểu cho học viên không biết code. Skill này độc lập với Guizang; trong demo A/B **không gọi Guizang hoặc skill khác**, tránh làm sai ý nghĩa so sánh.

## Khi dùng
- Khi người dùng yêu cầu `$skill-4s-slide`.
- Khi cần dựng slide HTML 16:9 từ một tài liệu Markdown với hệ màu 4S.

## 4S — Quy trình bắt buộc

### S1. SÀNG LỌC nội dung
Đọc toàn bộ file Markdown đầu vào. Giữ nguyên ý, ví dụ và sự thật. Mỗi slide chỉ có **một thông điệp nổi bật**. Không thêm dữ liệu thống kê hay trích dẫn không có nguồn.

### S2. SẮP XẾP câu chuyện
- Trang 1: mở bài mạnh — một tiêu đề lớn, một câu giải thích.
- Trang 2: so sánh hoặc cấu trúc 3 ý; làm nổi bật sự khác nhau.
- Trang 3: ứng dụng thực tế theo dòng đọc **đầu vào → quy trình → kết quả**.
- Có nhịp: trang giàu cảm xúc → trang làm rõ khái niệm → trang hành động.

### S3. SÁNG TẠO theo design system khóa cứng

**Palette lấy đúng từ ảnh tham chiếu:**

| Token | Màu | HEX | Vai trò |
|---|---|---|---|
| orange | Orange (Pantone) | `#FF5B04` | Nhấn 1 điểm quan trọng, không lạm dụng |
| midnight | Midnight Green | `#075056` | Nền đậm / mảng chủ đạo |
| gunmetal | Gunmetal | `#233038` | Text tối, nền xen kẽ |
| ivory | Ivory Cream | `#FDF6E3` | Nền sáng / chữ sáng |
| sand | Sand Yellow | `#F4D47C` | Nhấn nhẹ / số thứ tự |
| silver | Light Silver | `#D3DDDD` | Đường mảnh, phụ đề |

**Ngôn ngữ thị giác:**
- Editorial magazine, cao cấp, tối giản, tự tin.
- Tỷ lệ trình chiếu 16:9. Sử dụng font serif đẹp cho câu lớn (Georgia hoặc serif fallback) và sans-serif cho giải thích.
- Tạo tương phản bằng **kích thước chữ, khoảng trống, tỷ lệ khối và đường nét**; không dùng nhiều shadow, gradient sặc sỡ hay emoji.
- Nền Midnight Green hoặc Ivory Cream làm chủ đạo, Orange là màu điểm nhấn. Không dùng Orange cho đoạn văn dài.
- Ưu tiên bố cục bất đối xứng, title lớn, văn bản ngắn, căn lề nhất quán, 1–2 yếu tố trang trí hình học tinh tế.
- Tránh kiểu mặc định: hộp trắng bo góc lặp đi lặp lại, bullet dày, icon ngẫu nhiên.
- Font và layout phải phù hợp tiếng Việt.

### S4. SOÁT kết quả
- Không mất ý, không tự bịa thông tin, không sai dấu tiếng Việt.
- Không có đoạn chữ tràn, che nhau; đọc được khi chiếu.
- 3 trang có layout KHÁC NHAU nhưng cùng hệ typography/màu.
- Output là `index.html` tự chứa CSS và JS, điều khiển bằng phím trái/phải, có số trang.
- Không cần CDN, API key, Google OAuth, Node packages, hay hình bên ngoài.
- Nếu browser preview có sẵn, kiểm tra cả 3 trang trên kích thước 16:9.

## Cách chạy demo
Đọc `demos/skill-4s-slide/noi-dung.md` và ghi vào `demos/skill-4s-slide/with-skill/index.html`.

**Lời gọi trên Codex Web:**

> Dùng $skill-4s-slide tạo 3 slide từ demos/skill-4s-slide/noi-dung.md, xuất demos/skill-4s-slide/with-skill/index.html. Dùng đúng bảng màu có trong nội dung; chỉ dùng skill này, không dùng Guizang. Không copy file slide mẫu đã có: hãy tạo lại từ nội dung và quy tắc của skill.

## Ranh giới so sánh A/B
- A (**không skill**): dùng cùng nội dung, cùng palette, nhưng không được đọc/làm theo skill thiết kế.
- B (**có skill**): dùng cùng nội dung, cùng palette và tuân thủ thêm quy trình art direction 4S.
- Kết quả được dựng sẵn trong repository là **preview dự phòng cho buổi học**, không phải bằng chứng đo lường hay kết quả của phiên Codex live.
- Không cố tình làm xấu nhánh A; khác biệt cần đến tự nhiên từ hệ quy tắc thiết kế ở B.
