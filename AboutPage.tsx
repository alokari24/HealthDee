import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Heart, Shield, Users, Award, Target, Eye, Star } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  {
    name: 'Dr. Jennifer Adams',
    role: 'Chief Medical Officer',
    education: 'MD, Harvard Medical School',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'Leading healthcare innovation with 20+ years of clinical experience and digital health expertise.'
  },
  {
    name: 'Marcus Johnson',
    role: 'CEO & Founder',
    education: 'MBA, Stanford Business School',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'Passionate about making quality healthcare accessible to everyone through technology and innovation.'
  },
  {
    name: 'Sarah Kim',
    role: 'Chief Technology Officer',
    education: 'MS Computer Science, MIT',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'Building cutting-edge platforms that connect patients with the best healthcare providers worldwide.'
  },
  {
    name: 'Dr. Robert Chen',
    role: 'Head of Quality Assurance',
    education: 'MD, PhD, Johns Hopkins',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    description: 'Ensuring the highest standards of care through rigorous provider vetting and continuous monitoring.'
  }
];

const values = [
  {
    icon: Heart,
    title: 'Patient-Centered Care',
    description: 'Every decision we make is guided by what\'s best for patient health and well-being.'
  },
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We maintain the highest standards of data security and privacy protection.'
  },
  {
    icon: Users,
    title: 'Accessibility',
    description: 'Making quality healthcare accessible to everyone, regardless of location or background.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We partner only with verified, top-rated healthcare providers and institutions.'
  }
];

const stats = [
  { number: '10,000+', label: 'Healthcare Providers' },
  { number: '500,000+', label: 'Patients Served' },
  { number: '50+', label: 'Cities Covered' },
  { number: '4.8/5', label: 'Average Rating' }
];

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl mb-6 text-gray-900">
                Revolutionizing Healthcare Access
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                HealthCare Plus is dedicated to connecting patients with the best healthcare providers, 
                making quality medical care accessible, transparent, and convenient for everyone.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl text-blue-600 mb-1">{stat.number}</div>
                    <div className="text-gray-600">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                alt="Healthcare team collaboration"
                className="rounded-2xl shadow-xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Eye className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  To create a world where everyone has easy access to quality healthcare, 
                  where patients can make informed decisions about their health, and where 
                  healthcare providers can focus on what they do best - healing and caring.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center">
                <div className="bg-green-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="h-8 w-8 text-green-600" />
                </div>
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 leading-relaxed">
                  To bridge the gap between patients and healthcare providers through technology, 
                  transparency, and trust. We empower patients to find the right care while 
                  supporting providers in delivering exceptional healthcare experiences.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Our Core Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader className="pb-4">
                  <div className="bg-blue-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Meet Our Leadership Team</h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to transforming healthcare
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <ImageWithFallback
                      src={member.image}
                      alt={member.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover mb-4"
                    />
                    <h3 className="text-lg mb-1">{member.name}</h3>
                    <Badge variant="secondary" className="mb-2">{member.role}</Badge>
                    <p className="text-sm text-blue-600 mb-3">{member.education}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {member.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl mb-4 text-gray-900">Awards &amp; Recognition</h2>
            <p className="text-xl text-gray-600">
              Recognized for excellence in healthcare innovation
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                award: 'Best Healthcare Platform 2023',
                organization: 'Digital Health Awards',
                year: '2023'
              },
              {
                award: 'Innovation in Patient Care',
                organization: 'Healthcare Innovation Summit',
                year: '2023'
              },
              {
                award: 'Top Rated Healthcare App',
                organization: 'TechCrunch Health Awards',
                year: '2022'
              }
            ].map((recognition, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="bg-yellow-100 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-8 w-8 text-yellow-600" />
                  </div>
                  <h3 className="text-lg mb-2">{recognition.award}</h3>
                  <p className="text-gray-600 mb-1">{recognition.organization}</p>
                  <Badge variant="outline">{recognition.year}</Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}