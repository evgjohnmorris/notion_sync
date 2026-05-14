/**
 * Generated Tool: searchTool_0118
 * Domain: Search
 * ID: 0118
 */
exports.searchTool_0118 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0118:', error);
    throw error;
  }
};
