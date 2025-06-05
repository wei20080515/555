let player;
let notes = [];

// 初始化 YouTube Player API
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '360',
        width: '640',
        videoId: '',
        playerVars: {
            'playsinline': 1
        }
    });
}

// 從 URL 中提取 YouTube 影片 ID
function getVideoId(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : false;
}

// 載入影片
function loadVideo() {
    const url = document.getElementById('videoUrl').value;
    const videoId = getVideoId(url);
    
    if (videoId) {
        player.loadVideoById(videoId);
    } else {
        alert('請輸入有效的 YouTube 影片連結');
    }
}

// 格式化時間
function formatTime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    
    return `${hours > 0 ? hours + ':' : ''}${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

// 獲取當前播放時間
function getCurrentTime() {
    const currentTime = player.getCurrentTime();
    document.getElementById('timestamp').value = currentTime;
}

// 新增筆記
function addNote() {
    const timestamp = document.getElementById('timestamp').value;
    const noteText = document.getElementById('note').value;
    
    if (!timestamp || !noteText) {
        alert('請先取得時間點並輸入筆記內容');
        return;
    }
    
    const note = {
        timestamp: parseFloat(timestamp),
        text: noteText,
        id: Date.now()
    };
    
    notes.push(note);
    notes.sort((a, b) => a.timestamp - b.timestamp);
    
    updateNotesList();
    document.getElementById('note').value = '';
}

// 更新筆記列表
function updateNotesList() {
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = '';
    
    notes.forEach(note => {
        const noteElement = document.createElement('div');
        noteElement.className = 'note-item';
        noteElement.innerHTML = `
            <span class="timestamp-link" onclick="seekTo(${note.timestamp})">${formatTime(note.timestamp)}</span>
            <span class="delete-note" onclick="deleteNote(${note.id})">×</span>
            <p class="mb-0 mt-2">${note.text}</p>
        `;
        notesList.appendChild(noteElement);
    });
    
    // 保存到 localStorage
    localStorage.setItem('videoNotes', JSON.stringify(notes));
}

// 跳轉到指定時間點
function seekTo(timestamp) {
    player.seekTo(timestamp);
    player.playVideo();
}

// 刪除筆記
function deleteNote(id) {
    if (confirm('確定要刪除這條筆記嗎？')) {
        notes = notes.filter(note => note.id !== id);
        updateNotesList();
    }
}

// 頁面載入時從 localStorage 恢復筆記
window.onload = function() {
    const savedNotes = localStorage.getItem('videoNotes');
    if (savedNotes) {
        notes = JSON.parse(savedNotes);
        updateNotesList();
    }
};
