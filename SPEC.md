# 影片筆記整理工具

這是一個純前端的影片筆記整理工具，專門用於觀看 YouTube 影片時記錄重點。專案設計以簡單易用為主要目標，並且可以直接部署到 GitHub Pages 上。

## 專案目標

1. 提供簡單的介面讓使用者可以邊看影片邊做筆記
2. 不需後端，純前端實現所有功能
3. 確保筆記內容在重新載入頁面後不會遺失
4. 適合用於學習、研究或影片內容摘要

## 目前功能

### 已完成功能
- [x] YouTube 影片載入與播放
- [x] 時間點記錄功能
- [x] 筆記新增功能
- [x] 筆記自動排序（依時間順序）
- [x] 筆記本地儲存（使用 localStorage）
- [x] 筆記刪除功能
- [x] 時間點快速跳轉功能

### 待開發功能
- [ ] 筆記匯出功能
- [ ] 筆記分類功能
- [ ] 多影片管理功能
- [ ] 筆記搜尋功能

## 技術規格

### 使用技術
- HTML5
- CSS3
- JavaScript (ES6+)
- YouTube IFrame API
- Bootstrap 5.3.0

### CDN 依賴
```html
<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- YouTube IFrame API -->
<script src="https://www.youtube.com/iframe_api"></script>

<!-- Bootstrap JS Bundle -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
```

### 資料結構

筆記資料結構：
```javascript
{
    timestamp: Number,  // 影片時間點（秒）
    text: String,      // 筆記內容
    id: Number         // 唯一識別碼（使用 Date.now()）
}
```

本地儲存結構：
```javascript
localStorage.videoNotes = JSON.stringify(notes);  // notes 為筆記陣列
```

## 檔案結構

- `index.html`: 主要的 HTML 結構
- `style.css`: 樣式表
- `script.js`: JavaScript 主要邏輯

## 部署說明

1. 將專案檔案上傳至 GitHub 儲存庫
2. 在儲存庫設定中啟用 GitHub Pages
3. 選擇主分支（main branch）作為部署來源

## 使用說明

1. 在輸入框中貼上 YouTube 影片網址
2. 點擊「載入影片」按鈕
3. 觀看影片時，可點擊「取得當前時間」記錄時間點
4. 在筆記欄位輸入重點內容
5. 點擊「新增筆記」保存內容
6. 可點擊已保存筆記的時間點快速跳轉到影片對應位置
7. 筆記會自動保存在瀏覽器中，重新開啟頁面時不會遺失

## 注意事項

1. 使用 localStorage 儲存資料，清除瀏覽器資料會導致筆記遺失
2. 需要網路連線才能載入 YouTube 影片
3. 不支援離線使用

## 未來展望

1. 實現筆記匯出功能（如 PDF、Markdown 格式）
2. 加入筆記分類標籤
3. 支援多部影片的筆記管理
4. 加入筆記搜尋功能
5. 支援筆記分享功能
