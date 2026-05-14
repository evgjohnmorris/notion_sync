/**
 * Generated Tool: searchTool_0244
 * Domain: Search
 * ID: 0244
 */
exports.searchTool_0244 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0244:', error);
    throw error;
  }
};
