import { style } from "@angular/animations";
import { Component } from "@angular/core";
import { DTEmplyees } from "./team";

@Component({
    selector: 'team-page',
    templateUrl: './team.component.html',
    styleUrls: ['./team.component.css']
})

export class TeamComponent{
pageTitle: string = 'MEET OUR TEAM';
imageWidth: number = 150;
imageMargin: number = 150;
employees:  DTEmplyees[] = [
    {
        
        "employeeName": "Mlungisi Mpofu",
        "department": "Software Department",
        "position": "CEO(Chief Executive Officer)",
        "experience": 5,
        "Status": "Active",
        "imageUrl": "assets/images/ceo.jpg",
        
    },
    {
        
        "employeeName": "Markos Zulu",
        "department": "Software Department",
        "position": "Director",
        "experience": 7,
        "Status": "Active",
        "imageUrl": "assets/images/director.jpg",
    },
    {
        
        "employeeName": "Mlungisi Mpofu",
        "department": "Software Department",
        "position": "Manager",
        "experience": 2,
        "Status": "Active",
        "imageUrl": "assets/images/manager.jpg",
    },
    {
        
        "employeeName": "Mlungisi Mpofu",
        "department": "Software Department",
        "position": "Software Dev",
        "experience": 3,
        "Status": "Active",
        "imageUrl": "assets/images/developer.jpg",
    },
]

}