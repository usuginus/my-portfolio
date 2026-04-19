export interface SkillCategory {
  category: string;
  items: string[];
}

export interface SkillSection {
  title: string;
  subtitle: string;
  technologies: SkillCategory[];
}

export const skillSections: SkillSection[] = [
  {
    title: "Web / Cloud",
    subtitle: "Software Development",
    technologies: [
      {
        category: "Languages",
        items: ["Go", "TypeScript", "JavaScript"],
      },
      {
        category: "Infrastructure",
        items: ["GKE", "Kubernetes", "Docker", "Terraform", "Argo CD", "CUE"],
      },
      {
        category: "Data & Storage",
        items: ["Cloud Spanner", "BigQuery", "MySQL", "Redis", "Pub/Sub"],
      },
      {
        category: "Observability",
        items: ["Datadog", "Grafana", "Prometheus", "Cloud Trace"],
      },
      {
        category: "API & Protocol",
        items: ["gRPC", "Protocol Buffers", "REST"],
      },
      {
        category: "Frontend",
        items: ["React", "Vue.js", "Next.js"],
      },
    ],
  },
  {
    title: "VR / Haptics",
    subtitle: "Research & Development",
    technologies: [
      {
        category: "Languages",
        items: ["C++", "C# (Unity)", "R"],
      },
      {
        category: "Hardware",
        items: ["Arduino", "Raspberry Pi", "M5Stack", "ROS"],
      },
      {
        category: "Domain",
        items: ["Haptic Interface", "Kinematics", "PID Control"],
      },
    ],
  },
];
