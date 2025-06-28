"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  Menu,
  X,
  Play,
  Star,
  Mail,
  Phone,
  Instagram,
  Youtube,
  Linkedin,
  ChevronDown,
  Send,
  Pause,
} from "lucide-react";
import capcut from "../public/capcut-3.svg"

export default function DarkPortfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  const handleVideoPlay = (index: number) => {
    setPlayingVideo(index);
  };

  const handleVideoPause = (index: number) => {
    setPlayingVideo(null);
  };

  const tools = [
        {
      name: "DaVinci Resolve",
      icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#37474f" d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"></path><path fill="#ff7043" d="M25.064,25.167l2.409,6.331c0.546,0.741,1.195,1.389,1.969,1.828c2.419,1.373,5.5,0.581,6.881-1.769 l0,0C36.322,31.557,25.34,25.378,25.064,25.167z"></path><path fill="#f16461" d="M25.064,25.167c0.323,0.129,11.259,6.389,11.259,6.389l0,0c1.38-2.351,0.538-5.369-1.882-6.742 c-0.774-0.439-1.669-0.667-2.595-0.762L25.064,25.167z"></path><path fill="#ff5252" d="M33.492,26.545c-0.291-0.165-0.605-0.306-0.929-0.435c0.104,0.993-0.085,2.024-0.632,2.955 s-1.36,1.607-2.287,2.015c0.276,0.211,0.557,0.408,0.848,0.573c3.031,1.72,5.001,1.314,5.83-0.096l0,0l0,0 C37.151,30.146,36.523,28.265,33.492,26.545z"></path><path fill="#ff855f" d="M27.664,29.134c0.589,0.71,1.256,1.392,1.981,1.945c0.927-0.408,1.741-1.084,2.287-2.015 c0.547-0.931,0.736-1.962,0.632-2.955c-0.85-0.34-1.785-0.567-2.704-0.713c0.044,0.741-0.12,1.503-0.525,2.194 C28.928,28.281,28.339,28.802,27.664,29.134z"></path><path fill="#ff8a65" d="M29.645,31.08c-0.725-0.553-1.392-1.236-1.981-1.945c-0.421,0.207-0.876,0.332-1.343,0.384 c0.317,0.683,0.698,1.363,1.153,1.98C28.223,31.516,28.964,31.379,29.645,31.08z"></path><path fill="#ff8a80" d="M29.859,25.397c0.92,0.147,1.855,0.373,2.704,0.713c-0.076-0.73-0.326-1.428-0.717-2.058 c-0.771-0.079-1.56-0.062-2.32,0.009C29.713,24.485,29.832,24.935,29.859,25.397z"></path><path fill="#ffccbc" d="M29.334,27.59c0.406-0.691,0.57-1.452,0.525-2.194c-2.472-0.394-4.795-0.229-4.795-0.229 s1.016,2.06,2.6,3.967C28.339,28.802,28.928,28.281,29.334,27.59z"></path><path fill="#ffab91" d="M27.664,29.134c-1.584-1.907-2.6-3.967-2.6-3.967c-0.058,0.098-0.079,0.217-0.054,0.338 c0.153,0.742,0.55,2.379,1.31,4.014C26.787,29.466,27.243,29.342,27.664,29.134z"></path><path fill="#ffcdd2" d="M29.526,24.061c-1.821,0.17-3.461,0.651-4.191,0.892c-0.119,0.039-0.213,0.117-0.27,0.215 c0,0,2.323-0.165,4.795,0.229C29.832,24.935,29.713,24.485,29.526,24.061z"></path><g><path fill="#c6cf47" d="M22.922,25.167c-0.276,0.211-11.258,6.389-11.258,6.389l0,0c1.381,2.35,4.461,3.142,6.881,1.769 c0.774-0.439,1.423-1.087,1.969-1.828L22.922,25.167z"></path><path fill="#e1eb8a" d="M22.922,25.167l-6.782-1.115c-0.926,0.094-1.822,0.323-2.595,0.762 c-2.419,1.373-3.262,4.391-1.882,6.742l0,0C11.664,31.556,22.599,25.297,22.922,25.167z"></path><path fill="#dce775" d="M17.494,31.653c0.291-0.165,0.572-0.363,0.848-0.573c-0.927-0.408-1.741-1.084-2.287-2.015 c-0.547-0.931-0.736-1.962-0.632-2.955c-0.323,0.129-0.638,0.27-0.929,0.435c-3.031,1.72-3.658,3.6-2.83,5.011l0,0l0,0 C12.493,32.967,14.463,33.373,17.494,31.653z"></path><path fill="#fff59d" d="M18.127,25.397c-0.92,0.147-1.855,0.373-2.704,0.713c-0.104,0.993,0.085,2.024,0.632,2.955 c0.547,0.931,1.36,1.607,2.287,2.015c0.725-0.553,1.392-1.236,1.981-1.945c-0.675-0.333-1.264-0.853-1.67-1.544 C18.247,26.899,18.083,26.138,18.127,25.397z"></path><path fill="#e6ee9c" d="M15.423,26.11c0.85-0.34,1.785-0.567,2.704-0.713c0.028-0.462,0.146-0.912,0.333-1.336 c-0.76-0.071-1.55-0.087-2.32-0.009C15.749,24.682,15.499,25.381,15.423,26.11z"></path><path fill="#ffd740" d="M20.323,29.134c-0.589,0.71-1.256,1.392-1.981,1.945c0.681,0.3,1.422,0.437,2.172,0.419 c0.455-0.617,0.835-1.297,1.153-1.98C21.199,29.466,20.744,29.342,20.323,29.134z"></path><path fill="#fff9c4" d="M18.653,27.59c0.406,0.691,0.995,1.211,1.67,1.544c1.584-1.907,2.6-3.967,2.6-3.967 s-2.323-0.165-4.795,0.229C18.083,26.138,18.247,26.899,18.653,27.59z"></path><path fill="#f0f4c3" d="M18.127,25.397c2.472-0.394,4.795-0.229,4.795-0.229c-0.058-0.098-0.151-0.176-0.27-0.215 c-0.731-0.241-2.371-0.721-4.191-0.892C18.273,24.485,18.155,24.935,18.127,25.397z"></path><path fill="#ffe082" d="M21.666,29.518c0.76-1.635,1.157-3.271,1.31-4.014c0.025-0.121,0.004-0.24-0.054-0.338 c0,0-1.016,2.06-2.6,3.967C20.744,29.342,21.199,29.466,21.666,29.518z"></path></g><g><path fill="#f44336" d="M41.37,28.654c-0.411,1.537-1.015,2.993-1.794,4.339l1.731,0.999 c0.866-1.496,1.536-3.112,1.993-4.821L41.37,28.654z"></path><path fill="#ffd740" d="M11.272,36.728l-1.414,1.414c1.231,1.231,2.633,2.287,4.15,3.165l0.999-1.731 C13.642,38.786,12.38,37.836,11.272,36.728z"></path><path fill="#aed581" d="M6,24H4c0,1.792,0.258,3.519,0.7,5.172l1.93-0.517C6.232,27.167,6,25.612,6,24z"></path><path fill="#fff176" d="M8.424,32.993l-1.731,0.999c0.878,1.517,1.934,2.918,3.165,4.15l1.414-1.414 C10.164,35.62,9.214,34.358,8.424,32.993z"></path><path fill="#dce775" d="M6.63,28.654L4.7,29.172c0.457,1.708,1.128,3.325,1.993,4.821l1.731-0.999 C7.645,31.647,7.041,30.192,6.63,28.654z"></path><path fill="#ffca28" d="M15.007,39.576l-0.999,1.731c1.496,0.865,3.112,1.536,4.821,1.993l0.517-1.93 C17.808,40.959,16.353,40.355,15.007,39.576z"></path><path fill="#ff7043" d="M32.993,39.576l0.999,1.731c1.517-0.878,2.919-1.934,4.15-3.165l-1.414-1.414 C35.62,37.836,34.358,38.786,32.993,39.576z"></path><path fill="#fb8c00" d="M28.654,41.37l0.517,1.93c1.708-0.457,3.325-1.128,4.821-1.993l-0.999-1.731 C31.647,40.355,30.192,40.959,28.654,41.37z"></path><path fill="#ff5252" d="M36.728,36.728l1.414,1.414c1.231-1.231,2.287-2.633,3.165-4.15l-1.731-0.999 C38.786,34.358,37.836,35.62,36.728,36.728z"></path><path fill="#ffb74d" d="M19.346,41.37l-0.517,1.93C20.481,43.742,22.208,44,24,44v-2C22.388,42,20.833,41.768,19.346,41.37z"></path><path fill="#ffa726" d="M24,42v2c1.792,0,3.519-0.258,5.172-0.7l-0.517-1.93C27.167,41.768,25.612,42,24,42z"></path><path fill="#64b5f6" d="M19.346,6.63L18.828,4.7c-1.708,0.457-3.325,1.128-4.821,1.993l0.999,1.731 C16.353,7.645,17.808,7.041,19.346,6.63z"></path><path fill="#9575cd" d="M41.37,19.346l1.93-0.517c-0.457-1.708-1.128-3.325-1.993-4.821l-1.731,0.999 C40.355,16.353,40.959,17.808,41.37,19.346z"></path><path fill="#7986cb" d="M39.576,15.007l1.731-0.999c-0.878-1.517-1.934-2.919-3.165-4.15l-1.414,1.414 C37.836,12.38,38.786,13.642,39.576,15.007z"></path><path fill="#8c9eff" d="M36.728,11.272l1.414-1.414c-1.231-1.231-2.633-2.287-4.15-3.165l-0.999,1.731 C34.358,9.214,35.62,10.164,36.728,11.272z"></path><path fill="#82b1ff" d="M32.993,8.424l0.999-1.731c-1.495-0.866-3.112-1.537-4.82-1.993l-0.517,1.93 C30.192,7.041,31.647,7.645,32.993,8.424z"></path><path fill="#f06292" d="M42,24h2c0-1.792-0.258-3.519-0.7-5.172l-1.93,0.517C41.768,20.833,42,22.388,42,24z"></path><path fill="#9ccc65" d="M6.63,19.346L4.7,18.828C4.258,20.481,4,22.208,4,24h2C6,22.388,6.232,20.833,6.63,19.346z"></path><path fill="#ef5350" d="M41.37,28.654l1.93,0.517C43.742,27.519,44,25.792,44,24h-2C42,25.612,41.768,27.167,41.37,28.654z"></path><path fill="#64b5f6" d="M28.654,6.63l0.517-1.93C27.519,4.258,25.792,4,24,4v2C25.612,6,27.167,6.232,28.654,6.63z"></path><path fill="#68c1b8" d="M11.272,11.272L9.858,9.858c-1.231,1.231-2.287,2.633-3.165,4.15l1.731,0.999 C9.214,13.642,10.164,12.38,11.272,11.272z"></path><path fill="#81c784" d="M8.424,15.007l-1.731-0.999c-0.866,1.495-1.537,3.112-1.993,4.82l1.93,0.517 C7.041,17.808,7.645,16.353,8.424,15.007z"></path><path fill="#4db6ac" d="M15.007,8.424l-0.999-1.731c-1.517,0.878-2.919,1.934-4.15,3.165l1.414,1.414 C12.38,10.164,13.642,9.214,15.007,8.424z"></path><path fill="#4ba9f5" d="M24,6V4c-1.792,0-3.519,0.258-5.172,0.7l0.517,1.93C20.833,6.232,22.388,6,24,6z"></path></g><g><path fill="#7986cb" d="M24.001,11L24.001,11L24,24c0.115,0,0.23-0.042,0.324-0.125C25.433,22.896,29,19.477,29,16.059 C29,13.265,26.762,11.001,24.001,11z"></path><path fill="#26a69a" d="M24,11C23.999,11,23.999,11,24,11c-2.761,0-5,2.265-5,5.059c0,3.418,3.567,6.837,4.676,7.816 C23.77,23.958,23.885,24,24,24V11z"></path><path fill="#82b1ff" d="M24,11L24,11L24,11c-1.658,0-3,1.5-3,5c0,3.59,3,8,3,8s3-4.41,3-8C27,12.5,25.657,11,24,11z"></path><path fill="#4db6ac" d="M24,11c0.543,0,0.941,0.092,0.997,0.105C26.723,11.498,28,12.872,28,14.5 c0,0.91-0.41,1.74-1.06,2.36C26.95,16.79,24.281,11.03,24,11z"></path><path fill="#90caf9" d="M25.82,20.66C24.98,22.56,24,24,24,24s-0.98-1.44-1.82-3.34C22.75,20.88,23.36,21,24,21 S25.25,20.88,25.82,20.66z"></path><path fill="#8dd0ca" d="M21.06,16.86C20.4,16.25,20,15.41,20,14.5c0-1.69,1.37-3.1,3.19-3.43C23.35,11.04,23.831,11,24,11 C22.49,11.18,21.02,16.57,21.06,16.86z"></path><path fill="#80cbc4" d="M27,16c0,0.14,0,0.29-0.02,0.43c0,0.14-0.02,0.29-0.04,0.43C26.21,17.56,25.16,18,24,18 s-2.21-0.44-2.94-1.14C21.02,16.57,21,16.28,21,16c0-3.28,1.18-4.8,2.69-4.98C23.79,11,23.9,11,24,11s0.21,0,0.31,0.02 c0.28,0.03,0.56,0.11,0.81,0.25c0.08,0.04,0.16,0.09,0.24,0.14s0.16,0.11,0.24,0.19c0.07,0.06,0.14,0.12,0.2,0.19 c0.23,0.24,0.44,0.54,0.6,0.91c0.05,0.11,0.1,0.22,0.14,0.33c0.05,0.12,0.09,0.24,0.13,0.37c0.04,0.11,0.07,0.23,0.09,0.35 c0.04,0.16,0.08,0.32,0.1,0.49c0.04,0.19,0.07,0.4,0.09,0.61C26.98,15.2,27,15.59,27,16z"></path><path fill="#9fa8da" d="M28.98,16.45c-0.25,3.29-3.59,6.49-4.66,7.43C24.23,23.96,24.12,24,24,24c0,0,0.98-1.44,1.82-3.34 C27.54,19.98,28.8,18.37,28.98,16.45z"></path><path fill="#81c784" d="M24,24c-0.12,0-0.23-0.04-0.32-0.12c-1.07-0.94-4.41-4.14-4.66-7.43c0.18,1.92,1.44,3.53,3.16,4.21 C23.02,22.56,24,24,24,24z"></path></g>
</svg>,
      color: "from-orange-500 to-red-500",
    },
    {
  name: "CapCut",
  icon: "/capcut.jpg", // just the relative URL to the image
  color: "from-black to-black",
  type: "image" // (optional) add this to distinguish from svg
}

,
    { name: "Lightroom", icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#C5CAE9" d="M6,10c0-2.2,1.8-4,4-4h28c2.2,0,4,1.8,4,4v28c0,2.2-1.8,4-4,4H10c-2.2,0-4-1.8-4-4V10z"></path><path fill="#020F16" d="M9,9v30h30V9H9z M25,31h-8V17h3v11.6h5V31z M32.2,23.1L31.3,23c-0.8,0-1.3,0.3-1.5,1v7H27V20.4h2.6l0.1,1.1c0.4-0.9,1-1.3,1.8-1.3c0.3,0,0.6,0,0.8,0.1L32.2,23.1z"></path>
</svg>, color: "from-gray-500 to-gray-700" },

    { name: "PhotoShop", icon: <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48">
<path fill="#03A9F4" d="M6,10c0-2.209,1.791-4,4-4h28c2.209,0,4,1.791,4,4v28c0,2.209-1.791,4-4,4H10c-2.209,0-4-1.791-4-4V10z"></path><path fill="#020F16" d="M20.016,19.174h-2.002v4.434h1.973c0.547,0,0.97-0.179,1.27-0.537s0.449-0.879,0.449-1.563c0-0.71-0.153-1.274-0.459-1.694S20.53,19.181,20.016,19.174z"></path><path fill="#020F16" d="M9,9v30h30V9H9z M23.365,24.789C22.539,25.597,21.393,26,19.928,26h-1.914v5h-2.871V16.781h4.844c1.406,0,2.528,0.437,3.364,1.309s1.255,2.005,1.255,3.398S24.192,23.981,23.365,24.789z M32.682,30.336c-0.709,0.573-1.641,0.859-2.793,0.859c-0.775,0-1.459-0.151-2.051-0.454s-1.057-0.725-1.392-1.265s-0.503-1.123-0.503-1.748h2.627c0.014,0.481,0.125,0.843,0.337,1.084s0.558,0.361,1.04,0.361c0.742,0,1.113-0.335,1.113-1.006c0-0.234-0.112-0.451-0.337-0.649S30,27.052,29.225,26.713c-1.139-0.462-1.922-0.94-2.349-1.436s-0.64-1.11-0.64-1.846c0-0.925,0.334-1.688,1.001-2.29s1.552-0.903,2.651-0.903c1.158,0,2.086,0.3,2.783,0.898s1.045,1.403,1.045,2.412h-2.764c0-0.859-0.357-1.289-1.074-1.289c-0.293,0-0.533,0.091-0.723,0.273s-0.283,0.437-0.283,0.762c0,0.234,0.104,0.441,0.313,0.62s0.699,0.435,1.475,0.767c1.127,0.417,1.922,0.881,2.388,1.392s0.698,1.174,0.698,1.987C33.746,29.005,33.391,29.763,32.682,30.336z"></path>
</svg>, color: "from-red-500 to-pink-500" },
  ];

  const portfolioItems = [
    {
      title: "Vlog - Azerbaijan ",
      type: "Youtube Edits",
      videoSrc:
        "https://res.cloudinary.com/dybdlvmwd/video/upload/v1750575448/BAKU1_cnoyhu.mp4",
    },
    {
      title: "Podcast - Kannada Film Community",
      views: "1M",
      type: "Youtube Edits",
      videoSrc:
        "https://res.cloudinary.com/dybdlvmwd/video/upload/v1750944960/PROMO_qhvkgu.mp4",
    },
    {
      title: "Lyrical Song",
      views: "500K",
      type: "Video Song",
      videoSrc:
        "https://res.cloudinary.com/dybdlvmwd/video/upload/v1751119401/videoplayback_1_cty56p.mp4",
    },
    {
      title: "GOA",
      views: "300K",
      type: "Cinematic Reel",
      videoSrc:
        "https://res.cloudinary.com/dybdlvmwd/video/upload/v1750953872/goa_pxa292.mp4",
    },
    {
      title: "college fest",
      views: "700K",
      type: "Event video",
      videoSrc:
        "https://res.cloudinary.com/dybdlvmwd/video/upload/v1750944977/3CLG_heryax.mp4",
    },
    {
      title: "Car Handover Video",
      views: "458K",
      type: "Documentry",
      videoSrc:
        "https://res.cloudinary.com/dybdlvmwd/video/upload/v1750957399/creta1_gtxt6e.mp4",
    },
  ];

  const testimonials = [
    {
      name: "Prajwal",
      role: "Instagram",
      content:
        "Manjunath edited a few of my Instagram videos and did a solid job. He was responsive, understood the style I needed, and delivered the work on time.",
      videoSrc:
        "https://res.cloudinary.com/dybdlvmwd/video/upload/v1750954255/thar2_e3vwe9.mp4",
    },
    {
      name: "Global Academy Of Technology",
      role: "Videographer",
      content:
        "We worked with Manjunath on a couple of college event videos. He was easy to work with, followed the brief, and the edits were clean and well-paced.",
      videoSrc:
        "https://res.cloudinary.com/dybdlvmwd/video/upload/v1750959639/d2_rzham5.mp4",
    },
    {
      name: "Car Expo",
      role: "Video Editor",
      content:
        "We had a large amount of footage from our expo and needed someone to edit it down for highlights. Manjunath handled it efficiently, kept the important moments, and delivered a clean final cut that we could share across platforms.",
      rating: 5,
      videoSrc:
        "https://res.cloudinary.com/dybdlvmwd/video/upload/v1750962248/car_zojn8u.mp4",
    },
    
  ];

  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#121212]/90 backdrop-blur-md z-50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            <span className="text-white">Manju </span>
            <span className="text-blue-500">Edits.</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-300 hover:text-blue-700 transition-colors duration-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-300 hover:text-blue-700 transition-colors duration-300"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-300 hover:text-blue-700 transition-colors duration-300"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-gray-300 hover:text-blue-700 transition-colors duration-300"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-300 hover:text-blue-700 transition-colors duration-300"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:text-blue-700 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#121212] border-t border-gray-800">
            <nav className="flex flex-col space-y-4 p-4">
              <button
                onClick={() => scrollToSection("home")}
                className="text-left text-gray-300 hover:text-blue-700 transition-colors duration-300"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-left text-gray-300 hover:text-blue-700 transition-colors duration-300"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-left text-gray-300 hover:text-blue-700 transition-colors duration-300"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-left text-gray-300 hover:text-blue-700 transition-colors duration-300"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-left text-gray-300 hover:text-blue-700 transition-colors duration-300"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/me.jpg')",
            }}
          ></div>
          
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/70"></div>
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-transparent to-black/50"></div>
          
          {/* Additional colored overlay for brand consistency */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="max-w-4xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 md:mb-8 leading-tight text-white drop-shadow-lg">
                Hi, I'm <span className="text-blue-500">Manjunath</span> — a
                creative video editor & photographer
              </h1>
              <div className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl text-gray-200 mb-8 md:mb-12 leading-tight px-0 drop-shadow-md">
                <p>Specialized in video editing, photography, and videography.</p>
                <p>
                  I craft reels, podcast edits, vlogs, short-form videos, and event highlights that truly connect.
                </p>
                <p className="text-white font-medium">
                  Let's collaborate and create something memorable.
                </p>
              </div>
              <Button
                size="lg"
                className="bg-blue-500 hover:bg-blue-600 text-white text-base md:text-lg px-6 md:px-8 py-3 md:py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 drop-shadow-lg"
                onClick={() => scrollToSection("contact")}
              >
                Let's Work Together
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-gray-300 drop-shadow-lg" />
        </div>
      </section>

      {/* Skills & Tools Section */}
      <section id="skills" className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
            Skills & <span className="text-blue-500">Tools</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-4 md:gap-6">
              {tools.map((tool, index) => (
                <Card
                  key={index}
                  className="bg-[#2a2a2a] border-gray-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#FF3B3F]/10"
                >
                  <CardContent className="p-4 md:p-6 text-center">
                     <div
    className={`w-12 h-12 md:w-16 md:h-16 bg-gradient-to-r ${tool.color} rounded-lg mx-auto mb-3 md:mb-4 flex items-center justify-center`}
  >
    {typeof tool.icon === "string" ? (
      <Image
        src={tool.icon}
        alt={tool.name}
        width={50}
        height={50}
        className="object-contain"
      />
    ) : (
      <span className="text-white font-bold text-lg md:text-xl">
        {tool.icon}
      </span>
    )}
  </div>
  <h3 className="font-semibold text-white text-sm md:text-base">
    {tool.name}
  </h3>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-12 md:py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
               Projects
            </h2>
            <p className="text-gray-300 text-base md:text-lg">
              A showcase of my recent work across different platforms
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {portfolioItems.map((item, index) => (
                <Card
                  key={index}
                  className="bg-[#2a2a2a] border-gray-700 overflow-hidden group hover:border-blue-500 transition-all duration-300"
                  onMouseEnter={() => setHoveredVideo(index)}
                  onMouseLeave={() => setHoveredVideo(null)}
                >
                  <div className="relative">
                    <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden">
                      <video
                        src={item.videoSrc}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        muted
                        loop
                        autoPlay
                        preload="metadata"
                        onPlay={() => handleVideoPlay(index)}
                        onPause={() => handleVideoPause(index)}
                      />
                      <div
                        className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                          hoveredVideo === index ? "opacity-100" : "opacity-0"
                        }`}
                      >
                        {playingVideo === index ? (
                          <Pause className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
                        ) : (
                          <Play className="w-8 h-8 md:w-12 md:h-12 text-blue-500" />
                        )}
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-[#FF3B3F] text-white text-xs">
                      {item.type}
                    </Badge>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <h3 className="font-semibold text-white text-base md:text-lg mb-2">
                      {item.title}
                    </h3>
                    
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-12 md:py-20 bg-[#1a1a1a]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
            What <span className="text-blue-500">Clients</span> Say
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card
                  key={index}
                  className="bg-[#2a2a2a] border-gray-700 hover:border-blue-500 transition-all duration-300 overflow-hidden"
                >
                  <div className="relative">
                    {/* Video Element */}
                    <div className="aspect-[9/16] bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden">
                      <video
                        className="w-full h-full object-cover"
                        controls
                        muted
                        loop
                        autoPlay
                        preload="metadata"
                        src={testimonial.videoSrc}
                      >
                        Your browser does not support the video tag.
                      </video>
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                        <Play className="w-12 h-12 text-blue-500" />
                      </div>
                    </div>
                    <Badge className="absolute top-3 right-3 bg-[#FF3B3F] text-white text-xs">
                      Testimonial
                    </Badge>
                  </div>
                  <CardContent className="p-4 md:p-6">
                    <p className="text-gray-300 mb-4 text-sm md:text-base italic line-clamp-3">
                      "{testimonial.content}"
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-[#FF3B3F] to-pink-500 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-bold text-sm">
                          {testimonial.name.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-sm md:text-base">
                          {testimonial.name}
                        </h4>
                        <p className="text-gray-400 text-xs md:text-sm">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 md:py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-8 md:mb-16">
            Let's <span className="text-blue-500">Connect</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-white">
                  Ready to create something amazing?
                </h3>
                <p className="text-gray-300 mb-6 md:mb-8 leading-relaxed text-sm md:text-base">
                  Whether you need a compelling YouTube video, engaging social
                  media content, or a powerful documentary, I'm here to bring
                  your vision to life with precision and creativity.
                </p>
                <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <Mail className="w-5 h-5 md:w-6 md:h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base break-all">
                      editsbymanju12@gmail.com
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-300 text-sm md:text-base">
                      +91 8431566790
                    </span>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-4 text-white">Follow Me</h4>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.instagram.com/manju__online?igsh=cmt1NHVpYXY3Nzd4"
                      className="p-2 md:p-3 bg-[#2a2a2a] text-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                    <Link
                      href="https://www.linkedin.com/in/manjunath-h-9197b6371"
                      className="p-2 md:p-3 bg-[#2a2a2a] text-gray-300 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 hover:scale-110"
                    >
                      <Linkedin className="w-4 h-4 md:w-5 md:h-5" />
                    </Link>
                  </div>
                </div>
              </div>

              <Card className="bg-[#2a2a2a] border-gray-700">
                <CardContent className="p-4 md:p-6">
                  <form
                    className="space-y-4 md:space-y-6"
                    action="https://formsubmit.co/editsbymanju12@gmail.com"
                    method="POST"
                  >
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Name
                      </label>
                      <Input
                        placeholder="Your full name"
                        name="fullname"
                        className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-[#FF3B3F] text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Email
                      </label>
                      <Input
                        type="email"
                        name="email"
                        placeholder="your.email@example.com"
                        className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-[#FF3B3F] text-sm md:text-base"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2 text-white">
                        Message
                      </label>
                      <Textarea
                        placeholder="Tell me about your project, timeline, and vision..."
                        rows={4}
                        name="message"
                        className="bg-[#1a1a1a] border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-[#FF3B3F] text-sm md:text-base resize-none"
                      />
                    </div>
                    <Button className="w-full bg-blue-500 hover:bg-blue-700 text-white transition-all duration-300 hover:scale-105 text-sm md:text-base">
                      <Send className="w-4 h-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a1a1a] border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <div className="text-2xl font-bold mb-4">
              <span className="text-white">Manjunath </span>
              <span className="text-blue-500">Edits.</span>
            </div>
            <p className="text-gray-400 mb-6">
              Video Editor | Photographer | Creative Professional
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <Link
                href="https://www.instagram.com/manju__online?igsh=cmt1NHVpYXY3Nzd4"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Instagram className="w-6 h-6" />
              </Link>
              <Link
                href="https://www.linkedin.com/in/manjunath-30bb69328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="editsbymanju12@gmail.com"
                className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-gray-500">
                © {new Date().getFullYear()} Manjunath. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
