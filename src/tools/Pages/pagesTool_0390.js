/**
 * Generated Tool: pagesTool_0390
 * Domain: Pages
 * ID: 0390
 */
exports.pagesTool_0390 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0390:', error);
    throw error;
  }
};
