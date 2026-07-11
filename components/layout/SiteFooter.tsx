import Link from "next/link";
import { footerNav, serviceTimes, site } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t border-white/10 bg-deep text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold">{site.name}</p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-deep-muted">
            A Baptist fellowship preaching Christ and serving neighbors across Siquijor.
          </p>
          <p className="mt-4 text-sm text-deep-muted">{site.addressLine}</p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
            Gathering times
          </p>
          <ul className="mt-4 space-y-2 text-sm text-deep-muted">
            {serviceTimes.map((item) => (
              <li key={item.label}>
                <span className="text-white">{item.time}</span> · {item.label}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent-soft">
            Connect
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="text-deep-muted transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.phoneHref}
                className="text-deep-muted transition-colors hover:text-white"
              >
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={site.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-deep-muted transition-colors hover:text-white"
              >
                Facebook
              </a>
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {footerNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-deep-muted transition-colors hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-deep-muted">
        © {new Date().getFullYear()} {site.name}. All glory to God.
      </div>
    </footer>
  );
}
