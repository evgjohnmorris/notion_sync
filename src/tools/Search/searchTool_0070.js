/**
 * Generated Tool: searchTool_0070
 * Domain: Search
 * ID: 0070
 */
exports.searchTool_0070 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0070:', error);
    throw error;
  }
};
