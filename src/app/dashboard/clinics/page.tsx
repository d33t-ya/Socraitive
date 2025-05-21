'use client';

import React, { useState } from 'react';
import { NextPage } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AccentButton } from '@/components/custom';
import { motion } from 'motion/react';
import { MapPin, PhoneCall, Globe, Search, Filter, ChevronDown, Star, ExternalLink } from 'lucide-react';
import { SparklesEffect } from '@/components/ui/sparkles-effect';

// Mock data for nearby therapy clinics
const mockClinics = [
  {
    id: 1,
    name: 'Serenity Wellness Center',
    distance: '0.8 miles',
    address: '123 Healing Street, Anytown, CA 94110',
    phone: '(555) 123-4567',
    website: 'https://example.com/serenity',
    specialties: ['Anxiety', 'Depression', 'Trauma'],
    insuranceAccepted: ['Blue Cross', 'Aetna', 'Kaiser'],
    rating: 4.8,
    reviews: 126,
    imageUrl: 'https://placehold.co/600x300/4CAF50/FFFFFF/png?text=Serenity+Wellness',
    description:
      'A warm and welcoming space offering evidence-based therapy services for individuals, couples, and families. Our team specializes in cognitive behavioral therapy and mindfulness-based approaches.',
  },
  {
    id: 2,
    name: 'Mindful Therapy Group',
    distance: '1.2 miles',
    address: '456 Balance Avenue, Anytown, CA 94110',
    phone: '(555) 234-5678',
    website: 'https://example.com/mindful',
    specialties: ['Mindfulness', 'Relationship Issues', 'Stress Management'],
    insuranceAccepted: ['Blue Cross', 'United Healthcare', 'Cigna'],
    rating: 4.6,
    reviews: 98,
    imageUrl: 'https://placehold.co/600x300/4CAF50/FFFFFF/png?text=Mindful+Therapy',
    description:
      'Our collaborative team of therapists focuses on helping clients develop mindfulness skills while addressing a wide range of mental health concerns. We offer both in-person and virtual sessions.',
  },
  {
    id: 3,
    name: 'Harmony Counseling Services',
    distance: '1.5 miles',
    address: '789 Inner Peace Lane, Anytown, CA 94110',
    phone: '(555) 345-6789',
    website: 'https://example.com/harmony',
    specialties: ['Grief', 'Life Transitions', 'Self-Esteem'],
    insuranceAccepted: ['Medicare', 'Aetna', 'Anthem'],
    rating: 4.9,
    reviews: 203,
    imageUrl: 'https://placehold.co/600x300/4CAF50/FFFFFF/png?text=Harmony+Counseling',
    description:
      'A compassionate therapy practice dedicated to helping individuals find peace and emotional well-being. Our therapists are trained in various modalities including psychodynamic therapy and EMDR.',
  },
  {
    id: 4,
    name: 'Renewal Behavioral Health',
    distance: '2.3 miles',
    address: '101 Recovery Road, Anytown, CA 94110',
    phone: '(555) 456-7890',
    website: 'https://example.com/renewal',
    specialties: ['Addiction', 'Anxiety', 'Depression'],
    insuranceAccepted: ['Blue Shield', 'Cigna', 'Medicare'],
    rating: 4.7,
    reviews: 157,
    imageUrl: 'https://placehold.co/600x300/4CAF50/FFFFFF/png?text=Renewal+Health',
    description:
      'Specializing in addiction recovery and dual diagnosis treatment, our center offers integrated care that addresses both substance use and mental health concerns. We provide individualized treatment plans and group support.',
  },
  {
    id: 5,
    name: 'Tranquil Waters Therapy',
    distance: '2.8 miles',
    address: '222 Stillness Street, Anytown, CA 94110',
    phone: '(555) 567-8901',
    website: 'https://example.com/tranquil',
    specialties: ['PTSD', 'Trauma', 'Anxiety Disorders'],
    insuranceAccepted: ['Kaiser', 'United Healthcare', 'Blue Cross'],
    rating: 4.5,
    reviews: 89,
    imageUrl: 'https://placehold.co/600x300/4CAF50/FFFFFF/png?text=Tranquil+Waters',
    description:
      'Our practice specializes in trauma-informed care and provides a safe environment for healing. We offer somatic experiencing, EMDR, and other evidence-based trauma therapies.',
  },
  {
    id: 6,
    name: 'Insight Psychological Services',
    distance: '3.1 miles',
    address: '333 Reflection Drive, Anytown, CA 94110',
    phone: '(555) 678-9012',
    website: 'https://example.com/insight',
    specialties: ['Depression', 'Anxiety', 'Relationship Issues'],
    insuranceAccepted: ['Anthem', 'Blue Shield', 'Cigna'],
    rating: 4.4,
    reviews: 112,
    imageUrl: 'https://placehold.co/600x300/4CAF50/FFFFFF/png?text=Insight+Services',
    description:
      'Our diverse team of psychologists and therapists provides comprehensive mental health care for individuals and couples. We specialize in evidence-based approaches including CBT and acceptance and commitment therapy.',
  },
];

