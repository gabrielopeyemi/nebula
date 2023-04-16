interface Link {
  name: string
  href: string
}

interface dataProp {
  title: string
  links: Link[]
}

export const data: dataProp[] = [
  {
    title: "products",
    links: [
      {
        name: "Landing Page",
        href: "/",
      },
      {
        name: "Popup Builder",
        href: "popup",
      },
      {
        name: "Web-design",
        href: "web-design",
      },
      {
        name: "Content",
        href: "content",
      },
      {
        name: "Integrations",
        href: "integrations",
      },
    ],
  },
  {
    title: "use Cases",
    links: [
      {
        name: "Web-design",
        href: "web-design",
      },
      {
        name: "Marketers",
        href: "marketers",
      },
      {
        name: "Small Business",
        href: "small-business",
      },
      {
        name: "Web Builder",
        href: "web-builder",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Academy",
        href: "academy",
      },
      {
        name: "Blog",
        href: "blog",
      },
      {
        name: "Themes",
        href: "themes",
      },
      {
        name: "Hostings",
        href: "hostings",
      },
      {
        name: "Developers",
        href: "developers",
      },
      {
        name: "Support",
        href: "support",
      },
    ],
  },
  {
    title: "Company",
    links: [
      {
        name: "About us",
        href: "about-us",
      },
      {
        name: "Careers",
        href: "careers",
      },
      {
        name: "Faqs",
        href: "faqs",
      },
      {
        name: "Teams",
        href: "teams",
      },
      {
        name: "Contact us",
        href: "contact",
      },
    ],
  },
]
