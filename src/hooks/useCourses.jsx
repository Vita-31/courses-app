import { useContext } from "react";
import { CoursesContext } from "../context/CoursesContext";

export default function useCourses() {
    return useContext(CoursesContext)
}