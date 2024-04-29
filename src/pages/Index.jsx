import React, { useState } from "react";
import { Box, Button, Container, Input, Textarea, VStack, Heading, Text, useToast } from "@chakra-ui/react";
import { FaRegClipboard } from "react-icons/fa";

const Index = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [script, setScript] = useState("");
  const toast = useToast();

  const handleGenerateScript = async () => {
    if (!videoUrl) {
      toast({
        title: "Error",
        description: "Please enter a video URL.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    // Placeholder for script generation logic
    const generatedScript = `Generated script for video at ${videoUrl}`;
    setScript(generatedScript);
  };

  return (
    <Container maxW="container.md" py={10}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl" textAlign="center">
          Video Script Generator
        </Heading>
        <Text textAlign="center">Enter the URL of a video to generate a readable script.</Text>
        <Input placeholder="Enter video URL here" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} />
        <Button leftIcon={<FaRegClipboard />} colorScheme="blue" onClick={handleGenerateScript}>
          Generate Script
        </Button>
        <Textarea placeholder="Generated script will appear here..." value={script} readOnly />
      </VStack>
    </Container>
  );
};

export default Index;
