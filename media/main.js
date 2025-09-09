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
        {
            id: 'pol1',
            title: '이진숙, 논문 의혹에 "사죄드리나…" 연구윤리 준수 적극 해명',
            summary: '이진숙 부총리 겸 교육부 장관 후보자가 16일 인사청문회에서 두 자녀의 조기 유학 논란...',
            press: '한겨레',
            comment: 30,
            image: 'https://picsum.photos/600/320?random=100',
            content: '이진숙 부총리 겸 교육부 장관 후보자가 16일 인사청문회에서 두 자녀의 조기 유학 논란과 관련해 연구윤리 준수 입장을 적극 해명했다.'
        },
        {
            id: 'pol2',
            title: '민주당 대전 국회의원 "해수부 이전 찬성"에 정치권 갈등',
            summary: '장철민·박정현 찬성 의견 내비쳐…국민의힘 반발 더불어민주당 소속 대전 지역 국회의...',
            press: '연합뉴스',
            comment: 17,
            image: 'https://picsum.photos/600/320?random=101',
            content: '장철민·박정현 찬성 의견 내비쳐…국민의힘 반발 더불어민주당 소속 대전 지역 국회의원들이 해수부 이전에 찬성 입장을 밝히면서 정치권 갈등이 커지고 있다.'
        },
        {
            id: 'pol3',
            title: '기후위기가 부른 乙 챙기기…與 농업4법·온라인플랫폼법 처리 탄력받나',
            summary: '집권여당 더불어민주당이 기후위기로 인한 폭염으로 인해 농수축산물 가격 폭등, 사망 ...',
            press: '파이낸셜뉴스',
            comment: 27,
            image: 'https://picsum.photos/600/320?random=102',
            content: '집권여당 더불어민주당이 기후위기로 인한 폭염으로 인해 농수축산물 가격 폭등, 사망 사고 등 사회적 문제가 커지자 관련 법안 처리를 서두르고 있다.'
        },
        {
            id: 'pol4',
            title: '김영훈 고용노동부 장관 인사청문회 "주적" 논란에 파행[뉴스1 PICK]',
            summary: '김영훈 고용노동부 장관 후보자 인사청문회가 열린 16일 과거 방북 전력이 있는 김 후...',
            press: '뉴스1',
            comment: 48,
            image: 'https://picsum.photos/600/320?random=103',
            content: '김영훈 고용노동부 장관 후보자 인사청문회가 열린 16일 과거 방북 전력이 있는 김 후보자의 주적 논란이 불거지며 청문회가 파행됐다.'
        },
        {
            id: 'pol5',
            title: '송언석, 윤희숙 인적쇄신안에 "당 위한 충정으로 생각"',
            summary: '송언석 국민의힘 비상대책위원장 겸 원내대표는 16일 윤희숙 혁신위원장의 인적쇄...',
            press: '이데일리',
            comment: 9,
            image: 'https://picsum.photos/600/320?random=104',
            content: '송언석 국민의힘 비상대책위원장 겸 원내대표는 16일 윤희숙 혁신위원장의 인적쇄신안에 대해 "당을 위한 충정으로 생각한다"고 밝혔다.'
        }
    ],
    '경제': [
        {
            id: 'eco1',
            title: '쿠팡 물류센터 찾은 민주당 "모범적인 사례"',
            summary: '쿠팡로지스틱스서비스(CLS)는 더불어민주당 의원이 자사 물류 시설을 찾아 업무 환경을...',
            press: '한국경제TV',
            comment: 25,
            image: 'https://picsum.photos/600/320?random=105',
            content: '쿠팡로지스틱스서비스(CLS)는 더불어민주당 의원이 자사 물류 시설을 찾아 업무 환경을 점검했다고 16일 밝혔다.'
        },
        {
            id: 'eco2',
            title: '정은경 "연금 자동조정장치 도입 신중해야…개혁에 청년 참여"',
            summary: '인사청문회 질의답변서 제출…"통합돌봄 안착·사회안전망 구축해야" "부모의 혼인 상...',
            press: '연합뉴스',
            comment: 9,
            image: 'https://picsum.photos/600/320?random=106',
            content: '인사청문회 질의답변서 제출…"통합돌봄 안착·사회안전망 구축해야" "부모의 혼인 상태 여부와 무관하게 아동이 차별받지 않도록 해야 한다"'
        },
        {
            id: 'eco3',
            title: '"기업정신 어려울수록 되살려야"…한경협 CEO 제주하계포럼 개막',
            summary: '한국경제인협회는 16일부터 나흘 동안 "위기를 기회로 바꾸는 기업정신, 도전과 혁신"을...',
            press: '노컷뉴스',
            comment: 21,
            image: 'https://picsum.photos/600/320?random=107',
            content: '한국경제인협회는 16일부터 나흘 동안 "위기를 기회로 바꾸는 기업정신, 도전과 혁신"을 주제로 제주에서 하계포럼을 개최한다.'
        },
        {
            id: 'eco4',
            title: 'LG이노텍 "만능 디지털키"로 3兆 황금시장 잡는다',
            summary: '예민한 센서가 미세 호흡을 감지해 아이가 차량 뒷자리에 홀로 있다는 알림을 스마트폰...',
            press: '한국경제',
            comment: 32,
            image: 'https://picsum.photos/600/320?random=108',
            content: '예민한 센서가 미세 호흡을 감지해 아이가 차량 뒷자리에 홀로 있다는 알림을 스마트폰으로 보내준다.'
        },
        {
            id: 'eco5',
            title: '오늘의집에서 본 인텔, 쇼룸 "오프하우스"에서 직접 만난다',
            summary: '오늘의집의 체험형 오프라인 쇼룸 "오프하우스"가 서울 종로구 북촌에 연다고 16일 밝...',
            press: '뉴스1',
            comment: 13,
            image: 'https://picsum.photos/600/320?random=109',
            content: '오늘의집의 체험형 오프라인 쇼룸 "오프하우스"가 서울 종로구 북촌에 연다고 16일 밝혔다.'
        }
    ],
    '사회': [
        {
            id: 'soc1',
            title: '중부지방 시간당 최대 50mm 비 쏟아진다…중대본 1단계 가동',
            summary: '행정안전부는 수도권·충청권 등 중부지방을 중심으로 호우 특보가 발표되면서 16일 오...',
            press: '머니투데이',
            comment: 21,
            image: 'https://picsum.photos/600/320?random=110',
            content: '행정안전부는 수도권·충청권 등 중부지방을 중심으로 호우 특보가 발표되면서 16일 오후 3시를 기해 중앙재난안전대책본부 1단계를 가동한다고 밝혔다.'
        },
        {
            id: 'soc2',
            title: '尹, 법원에 구속적부심 청구…"절차적으로 위법 부담"',
            summary: '12·3 내란 사태로 구속 수감된 윤석열 전 대통령이 법원에 구속이 적절한지 다시 판...',
            press: '노컷뉴스',
            comment: 117,
            image: 'https://picsum.photos/600/320?random=111',
            content: '12·3 내란 사태로 구속 수감된 윤석열 전 대통령이 법원에 구속이 적절한지 다시 판단해달라고 구속적부심을 청구했다.'
        },
        {
            id: 'soc3',
            title: '민주노총, 오늘 총파업 돌입…"윤 정권 반노동정책 폐기하라"',
            summary: '전국민주노동조합총연맹(민주노총)이 윤석열 정부의 반노동정책 폐기를 촉구하며...',
            press: '중앙일보',
            comment: 54,
            image: 'https://picsum.photos/600/320?random=112',
            content: '전국민주노동조합총연맹(민주노총)이 윤석열 정부의 반노동정책 폐기를 촉구하며 16일부터 총파업에 돌입했다.'
        },
        {
            id: 'soc4',
            title: '서울 전역 ‘호우주의보’, 청계천·안양천 등 27개 하천 출입 통제',
            summary: '16일 오후 5시를 기해 서울 전역에 호우주의보가 내려져 청계천, 안양천 등...',
            press: '파이낸셜뉴스',
            comment: 25,
            image: 'https://picsum.photos/600/320?random=113',
            content: '16일 오후 5시를 기해 서울 전역에 호우주의보가 내려져 청계천, 안양천 등 시내 29개 하천 출입이 통제됐다.'
        },
        {
            id: 'soc5',
            title: '경찰, ‘이 대통령 명예훼손 혐의 모스 탄 수사…논란 속 연설',
            summary: '서울대 정문 앞에서 간담회를 하던 모스탄 미국 리버티대 교수 이재명 대통...',
            press: 'SBS',
            comment: 30,
            image: 'https://picsum.photos/600/320?random=114',
            content: '서울대 정문 앞에서 간담회를 하던 모스탄 미국 리버티대 교수 이재명 대통령이 청소년 시절 강력범죄에 연루됐다는 주장에 대해 경찰이 수사에 착수했다.'
        }
    ],
    '생활': [
        {
            id: 'life1',
            title: '진짜 장맛비…전국에 강한 비, 시간당 최고 50mm[오늘 날씨]',
            summary: '수요일인 오늘(16일) 서쪽 지역을 중심으로 최대 150㎜ 이상의 많은 비가...',
            press: '머니투데이',
            comment: 39,
            image: 'https://picsum.photos/600/320?random=115',
            content: '수요일인 오늘(16일) 서쪽 지역을 중심으로 최대 150㎜ 이상의 많은 비가 내리겠다. 시간당 최고 50㎜의 강한 비가 쏟아질 전망이다.'
        },
        {
            id: 'life2',
            title: '부산에서 "유네스코 세계유산" 논의한다…한국 첫 개최',
            summary: '"유네스코 세계유산"에 관한 핵심 회의가 내년 여름 부산에서 열린다. 한국이...',
            press: '농민신문',
            comment: 94,
            image: 'https://picsum.photos/600/320?random=116',
            content: '"유네스코 세계유산"에 관한 핵심 회의가 내년 여름 부산에서 열린다. 한국이 유네스코 세계유산 관련 국제회의를 개최하는 것은 이번이 처음이다.'
        },
        {
            id: 'life3',
            title: '황수미가 기획한 마티네 3편..."내 이름 건 공연, 친숙하게 다가갈 것"',
            summary: '퀸 콩쿠르 우승 등 세계적 소프라노 황수미가 3달간 가곡·오페라·시네마 주...',
            press: '매일경제',
            comment: 8,
            image: 'https://picsum.photos/600/320?random=117',
            content: '퀸 콩쿠르 우승 등 세계적 소프라노 황수미가 3달간 가곡·오페라·시네마 주제로 롯데콘서트홀 "황수미의 마티네" 공연을 연다.'
        },
        {
            id: 'life4',
            title: "“이 정도라고”…50세 이상, 치아 치료 안 하고 두면 암 위험 18% 증가",
            summary: '충치나 치은염 등 구강질환이 있으면 암 발생과 암으로 인한 사망률이 높...',
            press: '아시아경제',
            comment: 16,
            image: 'https://picsum.photos/600/320?random=118',
            content: '충치나 치은염 등 구강질환이 있으면 암 발생과 암으로 인한 사망률이 높아진다는 연구 결과가 나왔다.'
        },
        {
            id: 'life5',
            title: '퇴근길, 서울 등 중서부 곳곳 호우주의보…돌풍·벼락 유의[날씨]',
            summary: '퇴근 시간인 현재, 전국 곳곳에 돌풍과 벼락을 동반해 많은 비가 내리고...',
            press: '연합뉴스TV',
            comment: 14,
            image: 'https://picsum.photos/600/320?random=119',
            content: '퇴근 시간인 현재, 전국 곳곳에 돌풍과 벼락을 동반해 많은 비가 내리고 있습니다. 특히, 서울 등 중서부 지역에 호우주의보가 내려졌습니다.'
        }
    ],
    '문화': [
        {
            id: 'cult1',
            title: '많은 비에 강한 바람…경기남부·충청 200mm 집중호우',
            summary: '전국에 비가 내리는 가운데, 빗줄기가 점차 굵어지고 있습니다. 특보 지역이...',
            press: '노컷뉴스',
            comment: 14,
            image: 'https://picsum.photos/600/320?random=120',
            content: '전국에 비가 내리는 가운데, 빗줄기가 점차 굵어지고 있습니다. 특보 지역이 확대되면서 현재 경기남부와 충청권에 많은 비가 내리고 있습니다.'
        },
        {
            id: 'cult2',
            title: '[속보] 부산, 유네스코 세계유산위원회 개최도시 선정',
            summary: '세계유산협약 가입 후 38년만 196개국서 3000명 참석 경제효과 670억 국...',
            press: '매일경제',
            comment: 94,
            image: 'https://picsum.photos/600/320?random=121',
            content: '세계유산협약 가입 후 38년만 196개국서 3000명 참석 경제효과 670억 국제행사 "K컬처 국격 높인다"'
        },
        {
            id: 'cult3',
            title: '전국에 "물폭탄" 쏟아진다…경기남부 등 최대 200㎜, 침수피해 주의',
            summary: '수요일인 16일은 전국 대부분 지역에 매우 강하고 많은 비가 쏟아질 전망이다...',
            press: '매일경제',
            comment: 39,
            image: 'https://picsum.photos/600/320?random=122',
            content: '수요일인 16일은 전국 대부분 지역에 매우 강하고 많은 비가 쏟아질 전망이다. 기상청에 따르면 경기남부 등 일부 지역에는 최대 200㎜의 비가 내릴 수 있다.'
        },
        {
            id: 'cult4',
            title: '서울대병원 "50세 이상 장년층 치아 없으면 암 발생 위험 18% 증가"',
            summary: '서울대병원 공공진료센터 김계형 교수와 서울시보라매병원 공공부문 이승연 박사...',
            press: 'TV조선',
            comment: 16,
            image: 'https://picsum.photos/600/320?random=123',
            content: '서울대병원 공공진료센터 김계형 교수와 서울시보라매병원 공공부문 이승연 박사는 2009년부터 2019년까지 50세 이상 장년층 20만여 명을 추적 조사한 결과, 치아가 없으면 암 발생 위험이 18% 높아진다고 밝혔다.'
        },
        {
            id: 'cult5',
            title: '가곡부터 뮤지컬까지...소프라노 황수미의 "클래식 경계 넘는 마티네"',
            summary: '한국을 대표하는 소프라노 황수미가 직접 기획·출연하는 롯데콘서트홀 마티네 콘...',
            press: '서울경제',
            comment: 8,
            image: 'https://picsum.photos/600/320?random=124',
            content: '한국을 대표하는 소프라노 황수미가 직접 기획·출연하는 롯데콘서트홀 마티네 콘서트 시리즈 "황수미의 마티네"가 열린다.'
        }
    ],
    'IT': [
        {
            id: 'it1',
            title: '케이뱅크 CIO "클라우드 기반 AI 강화…AI 뱅크 전환 속도"',
            summary: '케이뱅크가 클라우드 기반의 생성형 인공지능(AI) 서비스를 차별화하며 인터...',
            press: '디지털타임스',
            comment: 17,
            image: 'https://picsum.photos/600/320?random=125',
            content: '케이뱅크가 클라우드 기반의 생성형 인공지능(AI) 서비스를 차별화하며 인터넷전문은행 중 빠른 전환을 추진하고 있다.'
        },
        {
            id: 'it2',
            title: 'LG CNS, AX 기술로 곤충 스마트팩토리팜 구축',
            summary: 'LG CNS가 제조 산업에서 축적한 인공지능 전환(AX) 기술을 바탕으로 곤충...',
            press: '전자신문',
            comment: 40,
            image: 'https://picsum.photos/600/320?random=126',
            content: 'LG CNS가 제조 산업에서 축적한 인공지능 전환(AX) 기술을 바탕으로 곤충 스마트팩토리팜 구축에 나섰다.'
        },
        {
            id: 'it3',
            title: '삼성바이오에피스, 美 PBM 1·2위에 스텔라라 시밀러 공급',
            summary: '삼성바이오에피스가 자가면역질환 치료제 스텔라라 바이오시밀러를 자체 브랜드...',
            press: '이데일리',
            comment: 6,
            image: 'https://picsum.photos/600/320?random=127',
            content: '삼성바이오에피스가 자가면역질환 치료제 스텔라라 바이오시밀러를 자체 브랜드(PL) 방식으로 미국 PBM 1·2위에 공급한다.'
        },
        {
            id: 'it4',
            title: '中 아너 "가장 얇은 폴더블폰" 이라더니…실제로 삼성이 더 얇았다',
            summary: '"세계에서 가장 얇은 폴더블폰 매직 V5." 중국 스마트폰업체 아너는 지난 2일...',
            press: '한국경제',
            comment: 24,
            image: 'https://picsum.photos/600/320?random=128',
            content: '"세계에서 가장 얇은 폴더블폰 매직 V5." 중국 스마트폰업체 아너는 지난 2일 폴더블폰 매직 V5 를 공개하며 세계에서 가장 얇다고 강조했다. 하지만 실제로는 삼성전자의 폴더블폰이 더 얇았다.'
        },
        {
            id: 'it5',
            title: 'KT, SKT 해킹 악용 광고 의혹…방통위 사실조사 착수',
            summary: '방송통신위원회(위원장 이진숙)가 KT를 상대로 사실조사에 착수했다. SK텔레콤의...',
            press: '이데일리',
            comment: 26,
            image: 'https://picsum.photos/600/320?random=129',
            content: '방송통신위원회(위원장 이진숙)가 KT를 상대로 사실조사에 착수했다. SK텔레콤의 최근 사이버 공격 악용 광고 의혹도 조사 대상에 포함됐다.'
        }
    ],
    '과학': [
        {
            id: 'sci1',
            title: '방통위, SKT 해킹 허위·기만 광고 KT 사실조사…KT "적극 소명하겠다"',
            summary: 'KT가 SK텔레콤 사이버 침해 사고 관련 허위·기만 광고로 이용자를 모집했다는 신고...',
            press: '아이뉴스24',
            comment: 26,
            image: 'https://picsum.photos/600/320?random=130',
            content: 'KT가 SK텔레콤 사이버 침해 사고 관련 허위·기만 광고로 이용자를 모집했다는 신고를 접수한 방송통신위원회가 사실조사에 착수했다.'
        },
        {
            id: 'sci2',
            title: '국내 금융사 절반 아마존웹서비스 쓴다',
            summary: '국내 금융사의 절반가량이 아마존웹서비스(AWS)를 사용하는 것으로 나타났다...',
            press: '이코노미스트',
            comment: 17,
            image: 'https://picsum.photos/600/320?random=131',
            content: '국내 금융사의 절반가량이 아마존웹서비스(AWS)를 사용하는 것으로 나타났다. 노경훈 AWS 대표는 "금융권 클라우드 도입이 가속화되고 있다"고 밝혔다.'
        },
        {
            id: 'sci3',
            title: '세계에서 가장 얇다"던 中폴더블폰… 갤럭시 폴드 7 과 비교해 보니',
            summary: '중국 스마트폰 브랜드 아너가 세계에서 가장 얇은 폴더블폰 을 내세우며 최신...',
            press: '아시아경제',
            comment: 24,
            image: 'https://picsum.photos/600/320?random=132',
            content: '중국 스마트폰 브랜드 아너가 세계에서 가장 얇은 폴더블폰 을 내세우며 최신 제품 매직 V5 를 공개했다. 하지만 실제로는 삼성전자의 폴더블폰이 더 얇았다.'
        },
        {
            id: 'sci4',
            title: '강원자치도, 춘천에 국내 최초 AI 기반 곤충산업거점단지 착공',
            summary: '강원자치도가 춘천 동산면에 200억원을 투입해 국내 최초로 AI기반의 곤충산업...',
            press: '파이낸셜뉴스',
            comment: 40,
            image: 'https://picsum.photos/600/320?random=133',
            content: '강원자치도가 춘천 동산면에 200억원을 투입해 국내 최초로 AI기반의 곤충산업 거점단지를 본격적으로 조성한다.'
        },
        {
            id: 'sci5',
            title: '엔씨, 멀티모달 AI 바르코·비전 2.0 오픈소스 공개',
            summary: '엔씨소프트 인공지능(AI) 개발 부문 자회사 엔씨 AI가 멀티모달 AI 모델 바...',
            press: '뉴스1',
            comment: 26,
            image: 'https://picsum.photos/600/320?random=134',
            content: '엔씨소프트 인공지능(AI) 개발 부문 자회사 엔씨 AI가 멀티모달 AI 모델 바르코-비전 2.0 4종을 오픈소스로 공개했다.'
        }
    ],
    '세계': [
        {
            id: 'world1',
            title: '"타코는 잊어"…낯춰도 두 자릿수 관세, "답정너" 트럼프',
            summary: '10%(영국), 19%(인도네시아), 20%(베트남). 15일(현지시간) 기준 미국...',
            press: '머니투데이',
            comment: 71,
            image: 'https://picsum.photos/600/320?random=135',
            content: '10%(영국), 19%(인도네시아), 20%(베트남). 15일(현지시간) 기준 미국과 무역 합의에 이른 국가들의 관세율이다.'
        },
        {
            id: 'world2',
            title: '한국인 대학생, 日 유명 관광지 하라지리 폭포 서 추락사',
            summary: '일본 규슈의 유명 관광지 하라지리 폭포 에서 한국인 대학생이 물에...',
            press: '동아일보',
            comment: 30,
            image: 'https://picsum.photos/600/320?random=136',
            content: '일본 규슈의 유명 관광지 하라지리 폭포 에서 한국인 대학생이 물에 빠져 숨지는 사고가 발생했다.'
        },
        {
            id: 'world3',
            title: '무기 지원은 멜라니아 요원 덕?…우크라이나에서 인기 끈 미국 영부인',
            summary: '미국 영부인 멜라니아 트럼프가 온라인에서 갑작스러운 인기를 누리고...',
            press: 'JTBC',
            comment: 13,
            image: 'https://picsum.photos/600/320?random=137',
            content: '미국 영부인 멜라니아 트럼프가 온라인에서 갑작스러운 인기를 누리고 있습니다. 트럼프 미국 대통령의 무기 지원 정책과 연관이 있다는 분석도 나옵니다.'
        },
        {
            id: 'world4',
            title: '관세 고삐 죄는 트럼프, 브라질엔 무역법 301조 로 재압박…인니엔 시장 개방',
            summary: '도널드 트럼프 미국 대통령이 브라질을 상대로 무역법 301조에 따른 조사를 지시...',
            press: '서울경제',
            comment: 27,
            image: 'https://picsum.photos/600/320?random=138',
            content: '도널드 트럼프 미국 대통령이 브라질을 상대로 무역법 301조에 따른 조사를 지시하는 등 주요 국가에 대한 무역 압박을 강화하고 있다.'
        },
        {
            id: 'world5',
            title: '트럼프 "나도 통해 우크라 무기 공급…50일 내 휴전 안 되면 러에 100% 관세"',
            summary: '도널드 트럼프 미국 대통령은 러시아와 전쟁 중인 우크라이나에 패트리엇...',
            press: '국민일보',
            comment: 51,
            image: 'https://picsum.photos/600/320?random=139',
            content: '도널드 트럼프 미국 대통령은 러시아와 전쟁 중인 우크라이나에 패트리엇 방공미사일과 대규모 무기 지원을 약속했다.'
        }
    ],
    '아시아': [
        { id: 'asia1', 
          title: '해병특검 출석한 박정훈 대령 "VIP 격노, 설 아닌 사실"[뉴스1 PICK]', 
          summary: '채상병 순직 사건 초동 수사 결과를 경찰에 이첩했다가 항명 혐의로 기소된 뒤...', 
          press: '뉴스1', 
          comment: 87, 
          image: 'https://picsum.photos/600/320?random=140', 
          content: '채상병 순직 사건 초동 수사 결과를 경찰에 이첩했다가 항명 혐의로 기소된 뒤 결국 무죄를 선고받은 박정훈 대령이 16일 해병대 특검에 출석했다.' 
        },
        { id: 'asia2', 
          title: '[속보] 특검 "VIP 격노 회의, 경호처장이던 김용현 참석 진술 확보"', 
          summary: '채상병 사망 사건 외압 의혹을 수사 중인 이명현 순직해병 특별검사팀이 16일...', 
          press: '중앙일보', 
          comment: 76, 
          image: 'https://picsum.photos/600/320?random=141', 
          content: '채상병 사망 사건 외압 의혹을 수사 중인 이명현 순직해병 특별검사팀이 16일 이른바 VIP 격노 회의 에 당시 경호처장이던 김용현이 참석했다는 진술을 확보했다.' 
        },
        { id: 'asia3', 
          title: '민주노총 총파업 영향으로 현대차 울산공장 생산 차질', 
          summary: '전국민주노동조합총연맹(민주노총)이 16일 총파업에 돌입하면서 현대자동차 울산공...', 
          press: '연합뉴스', 
          comment: 55, 
          image: 'https://picsum.photos/600/320?random=142', 
          content: '전국민주노동조합총연맹(민주노총)이 16일 총파업에 돌입하면서 현대자동차 울산공장에 생산 차질이 빚어졌다.' 
        },
        { id: 'asia4', 
          title: '내란특검, \'윤 접견 금지\' 조치…경찰, 윤 만나려던 모스탄 수사', 
          summary: '12·3 비상계엄 관련 내란·외환 의혹을 수사하는 조은석 특별검사팀이 윤석열 전...', 
          press: 'JTBC', 
          comment: 74, 
          image: 'https://picsum.photos/600/320?random=143', 
          content: '12·3 비상계엄 관련 내란·외환 의혹을 수사하는 조은석 특별검사팀이 윤석열 전 대통령에 대한 접견 금지 조치를 내렸다.' 
        },
        { id: 'asia5', 
          title: '서울 전역 \'호우주의보\', 청계천·안양천 등 27개 하천 출입 통제', 
          summary: '16일 오후 5시를 기해 서울 전역에 호우주의보가 내려져 청계천, 안양천 등 시내...', 
          press: '파이낸셜뉴스', 
          comment: 25, 
          image: 'https://picsum.photos/600/320?random=144', 
          content: '16일 오후 5시를 기해 서울 전역에 호우주의보가 내려져 청계천, 안양천 등 시내 29개 하천 출입이 통제됐다.' 
        },
    ],
    '한국': [
        { id: 'kr1', 
          title: '논문 가로채기 의혹에…이진숙 "제가 1저자 되는 건 당연"', 
          summary: '이진숙 교육부 장관 후보자가 제자 논문 가로채기 의혹에 대해 "제가 제1저자가...', 
          press: '한국경제', 
          comment: 76, 
          image: 'https://picsum.photos/600/320?random=145', 
          content: '이진숙 교육부 장관 후보자가 제자 논문 가로채기 의혹에 대해 "제가 제1저자가 되는 것은 너무나 당연하다"고 해명했다.' 
        },
        { id: 'kr2', 
          title: '한미일 외교차관협의회, 18일 일본서 열려…협력 발전 등 논의', 
          summary: '한미일 외교차관들이 이번주 일본에서 만나 한미일 협력 발전 등에 대해 논의한다...', 
          press: '뉴스1', 
          comment: 14, 
          image: 'https://picsum.photos/600/320?random=146', 
          content: '한미일 외교차관들이 이번주 일본에서 만나 한미일 협력 발전 등에 대해 논의한다. 16일 외교부에 따르면 한미일 외교차관협의회가 18일 일본 도쿄에서 열린다.' 
        },
        { id: 'kr3', 
          title: '이재명 대통령, 여가부에 "이대남 차별 문제 연구하라" 지시', 
          summary: '이재명 대통령은 여성가족부에 \'이대남\'으로 불리는 20대 남성들이 겪는 차별 문...', 
          press: '디지털타임스', 
          comment: 27, 
          image: 'https://picsum.photos/600/320?random=147', 
          content: '이재명 대통령은 여성가족부에 \'이대남\'으로 불리는 20대 남성들이 겪는 차별 문제를 연구하라고 지시했다.' 
        },
        { id: 'kr4', 
          title: '"북한 주적 아니다" 청문회 발각…주적 개념, 국방백서에는 있을까?', 
          summary: '김영훈 후보자 발언에 여야 공방 격화 주적 개념, 헌법·국방백서 어디에도 없어 김영훈...', 
          press: '헤럴드경제', 
          comment: '100+', 
          image: 'https://picsum.photos/600/320?random=148', 
          content: '김영훈 고용노동부 장관 후보자가 "북한은 주적이 아니다"라고 발언해 논란이 일고 있다.' 
        },
        { id: 'kr5', 
          title: '檢개혁 "ASAP"…중진승절 "참석해야"…정청래·박찬대, 한목소리', 
          summary: '더불어민주당 정청래(왼쪽)·박찬대 당대표 후보가 16일 서울 양천구 목동 SBS에서 TV...', 
          press: '이데일리', 
          comment: 6, 
          image: 'https://picsum.photos/600/320?random=149', 
          content: '더불어민주당 정청래(왼쪽)·박찬대 당대표 후보가 16일 서울 양천구 목동 SBS에서 TV토론회를 가졌다.' 
        },
    ]
};

