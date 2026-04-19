export interface Project {
  title: string;
  subtitle: string;
  description: string;
  youtubeId?: string;
  links: { title: string; url: string }[];
  keywords: string[];
}

export const projects: Project[] = [
  {
    title: "メルコイン 暗号資産サービス",
    subtitle: "株式会社メルコイン / 暗号資産取引・つみたて・ポイント還元",
    description:
      "「多様な価値がめぐる新しい経済をつくる」をミッションに、メルカリアプリ上で BTC 等の暗号資産売買、暗号資産つみたてなどを提供するサービスのバックエンド開発。マイクロサービスアーキテクチャによる設計・実装・運用と AI Agent を活用した開発支援に従事。",
    youtubeId: "f9BUVe6bO0E",
    links: [
      { title: "メルコイン", url: "https://about.mercoin.com/" },
    ],
    keywords: ["Go", "gRPC", "Cloud Spanner", "Kubernetes", "AI Agent"],
  },
  {
    title: "REALITY",
    subtitle: "REALITY株式会社 / メタバースアプリ",
    description:
      "世界63地域で展開されるライブ配信アプリ「REALITY」のサーバーサイド開発。Go/TypeScript によるバックエンド機能開発、パフォーマンスチューニング、データ基盤構築、Observability 強化、Engineering Managerに従事。",
    youtubeId: "ktMNqFuW6uQ",
    links: [
      { title: "REALITY", url: "https://reality.app/" },
      {
        title: "Observability強化とPerformance Tuningチームの立ち上げ",
        url: "https://note.com/reality_eng/n/n304df572550e",
      },
      {
        title: "Protocol Buffersの本番導入",
        url: "https://note.com/reality_eng/n/n2223d56db125",
      },
      {
        title: "配信サーバのマルチリージョン化",
        url: "https://note.com/reality_eng/n/nc2f16c9fbad3",
      },
      {
        title: "コーディングエージェントの導入",
        url: "https://note.com/reality_eng/n/n4ad2f2f35127",
      },
    ],
    keywords: ["Go", "TypeScript", "Google Cloud", "Observability", "Data Engineering", "AI Agent"],
  },
  {
    title: "VR消防体験 -炎舞-",
    subtitle: "IVRC 2019 総合優勝",
    description:
      "消防隊員の視点で消火活動を体験するVRアトラクション。風覚提示装置と水噴流反力デバイスを自作し、没入感を実現。",
    youtubeId: "V0Sx3hOtxdg",
    links: [
      { title: "IVRC Archive", url: "http://ivrc.net/archive/VR%E6%B6%88%E9%98%B2%E4%BD%93%E9%A8%93%20-%E7%82%8E%E8%88%9E-2019/" },
    ],
    keywords: ["VR", "Haptics", "Unity", "Mechatronics"],
  },
  {
    title: "Multitouch Haptic Interface",
    subtitle: "修士研究 / 電気学会技術委員会奨励賞",
    description:
      "可動タッチスクリーンで指先にせん断力を与え、バーチャル物体の形状・重さを知覚させるハプティックディスプレイ。",
    youtubeId: "YCZPmj7NtSQ",
    links: [
      { title: "Project Page", url: "https://www.vrlab.esys.tsukuba.ac.jp/projects/haptics/multitouch-haptic-interface-with-movable-touch-screen" },
    ],
    keywords: ["VR", "Haptics", "C++", "Mechatronics"],
  },
  {
    title: "天獄渡り",
    subtitle: "IVRC 2018 決勝進出",
    description:
      "高所の橋をセグウェイで渡るVRアトラクション。膝振動デバイスで恐怖時の膝の震えを再現し、恐怖感を錯覚させる。",
    youtubeId: "8WcjSPBK4X0",
    links: [
      { title: "IVRC Archive", url: "http://ivrc.net/archive/%E5%A4%A9%E7%8D%84%E6%B8%A1%E3%82%8A2018/" },
    ],
    keywords: ["VR", "Haptics", "Unity"],
  },
  {
    title: "なんでもルービックキューブ",
    subtitle: "IVRC 2017 決勝進出",
    description:
      "ルービックキューブ型力覚デバイスと4面ホログラフィックディスプレイで、物体をねじる力覚を提示。",
    youtubeId: "344g8o2PicA",
    links: [
      { title: "IVRC Archive", url: "http://ivrc.net/archive/rubiks-cube-transform-3-degrees-of-freedom-force-sense-presentation-device2017/" },
    ],
    keywords: ["VR", "Haptics", "Unity"],
  },
];
