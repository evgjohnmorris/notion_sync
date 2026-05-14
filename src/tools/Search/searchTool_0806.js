/**
 * Generated Tool: searchTool_0806
 * Domain: Search
 * ID: 0806
 */
exports.searchTool_0806 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0806:', error);
    throw error;
  }
};
