# DEMO 02 — Trắng đơn giản vs Skill màu xanh 4S (5–7 phút)

## Chuẩn bị
- Mở Codex Web, repository `phephanhoang/4s-demo`, branch `main` mới nhất.
- Mở file `demos/skill-4s-slide/noi-dung.md`. Chỉ có **nội dung**, không chứa bất kỳ bảng màu nào.
- Mở sẵn `demos/skill-4s-slide/index.html` hoặc route website `/slide-demo/` (chỉ dùng sau khi xác minh website đã deploy).
- Nên dùng **hai task Codex mới** để tránh lẫn ngữ cảnh. Chạy A xong rồi B.

## LƯỢT A — Không dùng Skill (2 phút)

Dán nguyên văn:

> Từ file `demos/skill-4s-slide/noi-dung.md`, tạo đúng 3 slide HTML 16:9 tại `demos/skill-4s-slide/no-skill/index.html`. Đây là bản mặc định dành cho người mới: **nền trắng, chữ đen, font Arial, trình bày cực kỳ đơn giản**, không trang trí, không dùng design system. KHÔNG đọc hay áp dụng bất kỳ Skill nào (kể cả Guizang và skill-4s-slide). Tạo mới từ brief, không sao chép bản preview có sẵn. Không sửa file khác.

Nêu rõ: “Đây là bản nền trắng đơn giản được yêu cầu trực tiếp, không có Skill thiết kế.”

## LƯỢT B — Sử dụng Skill-4S-Slide (2 phút)

Trong **task Codex mới**, dán:

> Từ file `demos/skill-4s-slide/noi-dung.md`, tạo đúng 3 slide HTML 16:9 tại `demos/skill-4s-slide/with-skill/index.html`. Áp dụng `$skill-4s-slide` và toàn bộ quy tắc thiết kế / 4S trong `.agents/skills/skill-4s-slide/SKILL.md`. Không dùng Guizang, không sao chép bản preview có sẵn. Không sửa file khác.

Nêu: “Bảng màu và phong cách **không nằm trong brief chung**, mà trong bộ hướng dẫn Skill có thể dùng lại.”

## SO SÁNH (1–3 phút)

Mở `demos/skill-4s-slide/index.html` hoặc route `/slide-demo/` sau khi build/deploy. Hai bên chuyển đồng bộ qua nút mũi tên.

Cho học viên nhìn 4 điểm: (1) hệ màu, (2) typography, (3) nhịp bố cục, (4) cách dẫn mắt và độ nhất quán.

**Thông điệp chốt:** “Cùng một nội dung, chỉ cần gọi một Skill đã được chuẩn hóa thiết kế, AI có thể tái sử dụng cùng tiêu chuẩn mà không phải viết lại yêu cầu dài.”

**Lưu ý trung thực:** bản trắng **được chủ động đặt yêu cầu đơn giản** để dạy sự khác biệt giữa đầu ra cơ bản và đầu ra theo design system; không dùng nó để tuyên bố Codex không có Skill sẽ luôn thiết kế xấu.

## Khi Skill không được nhận diện
> Đọc `.agents/skills/skill-4s-slide/SKILL.md` rồi tạo 3 slide từ `demos/skill-4s-slide/noi-dung.md`, lưu `demos/skill-4s-slide/with-skill/index.html`. Không sửa file khác.

## Cần nhớ
- `$skill-4s` = Skill **xử lý ghi chú họp**.
- `$skill-4s-slide` = Skill **thiết kế slide theo 5 màu xanh–lime chuyên nghiệp**.
- `demos/skill-4s-slide/index.html` = **bản minh họa dự phòng** cạnh nhau, không phải kết quả benchmark của lần chạy live.
