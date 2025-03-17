/**
 * This file was auto-generated by openapi-typescript.
 * Do not make direct changes to the file.
 */

export interface paths {
  "/api/events": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Get all events
         * @description Retrieve a list of all events.
         */
    get: {
      parameters: {
        query?: {
          /** @description Maximum number of events to return */
          limit?: number;
        };
        header?: never;
        path?: never;
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Successful operation */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": {
              items: components["schemas"]["EventItem"][];
            };
          };
        };
        /** @description Internal server error */
        500: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    put?: never;
    /**
         * Create a new event
         * @description Add a new event to the system.
         */
    post: {
      parameters: {
        query?: never;
        header?: never;
        path?: never;
        cookie?: never;
      };
      /** @description Event object that needs to be added */
      requestBody: {
        content: {
          "application/json": components["schemas"]["EventItemInput"];
        };
      };
      responses: {
        /** @description Successful operation */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description Internal server error */
        500: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/api/events/{id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
         * Get event by ID
         * @description Retrieve a specific event by its ID.
         */
    get: {
      parameters: {
        query?: never;
        header?: never;
        path: {
          /** @description ID of the event to retrieve */
          id: number;
        };
        cookie?: never;
      };
      requestBody?: never;
      responses: {
        /** @description Successful operation */
        200: {
          headers: {
            [name: string]: unknown;
          };
          content: {
            "application/json": components["schemas"]["EventItem"];
          };
        };
        /** @description Event not found */
        404: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
        /** @description Internal server error */
        500: {
          headers: {
            [name: string]: unknown;
          };
          content?: never;
        };
      };
    };
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    RecordEntry: {
      /** @description Name of the participant. */
      name: string;
      /**
             * @description Participant's answer.
             * @enum {string}
             */
      answer: "yes" | "no" | "if-needed";
    };
    EventDate: {
      /** @description Timestamp of the date. */
      timestamp: number;
      /** @description Records for this date. */
      records: components["schemas"]["RecordEntry"][];
    };
    EventItem: {
      /** @description Unique identifier for the event. */
      id: number;
      /** @description Location of the event. */
      location?: string;
      /** @description Title of the event. */
      title: string;
      /** @description Dates and associated records for the event. */
      dates: components["schemas"]["EventDate"][];
    };
    EventItemInput: {
      /** @description Location of the event. */
      location: string;
      /** @description Title of the event. */
      title: string;
      /** @description Dates and associated records for the event. */
      dates?: components["schemas"]["EventDate"][];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export type operations = Record<string, never>;
