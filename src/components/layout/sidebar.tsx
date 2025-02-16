import React, { useState } from "react";

import {
  ChevronLeftOutlined as ChevronLeftIcon,
  ChevronRightOutlined as ChevronRightIcon,
} from "@mui/icons-material";
import { Divider, Drawer, List, Toolbar } from "@mui/material";
import { useRouter, usePathname } from "next/navigation";

import { SidebarListItems } from "@/consts";

import SidebarListItem from "./sidebar-list-item";

const SIDEBAR_FULL_WIDTH = "200px";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const width = open ? SIDEBAR_FULL_WIDTH : `50px`;

  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(false);

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
