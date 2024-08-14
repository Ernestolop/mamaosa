import { google } from 'googleapis';

class GoogleSheetConnector {

  #spreadsheetId = process.env.SPREADSHEET_ID;
  #serviceAccount = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  #privateKey = process.env.GOOGLE_PRIVATE_KEY.split(String.raw`\n`).join('\n');
  #scopes = "https://www.googleapis.com/auth/spreadsheets";

  async #getAuthClient() {
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: this.#serviceAccount,
        private_key: this.#privateKey.replace(/\\n/g, "\n"),
      },
      scopes: this.#scopes,
    });
    return await auth.getClient();
  }

  async getSheetValues(range) {
    try {
      const client = await this.#getAuthClient();
      const sheets = google.sheets({ version: "v4", auth: client });
      const response = await sheets.spreadsheets.values.get({
        spreadsheetId: this.#spreadsheetId,
        range,
      });
      return response.data.values;
    }
    catch (error) {
      console.error("The API returned an error:", error.response?.data || error.message);
      throw error;
    }
  }

}

export default GoogleSheetConnector;