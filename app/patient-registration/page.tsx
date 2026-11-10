import type { Metadata } from 'next'

import { RegistrationForm } from '@/components/registration-form'

export const metadata: Metadata = {
  title: 'Patient registration form | Mission Primary Care',
  description: 'New patient registration form for Mission Primary Care, including optional text messaging consent.',
}

export default function PatientRegistrationPage() { return <RegistrationForm /> }
