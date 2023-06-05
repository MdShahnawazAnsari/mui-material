"use client";
const topic = [
  "accordion",
  "alert",
  "autocomplete",
  "avatar",
  "badge",
  "bottomnavigation",
  "breadcrumbs",
  "button",
  "card",
  "checkbox",
  "chip",
  "dialog",
  "drawer",
  "imagelist",
  "layout",
  "link",
  "list",
  "loadingbutton",
  "masonry",
  "navbar",
  "progress",
  "radiobutton",
  "rating",
  "select",
  "skeleton",
  "snackbar",
  "speeddial",
  "switch",
  "table",
  "tabs",
  "textfield",
  "timeline",
  "tooltip",
  "typography",
];
import { Stack, Box, Paper } from "@mui/material";
import Link from "next/link";
export default function Home() {
  return (
    <main>
      <Box
        display="flex"
        justifyContent="center"
        flexWrap="wrap"
        gap="20px"
        mt={2}
        py={4}
      >
        {topic.map((item, index) => (
          <Paper
            key={index}
            elevation={2}
            sx={{ px: "20px", py: "15px", fontSize: "20px" }}
          >
            <Link
              style={{ textDecoration: "none", width: "100%", height: "100%" }}
              href={`/${item}`}
            >
              {item}
            </Link>
          </Paper>
        ))}
      </Box>
    </main>
  );
}
