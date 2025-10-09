import React from "react";

export enum Status {
  Active = "active",
  NotActive = "notActive",
  Pending = "pending",
  Suspended = "suspended",
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

export default function StatusLabel({ children, status }: StatusLabelProps) {
  return <span>{children}</span>;
}
