import { useEffect } from "react";

import {
  DEFAULT_LANGUAGE,
  SITE_NAME,
  SITE_URL,
  SUPPORTED_LANGUAGES,
} from "../../config/site.js";

function PageMeta({
  title,
  description,
  language,
  path = "",
  noIndex = false,
}) {
  useEffect(() => {
    document.title = `${title} | ${SITE_NAME}`;

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.name = "description";
      document.head.appendChild(metaDescription);
    }

    metaDescription.content = description;

    let robots = document.querySelector('meta[name="robots"]');

    if (!robots) {
      robots = document.createElement("meta");
      robots.name = "robots";
      document.head.appendChild(robots);
    }

    robots.content = noIndex ? "noindex, nofollow" : "index, follow";

    const canonical = document.querySelector('link[rel="canonical"]');

    const alternateLinks = document.querySelectorAll(
      'link[rel="alternate"][hreflang]',
    );

    if (noIndex || !language) {
      canonical?.remove();

      alternateLinks.forEach((link) => {
        link.remove();
      });

      return;
    }

    const cleanPath = path ? `/${path}` : "";

    const canonicalUrl = `${SITE_URL}/${language}${cleanPath}`;

    let canonicalLink = canonical;

    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }

    canonicalLink.href = canonicalUrl;

    alternateLinks.forEach((link) => {
      link.remove();
    });

    SUPPORTED_LANGUAGES.forEach((lang) => {
      const link = document.createElement("link");

      link.rel = "alternate";
      link.hreflang = lang;
      link.href = `${SITE_URL}/${lang}${cleanPath}`;

      document.head.appendChild(link);
    });

    const defaultLink = document.createElement("link");

    defaultLink.rel = "alternate";
    defaultLink.hreflang = "x-default";
    defaultLink.href = `${SITE_URL}/${DEFAULT_LANGUAGE}${cleanPath}`;

    document.head.appendChild(defaultLink);
  }, [title, description, language, path, noIndex]);

  return null;
}

export default PageMeta;
