import MusicList from '@/components/MusicList';
import AddNewTrack from '@/app/room/[id]/TrackList/AddNewTrack';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';

const TrackList = () => {
  const { room } = useSelector((state: RootState) => state.room);

  return (
    <div className="flex h-full w-1/3">
      <MusicList items={room?.allTracks} />
      <AddNewTrack />
    </div>
  );
};

export default TrackList;
