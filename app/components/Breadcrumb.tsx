"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();

  const excludedPages = ["/", "/flight-deals", "/cheap-flights-tickets"];

  // Exclude consultation folder
  if (
    excludedPages.includes(pathname) ||
    pathname.startsWith("/consultation/")
  ) {
    return null;
  }

  const currentPage = pathname
    .split("/")
    .filter(Boolean)
    .pop()
    ?.replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  return (
    <div className="breadcrumb-bg_web50">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <ul className="breadcrumb-list_web50">
              <li>
                <Link href="/">
                  <i className="fa-solid fa-house"></i> Home
                </Link>
              </li>
              <li>{currentPage}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}