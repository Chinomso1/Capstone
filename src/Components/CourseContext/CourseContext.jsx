
// eslint-disable-next-line no-unused-vars
import React, {createContext, useState} from 'react'

export const CourseContext = createContext();

//import course data
import{coursesData} from "../../data";

const CourseContextProvider = ({children}) => {
  const [courses, setCourses] =useState(coursesData);
  return (
    <div>
      <CourseContext.Provider value={{courses}}>
        {children}
      </CourseContext.Provider>
    </div>
  )
}

export default CourseContextProvider
