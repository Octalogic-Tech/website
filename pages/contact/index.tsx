import * as React from "react";

import Box from "@mui/material/Box";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";

import PillButton from "../../components/pill-button/pill-button";
import Head from "../../components/head";
import Heading from "../../components/heading/heading";
import Paragraph from "../../components/paragraph/paragraph";

import { Turnstile, TurnstileInstance } from "@marsidev/react-turnstile";

import * as vars from "../../config/vars";

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
  const [name, setName] = React.useState("Jane");
  const [email, setEmail] = React.useState("jane@octalogic.in");
  const [phone, setPhone] = React.useState("9875");
  const [message, setMessage] = React.useState("Hello");
  const [showThankYouMsg, setShowThankYouMsg] = React.useState(false);
  const [turnstileToken, setTurnstileToken] = React.useState("");
  const turnstileRef = React.useRef<TurnstileInstance>(null);

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

  const handleFormSubmit = async (e: React.BaseSyntheticEvent) => {
    e.preventDefault();

    if (!turnstileToken) {
      // TODO: verification has failed, add a snackbar with an action that refreshes page so it can retry
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

    // TODO: add a snackbar to indicate reponse

    if (response.status > 300) {
      console.error(result.error);
    } else {
      turnstileRef.current?.reset();
      setShowThankYouMsg(true);
      setName("");
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };

  return (
    <>
      <Head title="Octalogic Tech - Contact" canonicalUrl={siteUrl} />
      <Box sx={{ maxWidth: { xs: "22rem", sm: "40rem", lg: "64rem" }, margin: "0 auto" }}>
        <Heading
          size="large"
          sx={{
            fontSize: { xs: "1.65rem", sm: "2.5rem", lg: "3rem" },
            lineHeight: { xs: "2rem", sm: "2.5rem", lg: "3.5rem" },
            fontWeight: "600",
            marginTop: { xs: "1.15rem", lg: "4.25rem" },
            marginBottom: "0.5rem",
            textAlign: "center",
            color: "primary.main",
          }}
        >
          Let&apos;s have a conversation
        </Heading>
        <Paragraph
          sx={{
            fontSize: "1rem",
            textAlign: "center",
            opacity: "0.8",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          info@octalogic.in &nbsp; | &nbsp; +91 7030518285
        </Paragraph>
        <Paragraph
          sx={{
            fontSize: "1rem",
            textAlign: "center",
            opacity: "0.8",
            marginBottom: "1rem",
            lineHeight: "1.5",
          }}
        >
          3rd Floor, Sunivas Building, Near Taj Vivanta, St. Inez, Goa
        </Paragraph>
        <Paragraph
          sx={{
            fontSize: "1rem",
            textAlign: "center",
            opacity: "0.95",
            marginBottom: "1rem",
            lineHeight: "1.5",
            marginTop: "1.5rem",
          }}
        >
          Send us a message and we&apos;ll get in touch with you shortly to better understand your
          needs and brainstorm possible solutions.
        </Paragraph>
        <Box
          component="form"
          sx={{
            maxWidth: { xs: "20rem", sm: "26rem", lg: "40rem" },
            margin: "0 auto",
            marginTop: "4rem",
          }}
          autoComplete="off"
          onSubmit={handleFormSubmit}
        >
          <FormControl fullWidth required>
            <InputLabel
              htmlFor="name"
              sx={{
                top: "-0.375rem",
              }}
            >
              Name
            </InputLabel>
            <OutlinedInput
              id="name"
              label="Name"
              size="small"
              value={name}
              onChange={(e) => handleChange(e, "name")}
            />
            <MyFormHelperText helperText={"So we can be polite and call you by name"} />
          </FormControl>
          <FormControl fullWidth required>
            <InputLabel htmlFor="email" sx={{ top: "-0.375rem" }}>
              Email
            </InputLabel>
            <OutlinedInput
              id="email"
              label="Email"
              size="small"
              type="email"
              value={email}
              onChange={(e) => handleChange(e, "email")}
            />
            <MyFormHelperText helperText={"So we can contact you"} />
          </FormControl>
          <FormControl fullWidth>
            <InputLabel htmlFor="phone" sx={{ top: "-0.375rem" }}>
              Phone number
            </InputLabel>
            <OutlinedInput
              id="phone"
              label="Phone number"
              size="small"
              type="tel"
              value={phone}
              onChange={(e) => handleChange(e, "phone")}
            />
            <MyFormHelperText helperText={"So we can call you"} />
          </FormControl>
          <FormControl fullWidth required>
            <InputLabel htmlFor="message" sx={{ top: "-0.375rem" }}>
              Message
            </InputLabel>
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
            />
            <MyFormHelperText helperText={"How can we help?"} />
          </FormControl>
          <Turnstile
            ref={turnstileRef}
            siteKey={vars.turnstileSiteKey}
            onSuccess={(token) => setTurnstileToken(token)}
            onError={() => setTurnstileToken("")}
            style={{ textAlign: "center", marginBottom: "2rem" }}
          />
          <Box sx={{ textAlign: "center" }}>
            <PillButton
              title={"Send Message"}
              sx={{
                backgroundColor: "secondary.main",
                padding: "0.7rem 2rem",
                lineHeight: "1.5",
                ":hover": {
                  backgroundColor: "secondary.main",
                  boxShadow: "2px 4px 10px rgb(255 98 167 / 40%)",
                },
              }}
              type="submit"
            />
          </Box>
        </Box>
        <Paragraph
          sx={{
            fontSize: "1rem",
            color: "text.secondary",
            textAlign: "center",
            marginTop: "2rem",
            marginBottom: "1rem",
            lineHeight: "1.5",
            opacity: showThankYouMsg ? "1" : "0",
          }}
        >
          Thank you for contacting us. We&apos;ll get in touch soon
        </Paragraph>
      </Box>
      <Box
        sx={{
          width: "100%",
          paddingTop: "calc(100% / 2.3)",
          backgroundImage: "url('/images/contact_background.svg')",
          backgroundRepeat: "no-repeat",
        }}
      ></Box>
    </>
  );
};

export default Contact;
