/**
 * Generated Tool: searchTool_0139
 * Domain: Search
 * ID: 0139
 */
exports.searchTool_0139 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0139:', error);
    throw error;
  }
};
