import { useState } from 'react'
import { wrapNumberInput } from '@/utils/inputWrappers'

type Props = {
  value: number
  onChange: (value: number) => void
}

const Volume = ({ value, onChange }: Props) => {
  const [currentValue, setCurrentValue] = useState(value)
  const handleCurrentValueChange = (value: number) => {
    const formattedValue = value / 100
    setCurrentValue(value)
    onChange(formattedValue)
  }

  return (
    <div className="h-full justify-center items-center w-1/3 flex">
      <input
        className="range accent-main"
        type="range"
        value={currentValue}
        onChange={wrapNumberInput(handleCurrentValueChange)}
      />
    </div>
  )
}

export default Volume
