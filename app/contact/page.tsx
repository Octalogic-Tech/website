"use client";
import * as React from "react";
import Styles from "../../styles/contact.module.css";

// import { SnackbarProvider, useSnackbar } from "notistack";

// import Box from "@mui/material/Box";
import FormControl, { useFormControl } from "@mui/material/FormControl";
// import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";

import PillButton from "../../src/components/pill-button/pill-button";
import Head from "../../src/components/head";
import Heading from "../../src/components/heading/heading";
import Paragraph from "../../src/components/paragraph/paragraph";
import TurnstileWidget from "../../src/components/turnstile-widget/turnstile-widget";

import * as vars from "../../src/config/vars";

type RenderParameters = {
  sitekey: string;
  theme?: "light" | "dark";
  callback?(token: string): void;
};

declare global {
  interface Window {
    onloadTurnstileCallback(): void;
    turnstile: {
      render(container: string | HTMLElement, params: RenderParameters): void;
      getResponse(id: string): string;
      reset(id: string): void;
    };
  }
}

const siteUrl = `https://${vars.host}/contact`;

function MyFormHelperText({ helperText }: { helperText: string }) {
  const { focused } = useFormControl() || {};
  const text = React.useMemo(() => {
    if (focused) {
      return helperText;
    }
    return " ";
  }, [focused, helperText]);
  return (
    <FormHelperText sx={{ marginBottom: "1.5rem", color: "text.secondary", fontWeight: "400" }}>
      {text}
    </FormHelperText>
  );
}

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [showThankYouMsg, setShowThankYouMsg] = React.useState(false);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  // const { enqueueSnackbar } = useSnackbar();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    inputName: string,
  ) => {
    if (showThankYouMsg) setShowThankYouMsg(false);
    switch (inputName) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "phone":
        setPhone(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        return;
    }
  };

  const resetTurnstile = () => {
    if (typeof window !== undefined) window.turnstile.reset("#contactFormWidget");
  };

  const getTurnstileToken = () => {
    if (typeof window !== undefined) return window.turnstile.getResponse("#contactFormWidget");
  };

  const handleFormSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const turnstileToken = getTurnstileToken();

    if (!turnstileToken) {
      // enqueueSnackbar("Invalid captcha, please try again.", { variant: "error" });
      resetTurnstile();
      setIsSubmitting(false);
      return;
    }

    const endpoint = "/api/contact";
    const data = {
      turnstileToken,
      name,
      email,
      phone,
      message,
    };
    const JSONdata = JSON.stringify(data);

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const result = await response.json();

    if (result.statusCode > 300) {
      console.error(result.message);
      // enqueueSnackbar(result.message, { variant: "error" });
      if (result.statusCode === 412) resetTurnstile();
      setIsSubmitting(false);
    } else {
      // enqueueSnackbar(result.message, { variant: "success" });
      resetTurnstile();
      setShowThankYouMsg(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Head title="Octalogic Tech - Contact" canonicalUrl={siteUrl} />
      <TurnstileWidget widgetId="contactFormWidget" />
      {/* <Box className={Styles.container}> */}
      <div className="mx-auto sm:max-w-[22rem] md:max-w-[40rem] xl:max-w-[64rem]">
        {/* <Heading size="large" sx={{ color: "primary.main" }} className={Styles.heading_1}> */}
        <Heading
          size="large"
          // sx={{ color: "primary.main" }}
          className="mb-2 text-center"
        >
          Let&apos;s have a conversation
        </Heading>
        {/* <Paragraph className={Styles.para_1}> */}
        <Paragraph className="text-sm text-center opacity-80 mb-4 leading-6">
          info@octalogic.in &nbsp; | &nbsp; +91 7030518285
        </Paragraph>
        {/* <Paragraph className={Styles.para_2}> */}
        <Paragraph className="text-sm text-center opacity-80 mb-4 leading-6">
          3rd Floor, Sunivas Building, Near Taj Vivanta, St. Inez, Goa
        </Paragraph>
        {/* <Paragraph className={Styles.para_3}> */}
        <Paragraph className="text-sm text-center mb-4 leading-6 opacity-95 mt-6">
          Send us a message and we&apos;ll get in touch with you shortly to better understand your
          needs and brainstorm possible solutions.
        </Paragraph>
        <div
          // component="form"
          // className={Styles.form}
          className="mx-auto mt-16 sm:max-w-[20rem] md:max-w-[26rem] xl:max-w-[40rem]"
          // autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <FormControl fullWidth required>
            {/* <InputLabel htmlFor="name" className={Styles.input_label}> */}
            <input placeholder="Name" type="text" className="top[-0.375rem]" />
            <OutlinedInput
              inputProps={{
                maxLength: 300,
              }}
              id="name"
              label="Name"
              size="small"
              value={name}
              onChange={(e) => handleChange(e, "name")}
              // className={Styles.outlined_input}
              className="bg-white"
            />
            <MyFormHelperText helperText={"So we can be polite and call you by name"} />
          </FormControl>
          <FormControl fullWidth>
            {/* <InputLabel htmlFor="email" className={Styles.input_label}> */}
            <input placeholder="Email" type="email" className="top[-0.375rem]" />
            <OutlinedInput
              inputProps={{
                maxLength: 320,
              }}
              id="email"
              label="Email"
              size="small"
              type="email"
              value={email}
              onChange={(e) => handleChange(e, "email")}
              // className={Styles.outlined_input}
              className="bg-white"
            />
            <MyFormHelperText helperText={"So we can contact you"} />
          </FormControl>
          <FormControl fullWidth required>
            {/* <InputLabel htmlFor="phone" className={Styles.input_label}> */}
            <input placeholder="Phone number" type="text" className="top[-0.375rem]" />
            <OutlinedInput
              inputProps={{
                maxLength: 20,
              }}
              id="phone"
              label="Phone number"
              size="small"
              type="tel"
              value={phone}
              onChange={(e) => handleChange(e, "phone")}
              // className={Styles.outlined_input}
              className="bg-white"
            />
            <MyFormHelperText helperText={"So we can call you"} />
          </FormControl>
          <FormControl fullWidth required>
            {/* <InputLabel htmlFor="message" className={Styles.input_label}> */}
            <input placeholder="Message" type="text" className="top[-0.375rem]" />
            <OutlinedInput
              multiline
              minRows={2}
              inputProps={{
                maxLength: 3000,
              }}
              id="message"
              label="Message"
              size="small"
              value={message}
              onChange={(e) => handleChange(e, "message")}
              // className={Styles.outlined_input}
              className="bg-white"
            />
            <MyFormHelperText helperText={"How can we help?"} />
          </FormControl>
          {/* <Box id="contactFormWidget" className={Styles.widget} /> */}
          <div id="contactFormWidget" className="text-center mb-8" />
          {/* <Box className={Styles.btn_wrap}> */}
          <div className="text-center">
            <PillButton title={"Send Message"} type="submit" loading={isSubmitting} />
          </div>
        </div>
        <Paragraph
          // className={Styles.thank_you}
          className="text-sm text-center mb-4 leading-6 mt-8"
          // sx={{
          //   color: "text.secondary",
          //   opacity: showThankYouMsg ? "1" : "0",
          // }}
        >
          Thank you for contacting us. We&apos;ll get in touch soon
        </Paragraph>
      </div>
      <div className={Styles.bg}></div>
    </>
  );
};

