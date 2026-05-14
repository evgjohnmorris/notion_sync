/**
 * Generated Tool: searchTool_0333
 * Domain: Search
 * ID: 0333
 */
exports.searchTool_0333 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0333:', error);
    throw error;
  }
};
