export class SideMenu {
    id: number;
    name: string;
    route: string;
    roleId: number;
    parentId?: number;
    subMenu?: Array<SideMenu>;
    isSubmenu:boolean;
    image?: string;
    imageUrl?:string;
}