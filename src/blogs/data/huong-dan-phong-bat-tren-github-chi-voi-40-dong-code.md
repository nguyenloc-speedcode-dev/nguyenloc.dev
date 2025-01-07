---
title: HƯỚNG DẪN PHÔNG BẠT TRÊN GITHUB CHỈ VỚI 40 DÒNG CODE
slug: huong-dan-phong-bat-tren-github-chi-voi-40-dong-code
category: Chuyện trò linh tinh
date: 07/01/2025
img: /images/blogs/huong-dan-phong-bat-tren-github-chi-voi-40-dong-code.webp
key: ["web development", "github", "frontend", "backend", "fullstack"]
description_short: "Hướng dẫn chi tiết cách làm xanh biểu đồ contributions trên GitHub với simple-git chỉ bằng 40 dòng code."
---



Trong thời gian gần đây, khi tìm kiếm các thư viện hữu ích của npm, tình cờ phát hiện một thư viện tên là **simple-git**. Đây là một thư viện giúp chạy các lệnh git trên Node.js. Từ đó nảy ra ý tưởng làm cho biểu đồ contributions trên GitHub trở nên "xanh" hơn, và bài viết này ra đời. :))

## Bắt Đầu

### 1. Khởi tạo dự án Node.js và cài đặt các thư viện cần thiết
```bash
npm init
npm install jsonfile moment random simple-git
```

### 2. Tạo file `data.json`
Tại root của dự án, tạo một file `data.json` để lưu lại sự thay đổi khi commit code mới:
```bash
touch data.json
```

### 3. Tạo file `index.js`
Tạo file JavaScript chính để chạy chương trình:
```bash
touch index.js
```

### 4. Nội dung file `index.js`
Chèn đoạn mã sau vào file `index.js`:
```javascript
const jsonfile = require('jsonfile');
const moment = require('moment');
const random = require('random');
const simpleGit = require('simple-git');

const FILE_PATH = './data.json';
const git = simpleGit();

const makeCommit = (n) => {
  if (n === 0) return;

  const x = random.int(0, 365);
  const DATE = moment().subtract(x, 'd').format();

  const data = { date: DATE };
  jsonfile.writeFile(FILE_PATH, data, () => {
    git.add([FILE_PATH])
      .commit(DATE, { '--date': DATE })
      .push()
      .then(() => makeCommit(n - 1));
  });
};

makeCommit(50); // Tạo 50 commit ngẫu nhiên
```

### 5. Khởi tạo git repo và chạy file `index.js`
```bash
git init
node index.js
```

### 6. Push repo lên GitHub
```bash
git remote add origin <url-repo-github>
git branch -M main
git push -u origin main
```

## Kết quả
Sau khi thực hiện xong, biểu đồ contributions trên GitHub sẽ được làm "xanh" bởi các commit ngẫu nhiên. Hãy tận hưởng thành quả nhé! :))

---

Chúc bạn thành công!



