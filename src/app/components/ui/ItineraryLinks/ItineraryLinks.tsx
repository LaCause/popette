"use client";

import { track } from "@vercel/analytics/react";
import { Button } from "../Button/Button";

export default function ItineraryLinks() {
  return (
    <div className="flex flex-wrap gap-4">
      <Button className="w-full">
        <a
          href="https://waze.com/ul?ll=44.657144,-1.167812&navigate=yes"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("click_waze_link")}
        >
          Ouvrir dans Waze
        </a>
      </Button>
      <Button className="w-full">
        <a
          href="http://maps.apple.com/?daddr=10+Rue+du+Maréchal+de+Lattre+de+Tassigny,+33120+Arcachon"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("click_apple_maps_link")}
        >
          Ouvrir dans Plans (iOS)
        </a>
      </Button>
      <Button className="w-full">
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=10+Rue+du+Maréchal+de+Lattre+de+Tassigny,+33120+Arcachon"
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("click_google_maps_link")}
        >
          Ouvrir dans Google Maps
        </a>
      </Button>
    </div>
  );
}
