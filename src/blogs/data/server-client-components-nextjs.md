---
title: Server Components và Client Components trong Next.js - Hiểu và Ứng Dụng Hiệu Quả
slug: server-client-components-nextjs
category: Frontend
date: 14/03/2025
img: /images/blogs/server-client-components-nextjs.webp
key: [Next.js, Server Components, Client Components, lập trình web, tối ưu hiệu suất]
description_short: Tìm hiểu sự khác biệt giữa Server Components và Client Components trong Next.js 13, cách sử dụng hiệu quả để tối ưu hiệu suất và trải nghiệm người dùng.
---

# Server Components và Client Components trong Next.js: Hiểu và Ứng Dụng Hiệu Quả

Next.js 13 giới thiệu một cách tiếp cận mới trong việc xây dựng giao diện người dùng với Server Components và Client Components. Bài viết này sẽ giúp bạn hiểu rõ sự khác biệt giữa hai loại component này và cách sử dụng chúng hiệu quả trong dự án của bạn.

## 1. Server Components là gì?

Server Components trong Next.js được render trên server và gửi HTML xuống client. Chúng giúp giảm kích thước bundle, cải thiện hiệu suất và tối ưu hóa trải nghiệm người dùng.

### Đặc điểm của Server Components

- Được render trên server, không có JavaScript chạy trên client.
- Không thể sử dụng state (useState), effect (useEffect) hoặc các hook chỉ có trên client.
- Có thể gọi API, truy vấn database trực tiếp trên server mà không cần chạy trên client.

### Ví dụ

```tsx
// Server Component (mặc định trong Next.js 13)
export default async function ServerComponent() {
  const data = await fetch("https://api.example.com/data").then(res => res.json());
  return <div>{data.message}</div>;
}
```

## 2. Client Components là gì?

Client Components chạy hoàn toàn trên trình duyệt của người dùng, cho phép sử dụng các tính năng như state, event handlers và các hook React.

### Đặc điểm của Client Components

- Chạy trên trình duyệt, có thể sử dụng state, event handlers.
- Phù hợp với các phần UI tương tác như form, button, modal.
- Có thể kết hợp với Server Components.

### Ví dụ

```tsx
"use client";
import { useState } from "react";

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

## 3. Khi nào nên dùng Server Components và Client Components?

- **Dùng Server Components** khi bạn muốn tối ưu hóa hiệu suất, giảm tải JavaScript trên client, hoặc khi không cần state và sự kiện.
- **Dùng Client Components** khi cần sự tương tác của người dùng, sử dụng state hoặc các hiệu ứng trong React.

## 4. Kết hợp Server và Client Components

Bạn có thể kết hợp cả hai trong một ứng dụng để tận dụng ưu điểm của từng loại.

```tsx
// Parent Component (Server Component)
import ClientComponent from "./ClientComponent";

export default async function Page() {
  const data = await fetch("https://api.example.com/data").then(res => res.json());
  return (
    <div>
      <h1>{data.message}</h1>
      <ClientComponent />
    </div>
  );
}
```

## Kết luận

Hiểu và áp dụng đúng cách Server Components và Client Components giúp bạn xây dựng ứng dụng Next.js hiệu quả hơn. Hãy sử dụng Server Components để tối ưu hiệu suất và Client Components để xử lý các tương tác động trong UI.
