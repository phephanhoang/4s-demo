# DEMO 02 — Có Skill vs Không Skill (5–7 phút)

## Cần chuẩn bị
- Mở Codex Web trong repository `phephanhoang/4s-demo`, branch `main`.
- Mở `demos/skill-4s-slide/noi-dung.md` cho học viên xem: **cùng 3 slide và cùng 6 màu**.
- Có thể mở trang `/slide-demo/` của website đã deploy để xem **hai bản preview dự phòng cạnh nhau**.
- Khi chạy demo thật, dùng 2 lượt **riêng biệt**, nên dùng 2 task Codex mới để giảm ảnh hưởng ngữ cảnh.

## PHẦN A — Không dùng Skill (2 phút)

Dán nguyên câu lệnh:

> Đọc demos/skill-4s-slide/noi-dung.md và tạo một deck đúng 3 slide HTML 16:9 tại demos/skill-4s-slide/no-skill/index.html. Dùng chính xác 6 màu trong file. Hãy làm tốt nhất bằng khả năng thông thường của bạn, nhưng KHÔNG dùng hay đọc bất kỳ Skill thiết kế nào (kể cả guizang-ppt-skill và skill-4s-slide). Không lấy hay copy code từ các bản preview có sẵn; tạo lại. Không sửa file nào khác.

Mở kết quả. Nêu: “AI vẫn tạo được slide khi không có skill.”

## PHẦN B — Có Skill (2 phút)

Ở **task Codex mới**, dán:

> Đọc demos/skill-4s-slide/noi-dung.md và tạo một deck đúng 3 slide HTML 16:9 tại demos/skill-4s-slide/with-skill/index.html. Dùng chính xác 6 màu trong file. Hãy làm tốt nhất bằng khả năng thông thường của bạn, đồng thời áp dụng $skill-4s-slide và đầy đủ quy trình 4S trong SKILL.md. KHÔNG dùng guizang-ppt-skill. Không lấy hay copy code từ các bản preview có sẵn; tạo lại. Không sửa file nào khác.

Mở kết quả. Nêu: “Cùng nội dung, cùng bảng màu, nhưng AI có thêm nguyên tắc về bố cục và chất lượng.”

## PHẦN C — Đối chiếu (1–3 phút)

Mở `demos/skill-4s-slide/index.html` hoặc website `/slide-demo/` để xem hai preview dự phòng cạnh nhau. Dùng nút Tiếp để đổi 3 slide đồng bộ.

Hỏi học viên quan sát:
1. **Trọng tâm:** bản nào dẫn mắt đến ý quan trọng nhanh hơn?
2. **Nhịp trình bày:** bản nào đổi bố cục hợp lý theo từng ý?
3. **Nhất quán:** màu, font, khoảng cách ở các slide có thống nhất không?
4. **Chất lượng nội dung:** hai bản có giữ đúng thông tin nguồn không?

**Thông điệp chốt:** Skill không phải phép màu và không bảo đảm lúc nào cũng đẹp hơn. Nó là bộ hướng dẫn có thể lặp lại, giúp chất lượng ổn định và giảm công sức viết prompt/kiểm tra.

### Fallback khi Codex không nhận `$skill-4s-slide`
> Đọc và làm đúng .agents/skills/skill-4s-slide/SKILL.md để tạo 3 slide từ demos/skill-4s-slide/noi-dung.md, lưu demos/skill-4s-slide/with-skill/index.html. Không sửa file khác.

### Lưu ý trung thực khi demo
Các trang so sánh được dựng sẵn nhằm đảm bảo có cái để trình chiếu khi Internet hoặc Codex Web chậm. Chúng là minh họa của hai **cách làm**, không phải dữ liệu khảo sát hay benchmark khách quan về Codex.
