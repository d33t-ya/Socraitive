'use client';
import React, { useState } from 'react';

import { motion } from 'motion/react';
import { mockClinics } from '../constants/clinics';
import { SparklesEffect } from '@/components/ui/sparkles-effect';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import {
  MapPin,
  PhoneCall,
  Globe,
  Search,
  Filter,
  ChevronDown,
  Star,
  ExternalLink,
  MapIcon,
  ListFilter,
  LayoutGrid,
  Map,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export const Clinics = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterOpen, setFilterOpen] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'map'>('grid');
  const [selectedClinic, setSelectedClinic] = useState<number | null>(null);
  const [filterSpecialty, setFilterSpecialty] = useState<string | null>(null);

  const handleClinicClick = (id: number) => {
    setSelectedClinic(id === selectedClinic ? null : id);
  };

  // Combine all specialties from all clinics into a unique set
  const allSpecialties = Array.from(new Set(mockClinics.flatMap((clinic) => clinic.specialties))).sort();

  const filteredClinics = mockClinics.filter((clinic) => {
    const matchesSearch =
      clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      clinic.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSpecialty = filterSpecialty ? clinic.specialties.includes(filterSpecialty) : true;

    return matchesSearch && matchesSpecialty;
  });

  return (
    <div className="relative space-y-6">
      <div className="absolute inset-0 -z-10">
        <SparklesEffect />
      </div>

      {/* Page header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col justify-between gap-4 md:flex-row md:items-center"
      >
        <div>
          <h1 className="text-2xl font-bold">Nearby Clinics</h1>
          <p className="mt-1 text-zinc-400">Find professional therapists and support groups in your area</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-400" />
            <Input
              type="text"
              placeholder="Search clinics or specialties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full border-zinc-700 bg-zinc-800 pl-10 text-white placeholder-zinc-400 focus-visible:border-[#4CAF50] focus-visible:ring-[#4CAF50]/20 focus-visible:ring-offset-0"
            />
          </div>
          <div className="relative">
            <Button
              variant="outline"
              className="flex w-full items-center justify-center border-zinc-700 bg-zinc-800 text-white hover:bg-zinc-700 hover:text-white sm:w-auto"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </Button>

            {filterOpen && (
              <div className="absolute right-0 z-10 mt-2 w-64 rounded-md border border-zinc-700 bg-zinc-800 p-4 shadow-lg">
                <div className="space-y-3">
                  <p className="text-sm font-medium">Filter by specialty</p>
                  <div className="flex max-h-40 flex-col gap-2 overflow-y-auto">
                    <Button
                      variant={filterSpecialty === null ? 'accent' : 'ghost'}
                      size="sm"
                      className={`justify-start rounded-md px-3 py-1.5 text-left text-sm ${
                        filterSpecialty === null
                          ? 'bg-[#4CAF50] text-white'
                          : 'bg-transparent text-white hover:bg-zinc-700'
                      }`}
                      onClick={() => setFilterSpecialty(null)}
                    >
                      All Specialties
                    </Button>
                    {allSpecialties.map((specialty) => (
                      <Button
                        key={specialty}
                        variant={filterSpecialty === specialty ? 'accent' : 'ghost'}
                        size="sm"
                        className={`justify-start rounded-md px-3 py-1.5 text-left text-sm ${
                          filterSpecialty === specialty
                            ? 'bg-[#4CAF50] text-white'
                            : 'bg-transparent text-white hover:bg-zinc-700'
                        }`}
                        onClick={() => setFilterSpecialty(specialty)}
                      >
                        {specialty}
                      </Button>
                    ))}
                  </div>

                  <p className="text-sm font-medium">Distance</p>
                  <div className="flex gap-2">
                    <Select>
                      <SelectTrigger className="w-full border-zinc-700 bg-zinc-900 text-white">
                        <SelectValue placeholder="Any distance" />
                      </SelectTrigger>
                      <SelectContent className="border-zinc-700 bg-zinc-800 text-white">
                        <SelectItem value="any">Any distance</SelectItem>
                        <SelectItem value="1">Within 1 mile</SelectItem>
                        <SelectItem value="5">Within 5 miles</SelectItem>
                        <SelectItem value="10">Within 10 miles</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <Button variant="accent" className="w-full">
                    Apply Filters
                  </Button>
                </div>
              </div>
            )}
          </div>

          <div className="flex rounded-md border border-zinc-700 bg-zinc-800 p-1">
            <Button
              variant="ghost"
              size="sm"
              className={`flex-1 ${
                viewMode === 'grid'
                  ? 'bg-[#4CAF50] text-white hover:bg-[#4CAF50] hover:text-white'
                  : 'bg-transparent text-zinc-400 hover:bg-zinc-700 hover:text-white'
              }`}
              onClick={() => setViewMode('grid')}
            >
              <LayoutGrid className="mr-1 h-4 w-4" />
              Grid
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className={`flex-1 ${
                viewMode === 'map'
                  ? 'bg-[#4CAF50] text-white hover:bg-[#4CAF50] hover:text-white'
                  : 'bg-transparent text-zinc-400 hover:bg-zinc-700 hover:text-white'
              }`}
              onClick={() => setViewMode('map')}
            >
              <Map className="mr-1 h-4 w-4" />
              Map
            </Button>
          </div>
        </div>
      </motion.div>

      {/* View mode: Grid */}
      {viewMode === 'grid' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {filteredClinics.length > 0 ? (
            filteredClinics.map((clinic) => (
              <motion.div
                key={clinic.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * clinic.id }}
              >
                <Card className="h-full overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm transition-colors hover:border-[#4CAF50]/50">
                  <div className="relative h-40 w-full bg-gradient-to-r from-zinc-800 to-zinc-900">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <MapPin className="h-10 w-10 text-[#4CAF50]/50" />
                    </div>
                    <div className="absolute right-4 top-4">
                      <Badge variant="outline" className="bg-[#4CAF50]/10 text-[#4CAF50]">
                        {clinic.distance} miles away
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{clinic.name}</CardTitle>
                        <div className="mt-1 flex items-center text-sm text-zinc-400">
                          <Star className="mr-1 h-4 w-4 text-yellow-500" />
                          <span>
                            {clinic.rating} ({clinic.reviews} reviews)
                          </span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="h-8 w-8 border-zinc-700 bg-zinc-800 p-0 hover:border-[#4CAF50] hover:bg-[#4CAF50]/10"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleClinicClick(clinic.id);
                        }}
                      >
                        {selectedClinic === clinic.id ? (
                          <ChevronDown className="h-4 w-4" />
                        ) : (
                          <ChevronDown className="h-4 w-4" />
                        )}
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-sm text-zinc-400">{clinic.description}</p>

                    <div className="flex flex-wrap gap-1">
                      {clinic.specialties.slice(0, 3).map((specialty, i) => (
                        <Badge key={i} variant="outline" className="border-zinc-700 bg-zinc-800 text-zinc-300">
                          {specialty}
                        </Badge>
                      ))}
                      {clinic.specialties.length > 3 && (
                        <Badge variant="outline" className="border-zinc-700 bg-zinc-800 text-zinc-300">
                          +{clinic.specialties.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="space-y-2 text-sm">
                      <div className="flex items-center gap-2 text-zinc-400">
                        <MapPin className="h-3.5 w-3.5" />
                        <span>{clinic.address}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <PhoneCall className="h-3.5 w-3.5" />
                        <span>{clinic.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-400">
                        <Globe className="h-3.5 w-3.5" />
                        <span>{clinic.website}</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between border-t border-zinc-800 px-6 py-4">
                    <Button variant="ghost" size="sm" className="text-[#4CAF50]">
                      <PhoneCall className="mr-1 h-4 w-4" /> Call
                    </Button>
                    <Button variant="ghost" size="sm" className="text-[#4CAF50]">
                      <Globe className="mr-1 h-4 w-4" /> Website
                    </Button>
                    <Button variant="ghost" size="sm" className="text-[#4CAF50]">
                      <ExternalLink className="mr-1 h-4 w-4" /> Directions
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex h-60 flex-col items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/30 p-6 text-center">
              <MapPin className="mb-4 h-12 w-12 text-zinc-700" />
              <h3 className="mb-1 text-xl font-medium">No clinics found</h3>
              <p className="text-zinc-400">Try adjusting your search filters or expanding your search radius</p>
            </div>
          )}
        </motion.div>
      )}

      {/* View mode: Map */}
      {viewMode === 'map' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="relative h-[500px] overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-zinc-800 to-zinc-900">
                <div className="flex flex-col items-center">
                  <MapIcon className="mb-4 h-16 w-16 text-zinc-700" />
                  <p className="text-center text-zinc-400">
                    Map view would display an interactive map with clinic locations here
                  </p>
                  <Button variant="accent" className="mt-4">
                    Enable Location Services
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4 md:col-span-1">
            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-lg">Selected Clinic</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {selectedClinic ? (
                  <div className="space-y-4">
                    <div className="flex flex-col">
                      <h3 className="font-medium">{mockClinics.find((c) => c.id === selectedClinic)?.name}</h3>
                      <div className="mt-1 flex items-center text-sm text-zinc-400">
                        <Star className="mr-1 h-4 w-4 text-yellow-500" />
                        <span>
                          {mockClinics.find((c) => c.id === selectedClinic)?.rating}(
                          {mockClinics.find((c) => c.id === selectedClinic)?.reviews} reviews)
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-400">
                      {mockClinics.find((c) => c.id === selectedClinic)?.description}
                    </p>

                    <div className="space-y-2 rounded-md border border-zinc-800 bg-zinc-900 p-3">
                      <h4 className="font-medium">Contact Information</h4>
                      <div className="space-y-1 text-sm text-zinc-400">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-3.5 w-3.5" />
                          <span>{mockClinics.find((c) => c.id === selectedClinic)?.address}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <PhoneCall className="h-3.5 w-3.5" />
                          <span>{mockClinics.find((c) => c.id === selectedClinic)?.phone}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="flex-1 border-zinc-700 bg-zinc-800 hover:bg-zinc-700">
                        <PhoneCall className="mr-2 h-4 w-4" />
                        Call
                      </Button>
                      <Button variant="accent" className="flex-1">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Directions
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="flex h-40 flex-col items-center justify-center text-center">
                    <MapPin className="mb-2 h-8 w-8 text-zinc-600" />
                    <p className="text-zinc-400">Select a clinic on the map to view details</p>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card className="border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm">Nearby Clinics</CardTitle>
              </CardHeader>
              <CardContent className="max-h-60 space-y-2 overflow-y-auto">
                {mockClinics.slice(0, 5).map((clinic) => (
                  <Button
                    key={clinic.id}
                    variant={selectedClinic === clinic.id ? 'accent' : 'ghost'}
                    className={`w-full justify-start text-left ${
                      selectedClinic === clinic.id ? 'bg-[#4CAF50] text-white' : 'hover:bg-zinc-800'
                    }`}
                    onClick={() => setSelectedClinic(clinic.id)}
                  >
                    <div className="flex w-full items-center justify-between">
                      <span className="line-clamp-1">{clinic.name}</span>
                      <Badge
                        variant="outline"
                        className={
                          selectedClinic === clinic.id ? 'bg-white/10 text-white' : 'bg-[#4CAF50]/10 text-[#4CAF50]'
                        }
                      >
                        {clinic.distance} mi
                      </Badge>
                    </div>
                  </Button>
                ))}
              </CardContent>
            </Card>
          </div>
        </motion.div>
      )}

      {/* User location permissions notice */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <Card className="mt-6 overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <CardContent className="flex flex-col items-center justify-between gap-4 p-6 text-center md:flex-row md:text-left">
            <div className="flex items-center">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#4CAF50]/20">
                <MapPin className="h-5 w-5 text-[#4CAF50]" />
              </div>
              <div className="ml-4">
                <h3 className="font-medium">Enable Location Services</h3>
                <p className="text-sm text-zinc-400">
                  Allow access to your location to find the nearest therapy centers and support groups
                </p>
              </div>
            </div>
            <Button variant="accent">Enable Location</Button>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};
