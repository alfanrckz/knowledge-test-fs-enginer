import { 
  Button, 
  FormControl, 
  FormLabel, 
  Input, 
  Modal, 
  ModalBody, 
  ModalCloseButton, 
  ModalContent, 
  ModalFooter, 
  ModalHeader, 
  ModalOverlay, 
  useDisclosure 
} from '@chakra-ui/react';
import React, { ChangeEvent, useState } from 'react';
import { FaEdit } from 'react-icons/fa';
import { IProduct } from '../../../interface/product';
import { useProducts } from '../hooks/useProduct';

interface IModalUpdateProduct {
  data: IProduct;
}

interface FormDataType {
  name: string;
  price: number;
  description: string;
  image: File | null;
}

const ModalUpdateProduct: React.FC<IModalUpdateProduct> = ({ data }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const { updateProduct } = useProducts();
  
  const [formData, setFormData] = useState<FormDataType>({
    name: data.name,
    price: data.price,
    description: data.description,
    image: null,
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === 'image' && files && files[0]) {
      setFormData({
        ...formData,
        image: files[0]
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
 
    if(formData.image !== null) {
      await updateProduct(data.id, formData);
      onClose();
    } else {
      alert("Please select an image file.");
    }
  };

  return (
    <>
      <Button onClick={onOpen} variant="solid" colorScheme="blue" leftIcon={<FaEdit />}>Edit</Button>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent bg={"gray.800"}>
          <ModalHeader>Edit your Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <FormControl>
                <FormLabel>Product Name</FormLabel>
                <Input 
                  type='text' 
                  ref={initialRef} 
                  placeholder='Product Name' 
                  name='name' 
                  value={formData.name} 
                  onChange={handleInputChange} 
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Price</FormLabel>
                <Input 
                  placeholder='Price' 
                  name='price' 
                  type='number' 
                  value={formData.price} 
                  onChange={handleInputChange} 
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Description</FormLabel>
                <Input 
                  type='text' 
                  placeholder='Description' 
                  name='description' 
                  value={formData.description} 
                  onChange={handleInputChange} 
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel>Image</FormLabel>
                <Input 
                  placeholder='Image' 
                  name='image' 
                  type='file' 
                  onChange={handleInputChange} 
                />
              </FormControl>

              <ModalFooter>
                <Button colorScheme='blue' mr={3} type='submit'>
                  Save
                </Button>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalUpdateProduct;
