export const BRAND = {
  name: "Mukhlis Software Solution",
  logo: "/brand/mukhlis-software-solution-logo-dark.png",
  mark: "/brand/mukhlis-software-solution-mark-transparent.png",
} as const;

export const SERVICE_IMAGES: Record<string, { src: string; alt: string }> = {
  fintech: {
    src: "/brand/payment-fintech-solutions.png",
    alt: "Mukhlis Software Solution payment and fintech engineering services",
  },
  "web-development": {
    src: "/brand/web-design-development.png",
    alt: "Mukhlis Software Solution web design and development services",
  },
  "mobile-development": {
    src: "/brand/mobile-app-development.png",
    alt: "Mukhlis Software Solution mobile application development services",
  },
  "desktop-development": {
    src: "/brand/custom-software-development.png",
    alt: "Mukhlis Software Solution desktop and custom software development",
  },
  "enterprise-software": {
    src: "/brand/erp-business-solutions.png",
    alt: "Mukhlis Software Solution ERP and business software services",
  },
  "api-development": {
    src: "/brand/software-solutions-business.png",
    alt: "Mukhlis Software Solution API and business system engineering",
  },
  "cloud-devops": {
    src: "/brand/mukhlis-software-development-workspace.png",
    alt: "Mukhlis Software Solution cloud and DevOps engineering workspace",
  },
};
