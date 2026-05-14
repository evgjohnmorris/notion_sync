/**
 * Generated Tool: pagesTool_0365
 * Domain: Pages
 * ID: 0365
 */
exports.pagesTool_0365 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0365:', error);
    throw error;
  }
};
