import {VisitResponse} from "../api/VisitResponse";
import dayjs from "dayjs";


export type CalendarContextType = {
  selectedDate:dayjs.Dayjs,
  weekDays:dayjs.Dayjs[],
  currenDate:dayjs.Dayjs,
  noFilterVisits:VisitResponse[] |[];
  currentVisits: VisitResponse[] |[];
  visitsModifier: (visits: VisitResponse[] | []) => void;
  dateModifier: (date:dayjs.Dayjs) => void;
  selectedDateModifier: (date:dayjs.Dayjs) => void;
};
