import { Component } from '@angular/core'

@Component ({
    selector: "events-list",
    template: `
        <div>
            <h1>Upcoming Angular Events</h1>
            <hr>
            <event-thumbnail [event]="event1"></event-thumbnail>
        </div>
    ` 
})

export class EventsListComponent {
    event1 = {
        id: 1,
        name: 'Angular Connect',
        date: '12/12/2017',
        time: '10:00am',
        price: 500.99,
        imageUrl: '/app/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'UK'
        }
    }
}

