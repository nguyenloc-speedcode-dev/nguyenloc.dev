---
title: Tổng hợp những câu hỏi phỏng vấn Frontend Developer thường gặp
slug: cau-hoi-phong-van-frontend-developer
category: Frontend
date: 14/03/2025
img: /images/blogs/cau-hoi-phong-van-frontend.jpeg
key: [frontend, phỏng vấn, lập trình web, javascript, reactjs]
description_short: Danh sách các câu hỏi phỏng vấn thường gặp cho vị trí Frontend Developer, bao gồm HTML, CSS, JavaScript, TypeScript và ReactJS.
---



### Hỏi về HTML

1. **Virtual DOM là gì? Tại sao quan trọng?**
   - Là một bản sao nhẹ của DOM thật, được lưu trong bộ nhớ
   - **Hiệu suất cao:** So sánh và chỉ cập nhật phần thay đổi lên DOM thật.
   - **Trải nghiệm tốt:** Giảm thao tác trực tiếp với DOM thật, tránh làm chậm ứng dụng.

2. **Tác dụng của doctype?**
   - Khai báo kiểu tài liệu HTML để trình duyệt biết cách render
   - Đảm bảo trang web được hiển thị ở chế độ standards mode

3. **Điều gì cần chú ý khi xây dựng và phát triển các trang web đa ngôn ngữ?**
   - Sử dụng thẻ `lang` và `charset` phù hợp
   - Hỗ trợ RTL (Right-to-Left) cho một số ngôn ngữ
   - Tổ chức content theo cấu trúc i18n

4. **Thuộc tính `data-` dùng để làm gì?**
   - Lưu trữ dữ liệu tùy chỉnh trong HTML
   - Truy cập dữ liệu thông qua JavaScript Dataset API

5. **Khác nhau giữa cookie, sessionStorage và localStorage?**
   - **Cookie:** 4KB, gửi lên server mỗi request, có expiry
   - **sessionStorage:** 5MB+, chỉ tồn tại trong session, không gửi lên server
   - **localStorage:** 5MB+, tồn tại vĩnh viễn, không gửi lên server

6. **Khác nhau giữa `<script>`, `<script async>` và `<script defer>`?**
   - **script:** Tải và thực thi ngay lập tức, chặn hiển thị trang
   - **async:** Tải song song với HTML, thực thi ngay khi tải xong
   - **defer:** Tải song song, nhưng chỉ thực thi sau khi HTML đã tải xong

7. **Tại sao nên đặt `<link>` trong thẻ `<head></head>` và đặt `<script>` sau thẻ `</body>`? Ngoại lệ khi nào?**
   - **link trong head:** Load CSS sớm tránh FOUC (Flash of Unstyled Content)
   - **script cuối body:** Không block render, tải sau khi có DOM
   - **Ngoại lệ:** Script cần thực thi sớm hoặc có async/defer

8. **Semantic HTML là gì và tại sao nó quan trọng?**
   - Là HTML sử dụng các thẻ mang ý nghĩa rõ ràng (e.g., `<header>`, `<article>`, `<footer>`)
   - **Quan trọng vì:**
     - Cải thiện SEO
     - Truy cập tốt hơn
     - Dễ bảo trì

9. Metag là gì. ví dụ?

   - Meta tag là thẻ HTML trong `<head>`, cung cấp thông tin về trang web cho công cụ tìm kiếm, trình duyệt, và mạng xã hội.

10. Khi nhập URL và nhấn enter trên browser thì quá trình sau đó diễn ra ntn cho tới khi trang web đc hiển thị?

- Nhập URL và phân giải DNS.
- Gửi yêu cầu HTTP/HTTPS tới máy chủ.
- Máy chủ trả về dữ liệu HTML và tài nguyên khác.
- Trình duyệt phân tích HTML, CSS, và JavaScript.
- Tải thêm tài nguyên (CSS, JS, hình ảnh).
- Render và hiển thị trang web.

11. Cơ chế SSR và SSG.

- SSR (Server-Side Rendering): Render trang trên server mỗi khi người dùng truy cập. Dữ liệu luôn mới nhất, tốt cho SEO, nhưng tốc độ tải chậm hơn vì cần render lại mỗi yêu cầu.

- SSG (Static Site Generation): Render trang trước khi người dùng truy cập, dữ liệu tĩnh, tốc độ tải nhanh, tốt cho SEO, nhưng không cập nhật dữ liệu mới ngay lập tức.

