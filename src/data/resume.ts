export interface Role {
  title: string;
  period: string;
  highlights: string[];
}

export interface Job {
  company: string;
  subsidiary?: string;
  period: string;
  roles: Role[];
}

export interface Education {
  institution: string;
  program?: string;
  period: string;
}

export interface Certification {
  title: string;
  year?: string;
}

export interface Award {
  title: string;
  year: string;
}

export const workExperience: Job[] = [
  {
    company: "株式会社メルカリ",
    subsidiary: "株式会社メルコイン",
    period: "2025.10 –",
    roles: [
      {
        title: "Software Engineer",
        period: "2025.10 –",
        highlights: [
          "「メルコイン」バックエンドの設計・実装・運用",
          "AI エージェントを活用した開発支援",
        ],
      },
    ],
  },
  {
    company: "グリーホールディングス株式会社",
    subsidiary: "REALITY株式会社",
    period: "2020.04 – 2025.09",
    roles: [
      {
        title: "Platform Engineer",
        period: "2025.04 – 2025.09",
        highlights: [
          "プラットフォームチームの立ち上げ",
          "Observability や CI/CD パイプラインの強化",
          "システム運用コストの最適化",
          "AI エージェントの業務導入",
        ],
      },
      {
        title: "Engineering Manager",
        period: "2024.07 – 2025.04",
        highlights: [
          "Sales 領域開発チームのマネジメント",
          "開発ロードマップの策定",
          "近接領域のチームとの折衝",
          "スクラム運用および開発プロセスの再設計",
        ],
      },
      {
        title: "Software Engineer",
        period: "2020.04 – 2024.07",
        highlights: [
          "「REALITY」バックエンドの設計・実装・運用",
          "パフォーマンス改善チームの立ち上げ",
          "ログ基盤およびデータマートの構築",
        ],
      },
    ],
  },
];

export const education: Education[] = [
  {
    institution: "筑波大学大学院",
    program: "システム情報工学研究科",
    period: "2018 – 2020",
  },
  {
    institution: "筑波大学",
    program: "工学システム学類",
    period: "2014 – 2018",
  },
  {
    institution: "福島県立会津高等学校",
    program: "普通科",
    period: "2011 – 2014",
  },
];

export const certifications: Certification[] = [
  { title: "Google Cloud Professional Cloud Architect" },
  { title: "Google Cloud Professional Cloud Developer" },
];

export const awards: Award[] = [
  { title: "Mercari Fintech RisingStar", year: "2026" },
  { title: "GREE Project MVP", year: "2024" },
  { title: "GREE New Graduate MVP", year: "2021" },
  { title: "一般社団法人茗渓会賞", year: "2020" },
  { title: "IVRC 2019 総合優勝", year: "2019" },
  { title: "電気学会技術委員会奨励賞", year: "2019" },
  { title: "第33回高校生クイズ 福島県優勝・全国出場", year: "2013" },
];
