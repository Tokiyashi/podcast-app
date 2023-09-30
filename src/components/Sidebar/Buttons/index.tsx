import MenuButton from './MenuButton'
import Link from 'next/link'

const Buttons = () => {
  return (
    <div className="p-10">
      <MenuButton />
      <MenuButton />
      <Link href="/tracklist">Track list</Link>
      <MenuButton />
      <MenuButton />
    </div>
  )
}

export default Buttons