const NearbyClinicsPage: NextPage = () => {
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
            <input
              type="text"
              placeholder="Search clinics or specialties..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-md border border-zinc-700 bg-zinc-800 py-2 pl-10 pr-4 text-sm text-white placeholder-zinc-400 focus:border-[#4CAF50] focus:outline-none"
            />
          </div>
          <div className="relative">
            <AccentButton
              className="flex w-full items-center justify-center border border-zinc-700 bg-zinc-800 hover:bg-zinc-700 sm:w-auto"
              onClick={() => setFilterOpen(!filterOpen)}
            >
              <Filter className="mr-2 h-4 w-4" />
              Filter
              <ChevronDown className={`ml-2 h-4 w-4 transition-transform ${filterOpen ? 'rotate-180' : ''}`} />
            </AccentButton>

            {filterOpen && (
              <div className="absolute right-0 z-10 mt-2 w-64 rounded-md border border-zinc-700 bg-zinc-800 p-4 shadow-lg">
                <div className="space-y-3">
                  <p className="text-sm font-medium">Filter by specialty</p>
                  <div className="flex max-h-40 flex-col gap-2 overflow-y-auto">
                    <button
                      className={`rounded-md px-3 py-1.5 text-left text-sm transition-colors ${filterSpecialty === null ? 'bg-[#4CAF50] text-white' : 'hover:bg-zinc-700'}`}
                      onClick={() => setFilterSpecialty(null)}
                    >
                      All Specialties
                    </button>
                    {allSpecialties.map((specialty) => (
                      <button
                        key={specialty}
                        className={`rounded-md px-3 py-1.5 text-left text-sm transition-colors ${filterSpecialty === specialty ? 'bg-[#4CAF50] text-white' : 'hover:bg-zinc-700'}`}
                        onClick={() => setFilterSpecialty(specialty)}
                      >
                        {specialty}
                      </button>
                    ))}
                  </div>

                  <p className="text-sm font-medium">Distance</p>
                  <div className="flex gap-2">
                    <select className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-sm">
                      <option value="">Any distance</option>
                      <option value="1">Within 1 mile</option>
                      <option value="5">Within 5 miles</option>
                      <option value="10">Within 10 miles</option>
                    </select>
                  </div>

                  <p className="text-sm font-medium">Insurance Accepted</p>
                  <div className="flex gap-2">
                    <select className="w-full rounded-md border border-zinc-700 bg-zinc-900 px-2 py-1 text-sm">
                      <option value="">Any Insurance</option>
                      <option value="Blue Cross">Blue Cross</option>
                      <option value="Aetna">Aetna</option>
                      <option value="Kaiser">Kaiser</option>
                      <option value="Medicare">Medicare</option>
                    </select>
                  </div>

                  <AccentButton className="w-full bg-[#4CAF50]">Apply Filters</AccentButton>
                </div>
              </div>
            )}
          </div>
          <div className="flex rounded-md border border-zinc-700 bg-zinc-800">
            <button
              className={`px-4 py-2 text-sm ${viewMode === 'grid' ? 'bg-zinc-700 text-white' : 'text-zinc-400'}`}
              onClick={() => setViewMode('grid')}
            >
              Grid
            </button>
            <button
              className={`px-4 py-2 text-sm ${viewMode === 'map' ? 'bg-zinc-700 text-white' : 'text-zinc-400'}`}
              onClick={() => setViewMode('map')}
            >
              Map
            </button>
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
                <Card
                  className={`h-full overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm ${
                    selectedClinic === clinic.id ? 'ring-2 ring-[#4CAF50]' : ''
                  }`}
                >
                  <div className="relative h-40 w-full overflow-hidden">
                    <img src={clinic.imageUrl} alt={clinic.name} className="h-full w-full object-cover" />
                    <div className="absolute bottom-2 right-2 rounded-full bg-black/70 px-2 py-1 text-xs font-medium text-white">
                      {clinic.distance}
                    </div>
                  </div>
                  <CardHeader className="p-4 pb-0">
                    <div className="flex justify-between">
                      <CardTitle className="text-lg font-medium">{clinic.name}</CardTitle>
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="text-sm font-medium">{clinic.rating}</span>
                        <span className="ml-1 text-xs text-zinc-400">({clinic.reviews})</span>
                      </div>
                    </div>
                    <p className="mt-1 text-xs text-zinc-400">{clinic.address}</p>
                  </CardHeader>
                  <CardContent className="p-4">
                    <div className="mb-3">
                      <p className="text-sm text-zinc-300">{clinic.description}</p>
                    </div>

                    <div className="mb-3 flex flex-wrap gap-2">
                      {clinic.specialties.map((specialty) => (
                        <span key={specialty} className="rounded-full bg-[#4CAF50]/20 px-2 py-1 text-xs text-[#4CAF50]">
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="mb-3">
                      <p className="mb-1 text-xs font-medium uppercase text-zinc-500">Insurance Accepted</p>
                      <p className="text-xs text-zinc-400">{clinic.insuranceAccepted.join(', ')}</p>
                    </div>

                    <div className="mt-4 flex flex-col gap-2">
                      <a
                        href={`tel:${clinic.phone}`}
                        className="flex items-center gap-2 text-sm text-[#4CAF50] hover:underline"
                      >
                        <PhoneCall className="h-4 w-4" />
                        {clinic.phone}
                      </a>
                      <a
                        href={clinic.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-[#4CAF50] hover:underline"
                      >
                        <Globe className="h-4 w-4" />
                        Visit Website
                        <ExternalLink className="h-3 w-3" />
                      </a>
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <AccentButton className="bg-[#4CAF50]">Book Appointment</AccentButton>
                      <AccentButton
                        className="border border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
                        onClick={() => handleClinicClick(clinic.id)}
                      >
                        More Info
                      </AccentButton>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full flex h-60 flex-col items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/30 p-6 text-center">
              <MapPin className="mb-4 h-12 w-12 text-zinc-700" />
              <h3 className="mb-2 text-lg font-medium">No clinics found</h3>
              <p className="text-sm text-zinc-400">Try adjusting your filters or search term</p>
              <AccentButton
                className="mt-4 border border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
                onClick={() => {
                  setSearchTerm('');
                  setFilterSpecialty(null);
                }}
              >
                Reset Filters
              </AccentButton>
            </div>
          )}
        </motion.div>
      )}

      {/* View mode: Map */}
      {viewMode === 'map' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <Card className="h-[calc(100vh-300px)] min-h-[400px] overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
              <div className="relative h-full w-full">
                {/* This would be replaced with an actual map component like Google Maps or Mapbox */}
                <div className="flex h-full w-full items-center justify-center bg-zinc-800 text-center">
                  <div className="max-w-sm p-8">
                    <MapPin className="mx-auto mb-4 h-12 w-12 text-[#4CAF50]" />
                    <h3 className="mb-2 text-lg font-medium">Map View</h3>
                    <p className="text-sm text-zinc-400">
                      This would be an interactive map showing all nearby clinics using Google Maps or Mapbox
                      integration
                    </p>
                    <p className="mt-4 text-xs text-zinc-500">{filteredClinics.length} clinics found in your area</p>
                  </div>
                </div>

                {/* Map control buttons that would control an actual map */}
                <div className="absolute right-4 top-4 flex flex-col gap-2">
                  <button className="flex h-8 w-8 items-center justify-center rounded-md bg-black/70 text-white hover:bg-black/90">
                    +
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center rounded-md bg-black/70 text-white hover:bg-black/90">
                    -
                  </button>
                </div>
              </div>
            </Card>
          </div>

          <div className="space-y-4 md:col-span-1">
            <h2 className="text-lg font-medium">Clinics Near You</h2>

            {filteredClinics.length > 0 ? (
              <div className="max-h-[calc(100vh-350px)] overflow-y-auto pb-4">
                {filteredClinics.map((clinic) => (
                  <Card
                    key={clinic.id}
                    className={`mb-3 cursor-pointer border-zinc-800 bg-zinc-900/50 p-3 backdrop-blur-sm hover:bg-zinc-800/30 ${
                      selectedClinic === clinic.id ? 'border-[#4CAF50]' : ''
                    }`}
                    onClick={() => handleClinicClick(clinic.id)}
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-medium">{clinic.name}</h3>
                        <p className="text-xs text-zinc-400">
                          {clinic.distance} • {clinic.specialties.join(', ')}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <Star className="mr-1 h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="text-sm">{clinic.rating}</span>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="flex h-60 flex-col items-center justify-center rounded-lg border border-dashed border-zinc-700 bg-zinc-900/30 p-6 text-center">
                <p className="text-sm text-zinc-400">No clinics found</p>
                <AccentButton
                  className="mt-4 border border-zinc-700 bg-zinc-800 hover:bg-zinc-700"
                  onClick={() => {
                    setSearchTerm('');
                    setFilterSpecialty(null);
                  }}
                >
                  Reset Filters
                </AccentButton>
              </div>
            )}
          </div>
        </motion.div>
      )}

      {/* User location permissions notice */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
        <Card className="mt-6 overflow-hidden border-zinc-800 bg-zinc-900/50 backdrop-blur-sm">
          <CardContent className="p-4">
            <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
              <div>
                <h3 className="font-medium">Find More Personalized Matches</h3>
                <p className="mt-1 text-sm text-zinc-400">
                  To help you find the most relevant therapists and support groups, we'll need your precise location.
                </p>
              </div>
              <AccentButton className="whitespace-nowrap bg-[#4CAF50]">
                <MapPin className="mr-2 h-4 w-4" />
                Share My Location
              </AccentButton>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default NearbyClinicsPage;
