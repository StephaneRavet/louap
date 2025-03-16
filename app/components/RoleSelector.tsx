"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

const DEFAULT_ROLES = [
  { id: "loup", name: "Loup-Garou", min: 1 },
  { id: "villageois", name: "Villageois", min: 1 },
  { id: "voyante", name: "Voyante", min: 0 },
  { id: "sorciere", name: "Sorcière", min: 0 },
  { id: "chasseur", name: "Chasseur", min: 0 },
  { id: "cupidon", name: "Cupidon", min: 0 },
];

export default function RoleSelector() {
  const [selectedRoles, setSelectedRoles] = useState<{ [key: string]: number }>(
    Object.fromEntries(DEFAULT_ROLES.map(role => [role.id, role.min]))
  );

  const updateRoleCount = (roleId: string, increment: number) => {
    setSelectedRoles(prev => ({
      ...prev,
      [roleId]: Math.max(DEFAULT_ROLES.find(r => r.id === roleId)?.min || 0, (prev[roleId] || 0) + increment)
    }));
  };

  return (
    <Card className="w-full max-w-md mx-auto mt-4">
      <CardHeader>
        <CardTitle>Sélection des rôles</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {DEFAULT_ROLES.map((role) => (
            <div key={role.id} className="flex items-center justify-between">
              <span>{role.name}</span>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateRoleCount(role.id, -1)}
                >
                  -
                </Button>
                <span className="w-8 text-center">{selectedRoles[role.id]}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => updateRoleCount(role.id, 1)}
                >
                  +
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
} 