'use client';

import React from 'react';
import {
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckIcon,
  CheckCircleIcon,
  CheckBadgeIcon,
  HomeIcon,
  HomeModernIcon,
  TruckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CameraIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  ChatBubbleBottomCenterTextIcon,
  PencilSquareIcon,
  Square3Stack3DIcon,
  PhotoIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  PaperAirplaneIcon,
  ClockIcon,
  BuildingStorefrontIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CubeIcon,
  TrophyIcon,
  LightBulbIcon,
  UserGroupIcon,
  SunIcon,
  WrenchScrewdriverIcon,
  SwatchIcon,
  SparklesIcon,
  BoltIcon,
  PaintBrushIcon,
  XMarkIcon,
  Bars3Icon,
  StarIcon,
} from '@heroicons/react/24/outline';
import {
  HomeModernIcon as HomeModernIconSolid,
  StarIcon as StarIconSolid,
} from '@heroicons/react/24/solid';

type IconVariant = 'outline' | 'solid';

const OUTLINE_ICONS: Record<string, React.ComponentType<{ width?: number; height?: number; className?: string; onClick?: () => void }>> = {
  ArrowRightIcon,
  ArrowLeftIcon,
  CheckIcon,
  CheckCircleIcon,
  CheckBadgeIcon,
  HomeIcon,
  HomeModernIcon,
  TruckIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  CameraIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  PencilSquareIcon,
  Square3Stack3DIcon,
  PhotoIcon,
  ShieldCheckIcon,
  AcademicCapIcon,
  PaperAirplaneIcon,
  ClockIcon,
  BuildingStorefrontIcon,
  BuildingLibraryIcon,
  BuildingOfficeIcon,
  CubeIcon,
  TrophyIcon,
  LightBulbIcon,
  UserGroupIcon,
  SunIcon,
  WrenchScrewdriverIcon,
  SwatchIcon,
  SparklesIcon,
  BoltIcon,
  PaintBrushIcon,
  ChatBubbleBottomCenterTextIcon,
  XMarkIcon,
  Bars3Icon,
  StarIcon,
};

const SOLID_ICONS: Record<string, React.ComponentType<{ width?: number; height?: number; className?: string; onClick?: () => void }>> = {
  HomeModernIcon: HomeModernIconSolid,
  StarIcon: StarIconSolid,
};

interface IconProps {
  name: string;
  variant?: IconVariant;
  size?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  [key: string]: unknown;
}

function Icon({
  name,
  variant = 'outline',
  size = 24,
  className = '',
  onClick,
  disabled = false,
  ...props
}: IconProps) {
  const iconSet = variant === 'solid' ? SOLID_ICONS : OUTLINE_ICONS;
  const IconComponent = iconSet[name];

  if (!IconComponent || typeof IconComponent !== 'function') {
    return null;
  }

  return (
    <IconComponent
      width={size}
      height={size}
      className={`${disabled ? 'opacity-50 cursor-not-allowed' : onClick ? 'cursor-pointer hover:opacity-80' : ''} ${className}`}
      onClick={disabled ? undefined : onClick}
      {...props}
    />
  );
}

export default Icon;
