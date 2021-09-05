// Imports
import Link from "next/link"; // Routing
import { useRouter } from "next/router"; // Routing
import { default as HTMLHead } from "next/head"; // Meta
import styles from "@styles/components/Layout.module.scss"; // Styles

// Types
import type { ReactElement } from "react";

export default function Layout({
  children,
}: {
  children: ReactElement | ReactElement[];
}) {
  return (
    <div>
      {/* Meta */}
      <Head />
      {/* Top header */}
      <Header />

      {/* Page content */}
      <div className={styles.content}>{children}</div>
      {/* Bottom footer */}
      <Footer />
    </div>
  );
}

/**
 * Meta HTML Head
 * @returns {ReactElement} HTML Head component
 */
function Head(): ReactElement {
  return (
    <HTMLHead>
      {/* Primary Meta Tags */}
      <title>LootV3</title>
      <meta name="title" content="LootV3" />
      <meta
        name="description"
        content="LootV3 is randomized adventurer gear generated and stored on chain."
      />

      {/* OG + Faceook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.lootprojectv3.com/" />
      <meta property="og:title" content="LootV3" />
      <meta
        property="og:description"
        content="LootV3 is randomized adventurer gear generated and stored on chain."
      />
      <meta property="og:image" content="https://lootprojectv3.com/meta.png" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.lootprojectv3.com/" />
      <meta property="twitter:title" content="LootV3" />
      <meta
        property="twitter:description"
        content="LootV3 is randomized adventurer gear generated and stored on chain."
      />
      <meta property="twitter:image" content="https://lootprojectV3.com/meta.png" />

      {/* Font */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      {/* eslint-disable-next-line @next/next/no-page-custom-font */}
      <link
        href="https://fonts.googleapis.com/css2?family=EB+Garamond:wght@400;700&display=swap"
        rel="stylesheet"
      />
      next
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-L04H1SYW6P"></script>
      <script dangerouslySetInnerHTML={{ __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments)}
              gtag('js', new Date());
              gtag('config', 'G-L04H1SYW6P');
            `,}}>
      </script>
    </HTMLHead>
  );
}

/**
 * Header
 * @returns {ReactElement} Header
 */
function Header() {
  // Collect current path for active links
  const { pathname } = useRouter();
  // All links
  // const links = [
  //   // { name: "FAQ", path: "/faq" },
  //   // { name: "Resources", path: "/resources" },
  // ];

  return (
    <div className={styles.header}>
      {/* Main logo */}
      <div className={styles.header__logo}>
        <Link href="/">
          <a>LootV3</a>
        </Link>
      </div>

      {/* Navigation */}
      <div className={styles.header__links}>
        <ul>
          {/* {links.map(({ name, path }, i) => {
            // For each link, render link
            return (
              <li key={i}>
                <Link href={path}>
                  <a
                    className={
                      pathname === path
                        ? // Active class if pathname matches current path
                          styles.header__links_active
                        : undefined
                    }
                  >
                    {name}
                  </a>
                </Link>
              </li>
            );
          })} */}
        </ul>
      </div>
    </div>
  );
}

/**
 * Footer component
 * @returns {ReactElement} Footer
 */
function Footer(): ReactElement {
  return (
    <div className={styles.footer}>
      <p>
        This website is{" "}
        <a
          href="https://github.com/lootprojectv3/website"
          target="_blank"
          rel="noopener noreferrer"
        >
          open-source
        </a>
        .
      </p>
    </div>
  );
}