// 股票K线数据
const stockKlineData = {
    '삼성전자': [
        { time: '2024-07-10', open: 64000, high: 65000, low: 63000, close: 64600 },
        { time: '2024-07-11', open: 64600, high: 65500, low: 64000, close: 65000 },
        { time: '2024-07-12', open: 65000, high: 66000, low: 64500, close: 65800 },
        { time: '2024-07-13', open: 65800, high: 66200, low: 65000, close: 65500 },
        { time: '2024-07-14', open: 65500, high: 66000, low: 65200, close: 65600 },
    ],
    'LG화학': [
        { time: '2024-07-10', open: 410000, high: 415000, low: 408000, close: 410000 },
        { time: '2024-07-11', open: 410000, high: 418000, low: 409000, close: 415000 },
        { time: '2024-07-12', open: 415000, high: 420000, low: 410000, close: 418000 },
        { time: '2024-07-13', open: 418000, high: 422000, low: 415000, close: 420000 },
        { time: '2024-07-14', open: 420000, high: 425000, low: 418000, close: 423000 },
    ],
    '카카오': [
        { time: '2024-07-10', open: 52000, high: 53000, low: 51000, close: 52300 },
        { time: '2024-07-11', open: 52300, high: 52800, low: 52000, close: 52600 },
        { time: '2024-07-12', open: 52600, high: 53200, low: 52500, close: 53000 },
        { time: '2024-07-13', open: 53000, high: 53500, low: 52800, close: 53200 },
        { time: '2024-07-14', open: 53200, high: 54000, low: 53000, close: 53800 },
    ],
    '현대차': [
        { time: '2024-07-10', open: 208000, high: 211000, low: 206500, close: 210000 },
        { time: '2024-07-11', open: 210000, high: 213000, low: 208000, close: 212000 },
        { time: '2024-07-12', open: 212000, high: 215000, low: 210000, close: 214000 },
        { time: '2024-07-13', open: 214000, high: 216000, low: 212000, close: 215000 },
        { time: '2024-07-14', open: 215000, high: 218000, low: 214000, close: 217000 },
    ],
    'SK하이닉스': [
        { time: '2024-07-10', open: 150000, high: 153000, low: 149500, close: 150800 },
        { time: '2024-07-11', open: 150800, high: 154000, low: 150000, close: 153000 },
        { time: '2024-07-12', open: 153000, high: 155000, low: 151000, close: 154500 },
        { time: '2024-07-13', open: 154500, high: 156000, low: 153000, close: 155000 },
        { time: '2024-07-14', open: 155000, high: 157000, low: 154000, close: 156500 },
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
    tr.style.cursor = 'pointer';
    tr.addEventListener('click', function() {
        showStockDetail(stock);
    });
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
    newsArr.forEach((item, idx) => {
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
        // 获取当前栏目名
        const navActive = document.querySelector('.nav-inner a.active');
        const category = navActive ? navActive.textContent.trim() : '';
        // 强制使用picsum随机图片
        const img = `https://picsum.photos/120/66?random=${100 + idx}`;
        const div = document.createElement('div');
        div.className = 'news-item';
        div.innerHTML = `
            <img class="news-thumb" src="${img}" alt="thumb">
            <div class="news-content">
                <div class="news-title">${item.title}</div>
                <div class="news-summary">${item.summary}</div>
                <div class="news-bottom-row">
                    <span class="news-press">${press}</span>
                    <span class="news-comment"><span class="comment-icon">💬</span> ${comment}</span>
                </div>
            </div>
        `;
        // 单页：点击渲染详情页
        div.addEventListener('click', function() {
            const newsWithCategory = Object.assign({}, item, { category, image: img });
            showDetail(newsWithCategory);
        });
        div.style.cursor = 'pointer';
        newsList.appendChild(div);
    });
}

// 单页：渲染详情页
function showDetail(detail) {
    // 判断是否为汇率详情（通过title包含'환율 상세'）
    if (detail.title && detail.title.includes('환율 상세')) {
        const mainContent = document.getElementById('main-content');
        // 解析币种、现价、涨跌、涨跌幅、时间
        let fxName = detail.title.replace(' 환율 상세', '');
        let fxPrice = detail.summary.match(/([0-9,.]+)원/)? detail.summary.match(/([0-9,.]+)원/)[1] : '';
        let fxChange = '';
        let fxChangeRate = '';
        let fxTime = detail.date.replace('입력 ', '').replace('오후', '').replace('오전', '').trim();
        let isUp = true;
        // 修正content中单引号为英文单引号，避免语法错误
        let safeContent = (detail.content || '').replace(/[‘’‛‚`]/g, "'");
        let match = safeContent.match(/([+-][0-9,.]+)[^0-9]+([+-]?[0-9,.]+%)/);
        if(match){
            fxChange = match[1];
            fxChangeRate = match[2];
            isUp = fxChange.startsWith('+');
        }
        // 颜色
        let color = isUp ? '#d32f2f' : '#1976d2';
        let arrow = isUp ? '▲' : '▼';
        // 布局
        mainContent.innerHTML = `
        <div style="width:100%;margin:48px auto 0 auto;padding:0;background:transparent;border-radius:0;box-shadow:none;text-align:left;">
            <img src="media/hlxq.png" alt="환율详情" style="width:100%;border-radius:6px;margin-bottom:18px;" />
            <div style="font-size:19px;font-weight:700;margin-bottom:6px;">${fxName}</div>
            <div style="font-size:38px;font-weight:900;letter-spacing:1px;line-height:1.1;">${fxPrice}</div>
            <div style="font-size:18px;margin:10px 0 0 0;">
                <span style="color:${color};font-weight:700;font-size:18px;">${arrow} ${Math.abs(Number(fxChange))} <span style='margin-left:6px;'>${fxChangeRate}</span></span>
            </div>
            <div style="color:#888;font-size:15px;margin:14px 0 0 0;display:flex;align-items:center;gap:8px;">
                <span>${fxTime}</span>
                <span style="display:inline-block;width:7px;height:7px;background:#1ec800;border-radius:50%;margin-right:2px;"></span>
                <span>실시간</span>
            </div>
            <button class="back-btn" id="detail-back-btn" style="margin-top:32px;"><img src="media/arrow-left.svg" alt="back" >Back</button>
        </div>
        `;
        // 返回按钮事件
        const backBtn = document.getElementById('detail-back-btn');
        if(backBtn) {
            backBtn.addEventListener('click', function() {
                showNewsList(detail.category || '정치');
            });
        }
        return;
    }
    const mainContent = document.getElementById('main-content');
    const tpl = document.getElementById('detail-template');
    mainContent.innerHTML = tpl.innerHTML;
    // 保持左右侧边栏可见（不再隐藏）
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
    if(document.getElementById('detail-content'))
        document.getElementById('detail-content').textContent = detail.content || detail.summary || '';
    if(document.getElementById('detail-comment'))
        document.getElementById('detail-comment').textContent = detail.comment !== undefined ? detail.comment : '';
    if(document.getElementById('detail-summary'))
        document.getElementById('detail-summary').textContent = detail.summary || '';
    if(document.getElementById('detail-recommend'))
        document.getElementById('detail-recommend').textContent = detail.recommend !== undefined ? detail.recommend : '\ucd94\ucc9c';
    if(document.getElementById('detail-press-logo'))
        document.getElementById('detail-press-logo').src = detail.logo || 'media/logo.png';
    // 返回按钮事件
    const backBtn = document.getElementById('detail-back-btn');
    if(backBtn) {
        backBtn.addEventListener('click', function() {
            showNewsList(detail.category || '정치');
        });
    }
    // 高亮导航栏
    if (detail && detail.category) {
        const navLinks = document.querySelectorAll('.nav-inner a');
        navLinks.forEach(link => {
            if (link.textContent.trim() === detail.category) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    }
}

// 单页：渲染新闻列表
function showNewsList(category) {
    const mainContent = document.getElementById('main-content');
    mainContent.innerHTML = `
        <div id="news-list"></div>
        <button id="close-btn" class="close-btn"><img src="media/nineft.svg" alt="nineft" >시연종료</button>
    `;
    // 恢复左右侧边栏可见
    const left = document.querySelector('.sidebar-left');
    const right = document.querySelector('.sidebar-right');
    if(left) left.classList.remove('hide');
    if(right) right.classList.remove('hide');
    renderNews(newsData[category] || newsData['정치']);

    // 绑定关闭按钮事件
    const closeBtn = document.getElementById('close-btn');
    if(closeBtn) {
        closeBtn.onclick = function() {
            window.location.href = 'https://www.nineft.com/';
        };
    }
}

// 默认渲染"정치"新闻
showNewsList('정치');

// 首页支持根据URL参数高亮导航栏
function highlightNavByCategory() {
    const params = new URLSearchParams(window.location.search);
    const category = params.get('category');
    const navLinks = document.querySelectorAll('.nav-inner a');
    if (category) {
        navLinks.forEach(link => {
            if (link.textContent.trim() === category) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
        showNewsList(category);
    }
}
highlightNavByCategory();
// 导航栏点击事件，切换新闻内容并高亮
const navLinks = document.querySelectorAll('.nav-inner a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const key = link.textContent.trim();
        if(newsData[key]) {
            showNewsList(key);
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            // 更新URL参数，便于刷新后依然高亮
            const url = new URL(window.location);
            url.searchParams.set('category', key);
            window.history.replaceState({}, '', url);
        }
    });
});

// 股票详情页渲染函数
function showStockDetail(stock) {
    const mainContent = document.getElementById('main-content');
    // 隐藏左右侧边栏但保留占位
    const left = document.querySelector('.sidebar-left');
    const right = document.querySelector('.sidebar-right');
    if(left) left.classList.add('hide');
    if(right) right.classList.add('hide');
    // 各股票专属详情
    let stockHtml = '';
    if(stock.name === '삼성전자') {
        stockHtml = `
        <div class="stock-detail-wrap">
            <div class="stock-detail-header">
                <span class="stock-detail-title">삼성전자 <span class="stock-detail-code">005930</span></span>
                <span class="stock-detail-date">2025.07.16 기준 (KRX 장마감)</span>
            </div>
            <div class="stock-detail-main-row">
                <div class="stock-detail-main-left">
                    <div class="stock-detail-price-row">
                        <span class="stock-detail-price">64,600</span>
                        <span class="stock-detail-diff up">▲900 +1.41%</span>
                    </div>
                    <div class="stock-detail-sub-row">
                        <span>전일 63,700</span>
                        <span>고가 64,600</span>
                        <span>거래량 9,453,837</span>
                    </div>
                    <div class="stock-detail-sub-row">
                        <span>시가 63,700</span>
                        <span>저가 <span style='color:#3563b6'>63,100</span></span>
                        <span>거래대금 606,203백만</span>
                    </div>
                    <div class="stock-detail-chart">
                        <div id="kline-chart" style="width:100%;height:320px;"></div>
                    </div>
                </div>
                <div class="stock-detail-main-right">
                    <div class="stock-detail-info-title">투자정보</div>
                    <div class="stock-detail-info-list">
                        <div><span>시가총액</span><span>383조 6억원</span></div>
                        <div><span>상장주식수</span><span>5,919,637,922</span></div>
                        <div><span>외국인소진율</span><span>49.83%</span></div>
                        <div><span>투자의견</span><span>4.00매수</span></div>
                        <div><span>목표주가</span><span>75,708</span></div>
                        <div><span>52주최고</span><span>88,000</span></div>
                        <div><span>52주최저</span><span>49,900</span></div>
                        <div><span>PER</span><span>12.53배</span></div>
                        <div><span>PBR</span><span>1.10배</span></div>
                        <div><span>배당수익률</span><span>2.23%</span></div>
                    </div>
                    <div class="stock-detail-info-title">동일업종 PER</div>
                    <div class="stock-detail-per">10.51배 <span class="stock-detail-per-up">+0.76%</span></div>
                </div>
            </div>
            <button class="back-btn" id="stock-detail-back-btn" title="返回" style="margin-top:32px;"><img src="media/arrow-left.svg" alt="back" >Back</span></button>
        </div>
        `;
    } else if(stock.name === 'LG화학') {
        stockHtml = `
        <div class="stock-detail-wrap">
            <div class="stock-detail-header">
                <span class="stock-detail-title">LG화학 <span class="stock-detail-code">051910</span></span>
                <span class="stock-detail-date">2025.07.16 기준 (KRX 장마감)</span>
            </div>
            <div class="stock-detail-main-row">
                <div class="stock-detail-main-left">
                    <div class="stock-detail-price-row">
                        <span class="stock-detail-price">410,000</span>
                        <span class="stock-detail-diff down">▼3,500 -0.85%</span>
                    </div>
                    <div class="stock-detail-sub-row">
                        <span>전일 413,500</span>
                        <span>고가 415,000</span>
                        <span>거래량 312,000</span>
                    </div>
                    <div class="stock-detail-sub-row">
                        <span>시가 414,000</span>
                        <span>저가 <span style='color:#3563b6'>408,000</span></span>
                        <span>거래대금 127,000백만</span>
                    </div>
                    <div class="stock-detail-chart">
                        <div id="kline-chart" style="width:100%;height:320px;"></div>
                    </div>
                </div>
                <div class="stock-detail-main-right">
                    <div class="stock-detail-info-title">투자정보</div>
                    <div class="stock-detail-info-list">
                        <div><span>시가총액</span><span>29조 1,000억원</span></div>
                        <div><span>상장주식수</span><span>70,000,000</span></div>
                        <div><span>외국인소진율</span><span>37.12%</span></div>
                        <div><span>투자의견</span><span>3.50매수</span></div>
                        <div><span>목표주가</span><span>480,000</span></div>
                        <div><span>52주최고</span><span>570,000</span></div>
                        <div><span>52주최저</span><span>350,000</span></div>
                        <div><span>PER</span><span>19.80배</span></div>
                        <div><span>PBR</span><span>1.12배</span></div>
                        <div><span>배당수익률</span><span>2.10%</span></div>
                    </div>
                    <div class="stock-detail-info-title">동일업종 PER</div>
                    <div class="stock-detail-per">15.23배 <span class="stock-detail-per-up">-0.12%</span></div>
                </div>
            </div>
            <button class="back-btn" id="stock-detail-back-btn" title="返回" style="margin-top:32px;"><img src="media/arrow-left.svg" alt="back" >Back</button>
        </div>
        `;
    } else if(stock.name === '카카오') {
        stockHtml = `
        <div class="stock-detail-wrap">
            <div class="stock-detail-header">
                <span class="stock-detail-title">카카오 <span class="stock-detail-code">035720</span></span>
                <span class="stock-detail-date">2025.07.16 기준 (KRX 장마감)</span>
            </div>
            <div class="stock-detail-main-row">
                <div class="stock-detail-main-left">
                    <div class="stock-detail-price-row">
                        <span class="stock-detail-price">52,300</span>
                        <span class="stock-detail-diff up">▲230 +0.45%</span>
                    </div>
                    <div class="stock-detail-sub-row">
                        <span>전일 52,070</span>
                        <span>고가 52,800</span>
                        <span>거래량 1,120,000</span>
                    </div>
                    <div class="stock-detail-sub-row">
                        <span>시가 52,100</span>
                        <span>저가 <span style='color:#3563b6'>51,900</span></span>
                        <span>거래대금 58,000백만</span>
                    </div>
                    <div class="stock-detail-chart">
                        <div id="kline-chart" style="width:100%;height:320px;"></div>
                    </div>
                </div>
                <div class="stock-detail-main-right">
                    <div class="stock-detail-info-title">투자정보</div>
                    <div class="stock-detail-info-list">
                        <div><span>시가총액</span><span>23조 5,000억원</span></div>
                        <div><span>상장주식수</span><span>445,000,000</span></div>
                        <div><span>외국인소진율</span><span>28.45%</span></div>
                        <div><span>투자의견</span><span>3.00매수</span></div>
                        <div><span>목표주가</span><span>60,000</span></div>
                        <div><span>52주최고</span><span>72,000</span></div>
                        <div><span>52주최저</span><span>41,500</span></div>
                        <div><span>PER</span><span>31.20배</span></div>
                        <div><span>PBR</span><span>1.85배</span></div>
                        <div><span>배당수익률</span><span>0.80%</span></div>
                    </div>
                    <div class="stock-detail-info-title">동일업종 PER</div>
                    <div class="stock-detail-per">22.10배 <span class="stock-detail-per-up">+0.21%</span></div>
                </div>
            </div>
            <button class="back-btn" id="stock-detail-back-btn" title="返回" style="margin-top:32px;"><img src="media/arrow-left.svg" alt="back" >Back</button>
        </div>
        `;
    } else if(stock.name === '현대차') {
        stockHtml = `
        <div class="stock-detail-wrap">
            <div class="stock-detail-header">
                <span class="stock-detail-title">현대차 <span class="stock-detail-code">005380</span></span>
                <span class="stock-detail-date">2025.07.16 기준 (KRX 장마감)</span>
            </div>
            <div class="stock-detail-main-row">
                <div class="stock-detail-main-left">
                    <div class="stock-detail-price-row">
                        <span class="stock-detail-price">210,000</span>
                        <span class="stock-detail-diff up">▲2,050 +0.98%</span>
                    </div>
                    <div class="stock-detail-sub-row">
                        <span>전일 207,950</span>
                        <span>고가 211,000</span>
                        <span>거래량 850,000</span>
                    </div>
                    <div class="stock-detail-sub-row">
                        <span>시가 208,000</span>
                        <span>저가 <span style='color:#3563b6'>206,500</span></span>
                        <span>거래대금 178,000백만</span>
                    </div>
                    <div class="stock-detail-chart">
                        <div id="kline-chart" style="width:100%;height:320px;"></div>
                    </div>
                </div>
                <div class="stock-detail-main-right">
                    <div class="stock-detail-info-title">투자정보</div>
                    <div class="stock-detail-info-list">
                        <div><span>시가총액</span><span>47조 2,000억원</span></div>
                        <div><span>상장주식수</span><span>213,668,187</span></div>
                        <div><span>외국인소진율</span><span>34.12%</span></div>
                        <div><span>투자의견</span><span>4.20매수</span></div>
                        <div><span>목표주가</span><span>240,000</span></div>
                        <div><span>52주최고</span><span>282,000</span></div>
                        <div><span>52주최저</span><span>170,000</span></div>
                        <div><span>PER</span><span>7.80배</span></div>
                        <div><span>PBR</span><span>0.85배</span></div>
                        <div><span>배당수익률</span><span>3.10%</span></div>
                    </div>
                    <div class="stock-detail-info-title">동일업종 PER</div>
                    <div class="stock-detail-per">8.90배 <span class="stock-detail-per-up">+0.10%</span></div>
                </div>
            </div>
            <button class="back-btn" id="stock-detail-back-btn" title="返回" style="margin-top:32px;"><img src="media/arrow-left.svg" alt="back" >Back</button>
        </div>
        `;
    } else if(stock.name === 'SK하이닉스') {
        stockHtml = `
        <div class="stock-detail-wrap">
            <div class="stock-detail-header">
                <span class="stock-detail-title">SK하이닉스 <span class="stock-detail-code">000660</span></span>
                <span class="stock-detail-date">2025.07.16 기준 (KRX 장마감)</span>
            </div>
            <div class="stock-detail-main-row">
                <div class="stock-detail-main-left">
                    <div class="stock-detail-price-row">
                        <span class="stock-detail-price">150,800</span>
                        <span class="stock-detail-diff down">▼1,550 -1.02%</span>
                    </div>
                    <div class="stock-detail-sub-row">
                        <span>전일 152,350</span>
                        <span>고가 153,000</span>
                        <span>거래량 2,350,000</span>
                    </div>
                    <div class="stock-detail-sub-row">
                        <span>시가 152,000</span>
                        <span>저가 <span style='color:#3563b6'>149,500</span></span>
                        <span>거래대금 355,000백만</span>
                    </div>
                    <div class="stock-detail-chart">
                        <div id="kline-chart" style="width:100%;height:320px;"></div>
                    </div>
                </div>
                <div class="stock-detail-main-right">
                    <div class="stock-detail-info-title">투자정보</div>
                    <div class="stock-detail-info-list">
                        <div><span>시가총액</span><span>109조 5,000억원</span></div>
                        <div><span>상장주식수</span><span>728,002,365</span></div>
                        <div><span>외국인소진율</span><span>49.12%</span></div>
                        <div><span>투자의견</span><span>4.10매수</span></div>
                        <div><span>목표주가</span><span>180,000</span></div>
                        <div><span>52주최고</span><span>188,000</span></div>
                        <div><span>52주최저</span><span>97,000</span></div>
                        <div><span>PER</span><span>18.20배</span></div>
                        <div><span>PBR</span><span>1.45배</span></div>
                        <div><span>배당수익률</span><span>1.50%</span></div>
                    </div>
                    <div class="stock-detail-info-title">동일업종 PER</div>
                    <div class="stock-detail-per">10.51배 <span class="stock-detail-per-up">+0.76%</span></div>
                </div>
            </div>
            <button class="back-btn" id="stock-detail-back-btn" title="返回" style="margin-top:32px;"><img src="media/arrow-left.svg" alt="back" >Back</button>
        </div>
        `;
    } else {
        stockHtml = `<div style='padding:40px;font-size:20px;'>해당 종목의 상세 정보는 준비 중입니다.</div>`;
    }
    mainContent.innerHTML = stockHtml;
    // 返回按钮事件
    const backBtn = document.getElementById('stock-detail-back-btn');
    if(backBtn) {
        backBtn.addEventListener('click', function() {
            if(left) left.classList.remove('hide');
            if(right) right.classList.remove('hide');
            showNewsList('정치');
        });
    }
    // K线图渲染（直接在函数内生成假数据）
    setTimeout(function() {
        const chartContainer = document.getElementById('kline-chart');
        if (chartContainer) {
            // 生成5天的假K线数据
            const today = new Date();
            const klineData = [];
            let base = 100000 + Math.floor(Math.random() * 50000); // 随机起点
            for(let i=4; i>=0; i--) {
                const d = new Date(today.getTime() - i*24*60*60*1000);
                const time = d.toISOString().slice(0,10);
                const open = base + Math.floor(Math.random()*2000-1000);
                const close = open + Math.floor(Math.random()*2000-1000);
                const high = Math.max(open, close) + Math.floor(Math.random()*1000);
                const low = Math.min(open, close) - Math.floor(Math.random()*1000);
                klineData.push({ time, open, high, low, close });
                base = close;
            }
            const chart = LightweightCharts.createChart(chartContainer, {
                width: chartContainer.offsetWidth,
                height: 320,
                layout: { background: { color: '#fff' }, textColor: '#222' },
                grid: { vertLines: { color: '#eee' }, horzLines: { color: '#eee' } },
                timeScale: { timeVisible: true, secondsVisible: false }
            });
            const candleSeries = chart.addCandlestickSeries();
            candleSeries.setData(klineData);
            window.addEventListener('resize', () => {
                chart.applyOptions({ width: chartContainer.offsetWidth });
            });
        }
    }, 0);
}

// 右侧"最常浏览新闻"详情页支持
function setupMostViewedDetail() {
    // 右侧6条新闻的详情数据
    const mostViewedDetails = [
        {
            press: 'Y 뉴스',
            title: '"부동산 대책 발표"...전문가 의견은?',
            date: '입력 2025.07.16. 오후 12:22',
            modified: '수정 2025.07.16. 오후 12:23',
            writer: '김기자',
            image: 'https://picsum.photos/600/320?random=200',
            comment: 12,
            recommend: 5,
            summary: '정부가 발표한 부동산 대책에 대해 전문가들은 다양한 의견을 내놓고 있습니다.',
            content: '정부는 최근 부동산 시장 안정을 위한 대책을 발표했습니다. 이에 대해 전문가들은 정책의 실효성과 시장에 미칠 영향에 대해 다양한 분석을 내놓고 있습니다.',
            logo: 'media/logo.png',
            category: ''
        },
        {
            press: 'Y 뉴스',
            title: '폭우 피해 복구 현장…정부 지원은?',
            date: '입력 2025.07.16. 오후 13:10',
            modified: '수정 2025.07.16. 오후 13:15',
            writer: '이기자',
            image: 'https://picsum.photos/600/320?random=201',
            comment: 8,
            recommend: 2,
            summary: '폭우로 인한 피해 복구 현장에서 정부의 지원이 이어지고 있습니다.',
            content: '최근 내린 폭우로 인해 전국 곳곳에서 피해가 발생했습니다. 정부는 신속한 복구와 지원을 약속하며 현장 점검에 나섰습니다.',
            logo: 'media/logo.png',
            category: ''
        },
        {
            press: 'Y 뉴스',
            title: '주식시장 급락, 원인은?',
            date: '입력 2025.07.16. 오후 14:00',
            modified: '수정 2025.07.16. 오후 14:05',
            writer: '박기자',
            image: 'https://picsum.photos/600/320?random=202',
            comment: 20,
            recommend: 7,
            summary: '주식시장이 급락한 배경에는 여러 가지 요인이 있습니다.',
            content: '최근 주식시장이 큰 폭으로 하락했습니다. 전문가들은 글로벌 경제 불확실성과 금리 인상, 지정학적 리스크 등을 주요 원인으로 꼽고 있습니다.',
            logo: 'media/logo.png',
            category: ''
        },
        {
            press: 'Y 뉴스',
            title: '대통령, 해외 순방 일정 발표',
            date: '입력 2025.07.16. 오후 15:00',
            modified: '수정 2025.07.16. 오후 15:10',
            writer: '최기자',
            image: 'https://picsum.photos/600/320?random=203',
            comment: 5,
            recommend: 1,
            summary: '대통령이 다음 주 해외 순방 일정을 공식 발표했습니다.',
            content: '대통령실은 다음 주 대통령의 해외 순방 일정을 발표하며, 주요 방문국과 일정, 기대 효과를 설명했습니다.',
            logo: 'media/logo.png',
            category: ''
        },
        {
            press: 'Y 뉴스',
            title: 'AI 신기술, 우리의 미래는?',
            date: '입력 2025.07.16. 오후 16:00',
            modified: '수정 2025.07.16. 오후 16:10',
            writer: '정기자',
            image: 'https://picsum.photos/600/320?random=204',
            comment: 18,
            recommend: 9,
            summary: 'AI 신기술이 우리의 미래를 어떻게 바꿀지 주목받고 있습니다.',
            content: '최근 AI 기술의 발전이 가속화되면서 사회 각 분야에 미치는 영향이 커지고 있습니다. 전문가들은 AI가 가져올 변화와 대비책에 대해 논의하고 있습니다.',
            logo: 'media/logo.png',
            category: ''
        },
        {
            press: 'Y 뉴스',
            title: '월드컵 결승, 극적인 승부의 순간',
            date: '입력 2025.07.16. 오후 17:00',
            modified: '수정 2025.07.16. 오후 17:10',
            writer: '홍기자',
            image: 'https://picsum.photos/600/320?random=205',
            comment: 30,
            recommend: 15,
            summary: '월드컵 결승전에서 극적인 승부가 펼쳐졌습니다.',
            content: '2025년 월드컵 결승전은 역사에 남을 명승부로 기록됐습니다. 양 팀 모두 최선을 다한 경기 끝에 극적인 결과가 나왔습니다.',
            logo: 'media/logo.png',
            category: ''
        }
    ];
    const mostViewedList = document.querySelectorAll('.most-viewed-list li');
    mostViewedList.forEach((li, idx) => {
        li.style.cursor = 'pointer';
        li.addEventListener('click', function() {
            const detail = mostViewedDetails[idx];
            showDetail(detail);
            // 不再隐藏左/右侧边栏，保持显示
            // const left = document.querySelector('.sidebar-left');
            // const right = document.querySelector('.sidebar-right');
            // if(left) left.classList.add('hide');
            // if(right) right.classList.add('hide');
            // 返回按钮恢复左右侧栏
            setTimeout(() => {
                const backBtn = document.getElementById('detail-back-btn');
                if(backBtn) {
                    backBtn.addEventListener('click', function() {
                        // const left = document.querySelector('.sidebar-left');
                        // const right = document.querySelector('.sidebar-right');
                        // if(left) left.classList.remove('hide');
                        // if(right) right.classList.remove('hide');
                        // 恢复主内容区为新闻列表
                        showNewsList('정치');
                    });
                }
            }, 100);
        });
    });
}
// 页面加载后初始化右侧新闻点击
window.addEventListener('DOMContentLoaded', setupMostViewedDetail);

// 右侧"最常浏览新闻"图片统一为picsum随机图
function setMostViewedImages() {
    const mostViewedList = document.querySelectorAll('.most-viewed-list li');
    mostViewedList.forEach((li, idx) => {
        const img = li.querySelector('img');
        if(img) {
            img.src = `https://picsum.photos/600/320?random=${200 + idx}`;
        }
    });
}
setMostViewedImages();

// 汇率详情数据
const fxDetails = [
    {
        press: 'Y 뉴스',
        title: 'USD/KRW 환율 상세',
        date: '입력 2025.07.16. 오후 18:00',
        modified: '수정 2025.07.16. 오후 18:05',
        writer: '환율팀',
        image: 'https://picsum.photos/600/320?random=210',
        comment: 10,
        recommend: 3,
        summary: '미국 달러 대비 원화 환율이 1,380.50원으로 상승했습니다.',
        content: '최근 미국 경제지표 발표와 금리 인상 전망으로 인해 원/달러 환율이 1,380.50원까지 상승했습니다. 전문가들은 단기 변동성 확대에 주목하고 있습니다.',
        logo: 'media/logo.png',
        category: ''
    },
    {
        press: 'Y 뉴스',
        title: 'EUR/KRW 환율 상세',
        date: '입력 2025.07.16. 오후 18:10',
        modified: '수정 2025.07.16. 오후 18:15',
        writer: '환율팀',
        image: 'https://picsum.photos/600/320?random=211',
        comment: 7,
        recommend: 2,
        summary: '유로화 대비 원화 환율이 1,495.30원으로 하락했습니다.',
        content: '유럽중앙은행의 정책 변화와 글로벌 경기 둔화 우려로 EUR/KRW 환율이 1,495.30원으로 소폭 하락했습니다.',
        logo: 'media/logo.png',
        category: ''
    },
    {
        press: 'Y 뉴스',
        title: 'JPY/KRW 환율 상세',
        date: '입력 2025.07.16. 오후 18:20',
        modified: '수정 2025.07.16. 오후 18:25',
        writer: '환율팀',
        image: 'https://picsum.photos/600/320?random=212',
        comment: 5,
        recommend: 1,
        summary: '엔화 대비 원화 환율이 9.85원으로 소폭 상승했습니다.',
        content: '일본은행의 완화적 통화정책 기조가 이어지면서 JPY/KRW 환율이 9.85원으로 소폭 상승했습니다.',
        logo: 'media/logo.png',
        category: ''
    },
    {
        press: 'Y 뉴스',
        title: 'CNY/KRW 환율 상세',
        date: '입력 2025.07.16. 오후 18:30',
        modified: '수정 2025.07.16. 오후 18:35',
        writer: '환율팀',
        image: 'https://picsum.photos/600/320?random=213',
        comment: 6,
        recommend: 2,
        summary: '위안화 대비 원화 환율이 190.20원으로 하락했습니다.',
        content: '중국 경제 성장률 둔화와 무역 이슈로 인해 CNY/KRW 환율이 190.20원으로 하락했습니다.',
        logo: 'media/logo.png',
        category: ''
    },
    {
        press: 'Y 뉴스',
        title: 'GBP/KRW 환율 상세',
        date: '입력 2025.07.16. 오후 18:40',
        modified: '수정 2025.07.16. 오후 18:45',
        writer: '환율팀',
        image: 'https://picsum.photos/600/320?random=214',
        comment: 8,
        recommend: 4,
        summary: '영국 파운드 대비 원화 환율이 1,750.80원으로 상승했습니다.',
        content: '영국의 인플레이션 우려와 금리 인상 전망으로 GBP/KRW 환율이 1,750.80원까지 상승했습니다.',
        logo: 'media/logo.png',
        category: ''
    }
];

window.addEventListener('DOMContentLoaded', function() {
    // 汇率区块点击事件
    const fxRows = document.querySelectorAll('#fx-list tr');
    fxRows.forEach((tr, idx) => {
        tr.addEventListener('click', function() {
            showDetail(fxDetails[idx]);
            // 隐藏左/右侧边栏
            const left = document.querySelector('.sidebar-left');
            const right = document.querySelector('.sidebar-right');
            if(left) left.classList.add('hide');
            if(right) right.classList.add('hide');
            // 返回按钮恢复左右侧栏
            setTimeout(() => {
                const backBtn = document.getElementById('detail-back-btn');
                if(backBtn) {
                    backBtn.addEventListener('click', function() {
                        if(left) left.classList.remove('hide');
                        if(right) right.classList.remove('hide');
                        // 恢复主内容区为新闻列表
                        showNewsList('정치');
                    });
                }
            }, 100);
        });
    });
});
