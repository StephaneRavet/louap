"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function PlayerInput() {
  const [players, setPlayers] = useState<string[]>([]);
  const [newPlayer, setNewPlayer] = useState("");

  const addPlayer = () => {
    if (newPlayer.trim()) {
      setPlayers([...players, newPlayer.trim()]);
      setNewPlayer("");
    }
  };

  const removePlayer = (index: number) => {
    setPlayers(players.filter((_, i) => i !== index));
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Participants au jeu</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 mb-4">
          <Input
            placeholder="Nom du joueur"
            value={newPlayer}
            onChange={(e) => setNewPlayer(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addPlayer()}
          />
          <Button onClick={addPlayer}>Ajouter</Button>
        </div>

        <div className="space-y-2">
          {players.map((player, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-secondary rounded">
              <span>{player}</span>
              <Button variant="ghost" size="sm" onClick={() => removePlayer(index)}>
                ✕
              </Button>
            </div>
          ))}
        </div>

        {players.length > 0 && (
          <Button className="w-full mt-4" variant="default">
            Attribuer les rôles ({players.length} joueurs)
          </Button>
        )}
      </CardContent>
    </Card>
  );
} 