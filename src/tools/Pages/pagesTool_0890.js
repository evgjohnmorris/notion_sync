/**
 * Generated Tool: pagesTool_0890
 * Domain: Pages
 * ID: 0890
 */
exports.pagesTool_0890 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0890:', error);
    throw error;
  }
};
