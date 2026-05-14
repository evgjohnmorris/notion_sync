/**
 * Generated Tool: pagesTool_0562
 * Domain: Pages
 * ID: 0562
 */
exports.pagesTool_0562 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0562:', error);
    throw error;
  }
};
