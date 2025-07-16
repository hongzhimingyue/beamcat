// 股票信息数据
// 주식 정보 데이터 (좌측)
const stocks = [
    { name: "삼성전자", price: "78,500", change: "+1.12%" },
    { name: "LG화학", price: "410,000", change: "-0.85%" },
    { name: "카카오", price: "52,300", change: "+0.45%" },
    { name: "현대차", price: "210,000", change: "+0.98%" },
    { name: "SK하이닉스", price: "150,800", change: "-1.02%" }
];

// 뉴스 피드 데이터 (중앙, 한글/한글 스타일)
const news = [
    {
        title: "李주혁 임기 내 전작권 전환 가능할까…주한미군 역할조정 우려도",
        meta: "연합뉴스  10분 전  108",
        summary: "정부는 '전작권 전환 추진' 공약…안팎에선 '부정적 분위기' 분석"
    },
    {
        title: "정규재 '10년째 손가 최씨와 사연 건의에…후 대통령 '그렇게나 됐네''",
        meta: "한국일보  20분 전  22",
        summary: "최근 이슈가 된 한국정치권의 사연에 대해 다양한 의견이 오가고 있다."
    },
    {
        title: "모스크바-평양 직항 이달 부활 속 평양-베이징 열차 스케줄도",
        meta: "이데일리  30분 전  15",
        summary: "북한 평양과 중국 베이징을 잇는 열차가 조만간 재개될 것으로 보인다."
    },
    {
        title: "김영선 청문회서 尹의원 돌직구…'후보자, 대답만 정리하고 오라'",
        meta: "서울신문  1시간 전  12",
        summary: "김영선 의원이 청문회에서 후보자에게 날카로운 질문을 던졌다."
    },
    {
        title: "조국청장 '법무부, 국회 위원장직 청구 절차 진행해야'",
        meta: "뉴스1  1시간 전  33",
        summary: "조국청장은 국회 위원장직 청구 절차를 신속히 진행할 것을 주문했다."
    }
];

// 실시간 검색어 데이터 (우측)
const hotSearches = [
    "고용지표 발표",
    "주식시장 급락",
    "폭우 피해 복구",
    "대통령 순방 일정",
    "부동산 대책",
    "AI 신기술",
    "환율 변동",
    "코로나19 현황",
    "유가 상승",
    "월드컵 경기"
];

// 经济新闻数据
const economyNews = [
    {
        title: "상반기 불법하도급 등 건설현장 불법행위 520건 적발",
        meta: "YTN  19",
        summary: "국토부가 올해 상반기 건설현장에서 불법 행위 520건을 적발했습니다. 적발내용은 불법하도급이 197건으로 가장 많았습니다."
    },
    {
        title: "기재부, 국민참여예산 제안 공모…예산 낭비 줄인다",
        meta: "조선비즈  35",
        summary: "기획재정부는 오는 25일까지 '국민참여예산'을 통해 국민 제안을 받습니다. 불필요한 예산 낭비를 줄이기 위한 취지입니다."
    },
    {
        title: "유가 상승에도 수입 물가 5개월째 하락…6월 0.6%↓",
        meta: "세계일보  23",
        summary: "지난달 중동 분쟁과 원유값 상승으로 국제유가가 올랐지만 원화 환율이 내려가 수입 물가가 5개월 연속 하락했습니다."
    },
    {
        title: "SK하이닉스 하루만에 '30만낙산' 받다…삼성전자 1% 상승 마감 [투자360]",
        meta: "매일경제  12",
        summary: "SK하이닉스는 0.5% 하락 29만8500원에 마감…삼성전자는 1.92% 상승 마감했습니다."
    },
    {
        title: "취업자 늘었지만…청년고용률 14개월째 하락",
        meta: "MBC  61",
        summary: "취업자 수가 지난해보다 10만 명 늘었지만 6개월 연속 청년고용률이 하락세를 보이고 있습니다."
    }
];

