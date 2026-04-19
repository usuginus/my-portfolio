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
  year: string;
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
          "暗号資産取引サービスのバックエンド設計・実装・運用",
          "AI Agent を活用した開発支援の推進",
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
          "プラットフォームチーム立ち上げ",
          "CI/CD パイプラインの刷新",
          "Observability 強化・コスト最適化",
          "AI コーディングエージェント導入",
        ],
      },
      {
        title: "Engineering Manager",
        period: "2024.07 – 2025.04",
        highlights: [
          "Sales 領域開発チームのマネジメント",
          "スクラム運用・開発プロセスの再設計",
        ],
      },
      {
        title: "Software Engineer",
        period: "2020.04 – 2024.07",
        highlights: [
          "「REALITY」バックエンド設計・実装・運用",
          "パフォーマンス改善チーム立ち上げ",
          "ログ基盤・データマート構築",
        ],
      },
    ],
  },
];

export const education: Education[] = [
  {
    institution: "筑波大学大学院",
    program: "システム情報工学研究科",
    year: "2020",
  },
  {
    institution: "筑波大学",
    program: "工学システム学類",
    year: "2018",
  },
];

export const awards: Award[] = [
  { title: "Google Cloud Professional Cloud Architect", year: "取得" },
  { title: "Google Cloud Professional Cloud Developer", year: "取得" },
  { title: "GREE 新卒 MVP 2020", year: "2021" },
  { title: "IVRC 2019 総合優勝", year: "2019" },
  { title: "電気学会技術委員会奨励賞", year: "2019" },
  { title: "一般社団法人茗渓会賞", year: "2020" },
  { title: "高校生クイズ 福島県予選優勝・全国大会出場", year: "2013" },
];
