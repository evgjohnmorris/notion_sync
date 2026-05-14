/**
 * Generated Tool: searchTool_0953
 * Domain: Search
 * ID: 0953
 */
exports.searchTool_0953 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0953:', error);
    throw error;
  }
};
