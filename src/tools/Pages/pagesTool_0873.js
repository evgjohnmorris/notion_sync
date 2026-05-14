/**
 * Generated Tool: pagesTool_0873
 * Domain: Pages
 * ID: 0873
 */
exports.pagesTool_0873 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0873:', error);
    throw error;
  }
};