// 各栏目新闻数据
const newsData = {
    '정치': [
        { id: 'pol1', title: '정치 뉴스 1', meta: '정치일보  12', summary: '정치 뉴스 1 요약입니다.' },
        { id: 'pol2', title: '정치 뉴스 2', meta: '정치신문  8', summary: '정치 뉴스 2 요약입니다.' },
        { id: 'pol3', title: '정치 뉴스 3', meta: '정치뉴스  5', summary: '정치 뉴스 3 요약입니다.' },
        { id: 'pol4', title: '정치 뉴스 4', meta: '정치투데이  3', summary: '정치 뉴스 4 요약입니다.' },
        { id: 'pol5', title: '정치 뉴스 5', meta: '정치저널  1', summary: '정치 뉴스 5 요약입니다.' }
    ],
    '경제': [
        { id: 'eco1', title: '경제 뉴스 1', meta: '경제일보  15', summary: '경제 뉴스 1 요약입니다.' },
        { id: 'eco2', title: '경제 뉴스 2', meta: '경제신문  10', summary: '경제 뉴스 2 요약입니다.' },
        { id: 'eco3', title: '경제 뉴스 3', meta: '경제뉴스  7', summary: '경제 뉴스 3 요약입니다.' },
        { id: 'eco4', title: '경제 뉴스 4', meta: '경제투데이  4', summary: '경제 뉴스 4 요약입니다.' },
        { id: 'eco5', title: '경제 뉴스 5', meta: '경제저널  2', summary: '경제 뉴스 5 요약입니다.' }
    ],
    '사회': [
        { id: 'soc1', title: '사회 뉴스 1', meta: '사회일보  11', summary: '사회 뉴스 1 요약입니다.' },
        { id: 'soc2', title: '사회 뉴스 2', meta: '사회신문  9', summary: '사회 뉴스 2 요약입니다.' },
        { id: 'soc3', title: '사회 뉴스 3', meta: '사회뉴스  6', summary: '사회 뉴스 3 요약입니다.' },
        { id: 'soc4', title: '사회 뉴스 4', meta: '사회투데이  3', summary: '사회 뉴스 4 요약입니다.' },
        { id: 'soc5', title: '사회 뉴스 5', meta: '사회저널  1', summary: '사회 뉴스 5 요약입니다.' }
    ],
    '생활': [
        { id: 'life1', title: '생활 뉴스 1', meta: '생활일보  8', summary: '생활 뉴스 1 요약입니다.' },
        { id: 'life2', title: '생활 뉴스 2', meta: '생활신문  6', summary: '생활 뉴스 2 요약입니다.' },
        { id: 'life3', title: '생활 뉴스 3', meta: '생활뉴스  4', summary: '생활 뉴스 3 요약입니다.' },
        { id: 'life4', title: '생활 뉴스 4', meta: '생활투데이  2', summary: '생활 뉴스 4 요약입니다.' },
        { id: 'life5', title: '생활 뉴스 5', meta: '생활저널  1', summary: '생활 뉴스 5 요약입니다.' }
    ],
    '문화': [
        { id: 'cult1', title: '문화 뉴스 1', meta: '문화일보  7', summary: '문화 뉴스 1 요약입니다.' },
        { id: 'cult2', title: '문화 뉴스 2', meta: '문화신문  5', summary: '문화 뉴스 2 요약입니다.' },
        { id: 'cult3', title: '문화 뉴스 3', meta: '문화뉴스  3', summary: '문화 뉴스 3 요약입니다.' },
        { id: 'cult4', title: '문화 뉴스 4', meta: '문화투데이  2', summary: '문화 뉴스 4 요약입니다.' },
        { id: 'cult5', title: '문화 뉴스 5', meta: '문화저널  1', summary: '문화 뉴스 5 요약입니다.' }
    ],
    'IT': [
        { id: 'it1', title: 'IT 뉴스 1', meta: 'IT일보  13', summary: 'IT 뉴스 1 요약입니다.' },
        { id: 'it2', title: 'IT 뉴스 2', meta: 'IT신문  9', summary: 'IT 뉴스 2 요약입니다.' },
        { id: 'it3', title: 'IT 뉴스 3', meta: 'IT뉴스  6', summary: 'IT 뉴스 3 요약입니다.' },
        { id: 'it4', title: 'IT 뉴스 4', meta: 'IT투데이  3', summary: 'IT 뉴스 4 요약입니다.' },
        { id: 'it5', title: 'IT 뉴스 5', meta: 'IT저널  1', summary: 'IT 뉴스 5 요약입니다.' }
    ],
    '과학': [
        { id: 'sci1', title: '과학 뉴스 1', meta: '과학일보  10', summary: '과학 뉴스 1 요약입니다.' },
        { id: 'sci2', title: '과학 뉴스 2', meta: '과학신문  7', summary: '과학 뉴스 2 요약입니다.' },
        { id: 'sci3', title: '과학 뉴스 3', meta: '과학뉴스  5', summary: '과학 뉴스 3 요약입니다.' },
        { id: 'sci4', title: '과학 뉴스 4', meta: '과학투데이  2', summary: '과학 뉴스 4 요약입니다.' },
        { id: 'sci5', title: '과학 뉴스 5', meta: '과학저널  1', summary: '과학 뉴스 5 요약입니다.' }
    ],
    '세계': [
        { id: 'world1', title: '세계 뉴스 1', meta: '세계일보  14', summary: '세계 뉴스 1 요약입니다.' },
        { id: 'world2', title: '세계 뉴스 2', meta: '세계신문  10', summary: '세계 뉴스 2 요약입니다.' },
        { id: 'world3', title: '세계 뉴스 3', meta: '세계뉴스  7', summary: '세계 뉴스 3 요약입니다.' },
        { id: 'world4', title: '세계 뉴스 4', meta: '세계투데이  3', summary: '세계 뉴스 4 요약입니다.' },
        { id: 'world5', title: '세계 뉴스 5', meta: '세계저널  1', summary: '세계 뉴스 5 요약입니다.' }
    ],
    '아시아': [
        { id: 'asia1', title: '아시아 뉴스 1', meta: '아시아일보  9', summary: '아시아 뉴스 1 요약입니다.' },
        { id: 'asia2', title: '아시아 뉴스 2', meta: '아시아신문  7', summary: '아시아 뉴스 2 요약입니다.' },
        { id: 'asia3', title: '아시아 뉴스 3', meta: '아시아뉴스  5', summary: '아시아 뉴스 3 요약입니다.' },
        { id: 'asia4', title: '아시아 뉴스 4', meta: '아시아투데이  2', summary: '아시아 뉴스 4 요약입니다.' },
        { id: 'asia5', title: '아시아 뉴스 5', meta: '아시아저널  1', summary: '아시아 뉴스 5 요약입니다.' }
    ],
    '한국': [
        { id: 'kr1', title: '한국 뉴스 1', meta: '한국일보  11', summary: '한국 뉴스 1 요약입니다.' },
        { id: 'kr2', title: '한국 뉴스 2', meta: '한국신문  8', summary: '한국 뉴스 2 요약입니다.' },
        { id: 'kr3', title: '한국 뉴스 3', meta: '한국뉴스  5', summary: '한국 뉴스 3 요약입니다.' },
        { id: 'kr4', title: '한국 뉴스 4', meta: '한국투데이  2', summary: '한국 뉴스 4 요약입니다.' },
        { id: 'kr5', title: '한국 뉴스 5', meta: '한국저널  1', summary: '한국 뉴스 5 요약입니다.' }
    ]
};

