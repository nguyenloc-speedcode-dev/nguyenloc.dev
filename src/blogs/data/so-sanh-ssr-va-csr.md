---
title: So sánh CSR (Client-Side Rendering) và SSR (Server-Side Rendering)
slug: so-sanh-ssr-va-csr
category: Chia sẻ kinh nghiệm
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
