![alt text](https://raw.githubusercontent.com/ankurrsinghal/react-inifinite-scroll-date-picker/master/public/screenshot.png)

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