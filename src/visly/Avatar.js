// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
/* tslint:disable */
/* eslint-disable */
import "./textstyles/fonts.css";
import "./reset.css";
import "./Avatar.css";
import React, { createContext, useContext } from "react";
import {
  exists,
  findSetVariantProps,
  makeCompositeDefaultProps,
} from "./_internal_utils";
import {
  RootPrimitive,
  ImagePrimitive,
  TextPrimitive,
} from "./_internal_primitives";

const styles = [
  {
    type: "default",
    layers: {
      XUV744u51e: {
        none: {
          text: "Text",
        },
      },
    },
  },
  {
    type: "boolean",
    propName: "small",
    layers: {},
  },
  {
    type: "boolean",
    propName: "letter",
    layers: {
      XUV744u51e: {
        none: {
          text: "A",
        },
      },
    },
  },
];

const defaultPropValues = [
  {
    type: "default",
    layers: {},
  },
  {
    type: "boolean",
    propName: "small",
    layers: {},
  },
  {
    type: "boolean",
    propName: "letter",
    layers: {},
  },
];

const variantPropTypes = [
  {
    type: "boolean",
    propName: "small",
  },
  {
    type: "boolean",
    propName: "letter",
  },
];

export const AvatarContext = createContext(null);

function Avatar(_props) {
  const defaults = useContext(AvatarContext);
  const props = { ...defaults, ..._props };
  const activeVariants = findSetVariantProps(variantPropTypes, props);
  const getCompositeDefaultProps = makeCompositeDefaultProps(
    defaultPropValues,
    activeVariants
  );
  return (
    <RootPrimitive
      {...props}
      key="F5bRqs4Lma"
      addSpacing={false}
      internal={{
        projectId: "7X7HTLRqyD",
        styles: styles,
        layerId: "F5bRqs4Lma",
        scope: "NX3W3WrU94",
        activeVariants: activeVariants,
      }}
    >
      {(getStyle) => (
        <>
          <ImagePrimitive
            id={"Image_8j5z7tn7p2"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_NX3W3WrU94_8j5z7tn7p2"
            }
            key={"8j5z7tn7p2"}
            src={
              exists(props.imageSrc)
                ? props.imageSrc
                : getStyle("8j5z7tn7p2", "src")
            }
            alt={getStyle("8j5z7tn7p2", "alternateText")}
          />
          <TextPrimitive
            id={"Text_XUV744u51e"}
            className={
              "__visly_reset_7X7HTLRqyD __visly_scope_NX3W3WrU94_XUV744u51e"
            }
            key={"XUV744u51e"}
            text={
              exists(props.text) ? props.text : getStyle("XUV744u51e", "text")
            }
            element={getStyle("XUV744u51e", "htmlElement")}
          />
        </>
      )}
    </RootPrimitive>
  );
}

Avatar.__variants = [
  {
    name: "small",
    type: "variant",
  },
  {
    name: "letter",
    type: "variant",
  },
];

export default Avatar;
