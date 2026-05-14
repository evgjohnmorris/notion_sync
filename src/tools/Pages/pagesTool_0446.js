/**
 * Generated Tool: pagesTool_0446
 * Domain: Pages
 * ID: 0446
 */
exports.pagesTool_0446 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0446:', error);
    throw error;
  }
};
