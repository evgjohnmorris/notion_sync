/**
 * Generated Tool: searchTool_0173
 * Domain: Search
 * ID: 0173
 */
exports.searchTool_0173 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0173:', error);
    throw error;
  }
};
