'use client'

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Crosshair, Flag, Trophy, Users, Target, Calendar } from "lucide-react"

// Simulating data for players
const players = {
  football: [
    {
      id: 1,
      name: "Neymar Jr.",
      fullName: "Neymar da Silva Santos Júnior",
      country: "Brazil",
      team: "Al Hilal",
      rating: "89",
      achievements: "Olympic Gold Medalist",
      image: "/placeholder.svg",
      age: 31,
      position: "Forward",
      joinDate: "2023-08-15",
      marketValue: "€60 million",
    },
    {
      id: 2,
      name: "Kylian Mbappé",
      fullName: "Kylian Mbappé Lottin",
      country: "France",
      team: "Paris Saint-Germain",
      rating: "91",
      achievements: "World Cup Winner",
      image: "/placeholder.svg",
      age: 24,
      position: "Forward",
      joinDate: "2017-08-31",
      marketValue: "€180 million",
    },
  ],
  basketball: [
    {
      id: 1,
      name: "LeBron James",
      fullName: "LeBron Raymone James Sr.",
      country: "USA",
      team: "Los Angeles Lakers",
      rating: "96",
      achievements: "4x NBA Champion",
      image: "/placeholder.svg",
      age: 38,
      position: "Small Forward",
      joinDate: "2018-07-01",
      marketValue: "$1 billion (estimated net worth)",
    },
    {
      id: 2,
      name: "Giannis Antetokounmpo",
      fullName: "Giannis Sina Ugo Antetokounmpo",
      country: "Greece",
      team: "Milwaukee Bucks",
      rating: "97",
      achievements: "2x NBA MVP",
      image: "/placeholder.svg",
      age: 28,
      position: "Power Forward",
      joinDate: "2013-06-27",
      marketValue: "$70 million (estimated annual earnings)",
    },
  ],
}

type Player = typeof players.football[0] | typeof players.basketball[0]
type Sport = "football" | "basketball"

export default function ScoutSportsTalent() {
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null)

  if (!selectedSport) {
    return (
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold mb-8">Escolha um esporte</h1>
        <div className="flex gap-8">
          <Button
            onClick={() => setSelectedSport("football")}
            className="w-48 h-48 p-4 flex flex-col items-center justify-center text-xl"
          >
            <Image src="/football-icon.png" alt="Futebol" width={96} height={96} className="mb-4" />
            Futebol
          </Button>
          <Button
            onClick={() => setSelectedSport("basketball")}
            className="w-48 h-48 p-4 flex flex-col items-center justify-center text-xl"
          >
            <Image src="/basketball-icon.png" alt="Basquete" width={96} height={96} className="mb-4" />
            Basquete
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold text-center">Jogadores de {selectedSport === "football" ? "Futebol" : "Basquete"}</h1>
      </header>
      <main className="container mx-auto py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {players[selectedSport].map((player: Player) => (
            <Card key={player.id} className="overflow-hidden">
              <CardHeader className="pb-0">
                <CardTitle className="flex items-center gap-2">
                  <Avatar>
                    <AvatarImage src={player.image} alt={player.name} />
                    <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="link"
                        className="p-0 h-auto font-bold text-lg"
                      >
                        {player.name}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>{player.name}</DialogTitle>
                        <DialogDescription>{player.fullName}</DialogDescription>
                      </DialogHeader>
                      <div className="grid gap-4 py-4">
                        <div className="flex items-center gap-4">
                          <Avatar className="w-20 h-20">
                            <AvatarImage src={player.image} alt={player.name} />
                            <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{player.team}</p>
                            <p className="text-sm text-gray-500">{player.country}</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="flex items-center gap-2">
                            <Crosshair className="w-4 h-4" />
                            <span>Rating: {player.rating}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4" />
                            <span>{player.achievements}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-4 h-4" />
                            <span>Age: {player.age}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4" />
                            <span>Position: {player.position}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-4 h-4" />
                            <span>Joined: {player.joinDate}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Trophy className="w-4 h-4" />
                            <span>Value: {player.marketValue}</span>
                          </div>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center gap-2">
                    <Flag className="w-4 h-4" />
                    <span>{player.country}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary">{player.team}</Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Crosshair className="w-4 h-4" />
                    <span>Rating: {player.rating}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy className="w-4 h-4" />
                    <span>{player.achievements}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <footer className="bg-gray-800 text-white p-4 mt-8">
        <p className="text-center">&copy; 2024 Scout Sports Talent. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}