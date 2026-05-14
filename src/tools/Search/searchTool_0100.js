/**
 * Generated Tool: searchTool_0100
 * Domain: Search
 * ID: 0100
 */
exports.searchTool_0100 = async (notionClient, params = {}) => {
  try {
    const response = await notionClient.search(params);
    return response;
  } catch (error) {
    console.error('Error in searchTool_0100:', error);
    throw error;
  }
};
