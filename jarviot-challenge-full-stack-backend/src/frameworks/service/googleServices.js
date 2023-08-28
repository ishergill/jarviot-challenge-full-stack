const {google} = require('googleapis');
const dotenv = require('../../dotenvConfig');
var mime = require('mime-types')
const oauth2Client = new google.auth.OAuth2(
    dotenv.google_client_id,
    dotenv.google_secret,
  dotenv.google_redirect
);


const googleService = ( )=>{
  const drive = google.drive({ version: 'v3', auth: oauth2Client });
  console.log('drive' ,drive)
    const googleAuth  = async()=>{
        const url = await oauth2Client.generateAuthUrl({
            access_type: 'offline',
          
            scope: [ "https://www.googleapis.com/auth/userinfo.profile","https://www.googleapis.com/auth/drive" ]
          })
          console.log(url)

          return url
    }

    const handleToken = async(code)=>{

      const { tokens } = await oauth2Client.getToken(code)
      oauth2Client.setCredentials(tokens)
      console.log("Code : " , tokens)
         storedTokens = tokens
       return tokens

    }
    const retrieveDriveData = async () => {
        try {
          const filesResponse = await drive.files.list({
            pageSize: 1000,
            fields: 'files(id, name, mimeType ,size, owners, permissions, webViewLink)',
            includeItemsFromAllDrives: true,
            supportsAllDrives: true
          });
      
          let items = filesResponse.data.files;
      
          // Print the details of each item
         items =  items.map((item) => {
            fileExtension = mime.extension(item.mimeType)
             item.fileExtension = fileExtension
             item.storage = (item.size / (15 * 1024 * 1024 * 1024)) * 100; // 15 GB in bytes
             return item
           
          });
          console.log(items)
      
            return items
          
        } catch (error) {
          console.error('Error retrieving drive data:', error.message);
          return
        }
      };

    const revokeAccess = async () => {
        try {
          await oauth2Client.revokeCredentials();
          console.log('Access revoked successfully!');
        } catch (error) {
          console.error('Error revoking access:', error.message);
        }
      };

      const refreshToken = async () => {
        try {
          const { tokens } = await oauth2Client.refreshToken(storedTokens.refresh_token);
          oauth2Client.setCredentials(tokens);
          storedTokens = tokens;
          console.log('Token refreshed successfully!');
        } catch (error) {
          console.error('Error refreshing token:', error.message);
        }
      };
     
      // Set the refresh handler callback
      oauth2Client.on('tokens', (tokens) => {
        if (tokens.refresh_token) {
          storedTokens.refresh_token = tokens.refresh_token;
        }
        refreshToken(); // Refresh the token whenever a new token is received
      });
    

    return { googleAuth , handleToken , retrieveDriveData , revokeAccess}

}

module.exports = googleService