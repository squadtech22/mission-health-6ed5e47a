import type { Metadata } from 'next'

import { LegalPage } from '@/components/legal-page'
import { terms } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Terms & Conditions | Mission Primary Care',
  description: 'Terms for the Mission Primary Care website and patient text messaging program: message types, frequency, rates, STOP and HELP.',
}

export default function TermsPage() { return <LegalPage doc={terms} slug="terms" /> }
