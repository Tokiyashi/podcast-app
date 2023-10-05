import MenuButton from './MenuButton'

const menuItems = {
  Menu: [
    {
      label: 'Menu',
      href: '/menu',
    },
    {
      label: 'Listen Together!',
      href: '/room',
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
      href: '/set',
    },
  ],
}

const Buttons = () => {
  return (
    <div className="p-10 flex flex-col gap-4">
      {Object.entries(menuItems).map((item) => {
        const [menuTitle, menuButtons] = item
        return (
          <div className="flex flex-col gap-4" key={menuTitle}>
            <div>{menuTitle}</div>
            <div>
              {menuButtons.map((button) => (
                <MenuButton key={button.href} item={button} />
              ))}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Buttons
