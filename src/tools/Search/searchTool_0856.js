/**
 * Generated Tool: searchTool_0856
 * Domain: Search
 * ID: 0856
 */
exports.searchTool_0856 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0856:', error);
    throw error;
  }
};
