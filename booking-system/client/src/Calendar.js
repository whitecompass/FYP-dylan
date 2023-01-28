import React from 'react';
import { parseISO } from 'date-fns';
import { Scheduler } from '@aldabil/react-scheduler';

const DB_URL = 'http://localhost:5000'


const Calendar = () => {
    const fetchRemote = async () => {
        try {
            const res = await fetch(`${DB_URL}/calendar_data`);
            const events = await res.json();
            console.log("Events", events);

            const parsedEvents = events.map(event => {
                return {
                    ...event,
                    start: parseISO(event.start),
                    end: parseISO(event.end)
                }
            })

            return parsedEvents;
        } catch (err) {
            console.log('Error:', err);
        }

    }

    const handleConfirm = async (event, action) => {
        try {
            let url;
            let method;

            // TODO:
            // 1. add permission checks (only grp members/admins can edit)
            if (action === "edit") {
                url = `${DB_URL}/calendar_data/${event.event_id}`;
                method = "PUT"

                // TODO:
                // 1. add limit checks (2h blocks/week/grp)
                // 2. change color based on grp
                // 
            } else if (action === "create") {
                url = `${DB_URL}/calendar_data/`;
                method = "POST"
            }

            let body = JSON.stringify(event);
            const res = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body
            });
            const data = await res.json();
            return data;

        } catch (err) {
            // should perform error handling here in future
            console.error("Error:", err);
        }
    }

    const handleDelete = async (deletedId) => {
        try {
            const res = await fetch(`${DB_URL}/calendar_data/${deletedId}`, {
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