export default Contact;

// "use client";

// import * as React from "react";
// import Styles from "../../styles/contact.module.css";
// import { useSnackbar } from "notistack";
// import PillButton from "../../src/components/pill-button/pill-button";
// import Head from "../../src/components/head";
// import Heading from "../../src/components/heading/heading";
// import Paragraph from "../../src/components/paragraph/paragraph";
// import TurnstileWidget from "../../src/components/turnstile-widget/turnstile-widget";
// import * as vars from "../../src/config/vars";

// const siteUrl = `https://${vars.host}/contact`;

// const Contact = () => {
//   const [name, setName] = React.useState("");
//   const [email, setEmail] = React.useState("");
//   const [phone, setPhone] = React.useState("");
//   const [message, setMessage] = React.useState("");
//   const [showThankYouMsg, setShowThankYouMsg] = React.useState(false);
//   const [isSubmitting, setIsSubmitting] = React.useState(false);
//   const { enqueueSnackbar } = useSnackbar();

//   const handleChange = (e, inputName) => {
//     if (showThankYouMsg) setShowThankYouMsg(false);
//     switch (inputName) {
//       case "name":
//         setName(e.target.value);
//         break;
//       case "email":
//         setEmail(e.target.value);
//         break;
//       case "phone":
//         setPhone(e.target.value);
//         break;
//       case "message":
//         setMessage(e.target.value);
//         break;
//       default:
//         return;
//     }
//   };

