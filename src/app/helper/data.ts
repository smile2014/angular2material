import { User, SideMenu } from "../model";

const SubsidenavData: Array<SideMenu> = [
    {
        id: 1,
        name: "Enrollment",
        route: "/dashboard",
        roleId: 1,
        isSubmenu: false,
        parentId: 2,
    },
    {
        id: 2,
        name: "Import",
        route: "/dashboard",
        roleId: 1,
        isSubmenu: false,
        parentId: 2,
        image: "file_upload"
    },
    {
        id: 3,
        name: "Selection",
        route: "/dashboard",
        roleId: 1,
        isSubmenu: false,
        parentId: 2,
        image: "thumb_up"
    },
    {
        id: 4,
        name: "Rejection",
        route: "/dashboard",
        roleId: 1,
        isSubmenu: false,
        parentId: 2,
        image: "thumb_down"
    }
];

export const UserData: Array<User> = [
    {
        id: 1,
        username: "kpsingh",
        password: "abc",
        firstName: "Krishna",
        middleName: "Pratap",
        lastName: "Singh",
        email: "kp@abc.com",
        roleId: 1
    },
    {
        id: 2,
        username: "kpsingh1",
        password: "abc1",
        firstName: "Krishna",
        middleName: "Pratap",
        lastName: "Singh",
        email: "kp@def.com",
        roleId: 2
    },
    {
        id: 3,
        username: "kpsingh2",
        password: "abc2",
        firstName: "Krishna",
        middleName: "Pratap",
        lastName: "Singh",
        email: "kp@ghi.com",
        roleId: 3
    },
    {
        id: 4,
        username: "kpsingh3",
        password: "abc3",
        firstName: "Krishna",
        middleName: "Pratap",
        lastName: "Singh",
        email: "kp@jkl.com",
        roleId: 4
    }
];

export const SidenavData: Array<SideMenu> = [
    {
        id: 1,
        name: "Dashboard",
        route: "/dashboard",
        roleId: 1,
        parentId: null,
        isSubmenu: false,
        image: 'dashboard'
    },
    {
        id: 2,
        name: "Admission",
        route: "/admission",
        roleId: 1,
        parentId: null,
        isSubmenu: true,
        subMenu: SubsidenavData,
        image: "assignment"
    },
    {
        id: 3,
        name: "Student",
        route: "/student",
        roleId: 1,
        isSubmenu: false,
        parentId: null,
        image: "person"
    },
    {
        id: 4,
        name: "Attendance",
        route: "/attendance",
        roleId: 1,
        isSubmenu: false,
        parentId: null
    },
    {
        id: 5,
        name: "Timetable",
        route: "/timetable",
        roleId: 1,
        isSubmenu: false,
        parentId: null,
        image: "date_range"
    },
    {
        id: 6,
        name: "Examination",
        route: "/examination",
        roleId: 1,
        isSubmenu: false,
        parentId: null
    },
    {
        id: 7,
        name: "Finance",
        route: "/finance",
        roleId: 1,
        isSubmenu: false,
        parentId: null
    },
    {
        id: 8,
        name: "HR",
        route: "/hr",
        roleId: 1,
        isSubmenu: false,
        parentId: null,
        image: "people"
    },
    {
        id: 9,
        name: "Utilities",
        route: "/utility",
        roleId: 1,
        isSubmenu: false,
        parentId: null,
        image: "settings_applications"
    },
    {
        id: 10,
        name: "Reports",
        route: "/report",
        roleId: 1,
        isSubmenu: false,
        parentId: null,
        image: "receipt"
    },
    {
        id: 11,
        name: "Links",
        route: "/link",
        roleId: 1,
        isSubmenu: false,
        parentId: null,
        image: "link"
    },
    {
        id: 12,
        name: "Fee",
        route: "/fee",
        roleId: 1,
        isSubmenu: false,
        parentId: null
    },
    {
        id: 13,
        name: "Library",
        route: "/library",
        roleId: 1,
        isSubmenu: false,
        parentId: null,
        image: "library_books"
    },
    {
        id: 14,
        name: "Complaints",
        route: "/complain",
        roleId: 1,
        isSubmenu: false,
        parentId: null,
        image: "report_problem"
    },
];
