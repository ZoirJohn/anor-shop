import { Anchor, Flex, Text } from "@mantine/core";
import { ArrowRightIcon } from "@phosphor-icons/react";
import { Link } from "react-router";

export default function LinkCaption(props:{caption:string}) {
	return (
    <Flex justify="space-between" align="center" py={20}>
      <Text fz="48" fw={700}>
        {props.caption}
      </Text>
      <Anchor
        component={Link}
        to="/products"
        c="black"
        td="none"
        bd="none"
        display={'flex'}
        style={{ alignItems: 'center' }}
      >
        View All
        <ArrowRightIcon size={24} style={{ marginLeft: 16 }} />
      </Anchor>
    </Flex>
  )
}