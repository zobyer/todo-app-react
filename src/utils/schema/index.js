import * as yup from "yup";
import { TASK_TITLE_ERROR_MESSAGE } from "utils/const";

export const addNewTaskSchema = yup
  .object({
    title: yup.string().trim().required(TASK_TITLE_ERROR_MESSAGE),
  })
  .required();
