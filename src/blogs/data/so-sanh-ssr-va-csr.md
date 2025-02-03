---
title: So sánh CSR (Client-Side Rendering) và SSR (Server-Side Rendering)
slug: so-sanh-ssr-va-csr
category: Frontend
date: 29/01/2025
img: /images/blogs/so-sanh-ssr-va-csr.webp
key: ["web development", "github", "frontend", "backend", "fullstack","ssr","csr"]
description_short: "Mình muốn chi sẻ về sự khác nhau giữa CSR và SSR, đồng thời chia sẻ một số kinh nghiệm của cá nhân mình khi tiếp xúc với hai cách tiếp cận này"
---



Mọi người cũng đã nghe qua hai khái niệm khá quen thuộc nhưng cũng tương đối khó bạn là người mới bắt đầu tiếp xúc: đó là **CSR** (Client-Side Rendering) và **SSR** (Server-Side Rendering). Hai khái niệm này thực chất không quá mới, nhưng chúng luôn được nhắc đi nhắc lại mỗi khi bạn được nghe người khác nói về cách một website được hiển thị ra trên màn hình của người dùng.

Trong bài viết này, mình muốn đào sâu một chút về sự khác nhau giữa **CSR** và **SSR**, đồng thời chia sẻ một số kinh nghiệm của cá nhân mình khi tiếp xúc với hai cách tiếp cận này. Mình cũng sẽ đưa ra một số ví dụ thực tế để mọi người có thể nắm bắt dễ dàng hơn

## 1. Tổng quan về Rendering

  Trước khi đi sâu vào so sánh về CSR và SSR, bạn cần hiểu trước khái niệm "rendering" (quá trình hiển thị) trong web. Nói đơn giản, "rendering" là quá trình mà một website được biến từ code HTML, CSS, JavaScript (hoặc các định dạng khác) thành giao diện mà người dùng nhìn thấy và tương tác.

- Khi mở một website, ta nhận về một số dữ liệu (dạng text, JSON, HTML,...) từ server.
- Browser sẽ diễn giải và biến các code này thành hình ảnh, chữ, màu, hiệu ứng,… để người dùng có thể xem và thao tác.

Tuy nhiên, quá trình này có thể diễn ra ở nhiều "bước" khác nhau, và đây chính là lúc khái niệm CSR (Client-Side Rendering) và SSR (Server-Side Rendering) xuất hiện.

## 2. Tổng quan về khái niệm của CSR và SSR

Ở phần này mình chỉ nói tổng quan về CSR và SSR để bạn hiểu cơ bản thôi, nếu bạn muốn tìm hiểu chi tiết hơn về mỗi khái niệm, bạn có thể ghé thăm, mình có để link ở đầu bài cho các bạn rồi nhé.

### 2.1 CSR (Client-Side Rendering)

Client-Side Rendering (CSR) là phương thức mà browser (client) đảm nhiệm việc render các nội dung HTML, CSS, JavaScript từ khung ban đầu. Thông thường, khi sử dụng CSR, server sẽ gửi cho cho client các thành phần HTML rất cơ bản, kèm theo liên kết đến các file JS (JavaScript) lớn. Khi browser nhận HTML rỗng (hoặc gần như rỗng) này, nó sẽ tải và thực thi JavaScript để render toàn bộ giao diện.

