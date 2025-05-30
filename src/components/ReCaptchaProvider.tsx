import { GoogleReCaptchaProvider } from '@google-recaptcha/react';



interface LayoutProps {
  children: React.ReactNode;
}

// 6Lftyk8rAAAAAKUF3KHa7A__AUpbXAI97rwENYcN
// 6Lftyk8rAAAAAGzPO4AuhvKWb2soXAXo9GqsGs-F

const ReCaptchaProvider: React.FC<LayoutProps> = ({children}) => {
    return (
        <GoogleReCaptchaProvider
        type="v3"
        siteKey="6Lftyk8rAAAAAKUF3KHa7A__AUpbXAI97rwENYcN"
    >
        {children}
    </GoogleReCaptchaProvider>
    )
}

export default ReCaptchaProvider;