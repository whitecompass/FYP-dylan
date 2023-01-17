import React, { useEffect, useState } from 'react';
import { Scheduler } from '@aldabil/react-scheduler';

const Calendar = () => {
    return (
        <div>
            <Scheduler
                view="week"
                navigation={false}
                disableViewNavigator={true}
            />
        </div>
    )
}

export default Calendar;