// 주식 정보 렌더링
const stockList = document.getElementById('stock-list');
stocks.forEach(stock => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${stock.name}</td>
        <td>${stock.price}</td>
        <td style="color:${stock.change.startsWith('+') ? 'green' : 'red'}">${stock.change}</td>
    `;
    stockList.appendChild(tr);
});

// 뉴스 피드 렌더링
const newsList = document.getElementById('news-list');
news.forEach(item => {
    const div = document.createElement('div');
    div.className = 'news-item';
    div.innerHTML = `
        <img class="news-thumb" src="https://via.placeholder.com/80x60" alt="thumb">
        <div class="news-content">
            <div class="news-title">${item.title}</div>
            <div class="news-meta">${item.meta}</div>
            <div class="news-summary">${item.summary}</div>
        </div>
    `;
    newsList.appendChild(div);
});

// 실시간 검색어 렌더링
const hotSearchList = document.getElementById('hot-search-list');
hotSearches.forEach(keyword => {
    const li = document.createElement('li');
    li.textContent = keyword;
    hotSearchList.appendChild(li);
});

// 渲染新闻流函数，支持传入新闻数组
function renderNews(newsArr) {
    const newsList = document.getElementById('news-list');
    newsList.innerHTML = '';
    newsArr.forEach(item => {
        let meta = item.meta || '';
        let press = meta;
        let comment = '';
        const commentMatch = meta.match(/([0-9]+)$/);
        if(commentMatch) {
            comment = commentMatch[1];
            press = meta.replace(/([0-9]+)$/,'').trim();
        }
        if(item.comment !== undefined) comment = item.comment;
        if(item.press) press = item.press;
        
        const div = document.createElement('div');
        div.className = 'news-item';
        div.innerHTML = `
            <img class="news-thumb" src="https://via.placeholder.com/80x60" alt="thumb">
            <div class="news-content">
                <div class="news-title">${item.title}</div>
                <div class="news-summary">${item.summary}</div>
                <div class="news-bottom-row">
                    <span class="news-press">${press}</span>
                    <span class="news-comment"><span class="comment-icon">💬</span> ${comment}</span>
                </div>
            </div>
        `;
        // 新增：点击跳转到详情页，并存储当前新闻到localStorage
        div.addEventListener('click', function() {
            localStorage.setItem('lastNews', JSON.stringify(item));
            window.location.href = `detail.html?id=${item.id}`;
        });
        div.style.cursor = 'pointer';
        newsList.appendChild(div);
    });
}

// 默认渲染“정치”新闻
newsData['정치'] = [
    {
        id: 'pol1',
        title: '野, 정성호 청문회서 尹 사법리스크 공격…與는 "내란 증식·검찰 개혁"',
        summary: '서상혁 정성호 법무부 장관 후보자 인사청문회에서 국민의힘이 이재명 대통령의 사법리스크를 ...',
        press: '뉴스1',
        comment: 4,
        image: 'https://picsum.photos/seed/pol1/120/80'
    },
    {
        id: 'pol2',
        title: '김병기 "尹, 교도소 놀러갔나..교정당국 안일·보신주의적 태도 유감"',
        summary: '더불어민주당 김병기 대표 직무대행 겸 원내대표가 내린 특검 조사에 출석을 거부하는 윤석열 ...',
        press: 'MBC',
        comment: 38,
        image: 'https://picsum.photos/seed/pol2/120/80'
    },
    {
        id: 'pol3',
        title: '모스크바-평양 직항 이달 부활 속 평양-베이징 열차 스케줄도',
        summary: '북한 평양과 중국 베이징을 잇는 열차 편이 재개될 것으로 보인다. 평양과 러시아 모스크바 항...',
        press: '이데일리',
        comment: 16,
        image: 'https://picsum.photos/seed/pol3/120/80'
    },
    {
        id: 'pol4',
        title: '이진숙, 논문 의혹은 사과하며 표절은 부인 "학자적 양심 따랐다"',
        summary: '이진숙 사회부총리 겸 교육부 장관 후보자는 논문 표절 의혹에 대해 사과했다. 단 의혹 자체에 ...',
        press: '뉴스1',
        comment: 30,
        image: 'https://picsum.photos/seed/pol4/120/80'
    },
    {
        id: 'pol5',
        title: '김종인 “美특사, 가도 안가도 그만…여권 반대기류 유지”',
        summary: '이재명 대통령의 미국 특사로 내정된 것으로 알려진 국민의힘 김종인 전 비상대책위원장이 16...',
        press: '매일경제',
        comment: 21,
        image: 'https://picsum.photos/seed/pol5/120/80'
    }
];

// 默认渲染“경제”新闻
newsData['경제'] = [
    {
        id: 'eco1',
        title: "국내 첫 반려동물 전문 보험사 '마이브라운' 출범…보험료 1만원대",
        summary: "박재반려동물 전문 보험사 마이브라운반려동물보험(이하 마이브라운)이 지난 15일 브랜드...",
        press: '뉴스1',
        comment: 10,
        image: 'https://picsum.photos/seed/eco1/120/80'
    },
    {
        id: 'eco2',
        title: "국민참여예산 플랫폼, '불필요 예산' 국민 의견 접수",
        summary: "정부가 불필요 예산에 대한 국민의 의견을 직접 받습니다. 기획재정부는 오늘 국민참여예산 플...",
        press: 'KBS',
        comment: 39,
        image: 'https://picsum.photos/seed/eco2/120/80'
    },
    {
        id: 'eco3',
        title: "'6·27 대출 규제' 이후 10억 초과 아파트 계약 취소 8%P 늘어 [집슐랭]",
        summary: "지난달 '6·27 대출 규제' 이후 10억 원 초과 고가 아파트의 계약 취소 비중이 8%포인트 이상 ...",
        press: '서울경제',
        comment: 21,
        image: 'https://picsum.photos/seed/eco3/120/80'
    },
    {
        id: 'eco4',
        title: "한화생명, 암 보험 특약 3종·배타적사용권 획득",
        summary: "한화생명이 신규 암 보장 특약 3종에 대해 생명보험협회로부터 9개월 배타적사용권을 획득했...",
        press: '이코노미스트',
        comment: 19,
        image: 'https://picsum.photos/seed/eco4/120/80'
    },
    {
        id: 'eco5',
        title: "무신사, 강남대로 접수…다음 달 '무신사 스토어' 신규 오픈",
        summary: "무신사가 다음 달 1일 서울 강남에 오프라인 패션 편집숍 '무신사 스토어 강남'을 오픈한다고 1...",
        press: '서울경제',
        comment: 19,
        image: 'https://picsum.photos/seed/eco5/120/80'
    }
];

// 默认渲染“사회”新闻
newsData['사회'] = [
    {
        id: 'soc1',
        title: '전주시의회, 전주·완주 공동발전 지지 결의안 채택',
        summary: '전북 전주시의회는 16일 열린 제421회 임시회 제1차 본회의에서 최주만 시의원이 대표 발의한...',
        press: '연합뉴스',
        comment: 16,
        image: 'https://picsum.photos/seed/soc1/120/80'
    },
    {
        id: 'soc2',
        title: '내란 특검, 조태용 전 국정원장 주거지 등 압수수색…"증거인멸"',
        summary: '내란 특검팀(특별검사 조은석) 16일 조태용 전 국가정보원 원장 등에 대한 압수수색에 나섰다. ...',
        press: '중앙일보',
        comment: 44,
        image: 'https://picsum.photos/seed/soc2/120/80'
    },
    {
        id: 'soc3',
        title: '한밤 시험지 훔치려 학교 침입한 엄마 구속…딸은 퇴학 당한다',
        summary: '학교에 무단 침입, 시험지를 빼돌리려 한 학부모와 이를 도운 학교 관계자가 구속됐다. 대구지...',
        press: '중앙일보',
        comment: 52,
        image: 'https://picsum.photos/seed/soc3/120/80'
    },
    {
        id: 'soc4',
        title: '“6·3 대선에 중국 개입”…경찰, 부정선거 주장 모스 탄 수사, 李대통령 명예훼손 혐의',
        summary: '이재명 대통령이 청소년 시절 강력범죄에 연루됐다는 주장해 온 모스 탄(한국명 단현명) 미국 ...',
        press: '매일경제',
        comment: 89,
        image: 'https://picsum.photos/seed/soc4/120/80'
    },
    {
        id: 'soc5',
        title: '해병특검, 강의구 전 부속실장 소환..尹 ‘격노설’ 초점',
        summary: '순직해병 특검팀이 이르면 16일 ‘VIP 격노설’과 관련해 오늘(16일) 강의구 전 대통령실 부속실장을 ...',
        press: '연합뉴스TV',
        comment: 83,
        image: 'https://picsum.photos/seed/soc5/120/80'
    }
];

// 默认渲染“생활”新闻
newsData['생활'] = [
    {
        id: 'life1',
        title: "식지 않는 열기, '케이팝 데몬 헌터스'[윤성은의 영화이야기]",
        summary: "* 영화의 내용이 포함되어 있습니다. 금방 식을 열기가 아니었다. 넷플릭스 오리지널 애니메...",
        press: 'YTN',
        comment: 9,
        image: 'https://picsum.photos/seed/life1/120/80'
    },
    {
        id: 'life2',
        title: "전국 대부분 많은 비…중부 최대 200mm",
        summary: "수요일인 16일은 오후부터 전국 대부분 지역에 많은 비가 내릴 것으로 예보됐다. 특히 수도권을...",
        press: '뉴스1',
        comment: 38,
        image: 'https://picsum.photos/seed/life2/120/80'
    },
    {
        id: 'life3',
        title: "금호타이어, 전북현대모터스 축구단에 '타이어 정보 관리 솔루션' 제공",
        summary: "지능형 타이어 정보 관리 솔루션'으로 안정성▦▦의성▦▦제성 제공 나서 타이어 상태 실시간 ...",
        press: '헤럴드경제',
        comment: 18,
        image: 'https://picsum.photos/seed/life3/120/80'
    },
    {
        id: 'life4',
        title: "전국 곳곳에 비…중부·호남서 '국지성 호우'[날씨]",
        summary: "오늘(16일) 우산 꼭 챙기셔야겠습니다. 서해상에서 다가온 비구름대의 영향으로 현재 전국 곳...",
        press: 'SBS',
        comment: 33,
        image: 'https://picsum.photos/seed/life4/120/80'
    },
    {
        id: 'life5',
        title: '금강산 세계유산 등재알린 北…"세계적인 문화 및 자연경관"',
        summary: "북한이 금강산의 세계 유산 등재 소식을 알렸다. 지난 13일(현지시간) 유네스코 세계유산위원...",
        press: '중앙일보',
        comment: 8,
        image: 'https://picsum.photos/seed/life5/120/80'
    }
];

// 默认渲染“문화”新闻
newsData['문화'] = [
    {
        id: 'cult1',
        title: "전국 강풍 동반 비 소식…'폭우 대비' 철저히[날씨]",
        summary: "오늘(15일)도 전국 곳곳에 비가 내리면서 폭염의 열기를 식혀줬습니다. 지금도 오락가락 내리...",
        press: 'JTBC',
        comment: 33,
        image: 'https://picsum.photos/seed/cult1/120/80'
    },
    {
        id: 'cult2',
        title: "유네스코 세계유산, 내년 7월 부산서 논의…한국 첫 개최",
        summary: "'인류의 보물' 유네스코 세계유산이 내년 여름 부산에서 논의된다. 세계유산 분야에서 가장 중...",
        press: '한국경제',
        comment: 88,
        image: 'https://picsum.photos/seed/cult2/120/80'
    },
    {
        id: 'cult3',
        title: "전국 대부분 많은 비…경기남부 등 최대 200mm 물폭탄",
        summary: "수요일인 오늘(16일)도 전국이 대체로 흐리고 비가 내리겠습니다. 기상청에 따르면 비는 중부...",
        press: 'JTBC',
        comment: 38,
        image: 'https://picsum.photos/seed/cult3/120/80'
    },
    {
        id: 'cult4',
        title: "'케데힌' OST, 美 빌보드 싹쓸이…8곡 동시 진입",
        summary: "넷플릭스 애니메이션 영화 '케이팝 데몬 헌터스'(케데힌) 인기가 OST(오리지널 사운드트랙)로...",
        press: '머니투데이',
        comment: 9,
        image: 'https://picsum.photos/seed/cult4/120/80'
    },
    {
        id: 'cult5',
        title: "금호타이어 광주공장 화재 두 달…노조 \"로드맨 내놔라\"",
        summary: "금호타이어의 광주공장에서 대형 화재가 발생한 지 두 달이 되어가지만 향후 광주공장의 재건 관...",
        press: '뉴스1',
        comment: 8,
        image: 'https://picsum.photos/seed/cult5/120/80'
    }
];

// 默认渲染“IT”新闻
newsData['IT'] = [
    {
        id: 'it1',
        title: '韓 금융사 92% 클라우드 도입…"절반 이상이 AWS 쓴다"',
        summary: '한국 금융사가 클라우드를 전략적 수단으로 선택하기 시작했습니다. 인공지능(AI) 시대 금융권...',
        press: '지디넷코리아',
        comment: 9,
        image: 'https://picsum.photos/seed/it1/120/80'
    },
    {
        id: 'it2',
        title: '네이버플러스 스토어 성장 멈췄나…단골거래는 고공행진',
        summary: '사용자수 ‘주춤’ 네이버플러스 스토어…"단골거래 늘어" 모바일인덱스 집계 지난달 MAU 별도 ...',
        press: '연합뉴스',
        comment: 17,
        image: 'https://picsum.photos/seed/it2/120/80'
    },
    {
        id: 'it3',
        title: '서울경제진흥원, 서울게임콘텐츠센터 신규 입주기업 모집',
        summary: '2025 서울게임콘텐츠센터 신규 입주기업 모집 포스터. 서울경제진흥원 제공 서울시와 서울경...',
        press: '문화일보',
        comment: 18,
        image: 'https://picsum.photos/seed/it3/120/80'
    },
    {
        id: 'it4',
        title: '네이버 전자문서, PC·모바일 웹 열람 지원',
        summary: '네이버가 전자문서를 PC와 모바일 웹에서도 확인할 수 있도록 네이버 전자문서 서비스를 고도...',
        press: '뉴스1',
        comment: 20,
        image: 'https://picsum.photos/seed/it4/120/80'
    },
    {
        id: 'it5',
        title: '퇴임하는 유상임 장관 "부처 선도역할 커져…변화 주도해야"',
        summary: '과기정통부 부총리로 부처로 걱정해야" 유상임 과학기술정보통신부 장관이 17개월간 수행한 ...',
        press: '연합뉴스',
        comment: 11,
        image: 'https://picsum.photos/seed/it5/120/80'
    }
];

// 默认渲染“과학”新闻
newsData['과학'] = [
    {
        id: 'sci1',
        title: '韓 금융사 92% 클라우드 도입…"절반 이상이 AWS 쓴다"',
        summary: '한국 금융사가 클라우드를 전략적 수단으로 선택하기 시작했습니다. 인공지능(AI) 시대 금융권...',
        press: '지디넷코리아',
        comment: 9,
        image: 'https://picsum.photos/seed/sci1/120/80'
    },
    {
        id: 'sci2',
        title: '네이버플러스 스토어 성장 멈췄나…단골거래는 고공행진',
        summary: '사용자수 ‘주춤’ 네이버플러스 스토어…"단골거래 늘어" 모바일인덱스 집계 지난달 MAU 별도 ...',
        press: '연합뉴스',
        comment: 17,
        image: 'https://picsum.photos/seed/sci2/120/80'
    },
    {
        id: 'sci3',
        title: '서울경제진흥원, 서울게임콘텐츠센터 신규 입주기업 모집',
        summary: '2025 서울게임콘텐츠센터 신규 입주기업 모집 포스터. 서울경제진흥원 제공 서울시와 서울경...',
        press: '문화일보',
        comment: 18,
        image: 'https://picsum.photos/seed/sci3/120/80'
    },
    {
        id: 'sci4',
        title: '네이버 전자문서, PC·모바일 웹 열람 지원',
        summary: '네이버가 전자문서를 PC와 모바일 웹에서도 확인할 수 있도록 네이버 전자문서 서비스를 고도...',
        press: '뉴스1',
        comment: 20,
        image: 'https://picsum.photos/seed/sci4/120/80'
    },
    {
        id: 'sci5',
        title: '퇴임하는 유상임 장관 "부처 선도역할 커져…변화 주도해야"',
        summary: '과기정통부 부총리로 부처로 걱정해야" 유상임 과학기술정보통신부 장관이 17개월간 수행한 ...',
        press: '연합뉴스',
        comment: 11,
        image: 'https://picsum.photos/seed/sci5/120/80'
    }
];

// 默认渲染“세계”新闻
newsData['세계'] = [
    {
        id: 'world1',
        title: '美 AI칩 수출 ‘원천봉쇄’→中이 중독되게’ 변화오나[이태규의 워싱턴 플레이북]',
        summary: '미국 정부가 엔비디아의 저사양 인공지능(AI) 반도체 H20의 대중 수출을 허가한 가운데 미 정...',
        press: '서울경제',
        comment: 86,
        image: 'https://imgnews.pstatic.net/image/011/2024/07/16/0004337201_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: '서울경제 기자',
        content: '미국 정부가 엔비디아의 저사양 인공지능(AI) 반도체 H20의 대중 수출을 허가한 가운데 미 정부가 AI칩 수출 규제를 원천봉쇄에서 중국이 중독되게 하는 방향으로 바꿀지 주목된다.'
    },
    {
        id: 'world2',
        title: '트럼프 "작은 나라들에 곧 10% 좀 넘는 단일 세율 상호관세 통보"',
        summary: '도널드 트럼프 미국 대통령은 현지 시간 15일 아프리카 등의 작은 나라들에 10%를 조금 넘는 단...',
        press: 'SBS',
        comment: 65,
        image: 'https://imgnews.pstatic.net/image/055/2024/07/16/0001154321_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: 'SBS 기자',
        content: '도널드 트럼프 미국 대통령은 현지 시간 15일 아프리카 등의 작은 나라들에 10%를 조금 넘는 단일 세율의 상호관세를 곧 통보할 것이라고 밝혔다.'
    },
    {
        id: 'world3',
        title: '경제난에 신음 쿠바, "거지 없다"는 장관에 민심 폭발',
        summary: '쓰레기통 뒤지는 쿠바인 경제위기에 시달리는 쿠바에서 노동부 장관이 "쿠바에는 거지가 없다"고 발...',
        press: 'SBS',
        comment: 13,
        image: 'https://imgnews.pstatic.net/image/055/2024/07/16/0001154322_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: 'SBS 기자',
        content: '쓰레기통 뒤지는 쿠바인 경제위기에 시달리는 쿠바에서 노동부 장관이 "쿠바에는 거지가 없다"고 발언해 논란이 일고 있다.'
    },
    {
        id: 'world4',
        title: '애플, 美 업체와 희토류자석 7천억원 공급 계약…美 공급망 확대',
        summary: '김태종 특파원 = 애플이 미국 내 공급망 확장을 위해 희토류 채굴·가공 업체인 MP 머티리얼즈와...',
        press: '연합뉴스',
        comment: 17,
        image: 'https://imgnews.pstatic.net/image/001/2024/07/16/0004337203_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: '연합뉴스 기자',
        content: '애플이 미국 내 공급망 확장을 위해 희토류 채굴·가공 업체인 MP 머티리얼즈와 7천억원 규모의 희토류 자석 공급 계약을 체결했다.'
    },
    {
        id: 'world5',
        title: '푸틴에 약한 트럼프?.."모스크바 공격은 안돼"',
        summary: '도널드 트럼프 미국 대통령은 볼로디미르 젤렌스키 우크라이나 대통령이 러시아 수도 모스크바를 공격하지...',
        press: 'TV조선',
        comment: 50,
        image: 'https://imgnews.pstatic.net/image/448/2024/07/16/0000456789_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: 'TV조선 기자',
        content: '도널드 트럼프 미국 대통령은 볼로디미르 젤렌스키 우크라이나 대통령이 러시아 수도 모스크바를 공격하지 않겠다고 약속해야 한다고 말했다.'
    }
];

// 默认渲染“아시아”新闻
newsData['아시아'] = [
    {
        id: 'asia1',
        title: '맞벌이 부모 퇴근 때까지 돌본다…방과후 아이들 책임지는 이곳',
        summary: '안녕하세요! 지난달 27일 오후, 서울 중랑구의 중화지역아동센터에 학교 수업을 마친 아이들이 모...',
        press: '중앙일보',
        comment: 19,
        image: 'https://imgnews.pstatic.net/image/025/2024/07/16/0003354321_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: '중앙일보 기자',
        content: '안녕하세요! 지난달 27일 오후, 서울 중랑구의 중화지역아동센터에 학교 수업을 마친 아이들이 모여들었다.'
    },
    {
        id: 'asia2',
        title: '20대 여성 가스라이팅 해서…100억원 뜯어낸 20대 남성, 중형 선고',
        summary: "'가스라이팅'(심리적 지배)을 통해 또래 여성으로부터 100억원을 뜯어낸 20대 남성이 중형을 선...",
        press: '아이뉴스24',
        comment: 25,
        image: 'https://imgnews.pstatic.net/image/031/2024/07/16/0000854321_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: '아이뉴스24 기자',
        content: "'가스라이팅'(심리적 지배)을 통해 또래 여성으로부터 100억원을 뜯어낸 20대 남성이 중형을 선고받았다."
    },
    {
        id: 'asia3',
        title: '“내신 얼마나 중요한데”…또 문제지 베껴 출제한 교사, 적발',
        summary: '전남 목포의 한 고교 기간제 교사에 이어 광주에서는 정교사가 기말고사 시험문제를 출제하면서 다른...',
        press: '아이뉴스24',
        comment: 26,
        image: 'https://imgnews.pstatic.net/image/031/2024/07/16/0000854322_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: '아이뉴스24 기자',
        content: '전남 목포의 한 고교 기간제 교사에 이어 광주에서는 정교사가 기말고사 시험문제를 출제하면서 다른 학교 문제를 베껴 출제한 사실이 드러났다.'
    },
    {
        id: 'asia4',
        title: '박정훈 대령 “채 해병 같은 죽음 다신 없길”',
        summary: '박정훈 대령이 오는 19일 순직한 고(故) 채수근 상병 2주기를 앞두고 “두 번 다시 채 해병 같은 죽...',
        press: '국제신문',
        comment: 88,
        image: 'https://imgnews.pstatic.net/image/082/2024/07/16/0001234321_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: '국제신문 기자',
        content: '박정훈 대령이 오는 19일 순직한 고(故) 채수근 상병 2주기를 앞두고 “두 번 다시 채 해병 같은 죽음이 없길 바란다”고 밝혔다.'
    },
    {
        id: 'asia5',
        title: '“서울고검 조사실로 데려오라”…윤 3차 강제구인 시도',
        summary: '지난 15일 경기도 의왕시 서울구치소에서 법무부 호송차량이 구치소를 나서고 있다. 12.3 비율로 강...',
        press: 'SBS',
        comment: 50,
        image: 'https://imgnews.pstatic.net/image/055/2024/07/16/0001154323_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: 'SBS 기자',
        content: '지난 15일 경기도 의왕시 서울구치소에서 법무부 호송차량이 구치소를 나서고 있다. 12.3 비율로 강제구인 시도가 있었다.'
    }
];

// 默认渲染“한국”新闻
newsData['한국'] = [
    {
        id: 'kr1',
        title: '정청래 "강력한 대표" 박찬대 "합리적 대표"…첫 토론 신경전',
        summary: '박치하 더불어민주당 당대표 선거에 출마한 정청래·박찬대 후보가 16일 첫 TV 토론에서 각각 "강력한...',
        press: '뉴스1',
        comment: 9,
        image: 'https://imgnews.pstatic.net/image/421/2024/07/16/0008337201_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: '뉴스1 기자',
        content: '박치하 더불어민주당 당대표 선거에 출마한 정청래·박찬대 후보가 16일 첫 TV 토론에서 각각 "강력한 대표"와 "합리적 대표"를 내세우며 신경전을 벌였다.'
    },
    {
        id: 'kr2',
        title: '국정기획위, AI·인구 등 ‘복합전략과제로 검토',
        summary: '조승래 국정기획위 대변인은 16일 서울 정부서울청사 창성동별관에서 진행한 브리핑에서 "인구, AI 등...',
        press: '파이낸셜뉴스',
        comment: 6,
        image: 'https://imgnews.pstatic.net/image/277/2024/07/16/0005432101_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: '파이낸셜뉴스 기자',
        content: '조승래 국정기획위 대변인은 16일 서울 정부서울청사 창성동별관에서 진행한 브리핑에서 "인구, AI 등 복합전략과제로 검토 중"이라고 밝혔다.'
    },
    {
        id: 'kr3',
        title: '통일연구원장 "통일부 명칭서 ‘통일’ 삭제 매우 부적절"',
        summary: '지난 정부에서 임명된 김천식 통일연구원장이 "통일부에서 ‘통일’을 삭제하는 것은 매우 부적절하다"고...',
        press: 'MBC',
        comment: 27,
        image: 'https://imgnews.pstatic.net/image/214/2024/07/16/0001345678_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: 'MBC 기자',
        content: '지난 정부에서 임명된 김천식 통일연구원장이 "통일부에서 ‘통일’을 삭제하는 것은 매우 부적절하다"고 밝혔다.'
    },
    {
        id: 'kr4',
        title: '"윤, 폭염처럼 짜증나고 피곤".."강남 부자한테 무슨 영치금"[맛수다]',
        summary: '* 아래 텍스트는 실제 방송 내용과 차이가 있을 수 있으니 보다 정확한 내용은 방송으로 확인하세요...',
        press: 'MBC',
        comment: 7,
        image: 'https://imgnews.pstatic.net/image/214/2024/07/16/0001345679_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: 'MBC 기자',
        content: '* 아래 텍스트는 실제 방송 내용과 차이가 있을 수 있으니 보다 정확한 내용은 방송으로 확인하세요.'
    },
    {
        id: 'kr5',
        title: '김영훈 노동 후보자 청문회…"北 주적인가"·"색깔론" 여야 충돌',
        summary: '국회, 후보자 방북 이력 등 공세…민주 "국정원장 청문회인가" 방어막 노란봉투법 두고도 공방...',
        press: '연합뉴스',
        comment: 33,
        image: 'https://imgnews.pstatic.net/image/001/2024/07/16/0004337204_001_20240716120001060.jpg?type=w647',
        date: '2025.07.16',
        writer: '연합뉴스 기자',
        content: '국회, 후보자 방북 이력 등 공세…민주 "국정원장 청문회인가" 방어막 노란봉투법 두고도 공방.'
    }
];

// 默认渲染“정치”新闻
renderNews(newsData['정치']);

// 导航栏点击事件，切换新闻内容
const navLinks = document.querySelectorAll('.nav-inner a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const key = link.textContent.trim();
        if(newsData[key]) {
            renderNews(newsData[key]);
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});