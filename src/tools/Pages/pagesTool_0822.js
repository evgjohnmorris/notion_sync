/**
 * Generated Tool: pagesTool_0822
 * Domain: Pages
 * ID: 0822
 */
exports.pagesTool_0822 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0822:', error);
    throw error;
  }
};
