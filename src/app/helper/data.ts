import { User, SideMenu } from "../model";

const AdmissionSubData: Array<SideMenu> = [
    {
        id: 1,
        name: "Enrollment",
        route: "/enrollment",
        roleId: 1,
        isSubmenu: false,
        parentId: 2,
        image: "list"
    },
    {
        id: 2,
        name: "Import",
        route: "/import",
        roleId: 1,
        isSubmenu: false,
        parentId: 2,
        image: "file_upload"
    },
    {
        id: 3,
        name: "Selection",
        route: "/selection",
        roleId: 1,
        isSubmenu: false,
        parentId: 2,
        image: "thumb_up"
    },
    {
        id: 4,
        name: "Rejection",
        route: "/rejection",
        roleId: 1,
        isSubmenu: false,
        parentId: 2,
        image: "thumb_down"
    }
];

const StudentSubData: Array<SideMenu> = [
    {
        id: 1,
        name: "Details",
        route: "/enrollment",
        roleId: 1,
        isSubmenu: false,
        parentId: 3,
        image: "list"
    },
    {
        id: 2,
        name: "Id Card",
        route: "/import",
        roleId: 1,
        isSubmenu: false,
        parentId: 3,
        image: "file_upload"
    }
];

const AttendanceSubData: Array<SideMenu> = [
    {
        id: 1,
        name: "Student",
        route: "/enrollment",
        roleId: 1,
        isSubmenu: false,
        parentId: 4,
        image: "list"
    },
    {
        id: 2,
        name: "Staff",
        route: "/import",
        roleId: 1,
        isSubmenu: false,
        parentId: 4,
        image: "file_upload"
    }
];

const TimetableSubData: Array<SideMenu> = [
    {
        id: 1,
        name: "Create",
        route: "/enrollment",
        roleId: 1,
        isSubmenu: false,
        parentId: 5,
        image: "list"
    },
    {
        id: 2,
        name: "View",
        route: "/import",
        roleId: 1,
        isSubmenu: false,
        parentId: 5,
        image: "file_upload"
    }
];

const ExaminationSubData: Array<SideMenu> = [
    {
        id: 1,
        name: "Attendance",
        route: "/enrollment",
        roleId: 1,
        isSubmenu: false,
        parentId: 6,
        image: "list"
    },
    {
        id: 2,
        name: "Assign Marks",
        route: "/import",
        roleId: 1,
        isSubmenu: false,
        parentId: 6,
        image: "file_upload"
    },
    {
        id: 2,
        name: "Results",
        route: "/import",
        roleId: 1,
        isSubmenu: false,
        parentId: 6,
        image: "file_upload"
    },
    {
        id: 2,
        name: "Promote Student",
        route: "/import",
        roleId: 1,
        isSubmenu: false,
        parentId: 6,
        image: "file_upload"
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
        imageUrl: "assets/img.jpg",
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
        imageUrl: "assets/img.jpg",
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
        imageUrl: "assets/img.jpg",
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
        imageUrl: "assets/img.jpg",
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
        subMenu: AdmissionSubData,
        image: "assignment"
    },
    {
        id: 3,
        name: "Student",
        route: "/student",
        roleId: 1,
        isSubmenu: true,
        parentId: null,
        subMenu: StudentSubData,
        image: "person"
    },
    {
        id: 4,
        name: "Attendance",
        route: "/attendance",
        roleId: 1,
        isSubmenu: true,
        subMenu: AttendanceSubData,
        parentId: null,
        image: "edit"
    },
    {
        id: 5,
        name: "Timetable",
        route: "/timetable",
        roleId: 1,
        isSubmenu: true,
        subMenu: TimetableSubData,
        parentId: null,
        image: "date_range"
    },
    {
        id: 6,
        name: "Examination",
        route: "/examination",
        roleId: 1,
        isSubmenu: true,
        subMenu: ExaminationSubData,
        parentId: null,
        image: "assessment"
    },
    {
        id: 7,
        name: "Finance",
        route: "/finance",
        roleId: 1,
        isSubmenu: false,
        parentId: null,
        image: "account_balance"
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
        roleId: 2,
        isSubmenu: false,
        parentId: null,
        image: "link"
    },
    {
        id: 12,
        name: "Fee",
        route: "/fee",
        roleId: 3,
        isSubmenu: false,
        parentId: null,
        image: "attach_money"
    },
    {
        id: 13,
        name: "Library",
        route: "/library",
        roleId: 4,
        isSubmenu: false,
        parentId: null,
        image: "library_books"
    },
    {
        id: 14,
        name: "Complaints",
        route: "/complain",
        roleId: 3,
        isSubmenu: false,
        parentId: null,
        image: "report_problem"
    },
];
