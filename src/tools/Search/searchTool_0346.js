/**
 * Generated Tool: searchTool_0346
 * Domain: Search
 * ID: 0346
 */
exports.searchTool_0346 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0346:', error);
    throw error;
  }
};
