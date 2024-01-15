import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Total control over your production",
    paragraph:
      "Integrate your production planning and shop floor. ERPNext's customer management, sales orders, inventory, purchasing, accounting, and financial reporting make real-time coordination across all your business verticals easier. ",
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "WItness Moyo",
      image: "/images/blog/auth-03.jpg",
      designation: "Graphic Designer",
    },
    tags: ["creative"],
    publishDate: "2024",
  },
  {
    id: 2,
    title: "Move beyond legacy tools with a smart cloud manufacturing ERP software",
    paragraph:
      "A modern cloud manufacturing ERP software that simplifies the production cycle, helps track material consumption, exhibits capacity planning, handles subcontracting, and more! ",
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Pardon Madusise",
      image: "/images/blog/auth-02.jpg",
      designation: "Content Writer",
    },
    tags: ["computer"],
    publishDate: "2024",
  },
  {
    id: 3,
    title: "Manage your finances with the accounting software",
    paragraph:
      "All the tools you need to manage cash flow in one place, right from recording transactions to summarizing and analyzing financial reports. It's bookkeeping made easy.",
    image: "/images/blog/blog-03.jpg",
    author: {
      name: "Dr Benjamin Maisiri",
      image: "/images/blog/auth-01.jpg",
      designation: "WMC",
    },
    tags: ["design"],
    publishDate: "2024",
  },
];
export default blogData;
