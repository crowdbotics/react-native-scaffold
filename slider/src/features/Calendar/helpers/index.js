import moment from "moment";
import { times } from "lodash";
import uuid from "uuid/v4";

/**
 * Generates an object with keys with dates with empty array from one lower bond to one upperbond
 * i.e {'12-12-2019':[]}
 * This is the format required by React Native Calendar - Agenda component
 * @param {string Date ISO} startDate date used as reference for the calculation for keys. It can be
 * @param {number} downLimit lower bond date of the calculation in days
 * @param {number} uperLimit uper bond date of the calculation in days
 */
export function generateEmptyObjectWithDates(startDate, downLimit, uperLimit) {
  let objectWithEmptyDates = {};

  const lowerLimitDate = moment(startDate).subtract(downLimit, "days");

  times(downLimit + uperLimit, () => {
    const decreasedDate = lowerLimitDate.add(1, "days").format("YYYY-MM-DD");
    objectWithEmptyDates[decreasedDate] = [];
  });

  return objectWithEmptyDates;
}

export function dateToDateTime({ dateTime, date }) {
  if (!dateTime) {
    return moment(date).format("YYYY-MM-DD HH:mm:ss");
  }
  return dateTime;
}

/**
 * Transforms an event from Google Calendar API into a JSON object accepted by react-native-calendar
 * @param {object} googleEvent
 * @returns {object} Agenda Event
 */
export function googleEventsToAgendaEvents(googleEvents) {
  const calendarEvents = generateEmptyObjectWithDates(Date.now(), 30, 30);
  const availableDates = Object.keys(calendarEvents);

  googleEvents.forEach(event => {
    const { start, end, summary } = event;

    // if it is all day long or incomplete
    // event don't add it to the calendar
    if (!start.dateTime || !end.dateTime || !event.summary) {
      return;
    }

    const formatedDate = moment(start.dateTime).format("YYYY-MM-DD");

    // if event is not part of current render, don't add it
    if (!availableDates.includes(formatedDate)) return;

    const formatedEvent = {
      name: summary,
      start: dateToDateTime(event.start),
      end: dateToDateTime(event.end),
      key: uuid(summary),
      high: 150
    };

    calendarEvents[formatedDate].push(formatedEvent);
  });

  return calendarEvents;
}