12. So sánh SSR , SSG và CSR

- SSR: Render tại server, nội dung luôn cập nhật, tốt cho SEO nhưng chậm hơn.

- SSG: Render tĩnh khi build, nhanh nhưng không linh hoạt.

- CSR: Render trên trình duyệt, mượt mà nhưng SEO và tốc độ tải ban đầu kém hơn.

### Hỏi về CSS

1. **Lợi / hại của việc sử dụng External Style Sheets?**
   - **Lợi:** Tái sử dụng, cache, dễ maintain
   - **Hại:** Thêm HTTP request, có thể block rendering

2. **Khác nhau giữa Class selector và Id selector?**
   - **Class:** Dùng nhiều lần, độ ưu tiên thấp hơn
   - **ID:** Unique, độ ưu tiên cao hơn

3. **`z-index` dùng để làm gì?**
   - Kiểm soát thứ tự xếp chồng các element
   - Chỉ hoạt động với position không phải static

4. **Tại sao `@import` chỉ có thể sử dụng ở đầu file?**
   - Đảm bảo thứ tự load CSS đúng
   - Tránh blocking render không cần thiết

5. **CSS Grid và Flexbox khác nhau như thế nào?**
   - **CSS Grid:** Thiết kế 2 chiều (hàng và cột), tốt cho bố cục phức tạp
   - **Flexbox:** Thiết kế 1 chiều (hàng hoặc cột), phù hợp căn chỉnh nội dung

6. **CSS Module là gì và khi nào nên dùng?**
   - CSS Module là cách viết CSS giúp tạo các lớp CSS có phạm vi cục bộ (local)
   - Dùng khi dự án lớn hoặc khi cần tránh xung đột CSS

7. **Các đơn vị CSS thường dùng?**
   - **px:** Dùng để cố định kích thước
   - **%:** Tỷ lệ theo phần tử cha, dùng cho layout
   - **em:** Kích thước dựa trên font-size của phần tử cha
   - **rem:** Kích thước dựa trên font-size của root (html)
   - **vw, vh:** Tỷ lệ theo chiều rộng và chiều cao của viewport

8. Trình bày về position các kiểu position
   - **static:** Mặc định, phần tử được định vị theo dòng chảy tự nhiên của trang.
   - **relative**  Định vị phần tử so với vị trí ban đầu của nó.
   - **absolute** Định vị phần tử so với phần tử cha gần nhất có position khác static
   - **sticky** Kết hợp giữa **relative** và **fixed**, phần tử dính vào vị trí khi cuộn đến một điểm nhất định.
   - **fixed** Định vị phần tử cố định trên cửa sổ trình duyệt, không thay đổi khi cuộn trang

9. Phân biệt block, inline, inline block.

   - **Block** Toàn dòng, có thể chỉnh kích thước
   - **inline**  Cùng dòng, không chỉnh kích thước
   - **inline-block** Cùng dòng, nhưng chỉnh được kích thước

10. Độ ưu tiên selector

