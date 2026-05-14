/**
 * Generated Tool: pagesTool_0263
 * Domain: Pages
 * ID: 0263
 */
exports.pagesTool_0263 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0263:', error);
    throw error;
  }
};
