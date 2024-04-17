"use server";

const CLIENT_ID =
  "3MVG9.AS5PzgHfpbrTTQ5BijorFAiiGefniQh0qR6eJpfX9ziy2gG74HvXcMlGxSmkYQkEGIYtpLcER93hD1a";
const CLIENT_SECRET =
  "2ADC555A5ED6EFF5A3B16F84CE5F7B6414CBA1C2F4704BE7647ADE79C4E196A3";
const USERNAME = "uttam@cloudprism.in.es.krispcall";
const PASSWORD = "Winter@24";
const TOKEN_ENDPOINT = "https://test.salesforce.com/services/oauth2/token";
const SALESFORCE_INSTANCE_URL =
  "https://cloudprism--krispcall.sandbox.my.salesforce.com/";
const GRANT_TYPE = "password";

const authenticate = async () => {
  try {
    const response = await fetch(TOKEN_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Cookie:
          "BrowserId=gJc-Lo6ZEe60jW9Xc-R_1w; CookieConsentPolicy=0:0; LSKey-c$CookieConsentPolicy=0:0",
      },
      body: new URLSearchParams({
        grant_type: GRANT_TYPE,
        client_id: CLIENT_ID,
        client_secret: CLIENT_SECRET,
        username: USERNAME,
        password: PASSWORD,
      }).toString(),
    });

    const data = await response.json();
    return data.access_token;
  } catch (error) {
    console.error("Authentication error:", error);
    throw error;
  }
};

const createLead = async (accessToken, leadData) => {
  try {
    const url = `${SALESFORCE_INSTANCE_URL}/services/apexrest/createLead`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating lead:", error);
    throw error;
  }
};

export const sendLead = async (leadData) => {
  try {
    const accessToken = await authenticate();
    const result = await createLead(accessToken, leadData);
    console.log("Lead created successfully:", result);
  } catch (error) {
    console.error("Error:", error);
  }
};

// module.exports = sendLead;
