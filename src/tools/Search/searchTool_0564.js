/**
 * Generated Tool: searchTool_0564
 * Domain: Search
 * ID: 0564
 */
exports.searchTool_0564 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0564:', error);
    throw error;
  }
};
