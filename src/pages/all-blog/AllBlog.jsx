import React, { useEffect } from "react";
import Blog from "../../components/blog/Blog";

const AllBlog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Blog isMarriade={false} />
    </div>
  );
};

export default AllBlog;
