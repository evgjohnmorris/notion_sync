/**
 * Generated Tool: searchTool_0221
 * Domain: Search
 * ID: 0221
 */
exports.searchTool_0221 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0221:', error);
    throw error;
  }
};
