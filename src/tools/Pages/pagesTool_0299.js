/**
 * Generated Tool: pagesTool_0299
 * Domain: Pages
 * ID: 0299
 */
exports.pagesTool_0299 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0299:', error);
    throw error;
  }
};
