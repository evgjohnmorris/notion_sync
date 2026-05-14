/**
 * Generated Tool: searchTool_0862
 * Domain: Search
 * ID: 0862
 */
exports.searchTool_0862 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0862:', error);
    throw error;
  }
};
