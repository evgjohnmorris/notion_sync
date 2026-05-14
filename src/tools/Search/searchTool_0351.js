/**
 * Generated Tool: searchTool_0351
 * Domain: Search
 * ID: 0351
 */
exports.searchTool_0351 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0351:', error);
    throw error;
  }
};
