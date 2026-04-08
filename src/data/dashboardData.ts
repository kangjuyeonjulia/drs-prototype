export interface Notification {
  id: number;
  user: string;
  action: string;
  project: string;
  time: string;
}

export interface CountryData {
  country: string;
  flag: string;
  count: number;
  percentage: number;
}

export interface ChannelData {
  online: { count: number; percentage: number };
  offline: { count: number; percentage: number };
}

export interface CharacterRanking {
  name: string;
  emoji: string;
  count: number;
  rank: number;
}

export const notifications: Notification[] = [
  {
    id: 1,
    user: '김민지',
    action: '댓글을 남겼습니다',
    project: "[Let's Get Rich] 260407 RO x LGR",
    time: '5분 전',
  },
  {
    id: 2,
    user: '박지원',
    action: '요청을 승인했습니다',
    project: 'UI Component Library Update',
    time: '1시간 전',
  },
  {
    id: 3,
    user: 'Wong Nicky',
    action: '프로젝트를 완료했습니다',
    project: '[BE] FC_5/6月信用卡平台活動',
    time: '3시간 전',
  },
  {
    id: 4,
    user: 'Sirichai Chin',
    action: '수정 요청을 보냈습니다',
    project: 'LINE Bubble 2 External banners',
    time: '1일 전',
  },
];

export const countryData: CountryData[] = [
  { country: '한국', flag: '🇰🇷', count: 450, percentage: 51 },
  { country: '일본', flag: '🇯🇵', count: 280, percentage: 32 },
  { country: '대만', flag: '🇹🇼', count: 90, percentage: 10 },
  { country: '태국', flag: '🇹🇭', count: 57, percentage: 7 },
];

export const channelData: ChannelData = {
  online: { count: 570, percentage: 65 },
  offline: { count: 307, percentage: 35 },
};

export const characterRankings: CharacterRanking[] = [
  { name: 'Brown', emoji: '🐻', count: 180, rank: 1 },
  { name: 'Cony', emoji: '🐰', count: 145, rank: 2 },
  { name: 'Sally', emoji: '🐥', count: 98, rank: 3 },
];

export const carouselImages = [
  {
    id: 1,
    src: '/images/hello-friends.webp',
    alt: 'Hello Friends - LINE FRIENDS Characters',
  },
  {
    id: 2,
    src: '/images/hello-friends-2.jpg',
    alt: 'Hello Friends - Character Banners',
  },
  {
    id: 3,
    src: '/images/lyp.webp',
    alt: 'LYP Premium - Design Award',
  },
  {
    id: 4,
    src: '/images/lyp2.webp',
    alt: 'LYP - App UI',
  },
];
