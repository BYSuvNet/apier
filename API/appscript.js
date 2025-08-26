function downloadData()
{
    const dataName = 'products'; //ändra till customer eller orders för annan data

    //hämta eller skapa sheet
    const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = spreadsheet.getSheetByName(dataName) || spreadsheet.insertSheet(dataName);
    sheet.clear(); //rensa gammal data

    //ladda ner ny data från API
    const response = UrlFetchApp.fetch('https://www.suvnet.se/api/' + dataName);
    const jsonData = JSON.parse(response.getContentText());

    //lägg in data i sheetet
    if (jsonData.length > 0) {
        const headers = Object.keys(jsonData[0]);
        sheet.appendRow(headers);

        jsonData.forEach(item => {
            const row = headers.map(header => item[header]);
            sheet.appendRow(row);
        });
    }
}