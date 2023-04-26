import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsLinkedin,
  BsYoutube,
} from 'react-icons/bs';

type iconProps = {
  color: string;
  name?: string;
  text?: string;
};

export const Facebook = (props: iconProps) => (
  <a
    href="https://www.facebook.com/chowafricahq"
    className="flex justify-center icon items-center space-x-3"
    target="_blank"
  >
    <BsFacebook size={20} fill={props.color} />
    {props.name && (
      <div
        style={{
          color: props.text ? props.text : '#fff',
        }}
        className="uppercase tracking-[0.095em] text-white font-pangram-light"
      >
        {props.name}
      </div>
    )}
  </a>
);
export const Twitter = (props: iconProps) => (
  <a
    href="https://twitter.com/chowafricahq/status/1639198404906737668?s=46&t=WCDfHl1ip7Mn-5CR-HI0Hg"
    className="flex justify-center icon items-center space-x-3"
    target="_blank"
  >
    <BsTwitter size={20} fill={props.color} />
    {props.name && (
      <div
        style={{
          color: props.text ? props.text : '#fff',
        }}
        className="uppercase tracking-[0.095em] text-white font-pangram-light"
      >
        {props.name}
      </div>
    )}
  </a>
);

export const Instagram = (props: iconProps) => (
  <a
    href="https://www.instagram.com/invites/contact/?i=yajy6fjr428&utm_content=qxdnnyy"
    className="flex justify-center icon items-center space-x-3"
    target="_blank"
  >
    <BsInstagram size={20} fill={props.color} />
    {props.name && (
      <div
        style={{
          color: props.text ? props.text : '#fff',
        }}
        className="uppercase tracking-[0.095em] text-white font-pangram-light"
      >
        {props.name}
      </div>
    )}
  </a>
);
export const Youtube = (props: iconProps) => (
  <a
    href="chow.africa"
    className="flex justify-center icon items-center space-x-3"
    target="_blank"
  >
    <BsYoutube size={20} fill={props.color} />
    {props.name && (
      <div
        style={{
          color: props.text ? props.text : '#fff',
        }}
        className="uppercase tracking-[0.095em] text-white font-pangram-light"
      >
        {props.name}
      </div>
    )}
  </a>
);
export const LinkedIn = (props: iconProps) => (
  <a
    href="chow.africa"
    className="flex justify-center icon items-center space-x-3"
    target="_blank"
  >
    <BsLinkedin size={20} fill={props.color} />
    {props.name && (
      <div
        style={{
          color: props.text ? props.text : '#fff',
        }}
        className="uppercase tracking-[0.095em] text-white font-pangram-light"
      >
        {props.name}
      </div>
    )}
  </a>
);
