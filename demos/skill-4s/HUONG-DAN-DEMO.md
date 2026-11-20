# Demo 3–5 phút: Skill-4S cho người không biết code

## Mục tiêu trình diễn
Cho học viên thấy **một Skill là bộ hướng dẫn tái sử dụng**, không phải một câu trả lời AI riêng lẻ.

## Chuẩn bị (trước giờ học)
1. Mở **Codex Web** tại https://chatgpt.com/codex và chọn GitHub repository `phephanhoang/4s-demo`.
2. Chắc chắn phiên Codex đã lấy phiên bản `main` mới nhất có `.agents/skills/skill-4s/SKILL.md`.
3. Mở hai file trong GitHub: `.agents/skills/skill-4s/SKILL.md` và `demos/skill-4s/ghi-chu-hop.md`.

## Diễn kịch bản trực tiếp

**Phút 0–1 — Cho thấy đầu vào:** mở `demos/skill-4s/ghi-chu-hop.md`. Hỏi học viên: “Nếu mỗi lần làm biên bản đều phải viết lại hướng dẫn rất dài thì sao?”

**Phút 1–2 — Cho thấy Skill:** mở `.agents/skills/skill-4s/SKILL.md`. Nhấn mạnh file chỉ là **Markdown** gồm tên, mô tả, quy trình và tiêu chí tự kiểm tra. Không có mã lập trình.

**Phút 2–4 — Chạy trong Codex Web:** dán nguyên văn:

> Dùng $skill-4s xử lý file demos/skill-4s/ghi-chu-hop.md và lưu kết quả thành demos/skill-4s/ket-qua.md. Không sửa file khác.

Mở `demos/skill-4s/ket-qua.md` sau khi Codex hoàn thành.

**Phút 4–5 — Chốt bài:** hỏi học viên “Nếu thay ghi chú họp khác, chúng ta có cần viết lại 4 bước không?” → Không, chỉ thay đầu vào.

## Ba điều chỉ cần nhớ
- **Instruction:** quy tắc chung của trợ lý (ví dụ “luôn dùng tiếng Việt”).
- **Skill:** quy trình cho một loại việc (ở đây: Sàng lọc → Sắp xếp → Soạn → Soát).
- **Markdown:** cách viết cấu trúc của Skill bằng tiêu đề, danh sách, bảng.

## Dấu hiệu demo thành công
- Có bảng việc với người phụ trách và hạn rõ ràng.
- Việc của “7 khách chưa được phản hồi” hiển thị **Chưa rõ** người phụ trách.
- Email được ghi rõ là **nháp**, không tự gửi.
- Không tự bịa doanh thu hay tỷ lệ chuyển đổi.

## Nếu Codex không tự nhận skill
Dùng câu lệnh thay thế:

> Đọc và thực hiện đúng .agents/skills/skill-4s/SKILL.md, xử lý demos/skill-4s/ghi-chu-hop.md và lưu demos/skill-4s/ket-qua.md. Không sửa file khác.

## Gợi ý phần trình diễn phụ (nếu còn 1 phút)
Sửa trong ghi chú từ “Lan” thành “Hương”, rồi chạy lại cùng một câu lệnh. Kết quả đổi theo dữ liệu nhưng *quy trình và định dạng* giữ nguyên. Đây chính là giá trị tái sử dụng của Skill.
