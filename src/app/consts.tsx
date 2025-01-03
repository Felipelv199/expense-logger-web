import { AttachMoneyOutlined as AttachMoneyIcon, HomeOutlined as HomeIcon } from "@mui/icons-material";

export const SidebarListItems = [
  {
    text: "Home",
    icon: <HomeIcon />,
    url: "/",
  },
  {
    text: "Transactions",
    icon: <AttachMoneyIcon />,
    url: "/transactions",
  },
];
