import { Card, CardBody } from '@material-tailwind/react';

interface UtbkCalendarProps {
    year: number;
    day: number;
}

const UtbkCalendar = ({year, day}: UtbkCalendarProps) => {
    return (
        <Card shadow={false} className='w-[8rem] sm:w-auto'>
            <CardBody className='bg-primary-red px-2 sm:px-6 py-2 text-center rounded-t-2xl'>
                <h4 className='text-xs sm:text-base font-bold text-white'>UTBK {year}</h4>
            </CardBody>
            <CardBody className='border-2 border-black rounded-b-2xl text-black text-center px-0 py-1 sm:py-2'>
            <h4 className='font-bold text-lg sm:text-2xl'>{day}</h4>
            <p className='text-xs sm:text-base'>Hari Lagi</p>
            </CardBody>
        </Card>
    )
}

export default UtbkCalendar;