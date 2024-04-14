import { redirect } from 'next/navigation'


export default function Home() {
  redirect('/ru')

  return (
    <div>
      Redirecting...
      You must be redirected
    </div>
  )
}
