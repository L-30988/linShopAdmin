import React from 'react'
import 'antd/dist/antd.css'
import { Button } from 'antd'
import './app.scss'

interface IProps {
  name: string
  age: number
}

function App(props: IProps) {
  const { name, age } = props
  return (
    <div className="app">
      <Button type="primary">Primary Button</Button>
      <span>{`Hello! I'm ${name}, ${age} linshopadmin.`}</span>
    </div>
  )
}

export default App
