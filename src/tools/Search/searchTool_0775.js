/**
 * Generated Tool: searchTool_0775
 * Domain: Search
 * ID: 0775
 */
exports.searchTool_0775 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0775:', error);
    throw error;
  }
};
