import { useEffect, useState } from 'react';
import { wrapNumberInput } from '@/utils/inputWrappers';
import { FaVolumeHigh, FaVolumeLow, FaVolumeXmark } from 'react-icons/fa6';
import { VolumeTypes } from '@/common/enums/volumeTypes';
import { Input } from '@nextui-org/input';

type Props = {
  value: number;
  onChange: (value: number) => void;
};

const volumeIcon = new Map([
  [VolumeTypes.Muted, FaVolumeXmark],
  [VolumeTypes.Medium, FaVolumeLow],
  [VolumeTypes.High, FaVolumeHigh],
]);

const Volume = ({ value, onChange }: Props) => {
  const [currentValue, setCurrentValue] = useState(
    Number(localStorage.getItem('volume') || 50)
  );
  const handleCurrentValueChange = (value: number) => {
    const newValue = Math.floor(value);
    const formattedValue = newValue / 100;
    setCurrentValue(newValue);
    onChange(formattedValue);
    localStorage.setItem('volume', newValue.toString());
  };

  const isLoud = currentValue > 80;

  const volume = isLoud ? VolumeTypes.High : VolumeTypes.Medium;
  const volumeSize =
    Math.floor(currentValue) === 0 ? VolumeTypes.Muted : volume;

  const Icon = volumeIcon?.get(volumeSize) || FaVolumeXmark;

  useEffect(() => {
    onChange(currentValue / 100);
  }, []);

  return (
    <div className="h-1/3 justify-center items-center overflow-hidden w-full md:w-1/3 gap-2 flex">
      <Icon className="h-full w-auto" />
      <Input
        className="accent-main w-1/2"
        type="range"
        value={currentValue.toString()}
        onChange={wrapNumberInput(handleCurrentValueChange)}
      />
    </div>
  );
};

export default Volume;
