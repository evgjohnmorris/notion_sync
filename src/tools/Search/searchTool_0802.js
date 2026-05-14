/**
 * Generated Tool: searchTool_0802
 * Domain: Search
 * ID: 0802
 */
exports.searchTool_0802 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0802:', error);
    throw error;
  }
};
