/**
 * Generated Tool: searchTool_0536
 * Domain: Search
 * ID: 0536
 */
exports.searchTool_0536 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0536:', error);
    throw error;
  }
};
