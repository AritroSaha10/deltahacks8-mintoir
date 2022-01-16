import { Fab, Icon, Box, Center, NativeBaseProvider } from "native-base"
import React from "react"
import { AntDesign } from "@expo/vector-icons"

export const Action = () => {
  return (
    <Box>
      <Fab
        size="sm"
        placement="bottom-right"
        icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
      />
    </Box>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
        <Action />
    </NativeBaseProvider>
  )
}