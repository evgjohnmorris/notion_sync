/**
 * Generated Tool: searchTool_0487
 * Domain: Search
 * ID: 0487
 */
exports.searchTool_0487 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0487:', error);
    throw error;
  }
};
