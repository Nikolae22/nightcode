import { ThemeDialogContent } from "../dialogs";
import type { Command } from "./types";

export const COMMANDS: Command[] = [
  {
    name: "new",
    description: "Start a new conversation",
    value: "/new",
    action: (ctx) => {
      ctx.toast.show({ message: "Startingn new conversation" });
    },
  },
  {
    name: "agents",
    description: "Switch agents",
    value: "/agents",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Mode",
        children: <text>Agent slection coming soon</text>,
      });
    },
  },
  {
    name: "models",
    description: "Select AI model for generation",
    value: "/models",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select model",
        children: <text>Model selection coming soon...</text>,
      });
    },
  },
  {
    name: "sessions",
    description: "Browse past sessions",
    value: "/sessions",
    action: (ctx) => {
      ctx.toast.show({ message: "Loading session" });
    },
  },
  {
    name: "theme",
    description: "Change color theme",
    value: "/theme",
    action: (ctx) => {
      ctx.dialog.open({
        title: "Select Theme",
        children: <ThemeDialogContent />,
      });
    },
  },
  {
    name: "login",
    description: "Sign in your browser",
    value: "/login",
    action: (ctx) => {
      ctx.toast.show({ message: "Opening browser to sign in" });
    },
  },
  {
    name: "logout",
    description: "Sign out of your account",
    value: "/logout",
    action: (ctx) => {
      ctx.toast.show({ message: "Signed out" });
    },
  },
  {
    name: "upgrade",
    description: "Buy more credis",
    value: "/upgrade",
    action: (ctx) => {
      ctx.toast.show({ message: "Opening credits checkout" });
    },
  },
  {
    name: "usage",
    description: "Open a billing portal in ypur browser",
    value: "/usage",
    action: (ctx) => {
      ctx.toast.show({ message: "Opening billing portal" });
    },
  },
  {
    name: "exit",
    description: "Quit the application",
    value: "/exit",
    action: (ctx) => {
      ctx.exit();
    },
  },
];
