import React from "react";
import { Link } from "gatsby";
import { useAllPosts } from "../hooks";

const IndexTemplate: React.FCX<{}> = () => {
  return (
    <main>
      {useAllPosts().map(({ excerpt, frontmatter, fields }, i) => {
        const { title, date } = frontmatter;
        return (
          <article key={i}>
            <Link to={fields.slug}>
              <h2>{title}</h2>
            </Link>
            <p>{date}</p>
            <p>{excerpt}</p>
          </article>
        );
      })}
    </main>
  );
};

export default IndexTemplate;
