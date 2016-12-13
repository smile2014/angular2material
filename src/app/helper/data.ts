import { Injectable } from "@angular/core";

@Injectable()
export class ApplicationDatabase {
    public UserData = [
        {
            id: 1,
            username: "kpsingh",
            password: "abc",
            firstName: "Krishna",
            middlename: "Pratap",
            lastName: "Singh",
            email: "kp@abc.com"
        },
        {
            id: 2,
            username: "kpsingh1",
            password: "abc1",
            firstName: "Krishna",
            middlename: "Pratap",
            lastName: "Singh",
            email: "kp@def.com"
        },
        {
            id: 3,
            username: "kpsingh2",
            password: "abc2",
            firstName: "Krishna",
            middlename: "Pratap",
            lastName: "Singh",
            email: "kp@ghi.com"
        },
        {
            id: 4,
            username: "kpsingh3",
            password: "abc3",
            firstName: "Krishna",
            middlename: "Pratap",
            lastName: "Singh",
            email: "kp@jkl.com"
        }
    ];

    public ProductData = [
        {
            id: 1,
            name: "Blue Ice Sculpture",
            imageName: "ice-cube.jpg",
            tags: ["ice", "cold"],
            dimensions: {
                length: 7.6,
                width: 5.0,
                height: 2.0
            },
            warehouseLocation: {
                latitude: -36.97,
                longitude: 76.0
            }
        },
        {
            id: 2,
            name: "Blue Mouse",
            imageName: "blue-mouse.jpg",
            tags: ["blue", "mouse"],
            dimensions: {
                length: 2.6,
                width: 1.0,
                height: 1.0
            },
            warehouseLocation: {
                latitude: -46.97,
                longitude: 51.0
            }
        }
    ];
}