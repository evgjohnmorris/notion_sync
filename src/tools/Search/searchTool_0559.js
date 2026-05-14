/**
 * Generated Tool: searchTool_0559
 * Domain: Search
 * ID: 0559
 */
exports.searchTool_0559 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0559:', error);
    throw error;
  }
};
