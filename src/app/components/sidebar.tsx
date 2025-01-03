import React from "react";

import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
} from "@mui/icons-material";
import { Divider, Drawer, List, Toolbar } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

import { SidebarListItems } from "../consts";

import SidebarListItem from "./sidebar-list/sidebar-list-item";

interface Props {
  width: string;
  open?: boolean;
  onClose: () => void;
  onOpen: () => void;
}

export default function Sidebar({
  open,
  width,
  onClose,
  onOpen,
}: Readonly<Props>) {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <Drawer
      variant="permanent"
      sx={{
        width,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: width,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <List disablePadding sx={{ width: "100%" }}>
        <SidebarListItem
          shrink={!open}
          icon={open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          onClick={() => (open ? onClose() : onOpen())}
        />
      </List>
      <Divider />
      <List disablePadding sx={{ width: "100%" }}>
        {SidebarListItems.map((item) => (
          <SidebarListItem
            key={item.text}
            shrink={!open}
            icon={item.icon}
            text={item.text}
            onClick={() => router.push(item.url)}
            selected={item.url === pathname}
          />
        ))}
      </List>
    </Drawer>
  );
}
