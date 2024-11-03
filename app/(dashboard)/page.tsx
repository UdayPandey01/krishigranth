"use client"

import { useState, useEffect } from 'react';
import Footer from "@/components/Footer";
import LandingPage from "@/components/LandingPage";
import { Navbar } from "@/components/Navbar";
import UserInfoModal from "@/components/UserInfoModal";
import { useUser } from '@clerk/nextjs';

export default function Home() {
  const { user, isSignedIn } = useUser();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [hasProvidedInfo, setHasProvidedInfo] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("hasProvidedInfo") === "true";
    }
    return false;
  });

  const handleClose = () => {
    setIsModalOpen(false);
  };

  const handleSave = async (userInfo: { username: string; age: number; dob: string; location: string; role: string }) => {
    console.log('User Info to Save:', userInfo);

    try {
        const response = await fetch('/api/farmers/save-farmer', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userInfo),
        });
        if (!response.ok) {
            throw new Error('Failed to save user information');
        }

        const result = await response.json();
        console.log('Success:', result);

        handleClose();
        
        setHasProvidedInfo(true);
        localStorage.setItem("hasProvidedInfo", "true");
    } catch (error) {
        console.error('Error saving user information:', error); 
    }
  };

  useEffect(() => {
    if (isSignedIn && !hasProvidedInfo) {
      setIsModalOpen(true);
    }
  }, [isSignedIn, hasProvidedInfo]);

  return (
    <div>
      <Navbar />
      <LandingPage />
      <Footer />

      {isModalOpen && (
        <UserInfoModal
          isOpen={isModalOpen}
          onClose={handleClose}
          onSave={handleSave}
        />
      )}
    </div>
  );
}
