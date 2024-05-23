// src/components/Profile.tsx
import { Avatar, Box, Text, VStack } from '@chakra-ui/react';
const MyProfile = () => {
    const name = localStorage.getItem('name');
    const email = localStorage.getItem('email');
    const gender = localStorage.getItem('gender');
  return (
    <Box p={4} borderWidth={1} borderRadius="lg" overflow="hidden" boxShadow="sm" maxW="sm" mx="auto" mt={10}>
      <VStack spacing={4} align="start">
        <Avatar size="xl" />
        <Box>
          <Text fontSize="2xl" fontWeight="bold">{name}</Text>
          <Text fontSize="md" color="gray.600">{email}</Text>
          <Text fontSize="md" color="gray.600">{gender}</Text>
        </Box>
      </VStack>
    </Box>
  );
};  

export default MyProfile;
