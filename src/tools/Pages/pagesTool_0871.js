/**
 * Generated Tool: pagesTool_0871
 * Domain: Pages
 * ID: 0871
 */
exports.pagesTool_0871 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.pages.create(params);
    return response;
  } catch (error) {
    console.error('Error in pagesTool_0871:', error);
    throw error;
  }
};
