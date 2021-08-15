import '../../App.js';
import './WeekDays.css'
export default function WeekDays(props) {
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return <h2>{days[props.day]}</h2>
};