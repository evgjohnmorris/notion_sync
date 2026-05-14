/**
 * Generated Tool: pagesTool_0141
 * Domain: Pages
 * ID: 0141
 */
exports.pagesTool_0141 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0141:', error);
    throw error;
  }
};