- Inline styles (**style="color: red;"**) **>** ID selector (#id {})  **>** Class, attribute, pseudo-class (.class {}, [attr] {}, :hover) **>** Element, pseudo-element (h1 {}, ::before) **>**  Universal selector (* {})∏

11. Thiết kế dàn hàng ngang 3 cột có độ rộng như nhau, chiếm toàn bộ màn hình không sử dụng flex, grid.

- Dùng float
- Dùng inline-block

12. Responsive cho mobile, khi **flex-direction: column** thì các item trong 1 div xếp hàng dọc. thay vì xếp item 1 2 3. Nó có thể bị đảo vị trí thành 1 3 2. Nếu gặp tình huống này, cách giải quyết? ( ngoài cách bạn đang nghĩ còn cách nào )

- Dùng order

13. BEM là gì

- là một phương pháp đặt tên class trong CSS, giúp mã dễ đọc, bảo trì và tái sử dụng.

14. SCSS là gì : tạo biến, mixin include, extend không

- Là một phần mở rộng của CSS, cung cấp cú pháp linh hoạt và nhiều tính năng mạnh mẽ giúp viết CSS dễ dàng hơn, như biến, mixin, extend, v.v.
- Tạo biến :

   ```scss
         $primary-color: #3498db;
         $font-size: 16px;

         body {
            font-size: $font-size;
            color: $primary-color;
         }

- Mixin và `@include`

   ```scss
      @mixin border-radius($radius) {
         -webkit-border-radius: $radius;
         -moz-border-radius: $radius;
         border-radius: $radius;
      }
      .box {
          @include border-radius(10px);
      }
- Extend

   ```scss
         .message {
            padding: 10px;
            border: 1px solid #ccc;
            background-color: #f9f9f9;
         }

         .success {
            @extend .message;
            background-color: #dff0d8;
         }

         .error {
            @extend .message;
            background-color: #f2dede;
         }

15. Trong flex, muốn thiết lập độ rộng cho các item, dùng thuộc tính nào.
      - `flex` là cách linh hoạt nhất để điều chỉnh kích thước các item trong flexbox.
      - `flex-basis` giúp thiết lập kích thước ban đầu của item.

### Hỏi về Javascript

1. **Ý nghĩa của biến `this`?**
   - Context của function hiện tại, phụ thuộc vào cách function được gọi

2. **Khác nhau giữa null, undefined hoặc chưa khai báo?**
   - **undefined:** Biến đã khai báo nhưng chưa gán giá trị
   - **null:** Giá trị rỗng được gán có chủ đích
   - **Chưa khai báo:** ReferenceError khi truy cập

3. **Javascript closure là gì?**
   - Là một hàm có thể ghi nhớ và truy cập biến từ phạm vi bên ngoài.

4. **ES6 `yield` là gì?**
   - Dùng trong generator function, tạm dừng hàm và trả về giá trị tại điểm dừng.

5. **ES6 `function*` là gì?**
   - Generator function có thể tạm dừng và tiếp tục thực thi nhờ `yield`.

6. **Khác biệt của arrow function?**
   - Không có `this` riêng, không có `arguments`, cú pháp ngắn gọn.

7. **Phân biệt `let`, `const`, `var` khi nào dùng?**
   - **let:** Biến có thể thay đổi giá trị, phạm vi khối.
   - **const:** Biến không thay đổi giá trị, phạm vi khối.
   - **var:** Phạm vi hàm, không nên sử dụng.

8. **Promise trong JS là gì?**
   - Là một đối tượng đại diện cho giá trị có thể có trong tương lai, có 3 trạng thái: Pending, Resolved (Fulfilled), Rejected.

9. Phân biệt arrow function vs declare function
   - `Arrow function`:

      - Cú pháp ngắn gọn: `const sum = (a, b) => a + b`;
      - Không có this riêng, kế thừa từ phạm vi bên ngoài.
      - Không hỗ trợ arguments.
      - Không thể dùng với `new`.
   - `Regular function` (`Regular Function`)
      - Cần từ khóa function: `function sum(a, b) { return a + b; }`
      - Có `this` riêng, giá trị this thay đổi theo cách gọi hàm.
      - Hỗ trợ arguments.
      - Có thể dùng với `new` để tạo đối tượng.

10. Phân biệt `call` bind `apply`

- `call`: Gọi hàm ngay lập tức, gán `this` và truyền tham số trực tiếp.

   ```javascript
         greet.call(person, 'John');

- `apply`: Giống `call`, nhưng tham số truyền vào là một mảng.

   ```javascript
       greet.apply(person, ['John', 30]);

- `bind`: Gán this và trả về hàm mới, có thể gọi sau này với tham số.

   ```javascript
         const boundGreet = greet.bind(person, 'John');
         boundGreet();

11. isNaN() vs Number.isNaN()

- `isNaN()`: Kiểm tra giá trị có phải là `NaN`, nhưng sẽ ép kiểu trước.
- `Number.isNaN()`: Kiểm tra chính xác giá trị có phải là `NaN` mà không ép kiểu.

12. Xử lý lỗi và create lỗi vs async await như thế nào

- `try...catch`: Dùng để bắt lỗi trong hàm `async`.
- `throw`: Tạo lỗi thủ công.
- `catch`: Bắt lỗi nếu có lỗi xảy ra trong `Promise` hoặc `async/await`.

13. Tình huống bất lợi khi dùng async await mà promise sẽ khắc phục được

- `async/await` dễ đọc nhưng chạy tuần tự, không hiệu quả khi cần chạy song song.

- `Promise`: Dùng `Promise.all()` để chạy song song, hoặc `Promise.allSettled()` để tiếp tục xử lý dù có lỗi.

- Lỗi: `async/await` cần `try...catch` cho mỗi function, còn `Promise` dễ quản lý lỗi chung với `.catch()`.

14. Trình bày JS Runtime Environment (nhớ nói cả Microtask)

      **JavaScript Runtime Environment** là môi trường mà JavaScript thực thi, bao gồm các thành phần chính:

      - **Call Stack**: Nơi chứa các hàm đang được gọi. Các hàm được thực thi lần lượt theo thứ tự LIFO (Last In, First Out).
      - **Heap**: Bộ nhớ dùng để lưu trữ các đối tượng động.
      - **Event Loop**: Thành phần quản lý việc xử lý các task trong hàng đợi (**Queue**). Khi **Call Stack** trống, **Event Loop** sẽ chuyển task từ **Task Queue** vào **Call Stack** để thực thi.

      **Microtask Queue**
         - **Microtasks** (như `Promise.then()`) có độ ưu tiên **cao hơn** so với **Task Queue** (như `setTimeout`).
         - Sau khi **Call Stack** trống, **Event Loop** sẽ xử lý tất cả các microtasks trong **Microtask Queue** trước khi chuyển sang **Task Queue**.

      **Quy trình hoạt động**
         1. Thực thi các hàm trong **Call Stack**.
         2. Khi **Call Stack** trống, **Event Loop** kiểm tra **Microtask Queue** và xử lý toàn bộ microtasks trước.
         3. Sau khi **Microtask Queue** hoàn thành, **Event Loop** sẽ chuyển sang xử lý các task trong **Task Queue** (nếu có).

      **Tóm tắt**
         - **Call Stack**: Thực thi các hàm đang được gọi.
         - **Microtask Queue**: Hàng đợi ưu tiên cao, xử lý sau mỗi lần **Call Stack** trống.
         - **Task Queue**: Xử lý sau khi tất cả microtasks đã hoàn thành.

16. Các promise như all, race, any...

- `Promise.all()`: Chờ tất cả Promise hoàn thành.
- `Promise.race()`: Lấy kết quả của Promise đầu tiên hoàn thành.
- `Promise.any()`: Lấy kết quả của Promise đầu tiên thành công.
- `Promise.allSettled()`: Chờ tất cả Promise hoàn thành, trả về kết quả cho tất cả.

17. cách để copy 1 object.

- `Object.assign()` và spread operator (...) sao chép nông.
- `JSON.parse(JSON.stringify())` sao chép sâu nhưng không sao chép các phương thức.

18. Cách sao chép 1 array

- Spread operator (...), `slice()`, `Array.from()`, và `concat()` sao chép nông.

19. Các feature trong ES6 là gì ? Arrow function, spread, set, destructring, map, filter, reduce (map, filter, reduce khác gì nhau), Promise, String interpolation, Map, Set, Iterator, For-of, Class…

- Arrow function: Cú pháp ngắn gọn cho hàm, không có this.
- Spread Operator : Giải nén mảng/đối tượng.
- Destructuring: Trích xuất giá trị từ mảng/đối tượng.
- Map: Lưu trữ key-value.
- Set: Lưu giá trị duy nhất.
- Iterator & For-of: Lặp qua các đối tượng có thể lặp.
- Class: Định nghĩa lớp và đối tượng.
- Promise: Xử lý bất đồng bộ.
- String Interpolation: Chèn giá trị vào chuỗi.
- Map, Filter, Reduce:
  - Map: Áp dụng hàm cho tất cả phần tử.
  - Filter: Lọc phần tử theo điều kiện.
  - Reduce: Gom nhóm thành một giá trị duy nhất.

20. GET, POST là gì, khác nhau như thế nào. Giả sử muốn upload một file thì làm như thế nào

- GET: Lấy dữ liệu từ server, không thay đổi dữ liệu, dữ liệu trong URL.
- POST: Gửi dữ liệu đến server, thay đổi dữ liệu, dữ liệu trong body.

Khác nhau: GET giới hạn dữ liệu trong URL, POST không giới hạn và dùng trong gửi file.

- Upload file: Dùng POST với enctype="multipart/form-data":

   ```js
      <form action="/upload" method="POST" enctype="multipart/form data">
         <input type="file" name="file" />
         <button type="submit">Upload</button>
      </form>



### Hỏi về TypeScript

1. Lấy ra 5 trường với typescript
   TypeScript cung cấp tiện ích Pick để tạo một kiểu dữ liệu mới chỉ chứa các trường mong muốn:

   ```typescript
       type UserSubset = Pick<User, "id" | "name" | "age" | "email" |"address">;

      const subset: UserSubset = {
         id: 1,
         name: "Alice",
         age: 25,
         email: "<alice@example.com>",
         address: "123 Main St",
      };


### Hỏi về ReactJS

1. Concept của reactjs là gì
   - ReactJS là một thư viện JavaScript cho phép xây dựng giao diện người dùng bằng cách sử dụng các component và JSX.
   - State, Props, Hooks và Virtual DOM là các khái niệm cốt lõi trong React giúp tăng hiệu suất và dễ dàng quản lý giao diện động.

2. Cơ chế re-render của 1 component xảy ra như thế nào

   - Re-render xảy ra khi state, props, hoặc context thay đổi.
   - React sử dụng Virtual DOM và diffing  để so sánh và chỉ cập nhật những thay đổi cần thiết, tối ưu hóa hiệu suất.
   - Các cơ chế như React.memo(), shouldComponentUpdate(), và useCallback() giúp kiểm soát việc re-render để tránh lặp lại không cần thiết.

3. Phiên bản 18 có cải tiến gì

   - **Automatic batching**
      - Trước đây setState 2 lần thì app của các bạn cũng sẽ render 2 lần. Thay vì phải render 2 lần, do mình đổi  state 2 lần, thì version mới sẽ gom lại một lần để tạo ra state cuối cùng rồi render luôn.
      - Transitions API  `startTransition` :  để đánh dấu các tác vụ có thể tạm dừng hoặc ưu tiên thấp.
      - Cải tiến Suspense
      - Server-Side Rendering with Streaming

4. Phân biệt state vs props
   - **State** là dữ liệu nội bộ, do component tự quản lý.
   - **Props**: Dữ liệu từ cha truyền xuống, không thể thay đổi

5. Controller vs uncontroller component

   - **Controlled Component**: React kiểm soát toàn bộ dữ liệu (qua state).
   - **Uncontrolled Component**: DOM tự quản lý dữ liệu (qua ref).

6. Tại sao setState lại bất đồng bộ

   - Gom các lần gọi **setState** lại để giảm số lần re-render.
   - Tránh xung đột khi nhiều **setState** được gọi liên tiếp.
   - Phù hợp với React Lifecycle: Cập nhật **state** và re-render diễn ra cuối mỗi chu kỳ.

   **Cách xử lý nếu cần giá trị mới ngay lập tức:**
      - Dùng callback trong **setState**:

      ```js
         setState((prevState) => prevState + 1);

7. useEffect với life cycle method

   - `useEffect` thay thế: `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` trong class component
   - Cách dùng:
      - []: Chạy 1 lần sau khi mount.

      - [dependency]: Chạy khi dependency thay đổi.

      - return () => {}: Cleanup khi unmount.

     #### **So sánh với Lifecycle Methods**

| **Lifecycle Method**          | **Tương ứng tron `useEffect`**                               |
|--------------------------------|--------------------------------------------------------------|
| `componentDidMount`            | `useEffect(() => { ... }, [])`                               |
| `componentDidUpdate`           | `useEffect(() => { ... }, [dependency])`                     |
| `componentWillUnmount`         | `useEffect(() => { return () => { ... }; }, [])`             |

---

8. Việc useEffect có depencies thay đổi sẽ run lại callback , react dùng cơ chế so sánh như thế nào

   - React so sánh tham chiếu trong dependency array.
      - số, chuỗi, boolean : So sánh giá trị. Nếu khác, chạy lại.
      - Object, Array, Function : So sánh tham chiếu. Nếu tham chiếu thay đổi, chạy lại.
      - Để tránh chạy lại không cần thiết, dùng useMemo hoặc useCallback để giữ tham chiếu cũ.

   ```js
      useEffect(() => {
         console.log("Chạy lại");
      }, [count]); // Chỉ chạy lại khi giá trị `count` thay đổi.

      const obj = { a: 1 };
      useEffect(() => {
      console.log("Chạy lại");
      }, [obj]); // Luôn chạy lại vì `obj` tạo ra tham chiếu mới mỗi lần render.

9. useLayoutEffect vs useEffect? khi nào dùng useLayoutEffect

      - **`useEffect`**:
         - Chạy **sau khi giao diện được render**.
         - Dùng cho side effects không ảnh hưởng trực tiếp đến DOM (e.g., fetch API, log).

      - **`useLayoutEffect`**:
         - Chạy **trước khi giao diện hiển thị**, sau khi DOM cập nhật.
         - Dùng khi cần đo đạc hoặc thay đổi DOM **trực tiếp** (e.g., đo kích thước, sửa layout).

10. React fragment nên dùng ko vì sao?

- Nên dùng React Fragment khi muốn nhóm nhiều phần tử mà không thêm thẻ DOM thừa, giúp DOM gọn gàng hơn và cải thiện hiệu suất.

11. Các cách để optimize

- Sử dụng `React.memo`: Tối ưu component không cần re-render lại khi props không thay đổi.
- Sử dụng `useMemo` và `useCallback`: Memoize giá trị và hàm để tránh tính toán lại không cần thiết.
- Lazy Loading: Chia code và tải các phần cần thiết khi cần (e.g., React.lazy và Suspense).
- **Code splitting**: Tách mã nguồn thành các phần nhỏ, tải khi cần.

- **Debounce/Throttle**: Giảm số lần gọi hàm (e.g., khi tìm kiếm).

- **Virtualization**: Hiển thị một phần của danh sách lớn thay vì toàn bộ (e.g., react-window).
- **UsePureComponent**: Đảm bảo component chỉ re-render khi props hoặc state thay đổi.

- **Server-side rendering (SSR)**: Render phía server để cải thiện thời gian tải ban đầu.

12. so sánh `usememo` vs `usecallback`.

- `useMemo`: Dùng để tối ưu giá trị.
- `useCallback`: Dùng để tối ưu hàm.

13. Ưu điểm và nhược điểm của Micro-frontend.

- Quản lý độc lập, tái sử dụng, dễ mở rộng, cho phép dùng công nghệ riêng cho từng phần.
Nhược điểm của Micro-frontend:

- Tăng độ phức tạp, thời gian tải lâu hơn, khó đồng nhất UI/UX, quản lý trạng thái toàn cục phức tạp.

14. Tại sao React lại sử dụng Virtual DOM.

      React sử dụng Virtual DOM để cải thiện hiệu suất. Khi có sự thay đổi trong trạng thái ứng dụng, React sẽ cập nhật Virtual DOM thay vì trực tiếp thay đổi real DOM. Sau đó, React so sánh Virtual DOM mới với Virtual DOM cũ để tìm ra sự khác biệt (diffing) và chỉ cập nhật phần thay đổi trên real DOM. Điều này giúp giảm thiểu số lần thao tác với real DOM, từ đó cải thiện tốc độ và hiệu suất của ứng dụng.

15. ReactJs và VueJs khác nhau như thế nào ?

- ReactJS: Thư viện UI, sử dụng JSX, yêu cầu thêm thư viện để hoàn thiện ứng dụng, phù hợp cho dự án lớn.
- VueJS: Framework hoàn chỉnh, sử dụng template syntax, dễ học, tích hợp sẵn tính năng như quản lý trạng thái, phù hợp cho dự án nhỏ và vừa.

16. Context và Redux khác nhau như thế nào ?

- Context:

  - Được tích hợp sẵn trong React.
  - Phù hợp với quản lý trạng thái ở mức độ nhỏ và trung bình.
  - Thích hợp cho ứng dụng không quá phức tạp, ít thao tác cập nhật trạng thái.
- Redux:

  - Là thư viện quản lý trạng thái độc lập.
  - Phù hợp cho các ứng dụng lớn, phức tạp với nhiều thành phần cần chia sẻ trạng thái.
  - Cần nhiều boilerplate code, nhưng hỗ trợ tốt cho việc quản lý trạng thái phức tạp và theo dõi trạng thái qua middleware.

17. Khi nào dùng `useCallback`?

- Có vấn đề về hiệu suất (ví dụ: danh sách lớn hoặc component con sử dụng memoization).
- Hàm được truyền xuống component con và bạn muốn kiểm soát sự tái tạo của nó.

18. Khi nào dùng `useMemo`

- Dùng useMemo: Khi cần ghi nhớ kết quả của phép tính tốn kém hoặc giữ tham chiếu ổn định.
- Không cần useMemo: Nếu phép tính đơn giản hoặc dependency thay đổi liên tục.

### Hỏi về Performance

1. **Công cụ kiểm tra lỗi về hiệu suất tải trên trình duyệt?**
   - Chrome DevTools, Lighthouse

### Hỏi về Network

1. **Tại sao lưu resource (js/css/…) trên nhiều domain sẽ tốt hơn?**
   - Giảm tải đồng thời, tăng phân tán, và tận dụng cache.

2. **HTTP action là gì?**
   - Các phương thức dùng trong giao tiếp giữa client và server: `GET`, `POST`, `PUT`, `DELETE`, `PATCH`.
