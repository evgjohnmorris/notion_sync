/**
 * Generated Tool: searchTool_0005
 * Domain: Search
 * ID: 0005
 */
exports.searchTool_0005 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0005:', error);
    throw error;
  }
};
