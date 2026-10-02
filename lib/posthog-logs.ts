"use client";

import posthog from "posthog-js";

export const directoryLogger = {
  explorationStarted() {
    posthog.logger.info("Event directory exploration started", {
      surface: "event_directory",
    });
  },
  eventSelected(eventSlug: string) {
    posthog.logger.info("Featured event selected", {
      surface: "event_directory",
      event_slug: eventSlug,
    });
  },
};
