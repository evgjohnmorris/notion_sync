/**
 * Generated Tool: searchTool_0210
 * Domain: Search
 * ID: 0210
 */
exports.searchTool_0210 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0210:', error);
    throw error;
  }
};
