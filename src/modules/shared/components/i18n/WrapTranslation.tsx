import { LocalizedString } from 'typesafe-i18n';

type WrapTranslationProps = {
  message: LocalizedString;
  Component: (messagePart: LocalizedString) => JSX.Element;
};

/**
 * create a component that handles the translated message
 *
 * NOTE: the translation should be something like this `Click <>infix<>, to create project`
 */
export function WrapTranslation({ message, Component }: WrapTranslationProps) {
  // define a split character, in this case '<>'
  let [prefix, infix, postfix] = message.split('<>') as LocalizedString[];

  // render infix only if the message doesn't have any split characters
  if (!infix && !postfix) {
    infix = prefix;
    prefix = '' as LocalizedString;
  }

  return (
    <>
      {prefix}
      {Component(infix)}
      {prefix}
    </>
  );
}
