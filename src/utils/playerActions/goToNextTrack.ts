import { store } from '@/store';
import { setCurrentTrack } from '@/store/slices/playerSlice';
import { finishCurrentTrack } from '@/store/slices/roomSlice';

export function goToNextTrack() {
  const { trackQueue } = store.getState().room.room;
  store.dispatch(setCurrentTrack(trackQueue[0]));
  store.dispatch(finishCurrentTrack());
}
