import React, {useState, useEffect} from 'react'

export default function FuncClock() {
  const [date, setDate] = useState(new Date());
  // 相当于三个生命周期的集合
  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date())
    }, 1000);
    // 组件卸载时执行
    return () => clearInterval(timer)
  }, []) // []里的依赖项更新 会触发
  return (
    <div>
      {date.toLocaleTimeString()}
    </div>
  )
}
