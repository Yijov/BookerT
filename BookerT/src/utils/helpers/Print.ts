import { Workbook } from 'exceljs';
import { capitalizeFirstLetter } from './Tools';

/**
 *
 * @param data
 * @param fileName
 * @param headers
 */
export const printToExcel = (data: any[], fileName: string, headers: string[] = []) => {
  // Create a new workbook
  const workbook = new Workbook();
  // Add a worksheet to the workbook
  const worksheet = workbook.addWorksheet('Sheet1');

  // Add headers from the first object in the array
  if (data.length > 0) {
    const hdrs = headers.length > 0 ? headers : Object.keys(data[0]);
    const row = worksheet.addRow(hdrs.map(h=> capitalizeFirstLetter(h)));
    row.eachCell(cell => {
      cell.fill = {
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'FF0073E6' } // Blue background color
      };
      cell.font = {
        color: { argb: 'FFFFFFFF' }, // White text color
        bold: true
      };
      cell.alignment = { horizontal: 'center' };
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });
  }

  // Add data rows from the JSON array
  data.forEach(obj => {
    const values = Object.values(obj);
    const row = worksheet.addRow(values);
    row.eachCell(cell => {
      cell.border = {
        top: { style: 'thin' },
        left: { style: 'thin' },
        bottom: { style: 'thin' },
        right: { style: 'thin' }
      };
    });
  });

  // Generate a Blob from the workbook
  workbook?.xlsx?.writeBuffer()?.then((buffer: any) => {
    const blob = new Blob([buffer], {
      type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
    });

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = fileName + '.xlsx';

    // Trigger the download
    document.body.appendChild(link);
    link.click();

    // Cleanup
    document.body.removeChild(link);
  });
};
