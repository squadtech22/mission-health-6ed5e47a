import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

import type { LegalDoc } from '@/lib/legal'
import { ClinicShell } from './clinic-shell'

/**
 * Template for the Privacy Policy and Terms & Conditions. No AOS animation
 * here: a policy should be readable at once, and printable, without waiting
 * for a scroll to reveal it.
 */
export function LegalPage({ doc, slug }: { doc: LegalDoc; slug: string }) {
  return (
    <ClinicShell className={`inner-page legal-page legal-page-${slug}`}>
      <section className="inner-hero legal-hero">
        <div className="shell">
          <div className="inner-hero-content">
            <p className="eyebrow">{doc.eyebrow}</p>
            <h1>{doc.title}</h1>
            <p>{doc.intro}</p>
            <p className="legal-updated">Last updated: {doc.lastUpdated}</p>
          </div>
        </div>
      </section>

      <section className="legal-body">
        <div className="shell legal-layout">
          <nav className="legal-toc" aria-label="On this page">
            <p className="eyebrow">On this page</p>
            <ol>
              {doc.sections.map((section) => (
                <li key={section.id}><a href={`#${section.id}`}>{section.heading}</a></li>
              ))}
            </ol>
          </nav>

          <div className="legal-content">
            {doc.sections.map((section) => (
              <section className="legal-section" id={section.id} key={section.id}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                {section.list && <ul>{section.list.map((item) => <li key={item}>{item}</li>)}</ul>}
                {section.closing?.map((p) => <p key={p}>{p}</p>)}
                {section.links && (
                  <p className="legal-links">
                    {section.links.map((link) => (
                      <Link className="text-link" href={link.href} key={link.href}>{link.label} <ArrowRight size={15} /></Link>
                    ))}
                  </p>
                )}
              </section>
            ))}
          </div>
        </div>
      </section>
    </ClinicShell>
  )
}
