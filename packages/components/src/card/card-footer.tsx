import { SystemProps } from "@chakra-v2/styled-system"
import { HTMLChakraProps, chakra, forwardRef } from "../system"
import { cx } from "@chakra-v2/utils"
import { useCardStyles } from "./card-context"

export interface CardFooterProps extends HTMLChakraProps<"div"> {
  justify?: SystemProps["justifyContent"]
}

export const CardFooter = forwardRef<CardFooterProps, "div">(
  function CardFooter(props, ref) {
    const { className, justify, ...rest } = props
    const styles = useCardStyles()
    return (
      <chakra.div
        ref={ref}
        className={cx("chakra-card__footer", className)}
        __css={{
          display: "flex",
          justifyContent: justify,
          ...styles.footer,
        }}
        {...rest}
      />
    )
  },
)
