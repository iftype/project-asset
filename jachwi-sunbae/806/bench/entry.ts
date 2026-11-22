import { createMapMarkerLayer } from '<frontend>/src/features/map/lib/mapMarkerLayer';
import { naverEngine } from '<frontend>/src/features/map/lib/naverMapEngine';
import type { MapMarker } from '<frontend>/src/features/map/model/Map';
import { createMapMarkerElement as createNew } from '<frontend>/src/features/map/ui/map-marker/MapMarkerView';
import { createMapMarkerElement as createOld } from './OldMapMarkerView';

const impl = new URLSearchParams(location.search).get('impl') === 'old' ? createOld : createNew;
const clientId = new URLSearchParams(location.search).get('key') ?? '';

const center = { latitude: 37.5133, longitude: 127.1001 };
const kinds: Array<Partial<MapMarker>> = [
  { tone: 'place', category: 'TRANSPORT' },
  { tone: 'place', category: 'TRANSPORT', variant: 'subway' },
  { tone: 'place', category: 'CONVENIENCE' },
  { tone: 'place', category: 'HOSPITAL' },
  { tone: 'cluster', category: 'AGENCY', count: 4 },
  { tone: 'property', actionable: true },
  { tone: 'destination', variant: 'light', actionable: true },
  { tone: 'place', category: 'MEMO', variant: 'positive' },
];
// 정해진 순서의 의사 난수(전후가 같은 좌표를 받는다).
let seed = 7;
const rand = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
export const makeMarkers = (n: number, tag: string): MapMarker[] =>
  Array.from({ length: n }, (_, i) => ({
    id: tag + i,
    latitude: center.latitude + (rand() - 0.5) * 0.03,
    longitude: center.longitude + (rand() - 0.5) * 0.04,
    label: '마커 ' + i,
    ...kinds[i % kinds.length],
  }) as MapMarker);

const w = window as unknown as Record<string, unknown>;
// 1) 요소만 만드는 시간(지도 없이)
w.benchCreate = (n: number, rounds: number) => {
  const times: number[] = [];
  for (let r = 0; r < rounds; r++) {
    seed = 7;
    const markers = makeMarkers(n, 'c' + r + '-');
    const t0 = performance.now();
    for (const m of markers) impl(m, null, () => {});
    times.push(performance.now() - t0);
  }
  return times;
};
// 2) 실제 지도에 레이어로 붙이는 시간과 끌기
w.setupMap = async () => {
  const engine = naverEngine(clientId);
  await engine.load();
  const el = document.getElementById('map') as HTMLElement;
  const map = engine.createMap(el, center, 4);
  w.__map = map;
  w.__layer = createMapMarkerLayer(map, engine, (m, s) => impl(m, s, () => {}));
  await new Promise((r) => setTimeout(r, 1500));
  return true;
};
w.syncMarkers = async (n: number, tag: string) => {
  seed = 11;
  const markers = makeMarkers(n, tag);
  const t0 = performance.now();
  (w.__layer as ReturnType<typeof createMapMarkerLayer>).sync(markers, null, 4);
  const syncMs = performance.now() - t0;
  await new Promise((r) => requestAnimationFrame(() => setTimeout(r, 0)));
  const frameMs = performance.now() - t0;
  return { syncMs, frameMs, overlays: document.querySelectorAll('[data-tone]').length };
};
w.recordFrames = () => {
  const deltas: number[] = [];
  let last = performance.now();
  let on = true;
  const tick = (t: number) => { deltas.push(t - last); last = t; if (on) requestAnimationFrame(tick); };
  requestAnimationFrame((t) => { last = t; requestAnimationFrame(tick); });
  w.stopFrames = () => { on = false; return deltas; };
};
