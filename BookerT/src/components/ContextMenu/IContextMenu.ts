interface MenuOption {
    label: string;
    action: () => void;
  }
  
export  interface IContextMenu {
    options: MenuOption[];
    children: React.ReactNode;
  }
  