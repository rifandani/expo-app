import { LocalizedString } from 'typesafe-i18n';

type WrapTranslationProps = {
  message: LocalizedString;
  children: (messagePart: LocalizedString) => JSX.Element;
};

/**
 * create a component that handles the translated message. Make sure the `message` is formatted like this `<>TEXT_HERE<>`
 *
 * @example
 *
 * <WrapTranslation
 *   message={LL.auth.registerHere()}
 *   children={(infix) => <Link href="/register"> {infix}</Link>}
 * />
 *
 * <WrapTranslation message={LL.auth.registerHere()}>
 *  {(infix) => <Link href="/register"> {infix}</Link>}
 * </WrapTranslation>
 */
export function WrapTranslation({ message, children }: WrapTranslationProps) {
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
      {children(infix)}
      {postfix}
    </>
  );
}
