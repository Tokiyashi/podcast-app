import { store } from '@/store';
import { finishCurrentTrack } from '@/store/slices/trackListSlice';
import { setCurrentTrack } from '@/store/slices/playerSlice';

export function goToNextTrack() {
  const { queue } = store.getState().trackList;
  store.dispatch(setCurrentTrack(queue[0]));
  store.dispatch(finishCurrentTrack());
}
