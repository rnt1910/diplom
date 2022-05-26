import React, { createContext } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

//styles
import './index.css'
import RouterList from './navigation/RouterList'
import CourseStore from './store/CourseStore'
import UserStore from './store/UserStore'

export const userStore = new UserStore()
export const courseStore = new CourseStore()
export const Context = createContext({ userStore, courseStore })

createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<Context.Provider value={{ userStore, courseStore }}>
				<RouterList />
			</Context.Provider>
		</BrowserRouter>
	</React.StrictMode>
)
