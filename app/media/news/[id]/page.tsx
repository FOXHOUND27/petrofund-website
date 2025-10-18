import React from "react";
import Image from "next/image";

interface Params {
  params: { id: string };
}

export interface Post {
  id: string;
  title: string;
  postImage: string;
  summary: string;
  content: string;
}

const posts: Post[] = [
  {
    id: "1",
    title: "Next.js Tips",
    postImage: "/SectionImages/DesertHero.jpg",
    summary:
      "Learn how to use Next.js efficiently with practical examples and best practices.",
    content: `
Next.js has become one of the most popular frameworks for React applications. Developers love it for its speed, flexibility, and built-in support for SEO and server-side rendering. By using Next.js, you can easily build high-performing web applications that scale effortlessly as your project grows. The framework also integrates seamlessly with TypeScript and modern APIs, allowing developers to create strongly typed and error-free components. 

When used properly, Next.js drastically improves the developer experience while reducing technical debt in large projects. Many companies rely on it to build dashboards, marketing sites, and content-driven platforms that handle millions of users. With continuous updates from Vercel, its ecosystem keeps improving with features like Edge Middleware and App Router, giving developers even more power to build dynamic and optimized experiences.
    `,
  },
  {
    id: "2",
    title: "Using Axios with TypeScript",
    postImage: "/SectionImages/GrayLady.jpg",
    summary:
      "How to fetch data safely in TypeScript using Axios for clean and maintainable code.",
    content: `
Axios is a popular HTTP client for JavaScript and TypeScript, widely used for fetching and posting data between the client and the server. When combined with TypeScript, Axios provides excellent type safety, ensuring that your responses match expected structures and reducing runtime bugs. You can easily define interfaces for your API responses, which helps maintain clean and predictable codebases.

Developers often prefer Axios because of its simplicity and the power of its interceptors, which allow handling authentication, logging, or response formatting globally. When properly configured, Axios can reduce boilerplate and make network requests more consistent across your entire application. Additionally, its promise-based syntax integrates perfectly with async/await, making your data-fetching code clean and modern. Whether you’re building a small app or a large enterprise system, Axios remains a trusted and developer-friendly choice for robust TypeScript development.
    `,
  },
  {
    id: "3",
    title: "Petrofund Expands Renewable Energy Initiatives",
    postImage: "/SectionImages/GrayLady.jpg",
    summary:
      "Petrofund invests in solar, wind, and hybrid energy projects across Africa.",
    content: `
Petrofund has announced a significant expansion of its renewable energy initiatives, marking an important milestone in its journey toward sustainability. The organization’s investment in solar and wind infrastructure aims to reduce dependency on fossil fuels while promoting long-term environmental responsibility. These initiatives also include educational outreach and partnerships with local universities to drive innovation in green energy technology.

By expanding its portfolio into clean energy, Petrofund demonstrates a forward-thinking commitment to the global energy transition. The company’s vision aligns with international sustainability goals and Namibia’s ambitions for energy independence. In the coming years, Petrofund plans to increase its renewable footprint even further, investing in hybrid projects that combine solar, wind, and storage technologies to provide consistent and affordable power to communities across the region. This approach positions Petrofund as a leading advocate for clean, inclusive, and future-ready energy solutions in Africa.
    `,
  },
];

const Page = ({ params }: Params) => {
  const post = posts.find((p) => p.id === params.id);

  if (!post) return <p>Post not found</p>;
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Image
        src={post.postImage}
        alt={post.title}
        width={800}
        height={400}
        className="rounded-xl mb-6 object-cover w-full"
      />
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-700 text-justify leading-relaxed">
        {post.content}
      </p>
    </div>
  );
};

export default Page;
