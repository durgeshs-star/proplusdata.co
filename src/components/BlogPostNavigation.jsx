import { useLayoutEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { blogs } from "./BlogsRedesign";

const posts = blogs.filter((blog) => !blog.link.toLowerCase().endsWith(".pdf"));

export default function BlogPostNavigation() {
  const { pathname } = useLocation();
  const [mount, setMount] = useState({ pathname: null, article: null, header: null });
  const currentPath = pathname.replace(/\/$/, "");
  const currentIndex = posts.findIndex((post) => post.link === currentPath);

  useLayoutEffect(() => {
    const article = currentIndex >= 0 ? document.querySelector(".ppd-article-page, .ppd-revenue-article") : null;
    setMount({
      pathname,
      article,
      header: article?.querySelector(".ppd-article-hero-inner, .ppd-revenue-hero__inner") ?? null,
    });
  }, [currentIndex, pathname]);

  if (mount.pathname !== pathname || !mount.article || !mount.header || currentIndex < 0 || posts.length < 2) return null;

  const previous = posts[(currentIndex - 1 + posts.length) % posts.length];
  const next = posts[(currentIndex + 1) % posts.length];

  return (
    <>
      {createPortal(
        <nav className="ppd-blog-post-nav" aria-label="More blog articles">
          <Link className="ppd-blog-post-nav__card ppd-blog-post-nav__card--previous" to={previous.link}>
            <span className="ppd-blog-post-nav__eyebrow"><span aria-hidden="true">←</span> Previous blog</span>
            <span className="ppd-blog-post-nav__title">{previous.title}</span>
          </Link>
          <Link className="ppd-blog-post-nav__card ppd-blog-post-nav__card--next" to={next.link}>
            <span className="ppd-blog-post-nav__eyebrow">Next blog <span aria-hidden="true">↗</span></span>
            <span className="ppd-blog-post-nav__title">{next.title}</span>
          </Link>
        </nav>,
        mount.article
      )}
    </>
  );
}
