/**
 * Generated Tool: searchTool_0563
 * Domain: Search
 * ID: 0563
 */
exports.searchTool_0563 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0563:', error);
    throw error;
  }
};