Nói dễ hiểu hơn thì bạn hãy tưởng tượng, bạn sử dụng React để build website. Khi người dùng thực hiện tìm kiếm website của bạn (ví dụ: <https://ttv-fe.com>) và nhấn Enter, browser sẽ yêu cầu server gửi về file HTML (thường là file index.html) cùng với các file JavaScript đã được build sẵn (thường là các file .js trong thư mục build như: main.js, bundle.js,…).

- File index.html ban đầu có thể trống rỗng, chỉ chứa `<div id="root"></div>`.
- Sau khi load xong main.js, browser sẽ chạy React, "mount" ứng dụng vào thẻ `<div id="root">` và bắt đầu tạo ra giao diện đầu tiên.
- Ứng dụng React sẽ gửi thêm các yêu cầu fetch đến API để lấy dữ liệu, rồi hiển thị dữ liệu này lên màn hình.

### 2.2 SSR (Server-Side Rendering)

Server-Side Rendering (SSR) là cách tiếp cận ngược lại. Thay vì browser phải "render" mọi thứ, server sẽ handle và trả về HTML hoàn thiện của page. Từ đó, browser gần như: chỉ cần load HTML (và CSS, JS tĩnh nếu cần) để hiển thị ngay lập tức.

Để bạn dễ hiểu thì mình lấy ví dụ framework Nextjs nha

- Khi bạn truy cập <https://200lab.io/blog>, server sẽ "chạy" React trên server, áp dụng router, gọi data (từ API hoặc database) để "render" ra nội dung HTML hoàn chỉnh (hoặc gần như hoàn chỉnh).
- Server trả về page HTML này cho browser.
- Browser nhận được page HTML đã có sẵn nội dung, hiển thị gần như ngay lập tức.
- Sau đó, JavaScript phía client (cũng được đóng gói sẵn) sẽ "tiếp quản" trang, để hỗ trợ tương tác client-side.

## 3. Sự khác nhau chi tiết giữa CSR và SSR

  Bây giờ, cùng mình đặt CSR và SSR lên "bàn cân", so sánh một cách chi tiết hơn thông qua một vài khía cạnh quan trọng: hiệu năng (performance), SEO, trải nghiệm người dùng (UX), bảo mật, khả năng mở rộng (scalability), độ phức tạp khi phát triển, và chi phí.

### 3.1 Hiệu năng (performance)

- CSR:
  - Lần load page đầu tiên (initial load) có thể chậm do phải tải về JS khá lớn.
  - Sau khi đã tải xong, điều hướng giữa các trang (các route) thường mượt mà, không cần reload toàn bộ page.
  - Thích hợp cho các ứng dụng web nặng về mặt tương tác của người dùng, sau bước tải đầu tiên, mọi thứ sẽ mượt hơn.
- SSR:
  - Thời gian hiển thị page đầu tiên sẽ nhanh hơn, vì người dùng nhận được HTML tĩnh ngay lập tức.
  - Tuy nhiên, nếu server xử lý chậm, thì tốc độ phản hồi cũng bị ảnh hưởng.
  - Với SSR, mỗi lần điều hướng sang trang mới có thể kích hoạt vòng render trên server (trừ khi ta sử dụng tính năng "client-side navigation" trong Next.js hoặc Nuxt.js, nên vẫn có chi phí phía server.

### 3.2 SEO

- CSR:
  - SEO bị hạn chế hơn, vì nội dung trang nằm trong JS, gây khó khăn cho bot tìm kiếm (mặc dù Google đã hỗ trợ render JS ở mức độ tốt). Các mạng xã hội hoặc bot khác (không phải Google) có thể không hỗ trợ JavaScript, dẫn đến việc không đọc được nội dung.
  - Nếu bạn cần SEO cao, CSR truyền thống thật sự thì đây không phải phương án lý tưởng.
- SSR:
  - Rất phù hợp cho SEO, vì HTML đầy đủ được gửi về ngay ban đầu, các công cụ tìm kiếm dễ index nội dung.
  - Chia sẻ link lên mạng xã hội sẽ hiển thị được meta tags, hình ảnh,…
  - Điểm cộng lớn nếu website cần thu hút người dùng từ kết quả tìm kiếm.

### 3.3 Trải nghiệm người dùng (UX)

- CSR:
  - Trải nghiệm khá giống với ứng dụng di động: nhanh, mượt, không cần reload trang.
  - Người dùng có thể thấy một màn hình trắng xoá ban đầu nếu tốc độ mạng chậm (thường thì sẽ sử dụng skeleton nếu page đang load dữ liệu).
  - Sau khi đã "load" xong, mọi thao tác chuyển trang, hiển thị danh mục,… diễn ra trên client, nên tạo cảm giác rất nhanh.
- SSR:
  - Hiển thị nội dung ngay lập tức, không bị màn hình trắng ban đầu.
  - Mỗi lần request trang mới (nếu không dùng "client-side navigation" bổ trợ) sẽ tải lại HTML từ server, có thể gây chớp trang.
  - Với Next.js, Nuxt.js, SvelteKit,… ta có thể kết hợp SSR với tính năng SPA để giảm cảm giác chớp.

### 3.4 Bảo mật

- CSR:
  - Dữ liệu nhạy cảm không nên để lộ trong JavaScript (client).
  - Cần xác thực và phân quyền ở back-end, vì front-end hay CSR chỉ nên hiển thị dữ liệu sau khi đã xác thực xong.
  - Nếu API bảo mật kém, hacker có thể "tóm" được API endpoints dễ dàng (thực tế, SSR cũng cần API nhưng mức độ lộ thông tin cấu trúc API có thể khác nhau).
- SSR:
  - Nhiều logic chạy trên server, bạn có thể "giấu" được một phần logic.
  - Tuy nhiên, nếu code SSR bị lộ hoặc server config không chuẩn, hacker có thể tấn công server, đánh cắp dữ liệu.
  - Bảo mật vẫn là câu chuyện tổng thể từ server đến client, không chỉ riêng bất cứ một mảng nào.
  - Ở phần bảo mật thì mình thấy nhiều bạn luôn nghĩ rằng SSR an toàn hơn CSR vì logic chạy ở phía server. Thực tế, về mặt bảo mật, quan trọng là cách bạn quản lý session, token, phân quyền,… Dù SSR hay CSR, bạn vẫn phải bảo vệ API và các dữ liệu nhạy cảm. SSR có thể "che giấu" một số logic hay endpoints, nhưng hacker vẫn có thể tấn công server nếu có lỗ hổng.

### 3.5 Khả năng mở rộng (Scalability)

- CSR:
  - Gánh nặng được đẩy sang phía client (browser). Server chỉ cần cung cấp file HTML cơ bản và các file JS tĩnh.
  - Việc scale phục vụ nhiều người dùng chủ yếu nằm ở hạ tầng CDN, caching,...
  - Thích hợp cho ứng dụng nhiều người dùng khi ta muốn giảm tải cho server.
- SSR:
  - Server phải "render" (tạo HTML) cho mỗi request (hoặc ít nhất là với page nào đó). Điều này khiến server tiêu tốn tài nguyên CPU, RAM.
  - Có thể áp dụng caching, load balancing,… nhưng vẫn cần triển khai hạ tầng phức tạp hơn.
  - Nếu website có lượt truy cập cực cao, đôi khi chi phí server cho SSR sẽ rất đắt đỏ.

### 3.6 Độ phức tạp trong việc phát triển

- CSR:
  - Chắc bạn cũng khá quen thuộc với mô hình SPA: tách biệt front-end (React, Vue, Angular) và back-end (REST API, GraphQL).
  - Triển khai hosting thường đơn giản, chỉ cần server tĩnh (hoặc dịch vụ CDN) cho front-end, server API cho back-end.
- SSR:
  - Cần một runtime môi trường server (Node.js, Deno, hay framework PHP, Ruby on Rails,… tùy dự án).
  - Phức tạp hơn vì phải đồng bộ giữa logic server-side và client-side.
  - Vấn đề "state hydration" khiến việc dev SSR phức tạp hơn. Chẳng hạn Next.js cần biết khi nào render ở server, khi nào render ở client.

### 3.7 Chi phí (Cost)

- CSR:
  - Rẻ hơn về chi phí server, vì ta có thể dùng hosting tĩnh (VD: Netlify, Vercel free plan) để triển khai front-end, đồng thời triển khai API ở một server "nhỏ" hơn.
  - Chi phí dev có thể cao trong giai đoạn đầu (chạy marketing cho SEO), nhưng nếu SEO không phải ưu tiên, thì với mình CSR vẫn rất kinh tế.
- SSR:
  - Chi phí server cao hơn, vì phải chạy một quá trình "render" trên server. Cần server đủ mạnh để handle request.
  - Dịch vụ hosting SSR (như Vercel, Heroku, AWS) có thể tốn phí khi nhu cầu sử dụng tăng cao.
  - Chi phí cho đội ngũ phát triển cũng tăng, do đòi hỏi kỹ năng dev chuyên sâu hơn.

## 4. Khi nào nên chọn CSR hay SSR?

  Sẽ không có câu trả lời nào hoàn hảo cho tất cả các trường hợp. Việc lựa chọn giữa CSR và SSR phụ thuộc vào mục tiêu bạn build website đó là gì? Đây là một vài gợi ý của mình, bạn có thể tham khảo qua nha:

  Nếu SEO là yếu tố hàng đầu (ví dụ blog, trang tin tức, e-commerce cần nhiều lượt truy cập người dùng từ tìm kiếm google): bạn nên dùng SSR hoặc ít nhất là "kết hợp" SSR cho những page cần SEO. Một vài frameword có thể hỗ trợ bạn tốt như: Next.js, Nuxt.js, SvelteKit, Astro,...
Nếu ứng dụng phức tạp, mang tính sử dụng trong nội bộ, không cần SEO, tối ưu trải nghiệm tương tác với người dùng nhiều: CSR có thể là lựa chọn đơn giản và hiệu quả, chẳng hạn như: dashboard quản lý, web nội bộ, SPA.
  
  Nếu bạn quan tâm đến chi phí server: CSR tiết kiệm chi phí server vì chỉ cần cung cấp file tĩnh, SSR đòi hỏi server "nặng" hơn, chi phí có thể cao. Nhưng nếu bạn bán hàng online và SEO ảnh hưởng trực tiếp doanh số, đầu tư SSR có thể sinh lợi nhuận trong dài hạn.
  
  Nếu bạn mong muốn cả hai (SEO tốt và UX mượt): kết hợp SSR cho các page quan trọng + CSR cho phần còn lại (các route ít quan trọng về SEO).

## 5. Kết luận

  CSR (Client-Side Rendering) và SSR (Server-Side Rendering) về bản chất chỉ là hai cách tiếp cận cho quá trình khi hiển thị website. Mỗi phương án đều có ưu - nhược riêng biệt.

  Hy vọng bài viết này đã giúp bạn có cái nhìn rõ hơn về sự khác biệt giữa CSR và SSR. Nếu bạn là newbie, hãy bắt đầu với CSR (SPA) để nắm vững nền tảng front-end. Sau đó, khi bạn gặp các bài toán SEO, tốc độ, hoặc muốn nâng cao khả năng, hãy tìm hiểu SSR. Bản thân mình cũng xuất phát từ việc học React thuần (CSR) rồi chuyển sang Next.js (SSR) khi dự án đòi hỏi SEO, đó là trải nghiệm siêu thú vị.
