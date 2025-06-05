# 影片筆記整理工具

這是一個純前端的影片筆記整理工具，專門用於觀看 YouTube 影片時記錄重點。專案設計以簡單易用為主要目標，並且可以直接部署到 GitHub Pages 上。

## 專案目標

1. 提供簡單的介面讓使用者可以邊看影片邊做筆記
2. 不需後端，純前端實現所有功能
3. 確保筆記內容在重新載入頁面後不會遺失
4. 適合用於學習、研究或影片內容摘要

## 專案狀態
最後更新：2025-06-05

### 目前功能與完成度
- [x] YouTube 影片載入與播放 (100%)
  - 支援影片 URL 解析
  - 實現影片播放控制
  - 已完成影片載入錯誤處理
- [x] 時間點記錄功能 (100%)
  - 支援取得當前播放時間
  - 時間格式化顯示（時:分:秒）
- [x] 筆記新增功能 (100%)
  - 支援時間點與筆記文字輸入
  - 輸入驗證機制
- [x] 筆記自動排序 (100%)
  - 依據時間點自動排序
- [x] 筆記本地儲存 (100%)
  - 使用 localStorage 實現
  - 頁面重載時自動恢復筆記
- [x] 筆記刪除功能 (100%)
  - 支援單筆筆記刪除
  - 刪除前確認提示
- [x] 時間點快速跳轉功能 (100%)
  - 點擊時間戳可跳轉到對應時間點
  - 跳轉後自動播放影片

### 待開發功能優先順序與建議實作方向
1. 筆記匯出功能 (待開發)
   - 建議支援格式：
     - Markdown (.md)
     - PDF
     - 純文字 (.txt)
   - 建議使用 jsPDF 或 html2pdf.js 實作 PDF 匯出
   - 實作建議：新增匯出按鈕在筆記列表上方

2. 筆記分類功能 (待開發)
   - 建議實作標籤系統
   - 資料結構建議：
   ```javascript
   {
       timestamp: Number,
       text: String,
       id: Number,
       tags: String[]  // 新增標籤陣列
   }
   ```
   - UI 建議：在筆記編輯區新增標籤輸入欄位

3. 多影片管理功能 (待開發)
   - 建議實作方向：
     - 新增影片列表頁面
     - 每個影片獨立儲存筆記
     - localStorage 結構調整建議：
     ```javascript
     {
         videos: {
             [videoId]: {
                 title: String,
                 notes: Array,
                 lastAccessed: Date
             }
         }
     }
     ```

4. 筆記搜尋功能 (待開發)
   - 建議實作全文搜尋
   - 考慮支援以下搜尋條件：
     - 筆記內容
     - 時間範圍
     - 標籤（配合分類功能）

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

目前筆記資料結構：
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

## 檔案結構與職責

- `index.html`: 主要的 HTML 結構
  - 負責頁面布局
  - 包含所有必要的 UI 元素
  - 引入所需的 CSS 和 JavaScript 檔案

- `style.css`: 樣式表
  - 定義所有元件的視覺樣式
  - 實現 RWD 響應式設計
  - 自訂 Bootstrap 樣式覆蓋

- `script.js`: JavaScript 主要邏輯
  - YouTube Player API 整合
  - 筆記管理邏輯
  - localStorage 資料處理
  - 使用者互動處理

## 開發指引

### 新功能開發步驟
1. 先閱讀本文件了解目前專案狀態
2. 檢查待開發功能列表的優先順序
3. 在開發新功能前先確認不會影響現有功能
4. 遵循現有的程式碼風格和架構
5. 確保新功能有適當的錯誤處理機制
6. 更新本文件中的功能列表和完成狀態

### 程式碼風格指引
1. 使用 ES6+ 語法
2. 保持函數單一職責
3. 使用有意義的變數命名
4. 適當的程式碼縮排和註解
5. 錯誤處理使用 try-catch 結構
6. 非同步操作使用 Promise 或 async/await

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

1. 實現筆記匯出功能（PDF、Markdown 格式）
2. 加入筆記分類標籤系統
3. 支援多部影片的筆記管理
4. 加入筆記搜尋功能
5. 支援筆記分享功能
6. 考慮加入鍵盤快捷鍵支援
7. 可能新增語音輸入筆記功能
