import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Dashboard from './components/parents/Dashboard.jsx'
import SampleRow from './components/enfants/SampleRow.jsx'
import StatusBadge from './components/enfants/StatusBadge.jsx'
import TaskWidget from './components/enfants/TaskWidget.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TaskWidget/>
   
    
    <Dashboard/>
    <SampleRow/>
    <App />
  </StrictMode>,
)
