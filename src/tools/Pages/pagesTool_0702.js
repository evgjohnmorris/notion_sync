/**
 * Generated Tool: pagesTool_0702
 * Domain: Pages
 * ID: 0702
 */
exports.pagesTool_0702 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0702:', error);
    throw error;
  }
};
