import Feather from '@expo/vector-icons/Feather';
import { isFunction } from '@rifandani/nxact-yutiriti';
import { Children, Dispatch, ReactNode, SetStateAction, useState } from 'react';
import { Button, Sheet } from 'tamagui';

import { HeaderButtonProps } from '#shared/types/navigation';
import { isEmptyChildren } from '#shared/utils/helper';

type State = { open: boolean; position: number };
type RenderProps = {
  state: State;
  setState: Dispatch<
    SetStateAction<{
      open: boolean;
      position: number;
    }>
  >;
};
type HeaderMoreProps = HeaderButtonProps & {
  children: ReactNode | (({ state, setState }: RenderProps) => ReactNode);
};

/**
 * an example of using `children` as "render props"
 */
export function HeaderMore({ children }: HeaderMoreProps) {
  const [state, setState] = useState<State>({ open: false, position: 0 });

  const onPressMore = () => {
    setState({ ...state, open: true });
  };
  const onOpenChange = (open: boolean) => {
    setState({ ...state, open });
  };
  const onPositionChange = (position: number) => {
    setState({ ...state, position });
  };

  return (
    <>
      <Button
        transparent
        circular
        icon={<Feather name="more-vertical" size={20} />}
        onPress={onPressMore}
      />

      <Sheet
        modal
        dismissOnSnapToBottom
        snapPointsMode="percent"
        snapPoints={[85, 50, 25]}
        zIndex={100_000}
        open={state.open}
        forceRemoveScrollEnabled={state.open}
        position={state.position}
        onOpenChange={onOpenChange}
        onPositionChange={onPositionChange}
        animation="medium">
        <Sheet.Overlay animation="lazy" enterStyle={{ opacity: 0 }} exitStyle={{ opacity: 0 }} />

        <Sheet.Handle />

        <Sheet.Frame padding="$2" jc="center" ai="center">
          {isFunction(children)
            ? children({ state, setState })
            : !isEmptyChildren(children)
            ? Children.only(children)
            : null}
        </Sheet.Frame>
      </Sheet>
    </>
  );
}
