/**
 * Generated Tool: searchTool_0130
 * Domain: Search
 * ID: 0130
 */
exports.searchTool_0130 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0130:', error);
    throw error;
  }
};
