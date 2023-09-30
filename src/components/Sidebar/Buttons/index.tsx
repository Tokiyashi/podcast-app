import MenuButton from './MenuButton'

const menuItems = {
  Menu: [
    {
      label: 'Menu',
      href: '/menu',
    },
    {
      label: 'Search',
      href: '/search',
    },
  ],
  Collection: [
    {
      label: 'Liked',
      href: '/liked',
    },
    {
      label: 'TrackList',
      href: '/tracklist',
    },
  ],
  General: [
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
  ],
}

const Buttons = () => {
  return (
    <div className="p-10 flex flex-col gap-4">
      {Object.entries(menuItems).map((item) => {
        const [menuTitle, menuButtons] = item
        return (
          <>
            <div>{menuTitle}</div>
            <div>
              {menuButtons.map((button) => (
                <MenuButton item={button} />
              ))}
            </div>
          </>
        )
      })}
    </div>
  )
}

export default Buttons
