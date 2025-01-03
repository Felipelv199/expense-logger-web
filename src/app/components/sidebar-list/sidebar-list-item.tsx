import React from "react";

import {
  ListItemButton,
  ListItemIcon,
  ListItem,
  ListItemText,
  Tooltip,
} from "@mui/material";

interface Props {
  shrink?: boolean;
  icon: React.JSX.Element;
  text?: string;
  onClick: () => void;
  selected?: boolean;
}

export default function SidebarListItem({
  shrink,
  icon,
  text,
  onClick,
  selected,
}: Readonly<Props>) {
  return (
    <ListItem disablePadding sx={{ display: "flex" }}>
      <Tooltip title={shrink ? text : undefined}>
        <ListItemButton
          selected={selected}
          sx={[
            {
              minHeight: 48,
              px: 2.5,
            },
            !shrink
              ? {
                  justifyContent: "end",
                }
              : {
                  justifyContent: "center",
                },
          ]}
          onClick={onClick}
        >
          {!shrink && text && (
            <ListItemText
              primary={text}
              sx={{
                pr: 1,
              }}
            />
          )}
          <ListItemIcon
            sx={[
              {
                minWidth: 0,
                justifyContent: "center",
              },
            ]}
          >
            {icon}
          </ListItemIcon>
        </ListItemButton>
      </Tooltip>
    </ListItem>
  );
}
