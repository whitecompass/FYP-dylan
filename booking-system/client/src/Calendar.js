import { React, useState } from 'react';
import { parseISO } from 'date-fns';
import { Scheduler } from '@aldabil/react-scheduler';

import DialogPopup from './DialogPopup'

const GROUP_COLORS = ["#FF5733", "#17A2B8", "#FFC107", "#28A745", "#6C757D", "#6F42C1", "#20C997", "#E83E8C", "#007BFF", "#DC3545", "#FD7E14", "#6610F2", "#155724", "#D62020", "#1E90FF", "#FFC300"]

const BACKEND_URL = 'http://localhost:5000'

const Calendar = () => {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [dialogMessage, setDialogMessage] = useState("");
    const [dialogTitle, setDialogTitle] = useState("");

    const handleDialogOpen = () => {
        setDialogOpen(true)
    }

    const handleDialogClose = () => {
        setDialogOpen(false)
    }

    const handleMessage = (my_message) => {
        setDialogMessage(my_message)
    }

    const handleTitle = (my_title) => {
        setDialogTitle(my_title)
    }

    const fetchRemote = async () => {
        try {
            const res = await fetch(`${BACKEND_URL}/calendar_data`);
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
            let event_color;

            const user_group = localStorage.getItem("group")
            const user_role = localStorage.getItem("role")

            if (action === "edit") {
                // Check if user has edit permissions
                if (user_group === event.grp_id ||
                    user_role === "admin") {
                    url = `${BACKEND_URL}/calendar_data/${event.event_id}`;
                    method = "PUT";
                } else {
                    handleDialogOpen()
                    handleTitle("You do not have the relevant permissions")
                    handleMessage("Not from the correct group/Not an admin")
                    return null;
                }
            } else if (action === "create") {
                url = `${BACKEND_URL}/calendar_data/`;
                method = "POST";
                event_color = GROUP_COLORS[user_group]
            } else {
                return null;
            }
            
            if (event_color) {
                event = {
                    ...event,
                    color: {event_color}
                }
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
            console.error("Error:", err);
        }
    }

    const handleDelete = async (deletedId) => {
        try {
            const res = await fetch(`${BACKEND_URL}/calendar_data/${deletedId}`, {
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

            <DialogPopup
                open={dialogOpen}
                title={dialogTitle}
                message={dialogMessage}
                handleClose={handleDialogClose}
            />
        </div>
    )
}

export default Calendar;