//   const resetTurnstile = () => {
//     if (typeof window !== "undefined") window.turnstile.reset("#contactFormWidget");
//   };

//   const getTurnstileToken = () => {
//     if (typeof window !== "undefined") return window.turnstile.getResponse("#contactFormWidget");
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);
//     const turnstileToken = getTurnstileToken();

//     if (!turnstileToken) {
//       enqueueSnackbar("Invalid captcha, please try again.", { variant: "error" });
//       resetTurnstile();
//       setIsSubmitting(false);
//       return;
//     }

//     const endpoint = "/api/contact";
//     const data = {
//       turnstileToken,
//       name,
//       email,
//       phone,
//       message,
//     };
//     const JSONdata = JSON.stringify(data);

//     const options = {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSONdata,
//     };

//     const response = await fetch(endpoint, options);
//     const result = await response.json();

//     if (result.statusCode > 300) {
//       console.error(result.message);
//       enqueueSnackbar(result.message, { variant: "error" });
//       if (result.statusCode === 412) resetTurnstile();
//       setIsSubmitting(false);
//     } else {
//       enqueueSnackbar(result.message, { variant: "success" });
//       resetTurnstile();
//       setShowThankYouMsg(true);
//       setName("");
//       setEmail("");
//       setPhone("");
//       setMessage("");
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <Head title="Octalogic Tech - Contact" canonicalUrl={siteUrl} />
//       <TurnstileWidget widgetId="contactFormWidget" />
//       <div className={Styles.container}>
//         <Heading size="large" style={{ color: "primary.main" }} className={Styles.heading_1}>
//           Let's have a conversation
//         </Heading>
//         <Paragraph className={Styles.para_1}>
//           info@octalogic.in &nbsp; | &nbsp; +91 7030518285
//         </Paragraph>
//         <Paragraph className={Styles.para_2}>
//           3rd Floor, Sunivas Building, Near Taj Vivanta, St. Inez, Goa
//         </Paragraph>
//         <Paragraph className={Styles.para_3}>
//           Send us a message and we'll get in touch with you shortly to better understand your needs
//           and brainstorm possible solutions.
//         </Paragraph>
//         <form className={Styles.form} autoComplete="off" onSubmit={handleFormSubmit}>
//           <div>
//             <label htmlFor="name" className={Styles.input_label}>
//               Name
//             </label>
//             <input
//               id="name"
//               type="text"
//               value={name}
//               onChange={(e) => handleChange(e, "name")}
//               className={Styles.outlined_input}
//               required
//             />
//             <div className={Styles.form_helper_text}>So we can be polite and call you by name</div>
//           </div>
//           <div>
//             <label htmlFor="email" className={Styles.input_label}>
//               Email
//             </label>
//             <input
//               id="email"
//               type="email"
//               value={email}
//               onChange={(e) => handleChange(e, "email")}
//               className={Styles.outlined_input}
//             />
//             <div className={Styles.form_helper_text}>So we can contact you</div>
//           </div>
//           <div>
//             <label htmlFor="phone" className={Styles.input_label}>
//               Phone number
//             </label>
//             <input
//               id="phone"
//               type="tel"
//               value={phone}
//               onChange={(e) => handleChange(e, "phone")}
//               className={Styles.outlined_input}
//               required
//             />
//             <div className={Styles.form_helper_text}>So we can call you</div>
//           </div>
//           <div>
//             <label htmlFor="message" className={Styles.input_label}>
//               Message
//             </label>
//             <textarea
//               id="message"
//               value={message}
//               onChange={(e) => handleChange(e, "message")}
//               className={Styles.outlined_input}
//               required
//             />
//             <div className={Styles.form_helper_text}>How can we help?</div>
//           </div>
//           <div id="contactFormWidget" className={Styles.widget}></div>
//           <div className={Styles.btn_wrap}>
//             <PillButton title="Send Message" type="submit" loading={isSubmitting} />
//           </div>
//         </form>
//         <div
//           className={Styles.thank_you}
//           style={{
//             color: "text.secondary",
//             opacity: showThankYouMsg ? "1" : "0",
//           }}
//         >
//           Thank you for contacting us. We'll get in touch soon.
//         </div>
//       </div>
//       <div className={Styles.bg}></div>
//     </>
//   );
// };

// export default Contact;
