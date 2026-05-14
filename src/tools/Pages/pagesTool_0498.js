/**
 * Generated Tool: pagesTool_0498
 * Domain: Pages
 * ID: 0498
 */
exports.pagesTool_0498 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0498:', error);
    throw error;
  }
};
