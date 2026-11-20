---
name: skill-4s
description: "Dùng khi người dùng muốn biến ghi chú họp hoặc ghi chú công việc lộn xộn thành biên bản ngắn, danh sách việc cần làm và email nháp bằng quy trình 4S (Sàng lọc, Sắp xếp, Soạn, Soát). Nhận diện yêu cầu 'skill-4s', 'quy trình 4S', 'xử lý ghi chú họp 4S'."
---

# Skill-4S — Từ ghi chú thành kết quả công việc

**Mục tiêu:** Biến ghi chú thô tiếng Việt thành đầu ra công việc rõ ràng, nhất quán. Đây là một *skill trình diễn*, không cần code, API hoặc kết nối tài khoản.

## Khi nào dùng
- Ghi chú cuộc họp có câu ngắn, thông tin chưa có thứ tự.
- Muốn có biên bản tóm tắt, bảng việc cần làm và email nháp từ cùng một nguồn.

## Quy trình 4S (phải thực hiện đúng thứ tự)

### S1 — Sàng lọc
Đọc nguyên văn đầu vào. Tách: (a) sự kiện và số liệu, (b) quyết định, (c) công việc, (d) điều chưa rõ. Không tự bịa dữ kiện.

### S2 — Sắp xếp
Nhóm thông tin theo chủ đề. Với mỗi công việc, trích đúng **việc / người phụ trách / hạn**. Thiếu thông tin nào thì ghi **Chưa rõ**, không đoán.

### S3 — Soạn
Tạo duy nhất một bản Markdown tiếng Việt, đúng cấu trúc:

# KẾT QUẢ SKILL-4S

## 1. Tóm tắt cuộc họp
3–5 câu ngắn hoặc gạch đầu dòng; giữ đúng số liệu và quyết định.

## 2. Bảng công việc
| Việc cần làm | Người phụ trách | Hạn hoàn thành |
|---|---|---|
| ... | ... | ... |

## 3. Email nháp
**Tiêu đề:** ...

**Nội dung:** 4–8 câu lịch sự, rõ việc và hạn. Không tự điền địa chỉ email hoặc giả vờ đã gửi.

## 4. Cần xác minh
Liệt kê các thông tin thiếu, mâu thuẫn hoặc chưa được xác nhận. Nếu không có, ghi “Không phát hiện điểm cần xác minh từ ghi chú.”

### S4 — Soát
Trước khi trả kết quả, tự kiểm tra:
1. Mọi tên, số liệu và thời hạn đều truy ra được từ ghi chú.
2. Không tự giao việc cho một người nếu chưa có quyết định.
3. Không biến điều dự kiến thành quyết định đã chốt.
4. Email chỉ là **bản nháp**; không gửi email, sửa file khác hay gọi dịch vụ bên ngoài.

## Cách chạy trong Codex
Nếu được chỉ định file đầu vào, đọc file đó. Nếu người dùng yêu cầu lưu, ghi bản Markdown vào đúng đường dẫn họ chỉ định. Nếu họ không chỉ định, trả kết quả trực tiếp trong cuộc trò chuyện.

**Ví dụ chạy:**
> Dùng $skill-4s xử lý file demos/skill-4s/ghi-chu-hop.md và lưu thành demos/skill-4s/ket-qua.md. Không sửa file khác.

## Quy tắc quan trọng
- Viết ngắn, dễ hiểu cho người đi làm không chuyên kỹ thuật.
- Không sử dụng internet nếu ghi chú đã có đầy đủ thông tin.
- Không tạo dữ liệu mẫu khác khi đã có file đầu vào.
- Ưu tiên chất lượng và độ tin cậy hơn lời văn hoa mỹ.
