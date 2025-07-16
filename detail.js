// 详情页从localStorage读取新闻数据
const lastNews = localStorage.getItem('lastNews');
let detail = null;
if (lastNews) {
    try {
        detail = JSON.parse(lastNews);
    } catch (e) {
        detail = null;
    }
}
// 默认内容
if (!detail) {
    detail = {
        press: '뉴스1',
        title: '뉴스 제목 예시',
        date: '입력 2025.07.16. 오후 12:22',
        modified: '수정 2025.07.16. 오후 12:23',
        writer: '서상혁 외 2명',
        image: 'https://via.placeholder.com/700x350',
        comment: 3,
        recommend: 2,
        summary: '뉴스 본문 요약이 이곳에 표시됩니다.',
        content: '뉴스 본문 내용이 이곳에 표시됩니다.',
        logo: 'media/logo.png'
    };
}
// 填充内容
if(document.getElementById('detail-press'))
    document.getElementById('detail-press').textContent = detail.press || '';
if(document.getElementById('detail-title'))
    document.getElementById('detail-title').textContent = detail.title || '';
if(document.getElementById('detail-date'))
    document.getElementById('detail-date').textContent = detail.date || '';
if(document.getElementById('detail-modified'))
    document.getElementById('detail-modified').textContent = detail.modified || '';
if(document.getElementById('detail-writer'))
    document.getElementById('detail-writer').textContent = detail.writer || '';
if(document.getElementById('detail-image'))
    document.getElementById('detail-image').src = detail.image || '';
if(document.getElementById('detail-content'))
    document.getElementById('detail-content').textContent = detail.content || detail.summary || '';
if(document.getElementById('detail-comment'))
    document.getElementById('detail-comment').textContent = detail.comment !== undefined ? detail.comment : '';
if(document.getElementById('detail-summary'))
    document.getElementById('detail-summary').textContent = detail.summary || '';
if(document.getElementById('detail-recommend'))
    document.getElementById('detail-recommend').textContent = detail.recommend !== undefined ? detail.recommend : '추천';
if(document.getElementById('detail-press-logo'))
    document.getElementById('detail-press-logo').src = detail.logo || 'media/logo.png'; 