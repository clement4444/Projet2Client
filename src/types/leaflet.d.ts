// src/types/leaflet-global.d.ts
declare global {
  var L: typeof import("leaflet");
  var LeafletMap: L.Map;
}

export {};
