/**
 * Generated Tool: searchTool_0358
 * Domain: Search
 * ID: 0358
 */
exports.searchTool_0358 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0358:', error);
    throw error;
  }
};
