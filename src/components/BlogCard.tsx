import React from "react";

interface BlogCardProps {
  title: string;
  content: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ title, content }) => {
  return (
    <div className="bg-white p-4 rounded shadow-md mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2">{content}</p>
    </div>
  );
};

export default BlogCard;
