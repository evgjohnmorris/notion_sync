/**
 * Generated Tool: searchTool_0011
 * Domain: Search
 * ID: 0011
 */
exports.searchTool_0011 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0011:', error);
    throw error;
  }
};
