import {VisitResponse} from "../api/VisitResponse";
import dayjs from "dayjs";


export type CalendarContextType = {
  weekDays:dayjs.Dayjs[],
  currenDate:dayjs.Dayjs,
  noFilterVisits:VisitResponse[] |[];
  currentVisits: VisitResponse[] |[];
  visitsModifier: (visits: VisitResponse[] | []) => void;
  dateModifier: (date:dayjs.Dayjs) => void;
};
