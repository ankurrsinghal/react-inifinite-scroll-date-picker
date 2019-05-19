```
const App = () => {
  const [date, setDate] = React.useState('');
  const handleDateChange = date => {
    setDate(date);
  }

  return (
    <React.Fragment>
      {date && date.toUTCString()}
      <Calendar onChange={handleDateChange} />
    </React.Fragment>
  )
}
```