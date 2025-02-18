import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Globe, Clock, MapPin, Users, Camera, BookOpen, ArrowRight, ChevronDown, ChevronUp, LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Define types
interface HighlightProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

interface DetailedContentProps {
  isPhysical: boolean;
}

const Courses: React.FC = () => {
  const [expandedPhysical, setExpandedPhysical] = useState<boolean>(false);
  const [expandedVirtual, setExpandedVirtual] = useState<boolean>(false);

    const renderHighlight = ({ icon: Icon, title, content }: HighlightProps) => (
    <div className="flex items-start space-x-3 mb-4">
      <Icon className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
      <div>
        <h4 className="font-medium text-gray-900 mb-1">{title}</h4>
        <div className="text-gray-600">{content}</div>
      </div>
    </div>
  );

  const renderDetailedContent = ({ isPhysical }: DetailedContentProps) => (
    <div className="space-y-4 mt-4">
      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Business Ventures</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Co-build up to 3 businesses (Tech, Consumer Brand, Agency)</li>
          <li>• 50-50 equity split</li>
          <li>• Goal: Exit in 5 years with multi-million dollar deal</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Revenue Details</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• 30% of content revenue share</li>
          <li>• Buyback option after 5 years (₹5 Lakh/month threshold)</li>
          <li>• 50% equity in business ventures</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Program Milestones</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Year 1: 100K followers</li>
          <li>• Year 2: $10K/month revenue</li>
          <li>• Year 3: Growth to $50K, $100K, $1M</li>
        </ul>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-gray-900">Post-Agreement</h3>
        <ul className="space-y-2 text-gray-700">
          <li>• Contract settlement after acquisition or 10 years</li>
          <li>• Access to Mess N Art Alumni Network</li>
          <li>• Ongoing collaboration opportunities</li>
        </ul>
      </div>

      {isPhysical ? (
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Physical Program Specifics</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• 30 hours/month studio access</li>
            <li>• Professional equipment and gear</li>
            <li>• In-person bi-weekly sessions</li>
            <li>• Direct access to industry experts</li>
          </ul>
        </div>
      ) : (
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Virtual Program Specifics</h3>
          <ul className="space-y-2 text-gray-700">
            <li>• Online content creation tools</li>
            <li>• Virtual bi-weekly sessions</li>
            <li>• Digital resource library</li>
            <li>• Direct mentorship from core team</li>
          </ul>
        </div>
      )}
    </div>
  );

  // Define highlight data with proper typing
  const physicalHighlights: HighlightProps[] = [
    {
      icon: Clock,
      title: "Duration",
      content: "6 months (24 weeks)"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Kota, Rajasthan (Physical program, no accommodation)"
    },
    {
      icon: Camera,
      title: "Studio Access",
      content: "30 hours/month (cameras, lighting, gears, etc.)"
    },
    {
      icon: Users,
      title: "Batch Size",
      content: "Highly Selective – Only 5 creators per season"
    }
  ];

  const virtualHighlights: HighlightProps[] = [
    {
      icon: Clock,
      title: "Duration",
      content: "6 months (24 weeks)"
    },
    {
      icon: Globe,
      title: "Location",
      content: "Virtual (No need to travel; remote program)"
    },
    {
      icon: BookOpen,
      title: "Resources",
      content: "Virtual studio access, online tools, and training resources"
    },
    {
      icon: Users,
      title: "Batch Size",
      content: "Highly Selective – Only 5 creators per season"
    }
  ];

  // Define benefit items type
  interface BenefitItem {
    icon: typeof ArrowRight;
    content: string;
  }

  // Define benefits data
  const physicalBenefits: BenefitItem[] = [
    {
      icon: ArrowRight,
      content: "Physical studio access with professional equipment"
    },
    {
      icon: ArrowRight,
      content: "In-person mentorship and networking"
    },
    {
      icon: ArrowRight,
      content: "Hands-on workshop experience"
    }
  ];

  const virtualBenefits: BenefitItem[] = [
    {
      icon: ArrowRight,
      content: "Flexible remote learning environment"
    },
    {
      icon: ArrowRight,
      content: "Direct mentorship from core team"
    },
    {
      icon: ArrowRight,
      content: "Online community and networking"
    }
  ];

  return (
    <div className="w-full max-w-7xl mx-auto p-6 relative z-10">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">We offer 2 programs!</h1>
        <p className="text-xl text-gray-600">
          Note - Both the programs are free and we bet on creators on a long term basis
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-6">
        {/* Physical Program Card */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow border-orange-100">
          <CardHeader className="pb-2">
            <Badge className="w-fit mb-2 bg-orange-100 text-orange-800 hover:bg-orange-200">Physical Program</Badge>
            <h2 className="text-2xl font-bold text-gray-900">Mess N Art</h2>
            <p className="text-gray-600">Future Creators Program</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {physicalHighlights.map((highlight, index) => (
              <React.Fragment key={index}>
                {renderHighlight(highlight)}
              </React.Fragment>
            ))}

            <div className="bg-orange-50/80 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">Key Benefits</h3>
              <ul className="space-y-2">
                {physicalBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <benefit.icon className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit.content}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              onClick={() => setExpandedPhysical(!expandedPhysical)}
              className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700"
              variant="default"
            >
              {expandedPhysical ? 'Show Less' : 'Click to know more'}
              {expandedPhysical ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>

            {expandedPhysical && (
              <>
                <Separator className="my-4" />
                {renderDetailedContent({ isPhysical: true })}
              </>
            )}
          </CardContent>
        </Card>

        {/* Virtual Program Card */}
        <Card className="bg-white/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-shadow border-orange-100">
          <CardHeader className="pb-2">
            <Badge className="w-fit mb-2 bg-orange-100 text-orange-800 hover:bg-orange-200">Virtual Program</Badge>
            <h2 className="text-2xl font-bold text-gray-900">Mess N Art</h2>
            <p className="text-gray-600">Virtual Future Creators Program</p>
          </CardHeader>
          
          <CardContent className="space-y-6">
            {virtualHighlights.map((highlight, index) => (
              <React.Fragment key={index}>
                {renderHighlight(highlight)}
              </React.Fragment>
            ))}

            <div className="bg-orange-50/80 p-4 rounded-lg">
              <h3 className="font-semibold text-orange-900 mb-2">Key Benefits</h3>
              <ul className="space-y-2">
                {virtualBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <benefit.icon className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit.content}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Button 
              onClick={() => setExpandedVirtual(!expandedVirtual)}
              className="w-full flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700"
              variant="default"
            >
              {expandedVirtual ? 'Show Less' : 'Click to know more'}
              {expandedVirtual ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
            </Button>

            {expandedVirtual && (
              <>
                <Separator className="my-4" />
                {renderDetailedContent({ isPhysical: false })}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Courses;