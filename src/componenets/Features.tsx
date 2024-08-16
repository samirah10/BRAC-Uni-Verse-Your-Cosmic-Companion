import { useState } from "react";
import { Fragment } from "react/jsx-runtime";
import { List, ListItem, useColorModeValue, Text } from "@chakra-ui/react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState<number>(-1);

  // Chakra UI color mode values
  const activeBg = useColorModeValue("blue.500", "blue.400");
  const activeColor = useColorModeValue("white", "white");
  const defaultBg = useColorModeValue("white", "gray.800");
  const hoverBg = useColorModeValue("gray.100", "gray.700");
  const borderColor = useColorModeValue("gray.300", "gray.600");

  return (
    <Fragment>
      <Text fontSize="2xl" fontWeight="bold" mb={4}>
        {heading}
      </Text>
      {items.length === 0 && <Text>No items found</Text>}
      <List spacing={3}>
        {items.map((item, index) => (
          <ListItem
            key={item}
            bg={selectedIndex === index ? activeBg : defaultBg}
            color={selectedIndex === index ? activeColor : "inherit"}
            padding="12px"
            borderRadius="md"
            cursor="pointer"
            _hover={{
              bg: selectedIndex === index ? activeBg : hoverBg,
              color: selectedIndex === index ? activeColor : "inherit",
              transform: "translateY(-2px)",
            }}
            border="1px solid"
            borderColor={borderColor}
            boxShadow="md"
            transition="all 0.2s"
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </Fragment>
  );
}

export default ListGroup;
