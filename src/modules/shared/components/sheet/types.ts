import { ComponentPropsWithRef, Dispatch, PropsWithChildren, SetStateAction } from 'react';
import { Sheet } from 'tamagui';

export type BaseSheetState = { open: boolean; position: number };
export type BaseSheetProps<T> = PropsWithChildren<{
  state: T;
  setState: Dispatch<SetStateAction<T>>;
  sheetProps?: ComponentPropsWithRef<typeof Sheet>;
  frameProps?: ComponentPropsWithRef<typeof Sheet.Frame>;
}>;
