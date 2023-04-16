import React from "react"
import Switch from "react-switch"
import { useAppDispatch, useAppSelector } from "@/store/hook"
import { handleTheme } from "@/store/features/themeSlice"

const ThemeButton = () => {
  const { darkTheme } = useAppSelector((state) => state.theme)
  const dispatch = useAppDispatch()

  const handleChange = () => {
    dispatch(handleTheme())
  }

  return (
    <>
      <Switch
        onChange={handleChange}
        checked={darkTheme}
        checkedIcon={false}
        uncheckedIcon={false}
        offColor={"#000"}
        onColor={"#fff"}
        onHandleColor={"#000"}
        offHandleColor={"#fff"}
        activeBoxShadow=""
      />
    </>
  )
}

export default ThemeButton
