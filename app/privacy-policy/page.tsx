import type { Metadata } from 'next'

import { LegalPage } from '@/components/legal-page'
import { privacyPolicy } from '@/lib/legal'

export const metadata: Metadata = {
  title: 'Privacy Policy | Mission Primary Care',
  description: 'How Mission Primary Care collects, uses and protects information, including text messaging consent.',
}

export default function PrivacyPolicyPage() { return <LegalPage doc={privacyPolicy} slug="privacy" /> }
