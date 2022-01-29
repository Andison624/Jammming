import { useState } from "react";

// Hold the user’s access token
let accessToken;

export default function Spotify() {
  const getAccessToken = () => {
    // Check if the user’s access token is already set. If it is, return the value saved to access token.
    if (accessToken) {
      return accessToken;
    }
    // Check for access token match
    // Using the Implicit Grant Flow(https://developer.spotify.com/documentation/general/guides/authorization/) to setup a user’s account and make requests.
    const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
    const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
    // If the access token and expiration time are in the URL
    if (accessTokenMatch && expiresInMatch) {
      // Set the access token value
      accessToken = accessTokenMatch[1];
      // Set a variable for expiration time
      const expiresIn = Number(expiresInMatch[1]);
      // Set the access token to expire at the value for expiration time
      window.setTimeout(() => (accessToken = ""), expiresIn * 1000);
      // Clear the parameters from the URL, so the app doesn’t try grabbing the access token after it has expired
      window.history.pushState("Access Token", null, "/");
    }
  };
}
