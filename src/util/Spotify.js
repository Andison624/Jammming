// Set the client ID variable to the value provided on application page.
const clientId = "dfd87ff0e41d4aacb961ef97023ecfd7";
const redirectUri = "http://localhost:3000/";
// Hold the user’s access token
let accessToken;

const Spotify = {
  getAccessToken() {
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
      return accessToken;
    } else {
      // Redirect users to this Uri
      const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
      window.location = accessUrl;
    }
  },
  // Accepts a parameter for the user’s search term.
  search(term) {
    const accessToken = Spotify.getAccessToken();
    // Returns a promise that will eventually resolve to the list of tracks from the search.
    return (
      fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
        // Convert the returned response to JSON
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          // If the JSON does not contain any tracks, return an empty array.
          if (!jsonResponse.tracks) {
            return [];
          }
          // Map the converted JSON to an array of tracks.
          return jsonResponse.tracks.items.map((track) => ({
            id: track.id,
            name: track.name,
            artist: track.artists[0].name,
            album: track.album.name,
            uri: track.uri,
          }));
        })
    );
  },
  savePlayList(name, trackUris) {
    // Check if there are values saved to the the name of the playlist and  array of track URIs. If not,return.
    if (!name || !trackUris.length) {
      return;
    }
    // An access token variable, set to the current user’s access token
    const accessToken = Spotify.getAccessToken();
    // A headers variable, set to an object with an Authorization parameter containing the user’s access token in the (https://developer.spotify.com/documentation/general/guides/authorization/)
    const headers = { Authorization: `Bearer ${accessToken}` };
    // An empty variable for the user’s ID
    let userId;
    // Make a request that returns the user’s Spotify username.
    return (
      fetch("https://api.spotify.com/v1/me", { headers: headers })
        // Convert the response to JSON and save the response id parameter to the user’s ID variable.
        .then((response) => response.json())
        .then((jsonResponse) => {
          userId = jsonResponse.id;
          return (
            // Use the (https://developer.spotify.com/documentation/web-api/reference/#/) to find a request that creates a new playlist.
            (fetch(`https://api.spotify.com/v1/users/${userId}/playlists`),
            {
              headers: headers,
              method: "POST",
              body: JSON.stringify({ name: name }),
            })
              .then((response) => response.json())
              .then((jsonResponse) => {
                // Convert the response to JSON and save the response id parameter to a variable called playlistID.
                const playlistId = jsonResponse.id;
                // Use the returned user ID to make a POST request that creates a new playlist in the user’s account and returns a playlist ID.
                return (
                  // Use  (https://developer.spotify.com/documentation/web-api/reference/#/) to find a request that adds tracks to a playlist.
                  fetch(
                    `https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`
                  ),
                  {
                    headers: headers,
                    method: "POST",
                    body: JSON.stringify({ uris: trackUris }),
                  }
                );
              })
          );
        })
    );
  },
};

export default Spotify;
