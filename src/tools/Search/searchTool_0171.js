/**
 * Generated Tool: searchTool_0171
 * Domain: Search
 * ID: 0171
 */
exports.searchTool_0171 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0171:', error);
    throw error;
  }
};
