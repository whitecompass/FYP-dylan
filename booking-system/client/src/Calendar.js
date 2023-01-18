import React from 'react';
import { Scheduler } from '@aldabil/react-scheduler';

const DB_URL = 'localhost:5000'


const Calendar = () => {

    const fetchRemote = async () => {
        const events = await fetch(`${DB_URL}/calendar_data`);

        return events;
    }

    const handleConfirm = async (event, action) => {
        try {
            let url;
            let method;

            if (action == "edit") {
                url = `${DB_URL}/calendar_data/${event.event_id}`;
                method = "PUT"
            } else if (action == "create") {
                url = `${DB_URL}/calendar_data/`;
                method = "POST"
            }

            let body = JSON.stringify(event);
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json"},
                body
            });
            const data = await res.json();
            return data;

        } catch(err) {
            // should perform error handling here in future
            console.error("Error:", err);
        }
    }

    const handleDelete = async (deletedId) => {
        try {
            const res = await fetch (`${DB_URL}/calendar_data/${deletedId}`, {
                method: "DELETE"
            });
            return await res.json();
        } catch (err) {
            console.error("Error:", err)
        }
    }

    return (
        <div>
            <Scheduler
                getRemoteEvents={fetchRemote}
                onConfirm={handleConfirm}
                onDelete={handleDelete}
            />
        </div>
    )
}

export default Calendar;
