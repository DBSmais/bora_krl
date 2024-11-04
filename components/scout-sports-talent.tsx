'use client'

import { useState, useEffect } from "react"
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
import { Crosshair, Flag, Trophy, Users, Target, Calendar, ArrowLeft } from "lucide-react"

type Player = {
  id: number
  name: string
  fullName: string
  country: string
  team: string
  rating: string
  achievements: string
  image: string
  age: number
  position: string
  joinDate: string
  marketValue: string
}

type Sport = "football" | "basketball"

const players: Record<Sport, Player[]> = {
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
    {
      id: 3,
      name: "Erling Haaland",
      fullName: "Erling Braut Haaland",
      country: "Norway",
      team: "Manchester City",
      rating: "92",
      achievements: "Champions League Top Scorer",
      image: "/placeholder.svg",
      age: 23,
      position: "Striker",
      joinDate: "2022-07-01",
      marketValue: "€170 million",
    },
    {
      id: 4,
      name: "Kevin De Bruyne",
      fullName: "Kevin De Bruyne",
      country: "Belgium",
      team: "Manchester City",
      rating: "91",
      achievements: "PFA Player of the Year",
      image: "/placeholder.svg",
      age: 32,
      position: "Midfielder",
      joinDate: "2015-08-30",
      marketValue: "€80 million",
    },
    {
      id: 5,
      name: "Virgil van Dijk",
      fullName: "Virgil van Dijk",
      country: "Netherlands",
      team: "Liverpool",
      rating: "90",
      achievements: "UEFA Men's Player of the Year",
      image: "/placeholder.svg",
      age: 32,
      position: "Defender",
      joinDate: "2018-01-01",
      marketValue: "€50 million",
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
    {
      id: 3,
      name: "Stephen Curry",
      fullName: "Wardell Stephen Curry II",
      country: "USA",
      team: "Golden State Warriors",
      rating: "96",
      achievements: "4x NBA Champion, 2x MVP",
      image: "/placeholder.svg",
      age: 35,
      position: "Point Guard",
      joinDate: "2009-06-25",
      marketValue: "$160 million (estimated net worth)",
    },
    {
      id: 4,
      name: "Kevin Durant",
      fullName: "Kevin Wayne Durant",
      country: "USA",
      team: "Phoenix Suns",
      rating: "96",
      achievements: "2x NBA Champion, 2x Finals MVP",
      image: "/placeholder.svg",
      age: 34,
      position: "Small Forward",
      joinDate: "2023-02-09",
      marketValue: "$200 million (estimated net worth)",
    },
    {
      id: 5,
      name: "Nikola Jokic",
      fullName: "Nikola Jokić",
      country: "Serbia",
      team: "Denver Nuggets",
      rating: "98",
      achievements: "2x NBA MVP, NBA Champion",
      image: "/placeholder.svg",
      age: 28,
      position: "Center",
      joinDate: "2015-06-26",
      marketValue: "$50 million (estimated annual earnings)",
    },
  ],
}

export default function ScoutSportsTalent() {
  const [selectedSport, setSelectedSport] = useState<Sport | null>(null)

  const handleReturn = () => {
    setSelectedSport(null)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      <div className="absolute inset-0 bg-[url('/nike-pattern.png')] opacity-10 z-0"></div>
      <div className="relative z-10">
        <header className="bg-black bg-opacity-50 text-white p-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Scout Sports Talent</h1>
          {selectedSport && (
            <Button 
              variant="outline" 
              onClick={handleReturn} 
              className="flex items-center bg-gray-700 text-white hover:bg-gray-600 border-gray-600"
            >
              <ArrowLeft className="mr-2 h-4 w-4" /> Voltar
            </Button>
          )}
        </header>
        <main className="container mx-auto py-8">
          {!selectedSport ? (
            <div className="flex flex-col items-center justify-center min-h-[80vh]">
              <h2 className="text-3xl font-bold mb-8">Escolha um esporte</h2>
              <div className="flex gap-8">
                <Button
                  onClick={() => setSelectedSport("football")}
                  className="w-48 h-48 p-4 flex flex-col items-center justify-center text-xl bg-opacity-80 hover:bg-opacity-100 transition-all"
                >
                  <Image src="/football-icon.png" alt="Futebol" width={96} height={96} className="mb-4" />
                  Futebol
                </Button>
                <Button
                  onClick={() => setSelectedSport("basketball")}
                  className="w-48 h-48 p-4 flex flex-col items-center justify-center text-xl bg-opacity-80 hover:bg-opacity-100 transition-all"
                >
                  <Image src="/basketball-icon.png" alt="Basquete" width={96} height={96} className="mb-4" />
                  Basquete
                </Button>
              </div>
            </div>
          ) : (
            <>
              <h2 className="text-2xl font-bold text-center mb-8">Jogadores de {selectedSport === "football" ? "Futebol" : "Basquete"}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {players[selectedSport].map((player: Player) => (
                  <Card key={player.id} className="bg-white bg-opacity-10 text-white overflow-hidden">
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
                              className="p-0 h-auto font-bold text-lg text-white"
                            >
                              {player.name}
                            </Button>
                          </DialogTrigger>
                          <DialogContent className="bg-gray-800 text-white">
                            <DialogHeader>
                              <DialogTitle>{player.name}</DialogTitle>
                              <DialogDescription className="text-gray-300">{player.fullName}</DialogDescription>
                            </DialogHeader>
                            <div className="grid gap-4 py-4">
                              <div className="flex items-center gap-4">
                                <Avatar className="w-20 h-20">
                                  <AvatarImage src={player.image} alt={player.name} />
                                  <AvatarFallback>{player.name.substring(0, 2)}</AvatarFallback>
                                </Avatar>
                                <div>
                                  <p className="font-semibold">{player.team}</p>
                                  <p className="text-sm text-gray-300">{player.country}</p>
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
                          <Badge variant="secondary" className="bg-opacity-50">{player.team}</Badge>
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
            </>
          )}
        </main>
        <footer className="bg-black bg-opacity-50 text-white p-4 mt-8">
          <p className="text-center">&copy; 2024 Scout Sports Talent. Todos os direitos reservados.</p>
        </footer>
      </div>
    </div>
  )
}