
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './myComponents/Navbar/Navbar'

function App() {

  return (
    <>
      <div>
        <Navbar />
        <Outlet />
        <footer className="bg-gray-900 text-white py-8">
          <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-2">Your Company</h3>
              <p className="mb-4">Providing exceptional services since 2022</p>
              <p className="text-gray-400">&copy; 2024 Your Company. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.34-1.6.58-2.47.69.89-.53 1.57-1.36 1.89-2.36-.84.5-1.76.86-2.74 1.06a4.26 4.26 0 00-7.26 3.88 12.07 12.07 0 01-8.76-4.45 4.27 4.27 0 001.32 5.7 4.24 4.24 0 01-1.93-.54v.06a4.26 4.26 0 003.42 4.17 4.28 4.28 0 01-1.92.07 4.27 4.27 0 004 2.97 8.54 8.54 0 01-5.29 1.82A12.1 12.1 0 004 21.42a17.13 17.13 0 009.29 2.73c11.14 0 17.24-9.22 17.24-17.24l-.02-.78A12.37 12.37 0 0024 4.56c-.88.39-1.84.66-2.83.78a4.32 4.32 0 001.88-2.38z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.04c5.51 0 10 4.49 10 10 0 4.38-3.54 8.13-8 8.9V14.5h2.5l.5-2.5h-3v-1.5c0-.69.19-1.25 1.5-1.25h1v-2c-.27-.03-1.2-.14-2.3-.14-2.31 0-3.9 1.4-3.9 4v2.5H7v2.5h2.5v6.44c-4.46-.77-8-4.52-8-8.9 0-5.51 4.49-10 10-10z" /></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-200">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19.6 2H4.4C3.08 2 2 3.08 2 4.4v15.2C2 20.92 3.08 22 4.4 22h15.2c1.32 0 2.4-1.08 2.4-2.4V4.4C22 3.08 20.92 2 19.6 2zM10 17.75l-5.6-4.5L10 8.5v9.25zm1.5 0V8.5l5.6 4.75-5.6 4.5z" /></svg>
              </a>
            </div>
          </div>
        </footer>

      </div>
    </>
  )
}

export default App
