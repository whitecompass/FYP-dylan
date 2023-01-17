import React, { useEffect, useState } from 'react';
import { Scheduler } from '@aldabil/react-scheduler';
const Calendar = () => {

    const fetchRemote = async => () => {
    }
 
    const handleConfirm = async => (event, action) => {
        if (action == "edit") {
            /* PUT event to remote DB */
        } else if (action == "create") {
            /* POST event to remote DB */
        }

        return new Promise((res, rej) => {
            
        })
    }

    const handleDelete = async => (deletedId) => {
        return new Promise((res, rej) => {
            setTimeout(() => {
                res(deletedId)
            }, 3000)
        }) 
    }

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
